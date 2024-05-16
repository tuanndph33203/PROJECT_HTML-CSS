import { Router } from "express";
import { OrderController } from "../controllers/order";
const orderRouter = Router();
orderRouter.get("/:userId",OrderController.getOrderByUserId);
orderRouter.post("/",OrderController.addItemToOrder);
export default orderRouter;
