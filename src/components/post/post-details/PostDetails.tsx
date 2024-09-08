import { PostDetailsModel } from "../models/PostDetails";

const PostDetails: React.FC<{ postDetails: PostDetailsModel }> = ({
  postDetails,
}) => {
  const { text, images } = postDetails;
  return (
    <>
      <div className="flex flex-col w-full justify-between items-center gap-8 px-4">
        <div className="text-start w-full">{text}</div>
        <div className="grid auto-cols-fr grid-flow-col-dense gap-2 w-full justify-center">
          {images?.slice(0, 2)?.map((image) => (
            <div key={image} className="flex justify-center h-[48rem]">
              <img
                className="object-cover h-full"
                src={image}
                alt="post image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
