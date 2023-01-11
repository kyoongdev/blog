import { useLayoutEffect, useState } from 'react';
import { useWindowSize as reactUseWindowSize } from 'react-use';

type TuseWindowSize = {
  width: string;
  height: string;
};

const useWindowSize = (): TuseWindowSize => {
  const window = reactUseWindowSize();
  const [width, setWidth] = useState<string>('100vw');
  const [height, setHeight] = useState<string>('100vh');

  useLayoutEffect(() => {
    const width: string = typeof window.width === 'number' ? `${window.width}px` : '100vw';
    const height: string = window.height === Infinity ? '100vh' : `${window.height}px`;
    setWidth(width);
    setHeight(height);
  });

  return {
    width,
    height,
  };
};

export default useWindowSize;
