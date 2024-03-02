import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "No name provided",
    },
    clerkId: {
      type: String,
    },
    imageUrl: {
      type: String,
      default: "https://placehold.co/50x50",
    },
    hasImage: {
      type: Boolean,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    recipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

let User = (mongoose.models = {});

User = mongoose.models["User"] || mongoose.model("User", userSchema);

export default User;
