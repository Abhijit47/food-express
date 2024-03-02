import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    source_url: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },

    ingredients: {
      type: [
        {
          quantity: {
            type: Number,
            // required: true,
            default: null,
          },
          unit: {
            type: String,
            // required: true,
            default: "",
          },
          description: {
            type: String,
            required: true,
          },
        },
      ],
    },
    servings: {
      type: Number,
      required: true,
    },
    cooking_time: {
      type: Number,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

recipeSchema.pre("save", function (next) {
  this.ingredients = this.ingredients.map(function (ingredient) {
    return {
      quantity: parseFloat(ingredient.quantity),
      unit: ingredient.unit,
      description: ingredient.description,
    };
  });
  next();
});

let Recipe = (mongoose.models = {});

Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
