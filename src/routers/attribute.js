import { Router } from "express";
import {
  createAttribute,
  createValueAttribute,
  deleteAttribute,
  getAllAttributes,
  getAttributeById,
  updateAttribute,
} from "../controllers/attribute";

const attributeRouter = Router();
attributeRouter.post("/", createAttribute);
attributeRouter.post("/values/:id", createValueAttribute);
attributeRouter.get("/", getAllAttributes);
attributeRouter.get("/:id", getAttributeById);
attributeRouter.put("/:id", updateAttribute);
attributeRouter.delete("/:id", deleteAttribute);
export default attributeRouter;
