import React, { useEffect, useState, useContext, useRef  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPost } from "../../services/apiService";
import { Post } from  "./../../interfaces/BlogCardInterface";
import SideBar from "../../components/Blog/SideBar";
import { FETCH_STATUS} from "../../services/fetchStatus";
import BlogPostSkeleton from "./../../components/BlogPostSkeleton/BlogPostSkeleton";
import Prism from "prismjs";
import "./../../../node_modules/prismjs/components/prism-typescript";
import { ThemeContext } from "../../hooks/ThemeContext";
import styles from "./BlogPost.module.scss";

interface BlogPostParams {
  slug: string;
  [key: string]: string | undefined;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<BlogPostParams>();
  const [post, setPost] = useState<Post | null>(null);
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const [fetchStatus, setFetchStatus] = useState<string>(FETCH_STATUS.IDLE);
  const { theme } = useContext(ThemeContext);
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
    if (blogsHeadingRef.current) {
      blogsHeadingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    Prism.highlightAll();
  }, [post]);


  return (
    <div className={theme} ref={blogsHeadingRef}>
    <div className='background'>
    <div className= {`${styles[theme]} ${styles.blogPostContainer}`} >
      <SideBar onCategoryClick={handleCategoryClick} />
      <article className={`${styles[theme]} ${styles.postContainer}`} >
        {fetchStatus === FETCH_STATUS.LOADING && <BlogPostSkeleton />}
        {fetchStatus === FETCH_STATUS.ERROR && (
          <div>Error loading blog post</div>
        )}
        {fetchStatus === FETCH_STATUS.SUCCESS && (
          <>
            <h1>{post?.title}</h1>
            <div className={styles.blogInfo}>
              <p className={styles.datePublished}>
                Date published:<strong> {post?.datePublished} </strong>
              </p>
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
              dangerouslySetInnerHTML={{ __html: post?.content.html || "" }}
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
