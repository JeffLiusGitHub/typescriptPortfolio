import React, { useEffect, useState } from 'react';

type Props = {};

const useWindowSize = (props: Props) => {
  let windowSize;

  useEffect(() => {
    const handleResize = () => {
      console.log('resize to: ', window.innerWidth, 'x', window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export default useWindowSize;
