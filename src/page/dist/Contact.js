"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactStyle_1 = require("./ContactStyle");
var HomeStyle_1 = require("./HomeStyle");
var framer_motion_1 = require("framer-motion");
var react_scroll_1 = require("react-scroll");
var Data_1 = require("../Data/Data");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var Contract = function (_a) {
    var textEnter = _a.textEnter, textLeave = _a.textLeave;
    var contentRef = react_1.useRef(null);
    var isContentInView = framer_motion_1.useInView(contentRef);
    console.log('contract');
    return (react_1["default"].createElement(react_scroll_1.Element, { name: "contact" },
        react_1["default"].createElement(ContactStyle_1.BackgroundContainer, { ref: contentRef },
            react_1["default"].createElement(ContactStyle_1.MainContractContainer, null,
                react_1["default"].createElement(ContactStyle_1.Title, { onMouseEnter: textEnter, onMouseLeave: textLeave, style: {
                        opacity: isContentInView ? 1 : 0,
                        transform: isContentInView ? 'none' : 'translateY(-100px)',
                        transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                    } }, "Contact"),
                react_1["default"].createElement(ContactStyle_1.Content, { onMouseEnter: textEnter, onMouseLeave: textLeave, style: {
                        opacity: isContentInView ? 1 : 0,
                        transform: isContentInView ? 'none' : 'translateY(-100px)',
                        transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
                    } }, Data_1.contactDescription),
                react_1["default"].createElement(ContactStyle_1.EmailContainer, null,
                    react_1["default"].createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: "jeffliu2802@hotmail.com", onCopy: function () { return alert('email copied!'); } },
                        react_1["default"].createElement("span", null, "jeffliu2802@hotmail.com"))),
                react_1["default"].createElement(ContactStyle_1.ButtonContainer, null,
                    react_1["default"].createElement("a", { href: "mailto:jeffliu2802@hotmail.com", target: "_blank", rel: "noopener noreferrer" },
                        react_1["default"].createElement(HomeStyle_1.CallToActionButton, null,
                            "Contact",
                            react_1["default"].createElement(HomeStyle_1.BlinkerCursor, null, "_"))))))));
};
exports["default"] = react_1.memo(Contract);
