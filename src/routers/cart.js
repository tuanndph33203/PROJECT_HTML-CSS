import { Router } from "express";
import {
  addItemToCart,
  decreaseProductQuantity,
  getCartByUserId,
  increaseProductQuantity,
  removeFromCart,
  updateProductQuantity,
} from "../controllers/cart";

const router = Router();

router.get("/carts/:userId", getCartByUserId);
router.post("/carts/add-to-cart", addItemToCart);
router.post("/carts/update", updateProductQuantity);
router.post("/carts/remove", removeFromCart);
router.post("/carts/increase", increaseProductQuantity);
router.post("/carts/decrease", decreaseProductQuantity);

export default router;
