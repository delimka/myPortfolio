// BlogList.tsx
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { ThemeContext } from "../../hooks/ThemeContext";
import { FETCH_STATUS } from "../../services/fetchStatus";
import styles from "./BlogList.module.scss";
import CardSkeleton from "./../CardSkeleton/CardSkeleton";
import useBlogData from "../../hooks/useBlogData.hook";

interface BlogListProps {
  selectedCategory: string | null;
  columns?: number;
  initialVisiblePosts?: number;
}

const BlogList: React.FC<BlogListProps> = ({
  selectedCategory,
  columns,
  initialVisiblePosts,
}) => {
  // const loadMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const { theme } = useContext(ThemeContext);

  const { allPosts, visiblePosts, fetchStatus, loadMorePosts } = useBlogData({
    initialCategory: selectedCategory || undefined,
    // loadMoreButtonRef,
    initialVisiblePosts,
  });

  return (
    <div className={styles.blogCardContainer}>
      {fetchStatus === FETCH_STATUS.LOADING && (
        <ul
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          className={`${styles.blogCardList} ${styles.modifiedBlogCardList}`}
        >
          <CardSkeleton />
        </ul>
      )}

      {fetchStatus === FETCH_STATUS.ERROR && <p>Error fetching data</p>}
      {fetchStatus === FETCH_STATUS.SUCCESS && (
        <>
          <ul
            className={styles.blogCardList}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {allPosts.slice(0, visiblePosts).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </ul>
          {allPosts.length > visiblePosts ? (
            <button
              className={`${styles.loadButton} ${styles[theme]}`}
              onClick={loadMorePosts}
            ></button>
          ) : (
            <button
              // ref={loadMoreButtonRef}
              style={{ marginTop: "30px" }}
            ></button>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;
