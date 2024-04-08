"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAttribute = exports.getAttributeById = exports.getAllAttributes = exports.updateAttribute = exports.createAttribute = void 0;

var _attribute = _interopRequireDefault(require("../models/attribute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createAttribute = function createAttribute(data) {
  var attribute, newAttribute;
  return regeneratorRuntime.async(function createAttribute$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          attribute = new _attribute["default"]({
            values: data
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(attribute.save());

        case 4:
          newAttribute = _context.sent;
          return _context.abrupt("return", newAttribute);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.createAttribute = createAttribute;

var updateAttribute = function updateAttribute(data) {
  var existAttribute, _updateAttribute;

  return regeneratorRuntime.async(function updateAttribute$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_attribute["default"].findById(data._id));

        case 3:
          existAttribute = _context2.sent;
          existAttribute.values = data.values;
          _context2.next = 7;
          return regeneratorRuntime.awrap(existAttribute.save());

        case 7:
          _updateAttribute = _context2.sent;
          return _context2.abrupt("return", _updateAttribute);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0.message);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.updateAttribute = updateAttribute;

var getAllAttributes = function getAllAttributes(req, res) {
  var attributes;
  return regeneratorRuntime.async(function getAllAttributes$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_attribute["default"].find().populate("values"));

        case 3:
          attributes = _context3.sent;
          res.json(attributes);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllAttributes = getAllAttributes;

var getAttributeById = function getAttributeById(req, res) {
  var attribute;
  return regeneratorRuntime.async(function getAttributeById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_attribute["default"].findById(req.params.id).populate("values"));

        case 3:
          attribute = _context4.sent;

          if (attribute) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "Attribute not found"
          }));

        case 6:
          res.json(attribute);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.getAttributeById = getAttributeById;

var deleteAttribute = function deleteAttribute(id) {
  return regeneratorRuntime.async(function deleteAttribute$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_attribute["default"].findOneAndDelete(id));

        case 3:
          _context5.next = 8;
          break;

        case 5:
          _context5.prev = 5;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", _context5.t0.message);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.deleteAttribute = deleteAttribute;