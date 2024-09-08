import UserDetails from "./user-details/UserDetails";
import PostDetails from "./post-details/PostDetails";
import { PostModel } from "./models/Post";
import FeedbackDetails from "./feedback/FeedbackDetails";
import FeedbackActions from "./feedback/FeedbackActions";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { sendPostImpression } from "../../lib/tedooo-api/feedService";

const Post: React.FC<{
  id: string;
  post: PostModel;
  onPostViewed: (id: string) => void;
}> = ({ id, post, onPostViewed }) => {
  const postRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(postRef);
  const [totalLikes, setTotalLikes] = useState<number>(
    post?.feedback?.totalLikes ?? 0
  );
  const feedbackDetails = {
    ...post.feedback,
    totalLikes: totalLikes,
  };

  useEffect(() => {
    if (isVisible) {
      sendImpression();
      onPostViewed(id);
    }
  }, [isVisible]);

  async function sendImpression() {
    await sendPostImpression(id);
  }

  function handleLiked(liked: boolean) {
    setTotalLikes((prev) => (liked ? prev + 1 : prev - 1));
  }

  return (
    <>
      <div
        ref={postRef}
        className="flex flex-col justify-between gap-8 bg-white shadow-md rounded-[13px] text-black w-[90%] p-4"
      >
        <UserDetails userDetails={post.userDetails} />
        <PostDetails postDetails={post.postDetails} />
        <FeedbackDetails feedbackDetails={feedbackDetails} />
        <FeedbackActions
          didLiked={post.feedback.didLiked}
          onLiked={handleLiked}
        />
      </div>
    </>
  );
};

export default Post;
