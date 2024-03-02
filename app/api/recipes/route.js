import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Recipe from "@/models/Recipe";
import User from "@/models/User";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

// export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    // Extract the current page number
    const currentPage = Number(searchParams.get("page")) || 1;

    // Extract limit
    const limitPerPage = Number(searchParams.get("limit")) || 12;

    // Calculate the number of items to skip
    const skipRecord = (currentPage - 1) * limitPerPage;

    // Get search query
    const query = searchParams.get("q");

    if (query) {
      const recipes = await Recipe.find(
        {
          title: { $regex: query, $options: "i" },
        },
        { "ingredients._id": 0 },
      )
        .sort({ updatedAt: -1 })
        .skip(skipRecord)
        .limit(limitPerPage)
        .lean()
        .select("-updatedAt");

      const currentResult = recipes.length;
      const totalRecords = await Recipe.find({
        title: { $regex: query, $options: "i" },
      }).countDocuments();

      const totalPage = Math.ceil(totalRecords / limitPerPage);

      return sendResponse(
        "success",
        200,
        "Recipes",
        recipes,
        currentPage,
        currentResult,
        totalPage,
        totalRecords,
      );
    } else {
      const recipes = await Recipe.find({}, { "ingredients._id": 0 })
        .sort({ updatedAt: -1 })
        .skip(skipRecord)
        .limit(limitPerPage)
        .lean()
        .select("-updatedAt");

      const currentResult = recipes.length;
      const totalRecords = await Recipe.find({}).lean().count();
      const totalPage = Math.ceil(totalRecords / limitPerPage);

      return sendResponse(
        "success",
        200,
        "Recipes",
        recipes,
        currentPage,
        currentResult,
        totalPage,
        totalRecords,
      );
    }
  } catch (err) {
    console.error(err.message);
    return sendResponse("fail", 500, "Internal server error");
  }
}

export async function POST(req, res) {
  try {
    await connectDB();

    // check user is logged in
    const { userId } = auth();
    if (!userId) {
      return sendResponse("fail", 401, "Unauthorized");
    }

    const {
      title,
      source_url,
      image_url,
      ingredients,
      servings,
      cooking_time,
      publisher,
    } = await req.json();

    const user = await User.findOne({ clerkId: userId });

    // Create recipe and add this user to this recipe
    const recipe = await Recipe.create({
      title,
      source_url,
      image_url,
      ingredients,
      servings,
      cooking_time,
      publisher,
      user,
    });

    // Add recipe to user
    await User.findOneAndUpdate(
      { clerkId: userId },
      { $push: { recipes: recipe._id } },
      { new: true },
    );
    revalidatePath("/recipes", "page");

    return sendResponse("success", 200, "Recipes", recipe);
  } catch (err) {
    console.log(err);
    return sendResponse("fail", 500, "Internal server error", err.message);
  }
}
