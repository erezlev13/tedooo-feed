import { FeedbackDetailsModel } from "../models/FeedbackDetails";
import { BiLike } from "react-icons/bi";

const FeedbackDetails: React.FC<{ feedbackDetails: FeedbackDetailsModel }> = ({
  feedbackDetails,
}) => {
  const { totalLikes, totalComments } = feedbackDetails;
  return (
    <>
      <div className="flex flex-row w-full justify-between px-4">
        <div className="flex justify-between gap-1 text-[12px] text-light-gray items-center">
          <BiLike className="w-[18px] h-[18px] border-[1px] border-black rounded-[30px]" />
          <div>{totalLikes} Likes</div>
        </div>
        <div className="text-[12px] text-light-gray">
          {totalComments} Comments
        </div>
      </div>
    </>
  );
};

export default FeedbackDetails;
