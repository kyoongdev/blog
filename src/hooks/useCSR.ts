import React from 'react';

const useCSR = () => {
  const [isCSR, setIsCSR] = React.useState<boolean>(false);

  React.useEffect(() => setIsCSR(true), []);
  console.log({ isCSR });
  return isCSR;
};

export default useCSR;
