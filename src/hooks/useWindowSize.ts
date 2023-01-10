import { useWindowSize as reactUseWindowSize } from "react-use";

type TuseWindowSize = {
  width: number | string;
  height: number | string;
};

const useWindowSize = (): TuseWindowSize => {
  const window = reactUseWindowSize();

  let width: number | string = window.width;
  let height: number | string = window.height;

  if (height === Infinity) {
    width = "100vw";
    height = "100vh";
  }

  return {
    width,
    height,
  };
};

export default useWindowSize;
