"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Timeline_1 = require("@mui/lab/Timeline");
var LaptopMac_1 = require("@mui/icons-material/LaptopMac");
var Construction_1 = require("@mui/icons-material/Construction");
var ContactMail_1 = require("@mui/icons-material/ContactMail");
var School_1 = require("@mui/icons-material/School");
var styles_1 = require("@mui/material/styles");
var react_scroll_1 = require("react-scroll");
var TimeLineContent_1 = require("../components/TimeLineContent");
var react_intersection_observer_1 = require("react-intersection-observer");
var TimeLine = function (props) {
    var timeLineArray = [
        {
            id: 1,
            align: 'right',
            date: 'Sep 2010 – Sep 2014',
            title: 'Education',
            mainContent: '❖ Bachelor of Electrical Engineering and Automation',
            subContent: '-- Civil Aviation University of China',
            children: react_1["default"].createElement(School_1["default"], null)
        },
        {
            id: 2,
            align: 'left',
            date: 'Jul 2014 -Jul 2017',
            title: 'Experience',
            mainContent: '❖ JuneYao Airline (China)',
            subContent: 'Aircraft Electrical Engineer --',
            children: react_1["default"].createElement(Construction_1["default"], null)
        },
        {
            id: 3,
            align: 'right',
            date: 'Jul 2018 – Jul 2020',
            title: 'Education',
            mainContent: '❖ Master of Information Technology',
            subContent: '--Monash University',
            children: react_1["default"].createElement(School_1["default"], null)
        },
        {
            id: 4,
            align: 'left',
            date: 'Nov 2019 - Feb 2020',
            title: 'Internship',
            mainContent: '❖ Topsek Technology Ltd (Shanghai headquarter)',
            subContent: 'Monash University--',
            children: react_1["default"].createElement(ContactMail_1["default"], null)
        },
        {
            id: 5,
            align: 'right',
            date: 'Nov 2020 – Oct 2021',
            title: 'Experience',
            mainContent: '❖ Ablink Pty Ltd (Australia)',
            subContent: '--React Developer',
            children: react_1["default"].createElement(LaptopMac_1["default"], null)
        },
        {
            id: 6,
            align: 'left',
            date: 'Apr 2022 – June 2022',
            title: 'Experience',
            mainContent: '❖ Openpay Group Ltd (Australia)',
            subContent: 'Frontend Developer--',
            children: react_1["default"].createElement(LaptopMac_1["default"], null)
        },
    ];
    var _a = react_intersection_observer_1.useInView(), leftRef = _a.ref, leftIsVisable = _a.inView;
    // console.log(leftIsVisable);
    var theme = styles_1.createTheme({
        typography: {
            fontFamily: ['VT323'].join(','),
            fontSize: 20
        }
    });
    var timeLineConnectorStyle = { color: 'E0D9F6', width: '6px' };
    var titleStyle = {
        color: '#ED5788',
        textShadow: '  0 0 30px #FF296D, 0 0 40px #FF296D, 0 0 50px #FF296D, 0 0 60px #FF296D'
    };
    var contentStyle = {
        color: '#0BD9E8',
        textShadow: ' 0 0 20px #fff, 0 0 30px #005579, 0 0 40px #005579, 0 0 50px #005579, 0 0 60px #005579, 0 0 70px #005579'
    };
    var dateStyle = { margin: 'auto 0', color: '#302727B' };
    var timeLineDotStyle = { backgroundColor: '#517693', fontSize: '3px' };
    return (react_1["default"].createElement(react_scroll_1.Element, { name: "experience" },
        react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
            react_1["default"].createElement("div", { style: {
                    height: '100vh',
                    minHeight: '1200px',
                    backgroundColor: '#000013',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                } },
                react_1["default"].createElement(Timeline_1["default"], { position: "alternate" }, timeLineArray.map(function (t) { return (react_1["default"].createElement(TimeLineContent_1["default"], { key: t.id, align: t.align, date: t.date, title: t.title, mainContent: t.mainContent, subContent: t.subContent }, t.children)); }))))));
};
exports["default"] = TimeLine;
