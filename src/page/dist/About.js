"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var ParallaxText_1 = require("../components/ParallaxText");
var AboutStyle_1 = require("./AboutStyle");
var About = function (_a) {
    var textEnter = _a.textEnter, textLeave = _a.textLeave;
    return (react_1["default"].createElement(react_scroll_1.Element, { name: "about" },
        react_1["default"].createElement(AboutStyle_1.BackgroundContainer, null,
            react_1["default"].createElement(AboutStyle_1.ParallaxPositiveContainer, null,
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: -4 }, "Ze xi Liu "),
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: 4 }, " Full Stack Developer "),
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: -4 }, " Ze xi Liu "),
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: 4 }, " Full Stack Developer "),
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: -4 }, " Ze xi Liu "),
                react_1["default"].createElement(ParallaxText_1["default"], { baseVelocity: 5 }, " Full Stack Developer ")),
            react_1["default"].createElement(AboutStyle_1.MainAboutContainer, null,
                react_1["default"].createElement(AboutStyle_1.GridContainer, null,
                    react_1["default"].createElement(AboutStyle_1.TitleContainer, null,
                        react_1["default"].createElement(AboutStyle_1.Title, { onMouseEnter: textEnter, onMouseLeave: textLeave }, "About")),
                    react_1["default"].createElement("div", null)),
                react_1["default"].createElement(AboutStyle_1.SecondLineContainer, null,
                    react_1["default"].createElement(AboutStyle_1.MainContentContainer, null,
                        react_1["default"].createElement("p", { onMouseEnter: textEnter, onMouseLeave: textLeave }, "Hi. I'm Jeff, nice to meet you. Please take a look around.")),
                    react_1["default"].createElement("p", { onMouseEnter: textEnter, onMouseLeave: textLeave }, "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?"))))));
};
exports["default"] = About;
