import mongoose, { Schema } from "mongoose";
const Product = new Schema(
  {
    name: {type: String,required: true,maxlength: 200, minlength: 6,unique: true},
    slug: { type: String, required: true },
    tags: { type: Array},
    image: { type: String, required: true },
    gallery : {type: Array},
    price: { type: Number, default: 1, min: 1000, max: 999999999 },
    discount: { type: Number, default: 0, min: 0, max: 100 },
    description: { type: String, required: true },
    featured: { type: Boolean, default: false },
    attributes: [
      {type: mongoose.Schema.Types.ObjectId,ref: "Attribute"}
    ],
    category: { type: Schema.Types.ObjectId, ref: "categories" },
  },
  { timestamps: true, versionKey: false }
);
const ProductModel = mongoose.model("products", Product);
export default ProductModel;
