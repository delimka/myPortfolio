import "react-multi-carousel/lib/styles.css";
import image1 from "./../../assets/projects/figr_scr.webp";
import image2 from "./../../assets/projects/dpinflatables_scr.webp";
import image3 from "./../../assets/projects/myportfolio_scr.webp";
import image4 from "./../../assets/projects/firstPortfolio_scr.webp";

import CarouselContainer from "./CarouselContainer";
import { useTranslation } from "react-i18next";

const FrontendProjects = () => {
  const { t } = useTranslation();

  const frontendProjects = [
    {
      id: 1,
      title: t("projects.figr.name"),
      description: t("projects.figr.description"),
      image: image1,
      altImage: t("projects.figr.imgDescription"),
      stack: " React, Typescript, Tailwind, SCSS",
      web_link: "https://figr-delima.web.app/#!",
      git_link: "https://github.com/delimka/Figr",
    },
    {
      id: 2,
      title: t("projects.myPortfolio.name"),
      description: t("projects.myPortfolio.description"),
      image: image3,
      altImage: t("projects.myPortfolio.imgDescription"),
      stack: " React, Typescript, GraphQl, SCSS",
      web_link: "https://myportfolio-568b3.web.app/",
      git_link: "https://github.com/delimka/myPortfolio/tree/portfolio_VB",
    },
    {
      id: 3,
      title: t("projects.dpInflatables.name"),
      description: t("projects.dpInflatables.description"),
      image: image2,
      altImage: t("projects.dpInflatables.imgDescription"),
      stack: " React, Typescript, Tailwind, SCSS",
      web_link: "https://dpinflatables-e6c0e.web.app/",
      git_link: "https://github.com/delimka/Inflatables",
    },

    {
      id: 4,
      title: t("projects.firstPortfolio.name"),
      description: t("projects.firstPortfolio.description"),
      image: image4,
      altImage: t("projects.firstPortfolio.imgDescription"),
      stack: " Javascript, CSS, HTML",
      web_link: "https://delimka.github.io/",
      git_link: "https://github.com/delimka/delimka.github.io",
    },
  ];

  return <CarouselContainer projects={frontendProjects} />;
};

export default FrontendProjects;
