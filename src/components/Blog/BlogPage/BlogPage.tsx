import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import BlogList from "../BlogList";
import styles from "./BlogPage.module.scss";
import { useScroll } from "../../../context/ScrollContext";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { scrollToBottom, setScrollToBottom} = useScroll();
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const isInitialRender = useRef(true);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate("/blog");
    setSelectedCategory(category);
  };

  const getColumns = () => {
    return window.innerWidth < 1740 ? 2 : 3;
  };

  const changeVisiblePost = () => {
    return window.innerWidth < 1740 ? 4 : 6;
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (blogsHeadingRef.current) {
      blogsHeadingRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (scrollToBottom) {
     blogsHeadingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom, setScrollToBottom]);
  
  return (
    <div className={`${styles.blogPageContainer}`} ref={blogsHeadingRef}>
      <SideBar onCategoryClick={handleCategoryClick} />
      <section className={styles.listContainer}>
        <BlogList
          selectedCategory={selectedCategory}
          columns={getColumns()}
          initialVisiblePosts={changeVisiblePost()}
        />
      </section>
    </div>
  );
};

export default BlogPage;
