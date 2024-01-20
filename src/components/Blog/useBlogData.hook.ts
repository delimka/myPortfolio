// useBlogData.ts
import { useEffect, useState } from "react";
import { getPosts } from "../../api/blogs/apiService";
import { FETCH_STATUS } from "../../api/blogs/fetchStatus";
import { PostCard } from "../../interfaces/BlogCardInterface";
import { useScroll } from "../../context/ScrollContext";

interface UseBlogDataProps {
  initialCategory?: string;
  // loadMoreButtonRef: React.RefObject<HTMLButtonElement>;
  initialVisiblePosts?: number;
}

interface UseBlogDataResult {
  allPosts: PostCard[];
  visiblePosts: number;
  fetchStatus: (typeof FETCH_STATUS)[keyof typeof FETCH_STATUS];
  loadMorePosts: () => Promise<void>;
}

const useBlogData = ({
  initialCategory,
  initialVisiblePosts = 4,
}: UseBlogDataProps): UseBlogDataResult => {
  const [allPosts, setAllPosts] = useState<PostCard[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(initialVisiblePosts);
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.IDLE);
  const { setScrollToBottom } = useScroll();

  const fetchData = async (
    fetchCount: number,
    selectedCategory: string | undefined
  ) => {
    setFetchStatus(FETCH_STATUS.LOADING);

    const delayPromise = new Promise((resolve) => {
      setTimeout(resolve, 700);
    });
    await delayPromise;

    try {
      const data = await getPosts(
        fetchCount,
        0,
        selectedCategory || "programming"
      );
      setAllPosts(data);
      setVisiblePosts(initialVisiblePosts);
      setFetchStatus(FETCH_STATUS.SUCCESS);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchStatus(FETCH_STATUS.ERROR);
    }
  };

  useEffect(() => {
    fetchData(8, initialCategory);
  }, [initialCategory]);

  const loadMorePosts = async () => {
    try {
      if (allPosts.length === 0 || allPosts.length % 8 !== 0) {
        setVisiblePosts((prev) => prev + 4);
        setScrollToBottom(true);
      } else {
        const additionalPosts = await getPosts(
          8,
          allPosts.length,
          initialCategory || "programming"
        );
        if (additionalPosts.length > 0) {
          setAllPosts((prev) => [...prev, ...additionalPosts]);
          setVisiblePosts((prev) => prev + 4);
          setScrollToBottom(true);
        }
      }
    } catch (error) {
      console.error("Error fetching additional posts:", error);
    }
  };

  return {
    allPosts,
    visiblePosts,
    fetchStatus,
    loadMorePosts,
  };
};

export default useBlogData;
