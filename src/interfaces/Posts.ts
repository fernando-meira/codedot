export interface Content {
  text: string;
  type: string;
}

export interface PostData {
  uid: string;
  first_publication_date: string | Date;
  href?: string;
  data: {
    content: Content[];
    title: {
      text: string;
      type: string;
    };
    default_image?: {
      url: string;
      alt?: string;
      copyright?: string;
      dimensions: {
        height: number;
        width: number;
      };
    };
  };
}

export interface PostsProps {
  posts: PostData[];
}
