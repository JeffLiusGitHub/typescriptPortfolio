import React, { useEffect, useState } from 'react';
import _debounce from 'lodash/debounce';
const useWindowSize = () => {
  const [renderButtomIcon, setRenderButtomIcon] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setRenderButtomIcon(true);
      } else {
        setRenderButtomIcon(false);
      }
    };
    window.addEventListener('resize', _debounce(handleResize, 500));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { renderButtomIcon };
};

export default useWindowSize;
