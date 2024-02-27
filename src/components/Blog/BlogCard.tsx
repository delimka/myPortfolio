// BlogListItem.jsx

import React, { useContext, useRef, useState } from "react";
import { PostCard } from "./../../interfaces/BlogCardInterface";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./../Projects/ProjectCard.module.scss";
// import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogListItemProps {
  post: PostCard;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  const { theme } = useContext(ThemeContext);
  const [hasScrolled, setHasScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const applyEffectOnce = () => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }
  };

  return (
    <li>
      <Link to={`/blog?post=${post.slug}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onViewportEnter={applyEffectOnce}
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
                />
                <p>{post?.author?.name}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </li>
  );
};

export default BlogListItem;
