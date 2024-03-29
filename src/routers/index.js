import authRouter from "./auth.js";
import categoryRouter from "./category.js";
import productRouter from "./product.js";

function routes(app) {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
  app.use("/category", categoryRouter);
}
export default routes;