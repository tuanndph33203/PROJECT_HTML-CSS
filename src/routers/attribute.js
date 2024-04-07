import { Router } from "express";
import {
  createAttribute,
  deleteAttribute,
  getAllAttributes,
  getAttributeById,
  updateAttribute,
} from "../controllers/attribute";

const attributeRouter = Router();
attributeRouter.get("/:id", getAttributeById);
attributeRouter.put("/:id", updateAttribute);
export default attributeRouter;
