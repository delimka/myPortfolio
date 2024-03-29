import React, { useEffect, useContext, useRef, useState } from "react";
import { FETCH_STATUS } from "../../services/fetchStatus";
import { ThemeContext } from "../../context/ThemeContext";
import { FaRegEye, FaCalendar } from "react-icons/fa6";
import BlogPostSkeleton from "./../../components/BlogPostSkeleton/BlogPostSkeleton";
import styles from "./BlogPost.module.scss";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.min.css";
import useFetchBlogPost from "../../hooks/useFetchBlogPost";
import ReactGA from "react-ga";

const BlogPost: React.FC<{ slug: string }> = ({ slug }) => {
  const [views, setViews] = useState<number>(0);
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const { theme } = useContext(ThemeContext);

  
  const { fetchStatus, post } = useFetchBlogPost(slug);

  useEffect(() => {
    if (post) {
      ReactGA.pageview(`/blog/${post.slug}`);
      const fakeViews = Math.floor(Math.random() * 100) + 1;
      setViews(fakeViews);
    }
    
    Prism.highlightAll();
  }, [post]);


  return (
    <div className={theme} ref={blogsHeadingRef}>
      <div className="background">
        <div className={`${styles[theme]} ${styles.blogPostContainer}`}>
            <article className={`${styles[theme]} ${styles.postContainer}`}>
              {fetchStatus === FETCH_STATUS.LOADING && <BlogPostSkeleton />}
              {fetchStatus === FETCH_STATUS.ERROR && (
                <div>Error loading blog post</div>
              )}
              {fetchStatus === FETCH_STATUS.SUCCESS && (
                <>
                  {post?.coverPhoto && (
                    <img
                      className={styles.coverPhoto}
                      src={post.coverPhoto.url}
                      alt="Cover photo of the article"
                    />
                  )}
                  <h1>{post?.title}</h1>
                  <div className={styles.blogInfo}>
                    <div className={styles.viewsContainer}>
                      <FaRegEye />
                      <p>{views}</p>
                    </div>
                    <div className={styles.datePublishedContainer}>
                      <FaCalendar />
                      <p className={styles.datePublished}>
                        {post?.datePublished}
                      </p>
                    </div>
                    <div className={styles.authorContainer}>
                      <img
                        className={styles.authorLogo}
                        src={post?.author.avatar.url}
                      />
                      <p className={styles.authorName}>{post?.author.name}</p>
                    </div>
                  </div>
                  <div
                    className={styles.htmlContent}
                    dangerouslySetInnerHTML={{
                      __html: post?.content.html || "",
                    }}
                  />
                </>
              )}
            </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
