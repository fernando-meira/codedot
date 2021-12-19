import Head from 'next/head';

import { Header } from '~/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>codeDot</title>
      </Head>

      <Header />
    </>
  );
}
