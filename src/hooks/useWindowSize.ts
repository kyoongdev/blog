import { useWindowSize as reactUseWindowSize } from 'react-use';

type TuseWindowSize = {
  width: string;
  height: string;
};

const useWindowSize = (): TuseWindowSize => {
  const window = reactUseWindowSize();

  const width: string = typeof window.width === 'number' ? `${window.width}px` : '100vw';
  const height: string = window.height === Infinity ? '100vh' : `${window.height}px`;

  return {
    width,
    height,
  };
};

export default useWindowSize;
