import { StatusCodes } from "http-status-codes";

import CategoryModel from './../models/category.js';

const CategoryController = {
  Create : async (req, res) => {
    try {
      const {name} = req.body;
      const existedName = await CategoryModel.findOne({ name: name });
      if (existedName) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Tên loại sản phẩm đã tồn tại !",
        });
      }
      const category = await CategoryModel.create({
        name
      });
      return res.status(StatusCodes.CREATED).json({
        message: "Tạo loại sản phẩm thành công !",
        category,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  All : async (req, res) => {
    try {
      const categorys = await CategoryModel.find();
      res.status(StatusCodes.OK).json({
        message: "Lấy tất cả loại sản phẩm thành công !",
        data: categorys,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error: " + error.message,
      });
    }
  },
  Detail : async (req, res) => {
    try {
      const category = await CategoryModel.findById(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Lấy loại sản phẩm thành công !",
        data: category,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Delete : async (req, res) => {
    try {
      const existingcategory = await CategoryModel.findById(req.params.id);
      if (!existingcategory) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy loại sản phẩm !",
        });
      }
      await CategoryModel.findByIdAndDelete(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Xóa loại sản phẩm thành công !",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Update : async (req, res) => {
    try {
      const categoryId = req.params.id;
      const { name, image, discount, description, stock, category } = req.body;
      const existingcategory = await CategoryModel.findById(categoryId);
      if (!existingcategory) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy loại sản phẩm !",
        });
      }
      existingcategory.name = name;
      existingcategory.image = image;
      existingcategory.discount = discount;
      existingcategory.description = description;
      existingcategory.stock = stock;
      existingcategory.category = category;
      await existingcategory.save();

      return res.status(StatusCodes.CREATED).json({
        message: "Sửa loại sản phẩm thành công !",
        existingcategory,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  }
};

export default CategoryController;
