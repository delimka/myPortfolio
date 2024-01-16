import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";

const FigmaProjects = () => {
  // Fetch or provide data for Figma projects
  const figmaProjects = [
    {
      id: 1,
      title: "Figma Project 1",
      description:
        "This project is a front-end implementation for a website specializing in metalworks and crane construction.",
      image: "",
      stack:"React, Typescript, Firebase, SCSS",

    },
    {
      id: 2,
      title: "Figma Project 2",
      description: 
      "This project is a front-end implementation for a website specializing in metalworks and crane construction.",
      image: "",
      stack:"React, Typescript, Firebase, SCSS",

    },
  ];

  return (
    <div className={`${styles.projectList}`}>
      {figmaProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default FigmaProjects;
