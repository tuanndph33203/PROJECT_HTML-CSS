"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpStatusCodes = require("http-status-codes");

var _product = require("../validate/product");

var _product2 = _interopRequireDefault(require("../models/product.js"));

var _attribute = require("./attribute.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductController = {
  Create: function Create(req, res) {
    var _req$body, name, tags, image, gallery, discount, featured, description, category, attributes, _productSchema$valida, error, existedName, createdAttributes, price, product;

    return regeneratorRuntime.async(function Create$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, tags = _req$body.tags, image = _req$body.image, gallery = _req$body.gallery, discount = _req$body.discount, featured = _req$body.featured, description = _req$body.description, category = _req$body.category, attributes = _req$body.attributes;
            _productSchema$valida = _product.productSchema.validate({
              name: name,
              tags: tags,
              image: image,
              gallery: gallery,
              discount: discount,
              featured: featured,
              description: description,
              category: category,
              attributes: attributes
            }, {
              abortEarly: false
            }), error = _productSchema$valida.error;

            if (!error) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: error.details.map(function (value) {
                return value.message;
              })
            }));

          case 5:
            _context2.next = 7;
            return regeneratorRuntime.awrap(_product2["default"].findOne({
              name: name
            }));

          case 7:
            existedName = _context2.sent;

            if (!existedName) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Tên phẩm đã tồn tại !"
            }));

          case 10:
            _context2.next = 12;
            return regeneratorRuntime.awrap(Promise.all(attributes.map(function _callee(value) {
              var data;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap((0, _attribute.createAttribute)(value));

                    case 2:
                      data = _context.sent;
                      return _context.abrupt("return", data);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            })));

          case 12:
            createdAttributes = _context2.sent;
            price = createdAttributes[0].values[0].price;
            _context2.next = 16;
            return regeneratorRuntime.awrap(_product2["default"].create({
              name: name,
              slug: name.replace(/\s/g, "_"),
              tags: tags,
              price: price ? price : 999999999,
              image: image,
              gallery: gallery,
              discount: discount,
              featured: featured,
              description: description,
              attributes: createdAttributes.map(function (attribute) {
                return attribute._id;
              }),
              category: category
            }));

          case 16:
            product = _context2.sent;
            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json({
              message: "Tạo sản phẩm thành công !",
              product: product
            }));

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context2.t0
            });

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 20]]);
  },
  Update: function Update(req, res) {
    var productId, existingProduct, _req$body2, name, tags, image, gallery, discount, featured, description, category, attributes, _productSchema$valida2, error, updatedAttributes, price;

    return regeneratorRuntime.async(function Update$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            productId = req.params.id;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].findById(productId));

          case 4:
            existingProduct = _context4.sent;

            if (existingProduct) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              message: "Không tìm thấy sản phẩm !"
            }));

          case 7:
            _req$body2 = req.body, name = _req$body2.name, tags = _req$body2.tags, image = _req$body2.image, gallery = _req$body2.gallery, discount = _req$body2.discount, featured = _req$body2.featured, description = _req$body2.description, category = _req$body2.category, attributes = _req$body2.attributes;
            _productSchema$valida2 = _product.productSchema.validate({
              name: name,
              tags: tags,
              image: image,
              gallery: gallery,
              discount: discount,
              featured: featured,
              description: description,
              category: category,
              attributes: attributes
            }, {
              abortEarly: false
            }), error = _productSchema$valida2.error;

            if (!error) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: error.details.map(function (value) {
                return value.message;
              })
            }));

          case 11:
            console.log(attributes);
            _context4.next = 14;
            return regeneratorRuntime.awrap(Promise.all(attributes.map(function _callee2(value) {
              var data;
              return regeneratorRuntime.async(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return regeneratorRuntime.awrap((0, _attribute.updateAttribute)(value));

                    case 2:
                      data = _context3.sent;
                      return _context3.abrupt("return", data);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              });
            })));

          case 14:
            updatedAttributes = _context4.sent;
            console.log(updatedAttributes.map(function (attribute) {
              return attribute._id;
            }));
            price = updatedAttributes[0].values[0].price;
            existingProduct.name = name;
            existingProduct.tags = tags;
            existingProduct.image = image;
            existingProduct.gallery = gallery;
            existingProduct.price = price ? price : 999999999;
            existingProduct.discount = discount;
            existingProduct.featured = featured;
            existingProduct.description = description;
            existingProduct.attributes = updatedAttributes.map(function (attribute) {
              return attribute._id;
            });
            existingProduct.category = category;
            _context4.next = 29;
            return regeneratorRuntime.awrap(existingProduct.save());

          case 29:
            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Sửa sản phẩm thành công !",
              existingProduct: existingProduct
            }));

          case 32:
            _context4.prev = 32;
            _context4.t0 = _context4["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context4.t0
            });

          case 35:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 32]]);
  },
  All: function All(req, res) {
    var products;
    return regeneratorRuntime.async(function All$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(_product2["default"].find().populate({
              path: "attributes"
            }).populate("category"));

          case 3:
            products = _context5.sent;
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Lấy tất cả sản phẩm thành công !",
              data: products
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error: " + _context5.t0.message
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  Limit: function Limit(req, res) {
    var limit, latestProducts;
    return regeneratorRuntime.async(function Limit$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            limit = parseInt(req.params.limit);
            _context6.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].find().sort({
              createdAt: -1
            }).limit(limit).populate({
              path: "attributes",
              populate: {
                path: "values"
              }
            }).populate("category"));

          case 4:
            latestProducts = _context6.sent;
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "L\u1EA5y ".concat(limit, " s\u1EA3n ph\u1EA9m th\xE0nh c\xF4ng !"),
              data: latestProducts
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error: " + _context6.t0.message
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  Detail: function Detail(req, res) {
    var slug, product;
    return regeneratorRuntime.async(function Detail$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            slug = req.params.slug;
            _context7.next = 4;
            return regeneratorRuntime.awrap(_product2["default"].findOne({
              slug: slug
            }).populate("attributes"));

          case 4:
            product = _context7.sent;

            if (product) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Sản phẩm không tồn tại !"
            }));

          case 7:
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Lấy sản phẩm thành công !",
              data: product,
              slug: slug
            });
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context7.t0
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 10]]);
  },
  Delete: function Delete(req, res) {
    var existingProduct;
    return regeneratorRuntime.async(function Delete$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return regeneratorRuntime.awrap(_product2["default"].findById(req.params.id));

          case 3:
            existingProduct = _context9.sent;

            if (existingProduct) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              message: "Không tìm thấy sản phẩm !"
            }));

          case 6:
            _context9.next = 8;
            return regeneratorRuntime.awrap(Promise.all(existingProduct.attributes.map(function _callee3(value) {
              return regeneratorRuntime.async(function _callee3$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return regeneratorRuntime.awrap((0, _attribute.deleteAttribute)(value._id));

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              });
            })));

          case 8:
            _context9.next = 10;
            return regeneratorRuntime.awrap(_product2["default"].findByIdAndDelete(req.params.id));

          case 10:
            res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Xóa sản phẩm thành công !"
            });
            _context9.next = 16;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error" + _context9.t0
            });

          case 16:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 13]]);
  }
};
var _default = ProductController;
exports["default"] = _default;