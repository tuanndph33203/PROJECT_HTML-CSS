import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        auto: true,
    },
    price: {
        type: Number,
        required: true,   
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    items: [orderItemSchema],
    customerName: {
        type: String,
        required: true,
    },
    orderNumber: {
        type: String,
        unique: true,
    },
    orderAddress: {
        type: String,
        unique: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel