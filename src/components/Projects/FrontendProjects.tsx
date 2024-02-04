import "react-multi-carousel/lib/styles.css";
import image1 from "./../../assets/projects/figr_scr.webp";
import image2 from "./../../assets/projects/dpinflatables_scr.webp";
import CarouselContainer from "./CarouselContainer";
import { useTranslation } from "react-i18next";

const FrontendProjects = () => {
  const {t} = useTranslation();

  const frontendProjects = [
    {
      id: 1,
      title: t('projects.figr.name'),
      description:
      t('projects.figr.description'),
      image: image1,
      altImage: t('projects.figr.imgDescription'),
      stack: "React, Typescript, Firebase, SCSS",
      web_link: "https://figr-delima.web.app/#!",
      git_link: "https://figr-delima.web.app/#!",

    },
    {
      id: 2,
      title: t('projects.dpInflatables.name'),
      description:
      t('projects.dpInflatables.description'),
      image: image2,
      altImage: t('projects.dpInflatables.imgDescription'),
      stack: "React, Typescript, Firebase, SCSS",
      web_link: "https://dpinflatables-e6c0e.web.app/",
      git_link: "https://figr-delima.web.app/#!",

    },
    {
      id: 3,
      title: t('projects.portfolio.name'),
      description:
      t('projects.myPortfolio.description'),
      image: image2,
      altImage: t('projects.myPortfolio.imgDescription'),
      stack: "React, Typescript, Firebase, SCSS",
      web_link: "https://dpinflatables-e6c0e.web.app/",
      git_link: "https://figr-delima.web.app/#!",

    },
    {
      id: 4,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      web_link: "https://dpinflatables-e6c0e.web.app/",
    },
    {
      id: 5,
      title: "Project 2",
      description:
        "This project is a front-end implementation for a website specializing ",
      image: image2,
      stack: "React, Typescript, Firebase, SCSS",
      web_link: "https://dpinflatables-e6c0e.web.app/",
      git_link: "https://figr-delima.web.app/#!",

    },
  ];

 
  return <CarouselContainer projects={frontendProjects} />;

};

export default FrontendProjects;
