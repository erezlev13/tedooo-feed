import { QueryClient, QueryClientProvider } from "react-query";
import Feed from "../components/feed/Feed";

const TedoooFeed: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Feed />
    </QueryClientProvider>
  );
};

export default TedoooFeed;
