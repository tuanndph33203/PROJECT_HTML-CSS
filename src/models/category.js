import mongoose, { Schema } from "mongoose";
const Category = new Schema(
  {
    name: { type: String, required: true, maxlength: 200, minlength: 6 },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }]
  },
  { timestamps: true, versionKey: false }
);
const CategoryModel = mongoose.model("categories", Category);
export default CategoryModel;