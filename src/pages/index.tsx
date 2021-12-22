import Head from 'next/head';
import Image from 'next/image';

import { Header } from '~/components';
import notion from '../../public/images/notion.svg';

import * as S from '~/styles/pages/home.styles';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>codeDot</title>
      </Head>

      <Header />

      <S.Section>
        <S.Hero>
          <span>Hey, welcome</span>

          <h1>
            News about <br /> the <span>React</span> world
          </h1>

          <p>
            Get access to all the publication <br />
            <span>for $9.90 month</span>
          </p>
        </S.Hero>

        <Image src={notion} alt="Girl coding" />
      </S.Section>
    </S.Container>
  );
}
