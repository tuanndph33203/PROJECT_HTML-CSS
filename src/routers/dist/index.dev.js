"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./auth.js"));

var _category = _interopRequireDefault(require("./category.js"));

var _product = _interopRequireDefault(require("./product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function routes(app) {
  app.use("/auth", _auth["default"]);
  app.use("/products", _product["default"]);
  app.use("/category", _category["default"]);
}

var _default = routes;
exports["default"] = _default;