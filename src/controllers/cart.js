import { StatusCodes } from "http-status-codes";
import CartModel from "../models/cart";
export const CartController = {
  getCartByUserId: async (req, res) => {
    const { userId } = req.params;
    try {
      const cart = await CartModel.findOne({ userId }).populate({
        path: "products",
        populate: {
          path: "productId",
        },
      });
      if (!cart) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json("Chưa có sản phẩm trong giỏ hàng !");
      }
      const cartData = {
        products: cart.products.map((item) => ({
          productId: item.productId._id,
          name: item.productId.name,
          price: item.productId.price,
          quantity: item.quantity,
        })),
      };
      return res.status(StatusCodes.OK).json(cartData);
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  },
  addItemToCart: async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      let cart = await CartModel.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, products: [] });
      }
      const existProductIndex = cart.products.findIndex(
        (item) => item.productId.toString() == productId
      );
      console.log(existProductIndex);
      if (existProductIndex !== -1) {
        cart.products[existProductIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
      await cart.save();
      return res.status(StatusCodes.OK).json({ cart });
    } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Internal Server Error" });
    }
  },
  removeFromCart: async (req, res) => {
    const { userId, productId } = req.params;
    try {
      let cart = await CartModel.findOne({ userId });
      console.log(cart);
      if (!cart) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: "Không có giỏ hàng này !" });
      }
      cart.products = cart.products.filter(
        (product) =>
          product.productId && product.productId.toString() !== productId
      );

      await cart.save();
      return res.status(StatusCodes.OK).json({
        message : "Xóa thành công !",
        cart,
      });
    } catch (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Internal Server Error" });
    }
  },
  // Cập nhật số lượng sản phẩm trong giỏ hàng thuộc 1 user
  updateProductQuantity: async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      let cart = await CartModel.findOne({ userId });
      if (!cart) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: "Cart not found" });
      }

      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: "Product not found" });
      }
      product.quantity = quantity;
      await cart.save();
      return res.status(StatusCodes.OK).json({ cart });
    } catch (error) {}
  },
  // Tăng số lượng của sản phẩm trong giỏ hàng
  increaseProductQuantity: async (req, res) => {
    const { userId, productId } = req.body;
    try {
      let cart = await CartModel.findOne({ userId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      product.quantity++;

      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  // Giảm số lượng của sản phẩm trong giỏ hàng
  decreaseProductQuantity: async (req, res) => {
    const { userId, productId } = req.body;
    try {
      let cart = await CartModel.findOne({ userId });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      if (product.quantity > 1) {
        product.quantity--;
      }

      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
