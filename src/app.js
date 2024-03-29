import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

import routes from "./routers";
dotenv.config();

const connectDB = async () => { 
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("Connect successfully!!!");
    } catch (error) {
      console.log("Connect failure!!!");
    }
}
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

export const viteNodeApp = app;
