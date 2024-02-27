import React, { useContext} from "react";
import BlogCard from "./BlogCard";
import { ThemeContext } from "../../context/ThemeContext";
import { FETCH_STATUS } from "../../services/fetchStatus";
import styles from "./BlogList.module.scss";
import CardSkeleton from "./../CardSkeleton/CardSkeleton";
import useBlogData from "../../hooks/useFetchBlogList";

interface BlogListProps {
  selectedCategory: string | null | undefined;
  columns?: number;
  initialVisiblePosts?: number;
  searchTerm?: string;
}

const BlogList: React.FC<BlogListProps> = ({
  selectedCategory,
  columns,
  initialVisiblePosts,
  searchTerm,
}) => {
  const { theme } = useContext(ThemeContext);


  const { allPosts, visiblePosts, fetchStatus, loadMorePosts } = useBlogData({
    category: selectedCategory || undefined,
    initialVisiblePosts,
    searchTerm,
  });



  return (
    <div className={styles.blogCardContainer}>
      {fetchStatus === FETCH_STATUS.LOADING && (
        <ul
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          className={styles.blogCardList}
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
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}
          </ul>
          {allPosts.length > visiblePosts ? (
            <button
              className={`${styles.loadButton} ${styles[theme]}`}
              onClick={loadMorePosts}
              aria-label="Click the button to load more posts"
            ></button>
          ) : (
            <button style={{ marginTop: "30px" }}></button>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;
