import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import { signinSchema, signupSchema } from "../validate/auth";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";

const UserController = {
  Register: async (req, res) => {
    try {
      const { email, password, name, avatar, confirmPassword } = req.body;
      const { error } = signupSchema.validate(
        { name,email,  password, confirmPassword, avatar},
        { abortEarly: false }
      );
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: error.details.map((value) => {
            return value.message;
          }),
        });
      }
      const existUser = await UserModel.findOne({ email });
      if (existUser) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email đã tồn tại !",
        });
      }
      if (password !== confirmPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Mật khẩu không trùng nhau !",
        });
      }
      const hashedPassword = await bcryptjs.hash(password, 12);
      const role = (await UserModel.countDocuments({})) === 0 ? "admin" : "user";
      const user = await UserModel.create({
        name,
        email,
        avatar,
        password: hashedPassword,
        role,
      });
      return res.status(StatusCodes.CREATED).json({
        message: "Đăng ký tài khoản thành công !",
        user: { ...user.toObject(),email : undefined ,password: undefined },
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error: " + error,
      });
    }
  },
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
        const { error } = signinSchema.validate(
          { email, password },
          { abortEarly: false }
        );
        if (error) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            message: error.details.map((value) => {
              return value.message;
            }),
          });
        }
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email chưa đăng ký tài khoản !",
        });
      }
      const checkPassword = await bcryptjs.compare(password, user.password);
      if (!checkPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Mật khẩu không đúng !",
        });
      }
      const token = jwt.sign({ user: user._id }, process.env.KEY, {
        expiresIn: "1w",
      }); 
      return res.status(StatusCodes.OK).json({
        message: "Đăng Nhập Thành Công !",
        user: { ...user.toObject(), password: undefined },
        token,
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Đăng Nhập Thất Bại !",
        error,
      });
    }
  },
};

export default UserController;