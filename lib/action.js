"use server";

import { revalidatePath } from "next/cache";
import User from "@/models/User";
import { connectDB } from "./connectDB";
import Recipe from "@/models/Recipe";

export async function getRecipes() {
  try {
    await connectDB();

    const recipes = await Recipe.find({}).lean().select("-updatedAt");

    return JSON.stringify(recipes);
  } catch (err) {
    return { error: err.message };
  }
}

export async function updateUser(user) {
  try {
    connectDB();

    const existingUser = await User.findOne({ clerkId: user.id });
    if (existingUser) {
      revalidatePath("/");
    } else {
      await User.create({
        name: user.username,
        clerkId: user.id,
        imageUrl: user.imageUrl,
        hasImage: user.hasImage,
        firstName: user.firstName,
        lastName: user.lastName,
      });

      revalidatePath("/");
    }
  } catch (err) {
    console.log(err.message);
    throw new Error(`Failed to create/update user ${err.message}`);
  }
}
