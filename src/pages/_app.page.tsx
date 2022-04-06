import Head from 'next/head';
import Link from 'next/link';
import { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver, repositoryName } from '../../prismicio';

import theme from '~/styles/theme';
import GlobalStyle from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
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
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </SessionProvider>
      </ThemeProvider>
    </PrismicProvider>
  );
}

export default MyApp;
