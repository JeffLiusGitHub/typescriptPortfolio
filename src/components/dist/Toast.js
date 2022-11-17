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
var React = require("react");
var Button_1 = require("@mui/material/Button");
var Snackbar_1 = require("@mui/material/Snackbar");
var Fade_1 = require("@mui/material/Fade");
var Grow_1 = require("@mui/material/Grow");
function GrowTransition(props) {
    return React.createElement(Grow_1["default"], __assign({}, props));
}
function TransitionsSnackbar() {
    var _a = React.useState({
        open: false,
        Transition: Fade_1["default"]
    }), state = _a[0], setState = _a[1];
    var handleClick = function (Transition) {
        return function () {
            setState({
                open: true,
                Transition: Transition
            });
        };
    };
    var handleClose = function () {
        setState(__assign(__assign({}, state), { open: false }));
    };
    return (React.createElement("div", null,
        React.createElement(Button_1["default"], { onClick: handleClick(GrowTransition) }, "Grow Transition"),
        React.createElement(Button_1["default"], { onClick: handleClick(Fade_1["default"]) }, "Fade Transition"),
        React.createElement(Snackbar_1["default"], { open: state.open, onClose: handleClose, TransitionComponent: state.Transition, message: "I love snacks", key: state.Transition.name })));
}
exports["default"] = TransitionsSnackbar;
