import React from 'react';

export interface Content {
  text: string;
  type: string;
}

export type PostData = {
  uid: string;
  slug: string;
  title: string;
  updatedAt: Date;
  excerpt: string;
  content?: React.ReactNode;
};
export interface PostsProps {
  posts: PostData[];
}
