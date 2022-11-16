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
var fa_1 = require("react-icons/fa");
var react_scroll_1 = require("react-scroll");
var OuterLink_1 = require("./OuterLink");
var NavItems_1 = require("./NavItems");
var NavItemMobile_1 = require("./NavItemMobile");
var NavbarStyle_1 = require("./NavbarStyle");
var Data_1 = require("../Data/Data");
var useWindowSize_1 = require("../components/useWindowSize");
var BottomNav_1 = require("../components/BottomNav");
var Fab_1 = require("@mui/material/Fab");
var Navigation_1 = require("@mui/icons-material/Navigation");
var Navbar = function (Prop) {
    console.log('nav');
    var _a = react_1.useState(false), openTab = _a[0], setOpenTab = _a[1];
    var renderButtomIcon = useWindowSize_1["default"]().renderButtomIcon;
    var handleOnClick = function () { return setOpenTab(function (prevTab) { return !prevTab; }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(NavbarStyle_1.NavBarContainer, null,
            react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: 'home', spy: true, smooth: true, offset: 50, duration: 500 },
                react_1["default"].createElement(NavbarStyle_1.LogoContainer, null, "Jeff Liu")),
            react_1["default"].createElement(NavbarStyle_1.NavBarItemContainer, null, Data_1.navItemsArray === null || Data_1.navItemsArray === void 0 ? void 0 : Data_1.navItemsArray.map(function (n) { return (react_1["default"].createElement(NavItems_1["default"], { key: n, section: n })); })),
            react_1["default"].createElement(NavbarStyle_1.HambugerButton, { onClick: handleOnClick }, openTab ? react_1["default"].createElement(fa_1.FaTimes, null) : react_1["default"].createElement(fa_1.FaBars, null)),
            openTab && (react_1["default"].createElement(NavbarStyle_1.MobileNavBarContainer, null, Data_1.navItemsArray.map(function (n) { return (react_1["default"].createElement(NavItemMobile_1["default"], { key: n, section: n, setOpenTab: setOpenTab })); }))),
            react_1["default"].createElement(NavbarStyle_1.SocialContainer, null, Data_1.outerLinkArray === null || Data_1.outerLinkArray === void 0 ? void 0 : Data_1.outerLinkArray.map(function (o) { return (react_1["default"].createElement(OuterLink_1["default"], __assign({ key: o.name }, o), o.children)); }))),
        react_1["default"].createElement(NavbarStyle_1.NavTopButtonContainer, null,
            react_1["default"].createElement(react_scroll_1.Link, { to: "home", spy: true, smooth: true, offset: 50, duration: 500 },
                react_1["default"].createElement(Fab_1["default"], { style: { backgroundColor: 'rgba(250,95,160,.7', boxShadow: '2px 2px 4px 0px rgba(120,150,210,0.75)' }, size: "medium" },
                    react_1["default"].createElement(Navigation_1["default"], { style: { fontSize: '18px', color: '#D1D5DB' } })))),
        renderButtomIcon && react_1["default"].createElement(BottomNav_1["default"], null)));
};
exports["default"] = react_1.memo(Navbar);
