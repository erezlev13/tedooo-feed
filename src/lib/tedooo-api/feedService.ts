import httpService from "./http/httpService";
import { FeedModel } from "./models/Feed";
import { PostModel } from "./models/Post";

export const getFeed = async (skip: number): Promise<FeedModel> => {
  let feed: FeedModel = { hasMore: false, data: [] };
  try {
    const response: any = (await httpService.get(
      `hw/feed.json?skip=${skip}`
    )) as PostModel[];
    if (response.status === 200) {
      feed = response.data;
    }
  } catch (err) {
    // monitor error
  }

  return feed;
};

export const sendPostImpression = async (postId: string): Promise<boolean> => {
  try {
    const response: any = await httpService.get(`?itemId=${postId}`);
    return response.status === 200;
  } catch (err) {
    // monitor error
    return false;
  }
};
