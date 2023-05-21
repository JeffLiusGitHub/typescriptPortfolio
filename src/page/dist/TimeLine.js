"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Timeline_1 = require("@mui/lab/Timeline");
var styles_1 = require("@mui/material/styles");
var react_scroll_1 = require("react-scroll");
var TimeLineAnimation_1 = require("./TimeLineAnimation");
var TimeLineContent_1 = require("../components/TimeLineContent");
var react_intersection_observer_1 = require("react-intersection-observer");
var Data_1 = require("../Data/Data");
var TimeLineAnimation_2 = require("./TimeLineAnimation");
var framer_motion_1 = require("framer-motion");
var TimeLine = function (props) {
    console.log('timeline');
    var _a = react_intersection_observer_1.useInView(), leftRef = _a.ref, leftIsVisable = _a.inView;
    var titleRef = react_1.useRef(null);
    var isContentInView = framer_motion_1.useInView(titleRef);
    var theme = styles_1.createTheme({
        typography: {
            fontFamily: ['VT323'].join(','),
            fontSize: 20
        }
    });
    return (react_1["default"].createElement(react_scroll_1.Element, { name: "experience" },
        react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
            react_1["default"].createElement("div", { ref: titleRef, style: {
                    height: 'calc(80% + 150px)',
                    minHeight: '1000px',
                    backgroundColor: '#000013',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    scrollSnapAlign: 'start'
                } },
                react_1["default"].createElement(TimeLineAnimation_2.TimelineMainTitle, { style: {
                        opacity: isContentInView ? 1 : 0,
                        transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s'
                    } }, "Experience"),
                react_1["default"].createElement(Timeline_1["default"], { position: "alternate", sx: { padding: { xs: '0', sm: '0', md: '6px 16px' } } }, Data_1.timeLineArray.map(function (t) { return (react_1["default"].createElement(TimeLineContent_1["default"], __assign({ key: t.id }, t), t.children)); })))),
        react_1["default"].createElement(TimeLineAnimation_1.Spacer, null)));
};
exports["default"] = react_1.memo(TimeLine);
