import { RichText } from 'prismic-dom';
import { GetServerSideProps } from 'next';
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

export default function Post({ post }: PostProps) {
  console.log('post', post);
  return <h1>Post</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({
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
  };
};
