"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var orderItemSchema = new _mongoose["default"].Schema({
  _id: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});
var orderSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true
  },
  items: [orderItemSchema],
  customerName: {
    type: String,
    required: true
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  orderAddress: {
    type: String,
    required: true,
    unique: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    "enum": ["pending", "confirmed", "shipped", "delivered"],
    "default": "pending"
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model("Order", orderSchema);

exports["default"] = _default;