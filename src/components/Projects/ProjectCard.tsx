import React, { useContext } from "react";
import styles from "./ProjectCard.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { MdPreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  stack,
  link
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.cardContainer} ${styles[theme]}`}>
      <figure className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
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
            <strong>Tech used: </strong>
            {stack}
          </p>
        </div>
        <div className={styles.linkContainer}>
          <button className={`${styles.linkButton} ${styles[theme]}`}>
            <MdPreview size="17px" />
            <a className={`${styles.link} `} href={link} target="_blank" rel="noopener noreferrer">Live preview</a>
          </button>
          <button className={`${styles.linkButton} ${styles[theme]}`}>
            <FaGithub size="17px" />
            <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">View code</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
