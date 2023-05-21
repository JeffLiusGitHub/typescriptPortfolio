"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkDescriptionContainer = exports.WorkTitle = exports.HeaderContainer = exports.WorkContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-bottom: 24px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  display: block;\n  border-bottom-width: 4px;\n  border-color: rgb(219 39 119);\n  margin-bottom: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 180px;\n  max-width: 1000px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  /* display: block; */\n  /* flex-direction: column; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: #152030;\n  color: rgb(209 213 219);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  scroll-snap-align: start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WorkContainer = _styledComponents["default"].div(_templateObject());

exports.WorkContainer = WorkContainer;

var HeaderContainer = _styledComponents["default"].div(_templateObject2());

exports.HeaderContainer = HeaderContainer;

var WorkTitle = _styledComponents["default"].div(_templateObject3());

exports.WorkTitle = WorkTitle;

var WorkDescriptionContainer = _styledComponents["default"].div(_templateObject4());

exports.WorkDescriptionContainer = WorkDescriptionContainer;