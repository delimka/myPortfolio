import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPost } from "../../../api/blogs/apiService";
import { Post } from "../../../interfaces/BlogCardInterface";
import SideBar from "../SideBar";
import { FETCH_STATUS } from "./../../../api/blogs/fetchStatus";
import BlogPostSkeleton from "./BlogPostSkeleton/BlogPostSkeleton";
import styles from "./BlogPost.module.scss";
import { useScroll } from "../../../context/ScrollContext";

interface BlogPostParams {
  slug: string;
  [key: string]: string | undefined;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<BlogPostParams>();
  const [post, setPost] = useState<Post | null>(null);
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const [fetchStatus, setFetchStatus] = useState<string>(FETCH_STATUS.IDLE);
  const { setScrollToTop } = useScroll(); // Use the useScroll hook
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setFetchStatus(FETCH_STATUS.LOADING);
        if (slug) {
          const delayPromise = new Promise((resolve) => {
            setTimeout(resolve, 700);
          });
          await delayPromise;

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

  const handleCategoryClick = () => {
    console.log("Category clicked");
    navigate("/blog");
  };

  useEffect(() => {
    setScrollToTop(true);
  }, [setScrollToTop]);


  return (
    <div className={styles.blogPostContainer} ref={blogsHeadingRef}>
      <SideBar onCategoryClick={handleCategoryClick} />
      <article className={styles.postContainer}>
        {fetchStatus === FETCH_STATUS.LOADING && <BlogPostSkeleton />}
        {fetchStatus === FETCH_STATUS.ERROR && (
          <div>Error loading blog post</div>
        )}
        {fetchStatus === FETCH_STATUS.SUCCESS && (
          <>
            <h1>{post?.title}</h1>
            <p>{post?.datePublished}</p>
            <div
              dangerouslySetInnerHTML={{ __html: post?.content.html || "" }}
            />
          </>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
