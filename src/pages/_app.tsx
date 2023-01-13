import type { AppProps } from 'next/app';

import RootLayout from 'components/Layout';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
