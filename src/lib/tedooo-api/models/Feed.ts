import { PostModel } from "./Post";

interface Feed {
    hasMore: boolean;
    data: PostModel[];
}

export type FeedModel = Feed;