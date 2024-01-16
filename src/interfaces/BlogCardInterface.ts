export interface Author {
  name: string;
  avatar: {
    url: string;
  };
}

export interface CoverPhoto {
  url: string;
}

export interface Category {
  name: string;
}

export interface PostCard {
  id: string;
  title: string;
  datePublished: string;
  slug: string;
  author: Author;
  description: string;
  coverPhoto?: CoverPhoto;
  category: {
    name: string;
  }[];
}

export interface Post extends PostCard {
  content: {
    html: React.ReactNode;
  };
}
