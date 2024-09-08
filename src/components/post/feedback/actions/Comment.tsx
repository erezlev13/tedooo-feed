import { useState } from "react";
import { BiComment } from "react-icons/bi";

const Comment: React.FC<{ onCommentClicked: () => void }> = ({
  onCommentClicked,
}) => {
  const [commented, setCommented] = useState<boolean>(false);

  function handleCommentClicked() {
    setCommented((prev) => !prev);
    onCommentClicked();
  }

  return (
    <>
      <button
        className={`flex justify-between gap-2 items-center ${
          commented ? "text-blue" : "text-black"
        }`}
        onClick={handleCommentClicked}
      >
        <BiComment />
        <div>Comment</div>
      </button>
    </>
  );
};

export default Comment;
