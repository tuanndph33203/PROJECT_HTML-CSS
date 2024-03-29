import mongoose, { Schema } from "mongoose";
const Cart = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      require : true
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          require : true
        },
        quantity: {
          type: Number,
          require : true
        }
      }
    ]
  },
  { timestamps: true, versionKey: false }
);
const CartModel = mongoose.model("Carts", Cart);
export default CartModel;