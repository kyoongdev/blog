import React, { useEffect } from 'react';
import { useWindowSize as reactUseWindowSize } from 'react-use';

const useWindowSize = () => {
  const window = reactUseWindowSize();
  const [width, setWidth] = React.useState<string>('100vw');
  const [height, setHeight] = React.useState<string>('100vh');

  useEffect(() => {
    const width: string = typeof window.width === 'number' ? `${window.width}px` : '100vw';
    const height: string = window.height === Infinity ? '100vh' : `${window.height}px`;
    setWidth(width);
    setHeight(height);
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;
