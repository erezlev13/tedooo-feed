interface Post {
  id: string;
  userId: string;
  shopId: string;
  premium: boolean;
  username: string;
  shopName: string;
  avatar: string;
  date: string;
  text: string;
  images: string[];
  likes: number;
  comments: number;
  didLike: boolean;
}

export type PostModel = Post;
