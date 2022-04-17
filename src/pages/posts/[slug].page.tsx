import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { GetStaticPaths, GetStaticProps } from 'next';

import { formatDate } from '~/utils';
import { createClient } from '~/../prismicio';
import { Header, Title, Banner, DateText } from '~/components';

import * as S from './slug.styles';

interface ImageData {
  alt?: string;
  url?: string;
  dimensions?: {
    width?: number;
    height?: number;
  };
}
interface Post {
  slug: string;
  title: string;
  subtitle: string;
  image?: ImageData;
  content: React.ReactNode;
  updatedAt: string | Date;
}

interface PostProps {
  post: Post;
}

const ONE_DAY = 60 * 60 * 24;

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <S.Container>
        {post.image && <Banner title={post.subtitle} image={post.image.url} />}

        <Header />

        <S.Section>
          <Title content={post.title} />

          <S.ContentWrapper>
            <DateText>{formatDate(post.updatedAt)}</DateText>

            <S.Content
              dangerouslySetInnerHTML={{ __html: String(post.content) }}
            />
          </S.ContentWrapper>
        </S.Section>
      </S.Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const { slug } = params;

  const client = createClient({ previewData });

  const response = await client.getByUID('post', String(slug), {});
  console.log(JSON.stringify(response, null, 2));

  const post = {
    slug,
    image: {
      dimensions: {
        width: response.data.default_image.dimensions.width,
        height: response.data.default_image.dimensions.height,
      },
      alt: response.data.default_image.alt ?? '',
      url: response.data.default_image.url ?? undefined,
    },
    title: RichText.asText(response.data.title),
    subtitle: RichText.asText(response.data.subtitle),
    content: RichText.asHtml(response.data.content),
    updatedAt: response.last_publication_date,
  };

  return {
    props: {
      post,
    },
    revalidate: ONE_DAY,
  };
};
