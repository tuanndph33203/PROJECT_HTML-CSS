"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartController = void 0;

var _httpStatusCodes = require("http-status-codes");

var _cart = _interopRequireDefault(require("../models/cart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CartController = {
  getCartByUserId: function getCartByUserId(req, res) {
    var userId, cart, cartData;
    return regeneratorRuntime.async(function getCartByUserId$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.userId;
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }).populate({
              path: "products",
              populate: {
                path: "productId"
              }
            }));

          case 4:
            cart = _context.sent;

            if (cart) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Chưa có sản phẩm trong giỏ hàng !"
            }));

          case 7:
            cartData = {
              products: cart.products.map(function (item) {
                return {
                  product: item.productId,
                  quantity: item.quantity
                };
              })
            };
            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              data: cartData,
              message: "Lấy giỏ hàng thành công !"
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              error: _context.t0.message
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 11]]);
  },
  addItemToCart: function addItemToCart(req, res) {
    var _req$body, userId, productId, attributeId, quantity, cart, existProductIndex;

    return regeneratorRuntime.async(function addItemToCart$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, productId = _req$body.productId, attributeId = _req$body.attributeId, quantity = _req$body.quantity;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }));

          case 4:
            cart = _context2.sent;

            if (!cart) {
              cart = new _cart["default"]({
                userId: userId,
                products: []
              });
            }

            existProductIndex = cart.products.findIndex(function (item) {
              return item.productId.toString() == productId;
            });
            console.log(existProductIndex);

            if (existProductIndex !== -1) {
              cart.products[existProductIndex].quantity += quantity;
            } else {
              cart.products.push({
                productId: productId,
                quantity: quantity
              });
            }

            _context2.next = 11;
            return regeneratorRuntime.awrap(cart.save());

          case 11:
            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              cart: cart
            }));

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              error: _context2.t0.message
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 14]]);
  },
  removeFromCart: function removeFromCart(req, res) {
    var _req$params, userId, productId, cart;

    return regeneratorRuntime.async(function removeFromCart$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params = req.params, userId = _req$params.userId, productId = _req$params.productId;
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }));

          case 4:
            cart = _context3.sent;
            console.log(cart);

            if (cart) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              error: "Không có giỏ hàng này !"
            }));

          case 8:
            cart.products = cart.products.filter(function (product) {
              return product.productId && product.productId.toString() !== productId;
            });
            _context3.next = 11;
            return regeneratorRuntime.awrap(cart.save());

          case 11:
            return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Xóa thành công !",
              cart: cart
            }));

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              error: "Internal Server Error"
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 14]]);
  },
  // Cập nhật số lượng sản phẩm trong giỏ hàng thuộc 1 user
  updateProductQuantity: function updateProductQuantity(req, res) {
    var _req$body2, userId, productId, quantity, cart, product;

    return regeneratorRuntime.async(function updateProductQuantity$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, userId = _req$body2.userId, productId = _req$body2.productId, quantity = _req$body2.quantity;
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }));

          case 4:
            cart = _context4.sent;

            if (cart) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              error: "Cart not found"
            }));

          case 7:
            product = cart.products.find(function (item) {
              return item.productId.toString() === productId;
            });

            if (product) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({
              error: "Product not found"
            }));

          case 10:
            product.quantity = quantity;
            _context4.next = 13;
            return regeneratorRuntime.awrap(cart.save());

          case 13:
            return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              cart: cart
            }));

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](1);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 16]]);
  },
  // Tăng số lượng của sản phẩm trong giỏ hàng
  increaseProductQuantity: function increaseProductQuantity(req, res) {
    var _req$body3, userId, productId, cart, product;

    return regeneratorRuntime.async(function increaseProductQuantity$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body3 = req.body, userId = _req$body3.userId, productId = _req$body3.productId;
            console.log(req.body);
            _context5.prev = 2;
            _context5.next = 5;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }));

          case 5:
            cart = _context5.sent;

            if (cart) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Cart not found"
            }));

          case 8:
            product = cart.products.find(function (item) {
              return item.productId.toString() === productId;
            });

            if (product) {
              _context5.next = 11;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "Product not found in cart"
            }));

          case 11:
            product.quantity++;
            _context5.next = 14;
            return regeneratorRuntime.awrap(cart.save());

          case 14:
            res.status(200).json(cart);
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: _context5.t0.message
            });

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[2, 17]]);
  },
  // Giảm số lượng của sản phẩm trong giỏ hàng
  decreaseProductQuantity: function decreaseProductQuantity(req, res) {
    var _req$body4, userId, productId, cart, product;

    return regeneratorRuntime.async(function decreaseProductQuantity$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body4 = req.body, userId = _req$body4.userId, productId = _req$body4.productId;
            _context6.prev = 1;
            _context6.next = 4;
            return regeneratorRuntime.awrap(_cart["default"].findOne({
              userId: userId
            }));

          case 4:
            cart = _context6.sent;

            if (cart) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Cart not found"
            }));

          case 7:
            product = cart.products.find(function (item) {
              return item.productId.toString() === productId;
            });

            if (product) {
              _context6.next = 10;
              break;
            }

            return _context6.abrupt("return", res.status(404).json({
              message: "Product not found in cart"
            }));

          case 10:
            if (!(product.quantity > 1)) {
              _context6.next = 14;
              break;
            }

            product.quantity--;
            _context6.next = 15;
            break;

          case 14:
            return _context6.abrupt("return", res.status(400).json({
              message: "Không thể giảm xuống dưới 1 !"
            }));

          case 15:
            _context6.next = 17;
            return regeneratorRuntime.awrap(cart.save());

          case 17:
            res.status(200).json(cart);
            _context6.next = 23;
            break;

          case 20:
            _context6.prev = 20;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              message: _context6.t0.message
            });

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[1, 20]]);
  }
};
exports.CartController = CartController;