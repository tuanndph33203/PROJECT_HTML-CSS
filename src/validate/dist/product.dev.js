"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = _joi["default"].object({
  name: _joi["default"].string().min(3).max(30).required().messages({
    "any.required": "Trường Name là bắt buộc",
    "string.empty": "Trường Name không được để trống",
    "string.min": "Trường Name phải có ít nhất {#limit} ký tự",
    "string.max": "Trường Name không được vượt quá {#limit} ký tự"
  }),
  tags: _joi["default"].array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Ít nhất phải có một thuộc tính."
  }),
  gallery: _joi["default"].array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Ít nhất phải có một thuộc tính."
  }),
  attributes: _joi["default"].array().min(1).required().messages({
    "any.required": "Attributes là trường bắt buộc.",
    "array.min": "Attributes Ít nhất phải có một thuộc tính."
  }),
  image: _joi["default"].string().required().messages({
    "any.required": "Trường Image là bắt buộc",
    "string.empty": "Trường Image không được để trống"
  }),
  discount: _joi["default"].number().min(0).max(100).required().messages({
    "any.required": "Trường Discount là bắt buộc",
    "number.empty": "Trường Discount không được để trống",
    "number.min": "Trường Discount phải có giá trị tối thiểu {#limit}",
    "number.max": "Trường Discount không được vượt quá {#limit}"
  }),
  description: _joi["default"].string().required().messages({
    "any.required": "Trường Description là bắt buộc",
    "string.empty": "Trường Description không được để trống"
  }),
  featured: _joi["default"]["boolean"]().messages({
    "any.required": "Trường featured là bắt buộc",
    "any.only": "Trường featured chỉ có thể là true hoặc false",
    "boolean.base": "Trường featured phải là một giá trị boolean"
  }),
  category: _joi["default"].string().required().messages({
    "any.required": "Trường Category là bắt buộc",
    "string.empty": "Trường Category không được để trống"
  })
});

exports.productSchema = productSchema;