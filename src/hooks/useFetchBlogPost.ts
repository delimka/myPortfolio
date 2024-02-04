import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../services/apiService";
import { Post } from "../interfaces/BlogCardInterface";
import { FETCH_STATUS } from "../services/fetchStatus";
import { delayPromise } from "../helpers/fetchFunctions";

interface BlogPostParams {
  slug: string;
  [key: string]: string | undefined;
}

const useFetchBlogPost = () => {
  const [fetchStatus, setFetchStatus] = useState<string>(FETCH_STATUS.IDLE);
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams<BlogPostParams>();
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setFetchStatus(FETCH_STATUS.LOADING);

        if (slug) {
          await delayPromise(700);
          const fetchedPost = await getBlogPost(slug);
          setPost(fetchedPost);
          setFetchStatus(FETCH_STATUS.SUCCESS);
        } else {
          console.error("Error: Slug is undefined");
          setFetchStatus(FETCH_STATUS.ERROR);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setFetchStatus(FETCH_STATUS.ERROR);
      }
    };

    fetchPost();
  }, [slug]);

  return { fetchStatus, post };
};

export default useFetchBlogPost;
