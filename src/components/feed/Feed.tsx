import { useQuery } from "react-query";
import { getFeed } from "../../lib/tedooo-api/feedService";
import Post from "../post/Post";
import { PostModel, mapApiModelToModel } from "../post/models/Post";
import { useCallback, useState } from "react";

const Feed: React.FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [posts, setPosts] = useState<PostModel[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["get-feed", skip],
    queryFn: async () => await getFeed(skip),
    onSuccess: (data) => {
      const newPosts: PostModel[] =
        data?.data.map((post) => mapApiModelToModel(post)) ?? [];
      setPosts([...posts, ...newPosts]);
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const hasMore: boolean = data?.hasMore ?? false;

  const handlePostViewed = useCallback(
    (postId: string) => {
      if (data && postId === posts[posts.length - 1].id) {
        if (hasMore) {
          setSkip((prev) => prev + 6);
        }
      }
    },
    [data]
  );

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col justify-between items-center gap-[8rem] w-full">
          {posts?.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              post={post}
              onPostViewed={handlePostViewed}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Feed;
