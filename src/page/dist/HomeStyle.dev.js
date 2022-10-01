"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlinkerCursor = exports.CallToActionButton = exports.Border = exports.AvatarStyle = exports.AvatarLightStyle = exports.ButtonContainer = exports.Content = exports.MainTitle = exports.Name = exports.Subtitle = exports.RightContainer = exports.LeftContainer = exports.InnerContainer = exports.BackgroundContainer = exports.DeepBackgroundContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _avatar = _interopRequireDefault(require("../assets/avatar.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-in-out;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  &,\n  &:after {\n    width: 150px;\n    height: 70px;\n    font-size: 1.5rem;\n    font-weight: 900;\n    background: linear-gradient(45deg, transparent 5%, rgb(219 39 119) 5%);\n    border: 0;\n    color: #fff;\n    letter-spacing: 3px;\n    box-shadow: 6px 0 0 #00e6f6;\n    position: relative;\n  }\n  &::after {\n    --slice-0: inset(50% 50% 50% 50%);\n    --slice-1: inset(80% -6px 0 0);\n    --slice-2: inset(50% -6px 30% 0);\n    --slice-3: inset(10% -6px 85% 0);\n    --slice-4: inset(40% -6px 43% 0);\n    --slice-5: inset(80% -6px 5% 0);\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: linear-gradient(\n      45deg,\n      transparent 3%,\n      #00e6f6 3%,\n      #00e6f6 5%,\n      rgb(219 39 119)\n    );\n    text-shadow: -3px -3px 0 #f8f005, 3px 3px 0 #00e6f6;\n    clip-path: var(--slice-0);\n  }\n  &:hover::after {\n    animation: ", " 1s;\n    animation-timing-function: steps(2, end);\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 1;\n    width:100%;\n  }\n  to {\n    opacity: 0;\n    width:0%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n 0% {\n    clip-path: var(--slice-1);\n    transform: translate(-20px, -10px);\n  }\n\n  10% {\n    clip-path: var(--slice-3);\n    transform: translate(10px, 10px);\n  }\n\n  20% {\n    clip-path: var(--slice-1);\n    transform: translate(-10px, 10px);\n  }\n\n  30% {\n    clip-path: var(--slice-3);\n    transform: translate(0px, 5px);\n  }\n\n  40% {\n    clip-path: var(--slice-2);\n    transform: translate(-5px, 0px);\n  }\n\n  50% {\n    clip-path: var(--slice-3);\n    transform: translate(5px, 0px);\n  }\n\n  60% {\n    clip-path: var(--slice-4);\n    transform: translate(5px, 10px);\n  }\n\n  70% {\n    clip-path: var(--slice-2);\n    transform: translate(-10px, 10px);\n  }\n\n  80% {\n    clip-path: var(--slice-5);\n    transform: translate(20px, -10px);\n  }\n\n  90% {\n    clip-path: var(--slice-1);\n    transform: translate(-10px, 0px);\n  }\n\n  100% {\n    clip-path: var(--slice-1);\n    transform: translate(0);\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 335px;\n  width: 339px;\n  background: transparent;\n  border-radius: 10px;\n  transition: border 1s;\n  position: relative;\n  & > h1 {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    font-weight: 700;\n    color: white;\n    margin: 20px;\n    opacity: 0;\n    transition: opacity 1s;\n  }\n  &:hover {\n    z-index: 100;\n    filter: brightness(100%);\n    border: 3px solid rgb(136 146 176);\n    filter: drop-shadow(-20px 20px 15px rgba(0, 0, 0, 0.65));\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #2a1f4f,\n      0 0 35px #2a1f4f, 0 0 40px #2a1f4f, 0 0 50px #2a1f4f, 0 0 75px #2a1f4f;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0rem;\n  bottom: 1.25rem;\n  height: 375px;\n  width: 369px;\n  background: grey;\n  border-radius: 10px;\n  transition: background 0.8s;\n  overflow: hidden;\n  background: black;\n  box-shadow: 0 70px 63px -60px #000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background: url(", ") center center no-repeat;\n  background-size: 375px;\n  &::after {\n    height: 369px;\n    width: 375px;\n    background: transparent;\n    border-radius: 10px;\n    transition: border 1s;\n    position: relative;\n  }\n\n  :hover {\n    background: url(", ") 5% 50% no-repeat;\n    background-size: 600px;\n    h1 {\n      opacity: 1;\n      filter: brightness(100%) !important;\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 1.25rem;\n  filter: blur(2px);\n  bottom: 0;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: rgb(136 146 176);\n  max-width: 700px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 50px;\n  line-height: 2.5rem;\n  font-weight: 700;\n  color: rgb(136 146 176);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 2.5rem;\n  color: rgb(204 214 246);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: rgb(219 39 119);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 33%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  animation-duration: 800ms;\n  animation-timing-function: ease-in-out;\n  :hover {\n    transform: perspective(1500px) rotateY(340deg);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 66.66666%;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  margin: auto;\n  padding: 0 32px;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #2a1f4f;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: grey;\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DeepBackgroundContainer = _styledComponents["default"].div(_templateObject());

exports.DeepBackgroundContainer = DeepBackgroundContainer;

var BackgroundContainer = _styledComponents["default"].div(_templateObject2());

exports.BackgroundContainer = BackgroundContainer;

var InnerContainer = _styledComponents["default"].div(_templateObject3());

exports.InnerContainer = InnerContainer;

var LeftContainer = _styledComponents["default"].div(_templateObject4());

exports.LeftContainer = LeftContainer;

var RightContainer = _styledComponents["default"].div(_templateObject5());

exports.RightContainer = RightContainer;

var Subtitle = _styledComponents["default"].p(_templateObject6());

exports.Subtitle = Subtitle;

var Name = _styledComponents["default"].h1(_templateObject7());

exports.Name = Name;

var MainTitle = _styledComponents["default"].p(_templateObject8());

exports.MainTitle = MainTitle;

var Content = _styledComponents["default"].p(_templateObject9());

exports.Content = Content;

var ButtonContainer = _styledComponents["default"].div(_templateObject10());

exports.ButtonContainer = ButtonContainer;

var AvatarLightStyle = _styledComponents["default"].img(_templateObject11());

exports.AvatarLightStyle = AvatarLightStyle;

var AvatarStyle = _styledComponents["default"].div(_templateObject12(), _avatar["default"], _avatar["default"]);

exports.AvatarStyle = AvatarStyle;

var Border = _styledComponents["default"].div(_templateObject13());

exports.Border = Border;
var glitch = (0, _styledComponents.keyframes)(_templateObject14());
var cursor = (0, _styledComponents.keyframes)(_templateObject15());

var CallToActionButton = _styledComponents["default"].button(_templateObject16(), glitch);

exports.CallToActionButton = CallToActionButton;

var BlinkerCursor = _styledComponents["default"].span(_templateObject17(), cursor);

exports.BlinkerCursor = BlinkerCursor;