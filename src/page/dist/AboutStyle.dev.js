"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = exports.MainContentContainer = exports.SkillContainer = exports.ThirdLineContainer = exports.SecondLineContainer = exports.Title = exports.TitleContainer = exports.GridContainer = exports.MainAboutContainer = exports.ParallaxPositiveContainer = exports.BackgroundContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _wave = _interopRequireDefault(require("../assets/wave.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  content: '';\n  height: 435px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(", ");\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: 640px) {\n    text-align: right;\n  }\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  &:before {\n    content: '\u25B9';\n    position: absolute;\n    left: 0px;\n    line-height: 12px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  @media (max-width: 640px) {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  display: inline;\n  border-bottom-width: 4px;\n  border-color: rgb(219 39 119);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 100px;\n  @media (min-width: 640px) {\n    text-align: right;\n  }\n  padding-bottom: 8rem;\n  padding-left: 4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1000px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 2rem;\n  @media (min-width: 640px) {\n    padding: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: skew(5deg, -25deg) scaleY(1.33333) translate(-50%, -50%);\n  display: inline-block;\n  opacity: 0.05;\n  left: 50%;\n  top: 30%;\n  @media (max-width: 1800px) {\n    top: 60%;\n  }\n  @media (max-width: 1200px) {\n    top: 80%;\n  }\n  @media (max-width: 768px) {\n    top: 110%;\n  }\n  z-index: 1;\n  font-size: 900px;\n  text-overflow: clip;\n  overflow-x: hidden;\n  white-space: nowrap;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100svh;\n  background-color: rgb(10 25 47);\n  color: rgb(209 213 219);\n  z-index: 1;\n  position: static;\n  scroll-snap-align: start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundContainer = _styledComponents["default"].div(_templateObject());

exports.BackgroundContainer = BackgroundContainer;

var ParallaxPositiveContainer = _styledComponents["default"].div(_templateObject2());

exports.ParallaxPositiveContainer = ParallaxPositiveContainer;

var MainAboutContainer = _styledComponents["default"].div(_templateObject3());

exports.MainAboutContainer = MainAboutContainer;

var GridContainer = _styledComponents["default"].div(_templateObject4());

exports.GridContainer = GridContainer;

var TitleContainer = _styledComponents["default"].div(_templateObject5());

exports.TitleContainer = TitleContainer;

var Title = _styledComponents["default"].p(_templateObject6());

exports.Title = Title;

var SecondLineContainer = _styledComponents["default"].div(_templateObject7());

exports.SecondLineContainer = SecondLineContainer;

var ThirdLineContainer = _styledComponents["default"].ul(_templateObject8());

exports.ThirdLineContainer = ThirdLineContainer;

var SkillContainer = _styledComponents["default"].p(_templateObject9());

exports.SkillContainer = SkillContainer;

var MainContentContainer = _styledComponents["default"].div(_templateObject10());

exports.MainContentContainer = MainContentContainer;

var Spacer = _styledComponents["default"].div(_templateObject11(), _wave["default"]);

exports.Spacer = Spacer;