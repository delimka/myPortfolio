import "react-multi-carousel/lib/styles.css";
import image1 from "./../../assets/projects/figr_scr.webp";
import image2 from "./../../assets/projects/dpinflatables_scr.webp";
import CarouselContainer from "./CarouselContainer";

const FrontendProjects = () => {
  // Fetch or provide data for Frontend projects
  const frontendProjects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "This project is a front-end implementation for a website specializing in metalworks and crane construction.",
      image: image1,
      stack: "React, Typescript, Firebase, SCSS",
      link: "https://figr-delima.web.app/#!",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      link: "https://dpinflatables-e6c0e.web.app/",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      link: "https://dpinflatables-e6c0e.web.app/",
    },
    {
      id: 3,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      link: "https://dpinflatables-e6c0e.web.app/",
    },
    {
      id: 4,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      link: "https://dpinflatables-e6c0e.web.app/",
    },
  ];

 
  return <CarouselContainer projects={frontendProjects} />;

};

export default FrontendProjects;
