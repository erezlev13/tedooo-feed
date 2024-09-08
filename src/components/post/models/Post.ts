import { UserDetailsModel } from "./UserDetails";
import { PostDetailsModel } from "./PostDetails";
import { FeedbackDetailsModel } from "./FeedbackDetails";
import { PostModel as PostModelApi } from "../../../lib/tedooo-api/models/Post";

interface Post {
  id: string;
  userDetails: UserDetailsModel;
  postDetails: PostDetailsModel;
  feedback: FeedbackDetailsModel;
}

export type PostModel = Post;

export function mapApiModelToModel(post: PostModelApi): PostModel {
  return {
    id: post.id,
    userDetails: {
      username: post.username,
      shopName: post.shopName,
      avatarSrc: post.avatar,
      postedAt: post.date,
    },
    postDetails: {
      text: post.text,
      images: post.images,
    },
    feedback: {
      totalLikes: post.likes,
      totalComments: post.comments,
      didLiked: post.didLike,
    },
  };
}
