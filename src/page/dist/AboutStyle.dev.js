"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainContentContainer = exports.SecondLineContainer = exports.Title = exports.TitleContainer = exports.GridContainer = exports.MainAboutContainer = exports.ParallaxPositiveContainer = exports.BackgroundContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: 640px) {\n    text-align: right;\n  }\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  @media (min-width: 640px) {\n    text-align: right;\n  }\n  padding-bottom: 8rem;\n  padding-left: 4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 1000px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 2rem;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: skew(0deg, -25deg) scaleY(1.33333) translate(-50%, -50%);\n  opacity: 0.05;\n  left: 50%;\n  bottom: 50%;\n  z-index: 1;\n  font-size:900px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(10 25 47);\n  color: rgb(209 213 219);\n  z-index: 1;\n  position: static;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundContainer = _styledComponents["default"].div(_templateObject());

exports.BackgroundContainer = BackgroundContainer;

var ParallaxPositiveContainer = _styledComponents["default"].div(_templateObject2()); // export const ParallaxNegativeContainer = styled.div`
//   position: absolute;
//   transform: skew(0deg, -25deg) scaleY(1.33333) translate(-50%, -50%);
//   opacity: 0.05;
//   left: 50%;
//   bottom: 50%;
//   z-index: 10000;
// `;


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

var MainContentContainer = _styledComponents["default"].div(_templateObject8());

exports.MainContentContainer = MainContentContainer;