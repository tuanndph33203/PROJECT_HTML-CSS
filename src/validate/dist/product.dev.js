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
  price: _joi["default"].number().min(1000).max(999999999).required().messages({
    "any.required": "Trường Price là bắt buộc",
    "string.empty": "Trường Price không được để trống",
    "string.min": "Trường Price phải có ít nhất {#limit}",
    "string.max": "Trường Name không được vượt quá {#limit}"
  }),
  email: _joi["default"].string().email().required().messages({
    "any.required": "Trường Email là bắt buộc",
    "string.empty": "Trường Email không được để trống",
    "string.email": "Trường Email phải là email hợp lệ"
  }),
  password: _joi["default"].string().min(6).max(30).required().messages({
    "any.required": "Trường Password là bắt buộc",
    "string.empty": "Trường Password không được để trống",
    "string.min": "Trường Password phải có ít nhất {#limit} ký tự",
    "string.max": "Trường Password không được vượt quá {#limit} ký tự"
  }),
  confirmPassword: _joi["default"].string().required().valid(_joi["default"].ref("password")).messages({
    "any.required": "Trường Confirm Password là bắt buộc",
    "any.only": "Mật khẩu không trùng khớp"
  }),
  avatar: _joi["default"].string().uri().messages({
    "string.uri": "Trường Avatar phải là đường dẫn hợp lệ"
  })
});

exports.productSchema = productSchema;