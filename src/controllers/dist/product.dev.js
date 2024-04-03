"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpStatusCodes = require("http-status-codes");

var _product = require("../validate/product");

var _product2 = _interopRequireDefault(require("../models/product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductController = {
  Create: function Create(req, res) {
    var _req$body, name, price, image, discount, description, stock, category, existedName, product;

    return regeneratorRuntime.async(function Create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, price = _req$body.price, image = _req$body.image, discount = _req$body.discount, description = _req$body.description, stock = _req$body.stock, category = _req$body.category; // const { error } = productSchema.validate(
            //   { name,price, image, discount, description,stock, category },
            //   { abortEarly: false }
            // );
            // if (error) {
            //   res.status(StatusCodes.BAD_REQUEST).json({
            //     message: error.details.map((value) => {
            //       return value.message;
            //     }),
            //   });
            // }

            _context.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].findOne({
              name: name
            }));

          case 4:
            existedName = _context.sent;

            if (!existedName) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Tên phẩm đã tồn tại !"
            }));

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(_product2["default"].create({
              name: name,
              tag: name.replace(/\s/g, "_"),
              price: price,
              image: image,
              discount: discount,
              description: description,
              stock: stock,
              category: category
            }));

          case 9:
            product = _context.sent;
            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json({
              message: "Tạo sản phẩm thành công !",
              product: product
            }));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]]);
  },
  All: function All(req, res) {
    var products;
    return regeneratorRuntime.async(function All$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_product2["default"].find());

          case 3:
            products = _context2.sent;
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Lấy tất cả sản phẩm thành công !",
              data: products
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error: " + _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  Limit: function Limit(req, res) {
    var limit, latestProducts;
    return regeneratorRuntime.async(function Limit$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            limit = parseInt(req.params.limit);
            _context3.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].find().sort({
              createdAt: -1
            }).limit(limit));

          case 4:
            latestProducts = _context3.sent;
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "L\u1EA5y ".concat(limit, " s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng !"),
              data: latestProducts
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error: " + _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  Detail: function Detail(req, res) {
    var tag, product;
    return regeneratorRuntime.async(function Detail$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            tag = req.params.tag;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].findOne({
              tag: tag
            }));

          case 4:
            product = _context4.sent;

            if (product) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Sản phẩm không tồn tại !"
            }));

          case 7:
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Lấy sản phẩm thành công !",
              data: product,
              tag: tag
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context4.t0
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  },
  Delete: function Delete(req, res) {
    var existingProduct;
    return regeneratorRuntime.async(function Delete$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_product2["default"].findById(req.params.id));

          case 3:
            existingProduct = _context5.sent;

            if (existingProduct) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              message: "Không tìm thấy sản phẩm !"
            }));

          case 6:
            _context5.next = 8;
            return regeneratorRuntime.awrap(_product2["default"].findByIdAndDelete(req.params.id));

          case 8:
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Xóa sản phẩm thành công !"
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context5.t0
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  },
  Update: function Update(req, res) {
    var productId, _req$body2, name, price, image, discount, description, stock, category, existingProduct;

    return regeneratorRuntime.async(function Update$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            productId = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, price = _req$body2.price, image = _req$body2.image, discount = _req$body2.discount, description = _req$body2.description, stock = _req$body2.stock, category = _req$body2.category;
            _context6.next = 5;
            return regeneratorRuntime.awrap(_product2["default"].findById(productId));

          case 5:
            existingProduct = _context6.sent;

            if (existingProduct) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              message: "Không tìm thấy sản phẩm !"
            }));

          case 8:
            existingProduct.name = name;
            existingProduct.image = image;
            existingProduct.price = price;
            existingProduct.discount = discount;
            existingProduct.description = description;
            existingProduct.stock = stock;
            existingProduct.category = category;
            _context6.next = 17;
            return regeneratorRuntime.awrap(existingProduct.save());

          case 17:
            return _context6.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json({
              message: "Sửa sản phẩm thành công !",
              existingProduct: existingProduct
            }));

          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context6.t0
            });

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 20]]);
  }
};
var _default = ProductController;
exports["default"] = _default;