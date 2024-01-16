import React, { useContext } from "react";
import { PostCard } from "./../../interfaces/BlogCardInterface";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./../Projects/ProjectCard.module.scss";
import { Link } from "react-router-dom";

interface BlogListItemProps {
  post: PostCard;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={`/blog/${post.slug}`} className={`${styles.cardContainer} ${styles[theme]}`}>
      <figure className={styles.imageContainer}>
        {post.coverPhoto && (
          <img
            className={styles.image}
            src={post.coverPhoto.url}
            alt="Cover photo of the article"
          />
        )}
      </figure>
      <div className={styles.cardContentContainer}>
        <article className={styles.cardContent}>
          <div className={styles.headingContainer}>
            <h3 className={styles.title}>{post.title}</h3>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{post.description}</p>
          </div>
        </article>
        <div className={styles.datePublishedContainer}>
          <p className={styles.datePublished}>{post.datePublished}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;
