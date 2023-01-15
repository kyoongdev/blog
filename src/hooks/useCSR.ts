import React from 'react';

const useCSR = () => {
  const [isCSR, setIsCSR] = React.useState<boolean>(false);

  React.useEffect(() => setIsCSR(true), []);

  return isCSR;
};

export default useCSR;
