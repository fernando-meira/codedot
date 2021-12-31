import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';
import GlobalStyle from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.colors.primary} />
          <meta
            name="description"
            content="A simple project started to work with TypeScript, React, Next.js and Styled Components"
          />
        </Head>

        <GlobalStyle />

        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
