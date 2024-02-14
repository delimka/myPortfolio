import { useEffect, useState } from "react";
import { getPosts } from "../services/apiService";
import { FETCH_STATUS } from "../services/fetchStatus";
import { PostCard } from "../interfaces/BlogCardInterface";
import { useScroll } from "../context/ScrollContext";
import { delayPromise } from "../helpers/fetchFunctions";

interface UseBlogDataProps {
  category?: string;
  searchTerm?: string;
  initialVisiblePosts?: number;
  shouldSendSearchRequest?: boolean;
}

interface UseBlogDataResult {
  allPosts: PostCard[];
  visiblePosts: number;
  fetchStatus: (typeof FETCH_STATUS)[keyof typeof FETCH_STATUS];
  loadMorePosts: () => Promise<void>;
}

const useBlogData = ({
  category,
  searchTerm,
  initialVisiblePosts = 4,
}: UseBlogDataProps): UseBlogDataResult => {
  const [allPosts, setAllPosts] = useState<PostCard[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(initialVisiblePosts);
  const [fetchStatus, setFetchStatus] = useState<string>(FETCH_STATUS.IDLE);
  const [prevSearchTerm, setPrevSearchTerm] = useState<string | null>(null);
  const [prevCategory, setPrevCategory] = useState<string | null>(null);

  const { setScrollToBottom } = useScroll();

  const fetchData = async (
    fetchCount: number,
    selectedCategory: string | undefined,
    searchTerm?: string | null
  ) => {
    setFetchStatus(FETCH_STATUS.LOADING);
    console.log("searchtherm fetchData ", searchTerm);

    await delayPromise(700);

    try {
      const data: PostCard[] = await getPosts(
        fetchCount,
        0,
        selectedCategory,
        searchTerm || undefined
      );
      console.log(" searchterm fetcData getPosts ", searchTerm);

      setAllPosts(data);
      setVisiblePosts(initialVisiblePosts);
      setFetchStatus(FETCH_STATUS.SUCCESS);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchStatus(FETCH_STATUS.ERROR);
    }
  };

  useEffect(() => {
    if (searchTerm !== prevSearchTerm) {
      fetchData(8, category, searchTerm);
      setPrevSearchTerm(searchTerm || null);
    } else if (category !== prevCategory) {

      fetchData(8, category);
      setPrevCategory(category || null);
    }
  }, [category, searchTerm]);

  const loadMorePosts = async () => {
    try {
      if (allPosts.length === 0 || allPosts.length % 8 !== 0) {
        setVisiblePosts((prev) => prev + 4);
        setScrollToBottom(true);
      } else {
        const additionalPosts = await getPosts(
          8,
          allPosts.length,
          category || "programming",
          searchTerm
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
