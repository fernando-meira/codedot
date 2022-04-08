import { RichText } from 'prismic-dom';
import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from '~/../prismicio';

interface Post {
  slug: string;
  title: string;
  content: React.ReactNode;
  updatedAt: string | Date;
}

interface PostProps {
  post: Post;
}

const ONE_DAY = 1000 * 60 * 60 * 24;

export default function Post({ post }: PostProps) {
  console.log('post', post);
  return <h1>Post</h1>;
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

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
    revalidate: ONE_DAY,
  };
};
