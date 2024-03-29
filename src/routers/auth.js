import express from "express";
import UserController from "../controllers/auth";
const authRouter = express.Router();

authRouter.post("/register",UserController.Register);
authRouter.post("/login", UserController.Login);

export default authRouter;
