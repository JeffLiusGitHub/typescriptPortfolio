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
var Stack_1 = require("@mui/material/Stack");
var Snackbar_1 = require("@mui/material/Snackbar");
var Alert_1 = require("@mui/material/Alert");
var Alert = React.forwardRef(function Alert(props, ref) {
    return React.createElement(Alert_1["default"], __assign({ elevation: 6, ref: ref, variant: "filled" }, props));
});
function CustomizedSnackbars(_a) {
    var open = _a.open, closeHandler = _a.closeHandler;
    var handleClose = function (event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        closeHandler();
    };
    return (React.createElement(Stack_1["default"], { spacing: 2, sx: { width: '100%' } },
        React.createElement(Snackbar_1["default"], { open: open, autoHideDuration: 3000, style: { zIndex: '100000' }, anchorOrigin: { vertical: 'top', horizontal: 'center' }, onClose: handleClose },
            React.createElement(Alert, { onClose: handleClose, severity: "success", sx: { width: '100%' }, color: "info" }, "Email address copied!"))));
}
exports["default"] = CustomizedSnackbars;
