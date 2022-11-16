"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = exports.EmailContainer = exports.Content = exports.Title = exports.MainContractContainer = exports.BackgroundContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _wave = _interopRequireDefault(require("../assets/wave.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  font-size: 1.5rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  max-width: 800px;\n  position: relative;\n    display: inline;\n  /* display: block; */\n  /* text-align: left; */\n  cursor: pointer;\n  &::after {\n    position: absolute;\n    right: 0;\n    content: ' ';\n    width: 100%;\n    height: 4px;\n    background: rgb(219 39 119);\n    bottom: -8px;\n    transform: scale(0, 1);\n    transition: transform 0.3s;\n    transform-origin: left top;\n  }\n  &:hover::after {\n    transform: scale(1, 1);\n  }\n  &:active::after {\n    transform: scale(1, 1);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 120px;\n  font-size: 1rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  display: block;\n  max-width: 800px;\n  padding: 0 25px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  display: inline;\n  border-bottom-width: 4px;\n  border-color: rgb(219 39 119);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  min-height: 600px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  background-color: #061d3d;\n  color: rgb(209 213 219);\n  z-index: 1;\n  position: static;\n  min-height: 600px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundContainer = _styledComponents["default"].div(_templateObject());

exports.BackgroundContainer = BackgroundContainer;

var MainContractContainer = _styledComponents["default"].div(_templateObject2());

exports.MainContractContainer = MainContractContainer;

var Title = _styledComponents["default"].p(_templateObject3());

exports.Title = Title;

var Content = _styledComponents["default"].div(_templateObject4());

exports.Content = Content;

var EmailContainer = _styledComponents["default"].div(_templateObject5());

exports.EmailContainer = EmailContainer;

var ButtonContainer = _styledComponents["default"].div(_templateObject6());

exports.ButtonContainer = ButtonContainer;