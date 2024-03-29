import express from 'express';
import CategoryController from '../controllers/category.js';

const categoryRouter = express.Router();
categoryRouter.get("/",CategoryController.All);
categoryRouter.get("/:id",CategoryController.Detail);
categoryRouter.post("/",CategoryController.Create);
categoryRouter.put("/:id",CategoryController.Update);
categoryRouter.delete("/:id",CategoryController.Delete);
export default categoryRouter;