import { useState } from "react";
import { GrLike } from "react-icons/gr";

const Like: React.FC<{
  didLiked: boolean;
  onLikeClicked: (liked: boolean) => void;
}> = ({ didLiked, onLikeClicked }) => {
  const [liked, setLiked] = useState<boolean>(didLiked);

  function handleLikedClicked() {
    setLiked((prev) => !prev);
    onLikeClicked(!liked);
  }

  return (
    <>
      <button
        className={`flex justify-between items-center gap-2 ${
          liked ? "text-sky-400" : "text-black"
        }`}
        onClick={handleLikedClicked}
      >
        <GrLike />
        <div>Like</div>
      </button>
    </>
  );
};

export default Like;
