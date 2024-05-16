import { StatusCodes } from "http-status-codes";
import OrderModel from "../models/Order";
export const OrderController = {
  getOrderByUserId: async (req, res) => {
    const { userId } = req.params;
    try {
      const Order = await OrderModel.findOne({ userId }).populate({
        path: "items",
        populate: {
          path: "_id",
        },
      });
      if (!Order) {
        return res.status(StatusCodes.OK).json({
          message: "Hãy mua một đơn hàng <3 !",
        });
      }
      Order.userId = undefined;
      return res.status(StatusCodes.OK).json({
        data: Order,
        message: "Lấy danh sách đơn hàng thành công !",
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  },
  addItemToOrder: async (req, res) => {
    const { userId } = req.body;
    console.log(req.body);
    try {
      let Order = await OrderModel.findOne({ userId });
      if (!Order) {
        Order = new OrderModel({ userId, products: [] });
      }
      await OrderModel.create(req.body)
      return res.status(StatusCodes.OK).json(req.body);
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  },
};
