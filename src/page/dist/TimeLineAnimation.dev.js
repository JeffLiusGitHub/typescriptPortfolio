"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftFly = exports.nothing = exports.leftFlyin = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n 0% {\n    left:0;\n    opacity:0;\n  }\n  50%{\n    left:30%\n}\n  100% {\n    left:100%;\n    opacity:1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  animation-duration: 7s;\n\n  animation-name: ", ";\n\n  /* animation-name: ", "; */\n  /* &:hover {\n    scale: 1.1;\n    animation-duration: 7s;\n  } */\n  transition-timing-function: ease-in-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n from {\n    left: -30%;\n    opacity:", ";\n  }\n  to {\n    left: 0;\n    opacity:1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var leftFlyin = function leftFlyin(isAnimated) {
  return (0, _styledComponents.keyframes)(_templateObject(), isAnimated ? 0 : 1);
};

exports.leftFlyin = leftFlyin;
var nothing = (0, _styledComponents.keyframes)(_templateObject2());
exports.nothing = nothing;

var LeftFly = _styledComponents["default"].div(_templateObject3(), function (props) {
  return leftFlyin(props.isAnimated);
}, leftFlyin);

exports.LeftFly = LeftFly;
var rightFlyin = (0, _styledComponents.keyframes)(_templateObject4());