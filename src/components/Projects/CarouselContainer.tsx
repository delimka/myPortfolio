import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  altImage?: string;
  stack: string;
  link?: string;
}

interface CarouselContainerProps {
  projects: Project[];
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({ projects }) => {

  const responsiveConfig = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1335 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1335, min: 830 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 830, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out, opacity 300ms ease-in-out"
      transitionDuration={300}
      removeArrowOnDeviceType={["mobile"]}
      responsive={responsiveConfig}
      containerClass={styles.carouselContainer}
      itemClass={styles.item}
      sliderClass={styles.carouselTrack}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Carousel>
  );
};

export default CarouselContainer;
