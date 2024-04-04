import attributeRouter from "./attribute.js";
import authRouter from "./auth.js";
import cartRouter from "./cart.js";
import categoryRouter from "./category.js";
import productRouter from "./product.js";

function routes(app) {
  app.use("/auth", authRouter);
  app.use("/attribute", attributeRouter);
  app.use("/cart", cartRouter);
  app.use("/category", categoryRouter);
  app.use("/products", productRouter);
}
export default routes;