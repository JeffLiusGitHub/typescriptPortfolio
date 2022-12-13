"use strict";
exports.__esModule = true;
var react_1 = require("react");
var debounce_1 = require("lodash/debounce");
var useMouse = function () {
    var _a = react_1.useState({ x: 0, y: 0 }), mousePosition = _a[0], setMousePosition = _a[1];
    var _b = react_1.useState('default'), cursorVariant = _b[0], setCursorVariant = _b[1];
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
    var debouncedMouseMove = react_1.useMemo(function () {
        return debounce_1["default"](function (event) {
            setMousePosition({ x: event.clientX, y: event.clientY });
        }, 10);
    }, [setMousePosition]);
    react_1.useEffect(function () {
        window.addEventListener('mousemove', debouncedMouseMove);
        return function () {
            window.removeEventListener('mousemove', debouncedMouseMove);
        };
    }, [debouncedMouseMove]);
    var textEnter = react_1.useCallback(function () { return setCursorVariant('text'); }, [setCursorVariant]);
    var textLeave = react_1.useCallback(function () { return setCursorVariant('default'); }, [setCursorVariant]);
    return {
        mousePosition: mousePosition,
        cursorVariant: cursorVariant,
        variants: variants,
        textEnter: textEnter,
        textLeave: textLeave
    };
};
exports["default"] = useMouse;
