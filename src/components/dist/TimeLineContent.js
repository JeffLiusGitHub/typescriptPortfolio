"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TimelineItem_1 = require("@mui/lab/TimelineItem");
var TimelineSeparator_1 = require("@mui/lab/TimelineSeparator");
var TimelineConnector_1 = require("@mui/lab/TimelineConnector");
var TimelineContent_1 = require("@mui/lab/TimelineContent");
var TimelineOppositeContent_1 = require("@mui/lab/TimelineOppositeContent");
var TimelineDot_1 = require("@mui/lab/TimelineDot");
var Typography_1 = require("@mui/material/Typography");
var TimeLineAnimation_1 = require("../page/TimeLineAnimation");
// import { useInView } from 'react-intersection-observer';
var framer_motion_1 = require("framer-motion");
var TimeLineContent = function (_a) {
    var date = _a.date, title = _a.title, mainContent = _a.mainContent, subContent = _a.subContent, children = _a.children;
    var timeLineConnectorStyle = { color: 'E0D9F6', width: '6px' };
    var titleStyle = {
        fontSize: { sm: '20px', md: '30px', lg: '35px' },
        color: '#ED5788',
        textShadow: '0 0 30px #FF296D, 0 0 40px #FF296D, 0 0 50px #FF296D, 0 0 60px #FF296D'
    };
    var contentStyle = {
        color: '#0BD9E8',
        fontSize: { xs: '14px', sm: '15px', md: '30px', lg: '35px' },
        textShadow: '0 0 20px #fff, 0 0 30px #005579, 0 0 40px #005579, 0 0 50px #005579, 0 0 60px #005579, 0 0 70px #005579'
    };
    var dateStyle = {
        fontSize: { xs: '14px', sm: '15px', md: '30px', lg: '35px' },
        margin: 'auto 0',
        color: '#302727B',
        wordWrap: 'break-word'
    };
    var timeLineDotStyle = { backgroundColor: '#517693', fontSize: '3px' };
    var contentRef = react_1.useRef(null);
    var isContentInView = framer_motion_1.useInView(contentRef);
    // const { ref: leftRef, inView: leftIsVisable } = useInView();
    return (react_1["default"].createElement(TimelineItem_1["default"], null,
        react_1["default"].createElement(TimelineOppositeContent_1["default"], { sx: dateStyle, color: "white", align: "right", variant: "body2" }, date),
        react_1["default"].createElement(TimelineSeparator_1["default"], null,
            react_1["default"].createElement(TimelineConnector_1["default"], { sx: timeLineConnectorStyle }),
            react_1["default"].createElement(TimelineDot_1["default"], { sx: timeLineDotStyle }, children),
            react_1["default"].createElement(TimelineConnector_1["default"], { sx: timeLineConnectorStyle })),
        react_1["default"].createElement(TimelineContent_1["default"], { sx: { py: '12px', px: 2 } },
            react_1["default"].createElement(TimeLineAnimation_1.LeftFly, { isAnimated: isContentInView, ref: contentRef },
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", component: "span", sx: titleStyle }, title),
                react_1["default"].createElement(Typography_1["default"], { sx: contentStyle }, mainContent),
                react_1["default"].createElement(Typography_1["default"], { sx: contentStyle }, subContent)))));
};
exports["default"] = TimeLineContent;
