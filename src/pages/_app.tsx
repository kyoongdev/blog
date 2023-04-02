import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import RootLayout from 'components/Layout';

import '../styles/global.scss';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={client}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </QueryClientProvider>
  );
};

export default App;
