import { StatusCodes } from "http-status-codes";

import CartModel from './../models/Cart.js';

const CartController = {
  Create : async (req, res) => {
    try {
      const {userId,productId, quantity} = req.body;
      const existedUser= await CartModel.findOne({ userId: userId });
      if (!existedUser) {
        
      }
      const Cart = await CartModel.create({
        name
      });
      return res.status(StatusCodes.CREATED).json({
        message: "Tạo loại sản phẩm thành công !",
        Cart,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  All : async (req, res) => {
    try {
      const Carts = await CartModel.find();
      res.status(StatusCodes.OK).json({
        message: "Lấy tất cả loại sản phẩm thành công !",
        data: Carts,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error: " + error.message,
      });
    }
  },
  Detail : async (req, res) => {
    try {
      const Cart = await CartModel.findById(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Lấy loại sản phẩm thành công !",
        data: Cart,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Delete : async (req, res) => {
    try {
      const existingCart = await CartModel.findById(req.params.id);
      if (!existingCart) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy loại sản phẩm !",
        });
      }
      await CartModel.findByIdAndDelete(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Xóa loại sản phẩm thành công !",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Update : async (req, res) => {
    try {
      const CartId = req.params.id;
      const { name, image, discount, description, stock, Cart } = req.body;
      const existingCart = await CartModel.findById(CartId);
      if (!existingCart) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy loại sản phẩm !",
        });
      }
      existingCart.name = name;
      existingCart.image = image;
      existingCart.discount = discount;
      existingCart.description = description;
      existingCart.stock = stock;
      existingCart.Cart = Cart;
      await existingCart.save();

      return res.status(StatusCodes.CREATED).json({
        message: "Sửa loại sản phẩm thành công !",
        existingCart,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  }
};

export default CartController;
