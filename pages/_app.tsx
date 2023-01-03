import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider, ThemeProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../styles/motion';
import lightTheme from '../styles/theme';
import client from '../src/shared/apollo';
import { AUTH0_CLIENT_ID } from '../src/shared/constants';
import { AUTH0_DOMAIN } from '../src/shared/constants/index';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: MyAppProps) {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={process.browser && window.location.origin}
    >
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </Auth0Provider>
  );
}
