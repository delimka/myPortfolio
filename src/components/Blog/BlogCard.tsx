import React, { useContext, useRef, useState } from "react";
import { PostCard } from "./../../interfaces/BlogCardInterface";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./../Projects/ProjectCard.module.scss";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import { motion } from "framer-motion";
interface BlogListItemProps {
  post: PostCard;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const [hasScrolled, setHasScrolled] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const applyEffectOnce = () => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }
  };

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0.5, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onViewportEnter={applyEffectOnce}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={`${styles.cardContainer} ${styles[theme]}`}
      >
        <figure className={styles.imageContainer}>
          {post.coverPhoto && (
            <img
              loading="lazy"
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
          <div className={styles.blogDataContainer}>
            <div className={styles.datePublishedContainer}>
              <FaCalendar />
              <p className={styles.datePublished}>{post.datePublished}</p>
            </div>
            <div className={styles.authorContainer}>
              <img
                className={styles.authorLogo}
                src={post?.author?.avatar.url}
                alt="Author's portarait"
                loading="lazy"
              />
              <p>{post?.author?.name}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default BlogListItem;
