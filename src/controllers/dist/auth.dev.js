"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _httpStatusCodes = require("http-status-codes");

var _auth = require("../validate/auth");

var _user = _interopRequireDefault(require("../models/user.js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserController = {
  Register: function Register(req, res) {
    var _req$body, email, password, name, avatar, confirmPassword, _signupSchema$validat, error, existUser, hashedPassword, role, user;

    return regeneratorRuntime.async(function Register$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password, name = _req$body.name, avatar = _req$body.avatar, confirmPassword = _req$body.confirmPassword;
            _signupSchema$validat = _auth.signupSchema.validate({
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
              avatar: avatar
            }, {
              abortEarly: false
            }), error = _signupSchema$validat.error;

            if (!error) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: error.details.map(function (value) {
                return value.message;
              })
            }));

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(_user["default"].findOne({
              email: email
            }));

          case 7:
            existUser = _context.sent;

            if (!existUser) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Email đã tồn tại !"
            }));

          case 10:
            if (!(password !== confirmPassword)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Mật khẩu không trùng nhau !"
            }));

          case 12:
            _context.next = 14;
            return regeneratorRuntime.awrap(_bcryptjs["default"].hash(password, 12));

          case 14:
            hashedPassword = _context.sent;
            _context.next = 17;
            return regeneratorRuntime.awrap(_user["default"].countDocuments({}));

          case 17:
            _context.t0 = _context.sent;

            if (!(_context.t0 === 0)) {
              _context.next = 22;
              break;
            }

            _context.t1 = "admin";
            _context.next = 23;
            break;

          case 22:
            _context.t1 = "user";

          case 23:
            role = _context.t1;
            _context.next = 26;
            return regeneratorRuntime.awrap(_user["default"].create({
              name: name,
              email: email,
              avatar: avatar,
              password: hashedPassword,
              role: role
            }));

          case 26:
            user = _context.sent;
            return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.CREATED).json({
              message: "Đăng ký tài khoản thành công !",
              user: _objectSpread({}, user.toObject(), {
                email: undefined,
                password: undefined
              })
            }));

          case 30:
            _context.prev = 30;
            _context.t2 = _context["catch"](0);
            res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Error: " + _context.t2
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 30]]);
  },
  Login: function Login(req, res) {
    var _req$body2, email, password, _signinSchema$validat, error, user, checkPassword, token;

    return regeneratorRuntime.async(function Login$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _signinSchema$validat = _auth.signinSchema.validate({
              email: email,
              password: password
            }, {
              abortEarly: false
            }), error = _signinSchema$validat.error;

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
            return regeneratorRuntime.awrap(_user["default"].findOne({
              email: email
            }));

          case 7:
            user = _context2.sent;

            if (user) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Email chưa đăng ký tài khoản !"
            }));

          case 10:
            _context2.next = 12;
            return regeneratorRuntime.awrap(_bcryptjs["default"].compare(password, user.password));

          case 12:
            checkPassword = _context2.sent;

            if (checkPassword) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
              message: "Mật khẩu không đúng !"
            }));

          case 15:
            token = _jsonwebtoken["default"].sign({
              user: user._id
            }, process.env.KEY, {
              expiresIn: "1w"
            });
            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.OK).json({
              message: "Đăng Nhập Thành Công !",
              user: _objectSpread({}, user.toObject(), {
                password: undefined
              }),
              token: token
            }));

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json({
              message: "Đăng Nhập Thất Bại !",
              error: _context2.t0
            }));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 19]]);
  }
};
var _default = UserController;
exports["default"] = _default;