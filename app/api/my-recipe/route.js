import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Recipe from "@/models/Recipe";
import User from "@/models/User";
import { auth } from "@clerk/nextjs";

// export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    await connectDB();

    // check user is logged in
    const { userId } = auth();
    if (!userId) {
      return sendResponse("fail", 401, "Unauthorized");
    }

    const user = await User.findOne({ clerkId: userId }).lean();

    const myRecipes = await Recipe.find(
      { user: user._id },
      { "ingredients._id": 0 },
    )
      .lean()
      .select("-updatedAt -user");

    return sendResponse(
      "success",
      200,
      "My Recipes retrievd successfully",
      myRecipes,
    );
  } catch (err) {
    console.error(err.message);
    return sendResponse("fail", 500, "Internal server error", err.message);
  }
}

export async function PATCH(req, res) {
  try {
    const {
      id,
      title,
      source_url,
      image_url,
      ingredients,
      servings,
      cooking_time,
      publisher,
    } = await req.json();

    const updateRecipe = await Recipe.findByIdAndUpdate(
      { _id: id },
      {
        title,
        source_url,
        image_url,
        ingredients,
        servings,
        cooking_time,
        publisher,
      },
      { new: true, returnDocument: "after", lean: true },
    );

    return sendResponse(
      "success",
      200,
      "Recipe updated successfully",
      updateRecipe,
    );
  } catch (err) {
    console.error(err.message);
    return sendResponse("fail", 500, "Internal server error");
  }
}

export async function DELETE(req, res) {
  try {
    await connectDB();

    const id = await req.json();

    if (!id || id.length < 24) {
      return sendResponse("fail", 400, "Bad request");
    }

    const deletedRecipe = await Recipe.findByIdAndDelete({ _id: id }).lean();

    // remove recipes in user collection as well
    await User.findOneAndUpdate(
      { recipes: id },
      { $pull: { recipes: id } },
      { new: true },
    );

    return sendResponse(
      "success",
      200,
      "Recipe Deleted successfully",
      deletedRecipe,
    );
  } catch (err) {
    console.error(err.message);
    return sendResponse("fail", 500, "Internal server error");
  }
}
