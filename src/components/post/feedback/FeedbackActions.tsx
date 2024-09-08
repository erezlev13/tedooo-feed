import Like from "./actions/Like";
import Comment from "./actions/Comment";

const FeedbackDetails: React.FC<{ didLiked: boolean; onLiked: (liked: boolean) => void }> = ({
  didLiked,
  onLiked,
}) => {
  function handleLikeClicked(liked: boolean) {
    onLiked(liked);
  }
  return (
    <>
      <div className="flex flex-row w-full justify-evenly gap-2 px-4 border-0">
        <Like didLiked={didLiked} onLikeClicked={handleLikeClicked} />
        <Comment onCommentClicked={() => {}} />
      </div>
    </>
  );
};

export default FeedbackDetails;
