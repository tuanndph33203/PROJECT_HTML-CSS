"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _attribute = require("../controllers/attribute");

var attributeRouter = (0, _express.Router)();
attributeRouter.get("/:id", _attribute.getAttributeById);
attributeRouter.put("/:id", _attribute.updateAttribute);
var _default = attributeRouter;
exports["default"] = _default;