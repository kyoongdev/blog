import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import RootLayout from 'components/Layout';

import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </RecoilRoot>
  );
};

export default App;
