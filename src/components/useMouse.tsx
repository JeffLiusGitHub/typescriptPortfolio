import React, { useState, useEffect, useCallback, useMemo } from 'react';
import _debounce from 'lodash/debounce';
const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<string>('default');

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      backgroundColor: '#88B1E9',
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: 'difference',
      borderRadius: '50%',
    },
  };
  const debouncedMouseMove = useMemo(
    () =>
      _debounce((event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }, 10),
    [setMousePosition],
  );

  useEffect(() => {
    window.addEventListener('mousemove', debouncedMouseMove);
    return () => {
      window.removeEventListener('mousemove', debouncedMouseMove);
    };
  }, [debouncedMouseMove]);

  const textEnter = useCallback(
    () => setCursorVariant('text'),
    [setCursorVariant],
  );
  const textLeave = useCallback(
    () => setCursorVariant('default'),
    [setCursorVariant],
  );

  return {
    mousePosition,
    cursorVariant,
    variants,
    textEnter,
    textLeave,
  };
};

export default useMouse;
