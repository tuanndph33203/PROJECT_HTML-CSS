"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = _interopRequireDefault(require("../controllers/category.js"));

var _authenticate = require("../middlewares/authenticate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var categoryRouter = _express["default"].Router();

categoryRouter.get("/", _category["default"].All);
categoryRouter.get("/:id", _category["default"].Detail);
categoryRouter.post("/", _category["default"].Create);
categoryRouter.put("/:id", _category["default"].Update);
categoryRouter["delete"]("/:id", _category["default"].Delete);
var _default = categoryRouter;
exports["default"] = _default;