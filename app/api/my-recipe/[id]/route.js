import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Recipe from "@/models/Recipe";
import User from "@/models/User";
import { auth } from "@clerk/nextjs";

export async function GET(req, res) {
  try {
    const { id } = res.params;
    await connectDB();

    const myRecipe = await Recipe.find({ _id: id }).lean();

    return sendResponse(
      "success",
      200,
      "My recipe retrievied successfully",
      myRecipe,
    );
  } catch (err) {
    console.error(err);
    return sendResponse("fail", 500, "Internal server error");
  }
}
