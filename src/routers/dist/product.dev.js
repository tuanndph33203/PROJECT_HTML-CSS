"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("./../controllers/product"));

var _authenticate = require("../middlewares/authenticate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productRouter = _express["default"].Router();

productRouter.get("/", _product["default"].All);
productRouter.get("/limit/:limit", _product["default"].Limit);
productRouter.get("/:tag", _product["default"].Detail);
productRouter.post("/", _product["default"].Create);
productRouter.put("/:id", _product["default"].Update);
productRouter["delete"]("/:id", _product["default"].Delete);
var _default = productRouter;
exports["default"] = _default;