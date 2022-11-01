"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useMouse = function () {
    var _a = react_1.useState({ x: 0, y: 0 }), mousePosition = _a[0], setMousePosition = _a[1];
    var _b = react_1.useState('default'), cursorVariant = _b[0], setCursorVariant = _b[1];
    var mouseMove = react_1.useCallback(function (event) {
        return setMousePosition({ x: event.clientX, y: event.clientY });
    }, [event]);
    react_1.useEffect(function () {
        window.addEventListener('mousemove', mouseMove);
        return function () {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);
    var variants = {
        "default": {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text: {
            height: 150,
            width: 150,
            backgroundColor: '#88B1E9',
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            mixBlendMode: 'difference',
            borderRadius: '50%'
        }
    };
    var textEnter = react_1.useCallback(function () { return setCursorVariant('text'); }, []);
    var textLeave = react_1.useCallback(function () { return setCursorVariant('default'); }, []);
    return {
        mousePosition: mousePosition,
        cursorVariant: cursorVariant,
        variants: variants,
        textEnter: textEnter,
        textLeave: textLeave
    };
};
exports["default"] = useMouse;
