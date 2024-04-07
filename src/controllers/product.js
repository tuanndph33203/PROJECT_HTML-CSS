import { StatusCodes } from "http-status-codes";
import { productSchema } from "../validate/product";
import ProductModel from "../models/product.js";
import {
  createAttribute,
  deleteAttribute,
  updateAttribute,
} from "./attribute.js";
const ProductController = {
  Create: async (req, res) => {
    try {
      const {
        name,
        tags,
        image,
        gallery,
        discount,
        description,
        category,
        attributes,
      } = req.body;
      const { error } = productSchema.validate(
        {
          name,
          tags,
          image,
          gallery,
          discount,
          description,
          category,
          attributes,
        },
        { abortEarly: false }
      );
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: error.details.map((value) => {
            return value.message;
          }),
        });
      }
      const existedName = await ProductModel.findOne({ name: name });
      if (existedName) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Tên phẩm đã tồn tại !",
        });
      }
      const createdAttributes = await Promise.all(
        attributes.map(async (value) => {
          const data = await createAttribute(value);
          return data;
        })
      );
      const price = createdAttributes[0].values[0].price;
      const product = await ProductModel.create({
        name,
        slug: name.replace(/\s/g, "_"),
        tags,
        price: price ? price : 999999999,
        image,
        gallery,
        discount,
        description,
        attributes: createdAttributes.map((attribute) => attribute._id),
        category,
      });
      return res.status(StatusCodes.CREATED).json({
        message: "Tạo sản phẩm thành công !",
        product,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Update: async (req, res) => {
    try {
      const productId = req.params.id;
      const existingProduct = await ProductModel.findById(productId);
      if (!existingProduct) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy sản phẩm !",
        });
      }
      const {
        name,
        tags,
        image,
        gallery,
        discount,
        description,
        category,
        attributes,
      } = req.body;
      const { error } = productSchema.validate(
        {
          name,
          tags,
          image,
          gallery,
          discount,
          description,
          category,
          attributes,
        },
        { abortEarly: false }
      );
      if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: error.details.map((value) => {
            return value.message;
          }),
        });
      }
      await Promise.all(
        existingProduct.attributes.map(async (value) => {
          await deleteAttribute(value._id);
        })
      );
      const updatedAttributes = await Promise.all(
        attributes.map(async (value) => {
          const data = await createAttribute(value);
          return data;
        })
      );
      const price = updatedAttributes[0].values[0].price;
      existingProduct.name = name;
      existingProduct.tags = tags;
      existingProduct.image = image;
      existingProduct.gallery = gallery;
      existingProduct.price = price ? price : 999999999;
      existingProduct.discount = discount;
      existingProduct.description = description;
      existingProduct.attributes = updatedAttributes.map((attribute) => attribute._id);
      existingProduct.category = category;
      await existingProduct.save();

      return res.status(StatusCodes.OK).json({
        message: "Sửa sản phẩm thành công !",
        existingProduct,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },

  All: async (req, res) => {
    try {
      const products = await ProductModel.find()
        .populate({
          path: "attributes",
        })
        .populate("category");
      res.status(StatusCodes.OK).json({
        message: "Lấy tất cả sản phẩm thành công !",
        data: products,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error: " + error.message,
      });
    }
  },

  Limit: async (req, res) => {
    try {
      const limit = parseInt(req.params.limit);
      const latestProducts = await ProductModel.find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .populate({
          path: "attributes",
          populate: {
            path: "values",
          },
        })
        .populate("category");
      res.status(StatusCodes.OK).json({
        message: `Lấy ${limit} sản phẩm thành công !`,
        data: latestProducts,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error: " + error.message,
      });
    }
  },
  Detail: async (req, res) => {
    try {
      const slug = req.params.slug;
      const product = await ProductModel.findOne({ slug: slug })
        .populate("attributes")
        .populate("category");
      if (!product) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Sản phẩm không tồn tại !",
        });
      }
      res.status(StatusCodes.OK).json({
        message: "Lấy sản phẩm thành công !",
        data: product,
        slug,
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
  Delete: async (req, res) => {
    try {
      const existingProduct = await ProductModel.findById(req.params.id);
      if (!existingProduct) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Không tìm thấy sản phẩm !",
        });
      }
      await Promise.all(
        existingProduct.attributes.map(async (value) => {
          await deleteAttribute(value._id);
        })
      );
      await ProductModel.findByIdAndDelete(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Xóa sản phẩm thành công !",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error" + error,
      });
    }
  },
};

export default ProductController;
