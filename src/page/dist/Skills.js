"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var html_png_1 = require("../assets/html.png");
var css_png_1 = require("../assets/css.png");
var javascript_png_1 = require("../assets/javascript.png");
var react_png_1 = require("../assets/react.png");
var node_png_1 = require("../assets/node.png");
var aws_png_1 = require("../assets/aws.png");
var github_png_1 = require("../assets/github.png");
var mongo_png_1 = require("../assets/mongo.png");
var Skills = function (props) {
    return (react_1["default"].createElement(react_scroll_1.Element, { name: "skills", className: "w-full h-screen bg-[#0a192f] text-gray-300" },
        react_1["default"].createElement("div", { className: "max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", { className: "text-4xl font-bold inline border-b-4 border-pink-600 " }, "Skills"),
                react_1["default"].createElement("p", { className: "py-4" }, "These are the technologies I've worked with")),
            react_1["default"].createElement("div", { className: "w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8" },
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: html_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "HTML")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: css_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "CSS")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: javascript_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "JAVASCRIPT")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: react_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "REACT")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: github_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "GITHUB")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: node_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "NODE JS")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: mongo_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "MONGO DB")),
                react_1["default"].createElement("div", { className: "shadow-md shadow-[#040c16] hover:scale-110 duration-500" },
                    react_1["default"].createElement("img", { className: "w-20 mx-auto", src: aws_png_1["default"], alt: "HTML icon" }),
                    react_1["default"].createElement("p", { className: "my-4" }, "AWS"))))));
};
exports["default"] = Skills;
