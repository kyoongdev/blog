import type { AppProps } from 'next/app';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import RootLayout from 'components/Layout';

import '../styles/global.scss';

export interface Props {
  dehydratedState: DehydratedState;
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps<Props>) => {
  console.log('dehydratedState', pageProps.dehydratedState);
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
