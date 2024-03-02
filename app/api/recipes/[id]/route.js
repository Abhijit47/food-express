import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Recipe from "@/models/Recipe";

export async function GET(req, res) {
  try {
    await connectDB();

    const { id } = res.params;
    if (!id || id.length < 24) {
      return sendResponse("fail", 400, "Bad request");
    }

    const recipe = await Recipe.findById({ _id: id })
      .lean()
      .select("-updatedAt");

    return sendResponse("success", 200, "Recipe retrived successfully", recipe);
  } catch (err) {
    console.error(err.message);
    return sendResponse("fail", 500, "Internal server error");
  }
}

export async function POST(req, res) {
  try {
    return sendResponse("success", 200, "Recipe created successfully");
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}

export async function PATCH(req, res) {
  try {
    return sendResponse("success", 200, "Recipe updated successfully");
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}

export async function DELETE(req, res) {
  try {
    return sendResponse("success", 200, "Recipe deleted successfully");
  } catch (err) {
    return sendResponse("fail", 500, "Internal server error");
  }
}
