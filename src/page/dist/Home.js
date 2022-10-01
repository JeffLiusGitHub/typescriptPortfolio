"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var avatar_light_jpg_1 = require("../assets/avatar_light.jpg");
var HomeStyle_1 = require("./HomeStyle");
var react_scroll_2 = require("react-scroll");
var Home = function (_a) {
    // const { textEnter, textLeave, variants, cursorVariant } = useMouse();
    var textEnter = _a.textEnter, textLeave = _a.textLeave;
    return (react_1["default"].createElement(react_scroll_2.Element, { name: "home" },
        react_1["default"].createElement(HomeStyle_1.DeepBackgroundContainer, null,
            react_1["default"].createElement(HomeStyle_1.BackgroundContainer, null,
                react_1["default"].createElement(HomeStyle_1.InnerContainer, null,
                    react_1["default"].createElement(HomeStyle_1.LeftContainer, null,
                        react_1["default"].createElement(HomeStyle_1.Subtitle, { onMouseEnter: textEnter, onMouseLeave: textLeave }, "Hi, my name is"),
                        react_1["default"].createElement(HomeStyle_1.Name, { onMouseEnter: textEnter, onMouseLeave: textLeave }, "Jeff Liu"),
                        react_1["default"].createElement(HomeStyle_1.MainTitle, { onMouseEnter: textEnter, onMouseLeave: textLeave }, "I'm a full-stack developer"),
                        react_1["default"].createElement(HomeStyle_1.Content, { onMouseEnter: textEnter, onMouseLeave: textLeave }, "I'm a full-stack developer"),
                        react_1["default"].createElement(HomeStyle_1.ButtonContainer, null,
                            react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "about", spy: true, smooth: true, offset: 50, duration: 500 },
                                react_1["default"].createElement(HomeStyle_1.CallToActionButton, null,
                                    "view work",
                                    react_1["default"].createElement(HomeStyle_1.BlinkerCursor, null, "_"))))),
                    react_1["default"].createElement(HomeStyle_1.RightContainer, null,
                        react_1["default"].createElement(HomeStyle_1.AvatarLightStyle, { src: avatar_light_jpg_1["default"], alt: "avatar light" }),
                        react_1["default"].createElement(HomeStyle_1.AvatarStyle, null,
                            react_1["default"].createElement(HomeStyle_1.Border, null,
                                react_1["default"].createElement("h1", null, "Zexi Liu")))))))));
};
exports["default"] = Home;
