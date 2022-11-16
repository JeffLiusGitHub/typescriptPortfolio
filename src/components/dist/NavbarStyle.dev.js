"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTopButtonContainer = exports.SocialContainer = exports.MobileNavBarContainer = exports.HambugerButton = exports.NavLi = exports.NavBarItemContainer = exports.LogoContainer = exports.NavBarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 80px;\n  right: 30px;\n  z-index:10000;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1024px) {\n    display: flex;\n  }\n  position: fixed;\n  flex-direction: column;\n  top: 35%;\n  left: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(8 25 47);\n  display: flex;\n  flex-direction: column;\n  /* place-items: center center; */\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline;\n  text-decoration: none;\n  &::after {\n    position: absolute;\n    right: 0;\n    content: '';\n    width: 100%;\n    height: 4px;\n    background: rgb(219 39 119);\n    bottom: -8px;\n    transform: scale(0, 1);\n    transition: transform 0.3s;\n    transform-origin: left top;\n  }\n  &:hover::after {\n    transform: scale(1, 1);\n  }\n  &:active::after {\n    transform: scale(1, 1);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  animation: all 0.2 ease-in-out;\n\n  @media (min-width: 768px) {\n    display: flex;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 500;\n  font-size: 1.8rem;\n  line-height: 1.6;\n  transition: all 0.5s ease-in-out;\n  :hover {\n    color: #ed5788;\n    text-shadow: 0 0 30px #ff296d, 0 0 40px #ff296d, 0 0 50px #ff296d,\n      0 0 60px #ff296d, 0 0 70px #ff296d;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 1rem /* 16px */;\n  padding-right: 1rem;\n  background-color: rgb(8 25 47);\n  color: rgb(209 213 219);\n  z-index: 10000;\n  box-shadow: 2px 9px 35px -5px #000000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarContainer = _styledComponents["default"].div(_templateObject());

exports.NavBarContainer = NavBarContainer;

var LogoContainer = _styledComponents["default"].div(_templateObject2());

exports.LogoContainer = LogoContainer;

var NavBarItemContainer = _styledComponents["default"].ul(_templateObject3());

exports.NavBarItemContainer = NavBarItemContainer;

var NavLi = _styledComponents["default"].li(_templateObject4());

exports.NavLi = NavLi;

var HambugerButton = _styledComponents["default"].button(_templateObject5());

exports.HambugerButton = HambugerButton;

var MobileNavBarContainer = _styledComponents["default"].ul(_templateObject6());

exports.MobileNavBarContainer = MobileNavBarContainer;

var SocialContainer = _styledComponents["default"].ul(_templateObject7());

exports.SocialContainer = SocialContainer;

var NavTopButtonContainer = _styledComponents["default"].div(_templateObject8());

exports.NavTopButtonContainer = NavTopButtonContainer;