"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconContainer = exports.ProjectImg = exports.SkillContainer = exports.ProjectDescriptions = exports.ProjectDetails = exports.LinkIconContainer = exports.GitIconContainer = exports.ProjectTitle = exports.ProjectLabel = exports.ProjectContent = exports.Project = exports.ProjectContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _border = _interopRequireDefault(require("../assets/border.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  margin: ", ";\n  @media (max-width: 600px) {\n    justify-content: start;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border-radius: 5px;\n  z-index: 0;\n  height: auto;\n  animation: all 0.5 ease-in-out;\n  border-radius: 2px;\n  grid-row: 1 / -1;\n  grid-column: ", ";\n  border-radius: 10px;\n\n  @media screen and (max-width: 768px) {\n    height: 100%;\n  }\n  @media (max-width: 600px) {\n    grid-column: 1 / -1;\n    opacity: 0.25;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    border-radius: 5px;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n    background: linear-gradient(0.4turn, #09321a, #db2978);\n    filter: grayscale(60%) contrast(0.5);\n    mix-blend-mode: screen;\n    border-radius: 2px;\n  }\n  &:hover:before {\n    mix-blend-mode: normal;\n    background: transparent;\n    outline: 0px;\n  }\n  & > img {\n    /* animation: all 1 ease-in-out; */\n    /* border-image-source: url(", ");\n  border-image-slice: 25 36 18 68;\n  border-image-width: 7px 7px 7px 7px;\n  border-image-outset: 0px 0px 0px 0px;\n  border-image-repeat: stretch stretch; */\n    transition: all 0.3s ease-in-out;\n    border-radius: 2px;\n    position: relative;\n    mix-blend-mode: multiply;\n    z-index: 1000;\n    :hover {\n      transform: scale(1.1);\n      @media (max-width: 600px) {\n        transform: scale(1);\n      }\n    }\n    @media screen and (max-width: 768px) {\n      object-fit: cover;\n      width: auto;\n      height: 100%;\n      max-height: 430px;\n      transform: scale(1);\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin-top: 10px;\n  flex-wrap: wrap;\n  justify-content: ", ";\n  @media (max-width: 600px) {\n    justify-content: start;\n  }\n  & > li {\n    clip-path: polygon(\n      0 0,\n      100% 0,\n      100% calc(100% - 7px),\n      calc(100% - 7px) 100%,\n      0 100%\n    );\n    background-color: rgba(92, 246, 255, 0.4);\n    margin: 2px;\n    color: white;\n    transition: all 0.2s ease-in-out;\n    font-size: 12px;\n  }\n  & > li:hover {\n    transform: scale(1.05);\n    background-color: rgba(123, 158, 210, 0.4);\n    box-shadow: -1px 7px 19px 10px rgba(89, 176, 194, 0.87);\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: #252525;\n  padding: 20px 25px;\n  z-index: 200;\n  border-radius: 10px;\n  transition: all 0.2s ease-in-out;\n  :hover {\n    transform: scale(1.1);\n    box-shadow: 7px 8px 26px -7px rgba(0, 0, 0, 0.95);\n  }\n  @media (max-width: 600px) {\n    background-color: rgba(32, 32, 32, 0.3);\n    padding: 20px 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 15px;\n  line-height: 1.5;\n  color: #aaa;\n  z-index: 100;\n  position: relative;\n  & > li {\n    margin-right: 20px;\n    color: #aaa;\n    font-family: monospace;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  grid-column: 4 / 5;\n  grid-row: 1 / 2;\n  align-items: center;\n  transition-duration: 500ms;\n  :hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n  @media (max-width: 600px) {\n    text-align: left;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  grid-column: 5 / 6;\n  grid-row: 1 / 2;\n  align-items: center;\n  transition-duration: 500ms;\n  :hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  margin: 5px 0;\n  z-index: 10;\n  color: #eee;\n  grid-column: 1 / 6;\n  grid-row: 2 / 3;\n  position: relative;\n  border-bottom: 5px;\n  @media (max-width: 600px) {\n    text-align: left;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #db2778;\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 24px;\n  position: relative;\n  z-index: 1000;\n  @media (max-width: 600px) {\n    text-align: left;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  grid-column: ", ";\n  grid-row: 1 / -1;\n  text-align: ", ";\n  @media (max-width: 600px) {\n    grid-column: 1 / -1;\n    padding: 40px;\n    background-color: transparent;\n    padding: 20px 15px;\n    text-align: left;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 30px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    align-items: flex-start;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1000px;\n  margin: 50px auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProjectContainer = _styledComponents["default"].div(_templateObject());

exports.ProjectContainer = ProjectContainer;

var Project = _styledComponents["default"].div(_templateObject2());

exports.Project = Project;

var ProjectContent = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.id % 2 === 1 ? ' 1 / 7' : '6 / -1';
}, function (props) {
  return props.id % 2 === 1 ? 'left' : 'right';
});

exports.ProjectContent = ProjectContent;

var ProjectLabel = _styledComponents["default"].div(_templateObject4());

exports.ProjectLabel = ProjectLabel;

var ProjectTitle = _styledComponents["default"].div(_templateObject5());

exports.ProjectTitle = ProjectTitle;

var GitIconContainer = _styledComponents["default"].a(_templateObject6());

exports.GitIconContainer = GitIconContainer;

var LinkIconContainer = _styledComponents["default"].a(_templateObject7());

exports.LinkIconContainer = LinkIconContainer;

var ProjectDetails = _styledComponents["default"].div(_templateObject8());

exports.ProjectDetails = ProjectDetails;

var ProjectDescriptions = _styledComponents["default"].div(_templateObject9());

exports.ProjectDescriptions = ProjectDescriptions;

var SkillContainer = _styledComponents["default"].ul(_templateObject10(), function (props) {
  return props.id % 2 === 1 ? 'start' : 'end';
});

exports.SkillContainer = SkillContainer;

var ProjectImg = _styledComponents["default"].div(_templateObject11(), function (props) {
  return props.id % 2 === 1 ? '6 / -1' : ' 1 / 7';
}, _border["default"]);

exports.ProjectImg = ProjectImg;

var IconContainer = _styledComponents["default"].div(_templateObject12(), function (props) {
  return props.id % 2 === 1 ? 'flex-start' : 'flex-end';
}, function (props) {
  return props.id % 2 === 1 ? '10px 0 0 10px' : '10px 10px 0 0';
});

exports.IconContainer = IconContainer;