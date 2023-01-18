import React, { useEffect } from 'react';
import { useWindowSize as reactUseWindowSize } from 'react-use';

const useWindowSize = () => {
  const window = reactUseWindowSize();
  const [width, setWidth] = React.useState<string | number>('100vw');
  const [height, setHeight] = React.useState<string | number>('100vh');

  useEffect(() => {
    const width: string | number = typeof window.width === 'number' ? window.width : '100vw';
    const height: string | number = window.height === Infinity ? '100vh' : window.height;
    setWidth(width);
    setHeight(height);
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;
