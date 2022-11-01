import React, { useState, useEffect, useCallback } from 'react';
import _debounce from 'lodash/debounce';
const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<string>('default');
  const mouseMove = useCallback(
    (event: MouseEvent) =>
      setMousePosition({ x: event.clientX, y: event.clientY }),
    [event],
  );
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

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

  const textEnter = useCallback(() => setCursorVariant('text'), []);
  const textLeave = useCallback(() => setCursorVariant('default'), []);

  return {
    mousePosition,
    cursorVariant,
    variants,
    textEnter,
    textLeave,
  };
};

export default useMouse;
