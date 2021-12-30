import Link from 'next/link';

import * as S from './styles';

export default function Post() {
  const posts = [
    {
      slug: 'Creating a Monorepo with Lerna & Yarn Workspaces',
      updatedAt: '12 de março de 2021',
      title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
      excerpt:
        'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.',
    },

    {
      slug: 'How Stripe Designs Beautiful Websites',
      updatedAt: '11 de março de 2021',
      title: 'How Stripe Designs Beautiful Websites',
      excerpt:
        "Examining the tips and tricks used to make tripe's website design a notch above the rest.",
    },
  ];

  return (
    <S.Container>
      {posts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          <a>
            <time>{post.updatedAt}</time>

            <strong>{post.title}</strong>

            <p>{post.excerpt}</p>
          </a>
        </Link>
      ))}
    </S.Container>
  );
}
