import React, { useContext, useRef } from "react";
import styles from "./ProjectCard.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string;
  altImage?: string;
  git_link?: string;
  web_link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  stack,
  altImage,
  web_link,
  git_link,
}) => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={`${styles.cardContainer} ${styles[theme]}`}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
    >
      <figure className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          alt={title}
          aria-label={altImage}
        />
      </figure>
      <div className={styles.cardContentContainer}>
        <article className={styles.cardContent}>
          <div className={styles.headingContainer}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
        <div className={styles.stackContainer}>
          <p className={styles.stack}>
            <strong> {t("projects.techUsed")}</strong>
            {stack}
          </p>
        </div>
        <div className={styles.linkContainer}>
          <button className={`${styles.linkButton} ${styles[theme]}`}>
            <MdPreview size="17px" />
            <a
              className={`${styles.link} `}
              href={web_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="false"
            >
              {t("projects.livePreview")}
            </a>
          </button>
          <button className={`${styles.linkButton} ${styles[theme]}`}>
            <FaGithub size="17px" />
            <a
              className={styles.link}
              href={git_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden="false"
            >
              {t("projects.viewCode")}
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
