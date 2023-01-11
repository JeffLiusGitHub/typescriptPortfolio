"use strict";
exports.__esModule = true;
var react_1 = require("react");
var WorkStyle_1 = require("./WorkStyle");
var bs_1 = require("react-icons/bs");
var ai_1 = require("react-icons/ai");
var Work = function (_a) {
    var id = _a.id, img = _a.img, title = _a.title, category = _a.category, technology = _a.technology, gitUrl = _a.gitUrl, link = _a.link, desc = _a.desc;
    return (react_1["default"].createElement(WorkStyle_1.ProjectContainer, null,
        react_1["default"].createElement(WorkStyle_1.Project, null,
            react_1["default"].createElement(WorkStyle_1.ProjectContent, { id: id },
                react_1["default"].createElement(WorkStyle_1.ProjectLabel, null, category),
                react_1["default"].createElement(WorkStyle_1.ProjectTitle, { id: id }, title),
                react_1["default"].createElement(WorkStyle_1.ProjectDetails, null,
                    react_1["default"].createElement(WorkStyle_1.ProjectDescriptions, null,
                        react_1["default"].createElement("p", null, desc)),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(WorkStyle_1.SkillContainer, { id: id }, technology.map(function (t) { return (react_1["default"].createElement("li", { key: t }, t)); }))),
                    react_1["default"].createElement(WorkStyle_1.IconContainer, { id: id },
                        gitUrl && (react_1["default"].createElement(WorkStyle_1.GitIconContainer, { href: gitUrl, target: "_blank", style: { marginRight: '35px' }, rel: "noopener noreferrer" },
                            react_1["default"].createElement(bs_1.BsGithub, { size: 25 }))),
                        link && (react_1["default"].createElement(WorkStyle_1.LinkIconContainer, { href: link, target: "_blank", rel: "noopener noreferrer" },
                            react_1["default"].createElement(ai_1.AiOutlineLink, { size: 25 })))))),
            react_1["default"].createElement(WorkStyle_1.ProjectImg, { id: id },
                react_1["default"].createElement("img", { src: "/work/" + img + ".png", alt: title + " screenshot" })))));
};
exports["default"] = Work;
