import RootLayout from 'components/Layout';
import type { AppProps } from 'next/app';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
