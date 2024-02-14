import { useContext, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BlogList from "./BlogList";
import SideBar from "./SideBar";
import { ThemeContext } from "../../context/ThemeContext";
import { useScrollToBottom } from "../../helpers/scrollFunctions";
import existingStyles from "./../Projects/Projects.module.scss";
import styles from "./Blogs.module.scss";
import { useScroll } from "../../context/ScrollContext";

function Blogs() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { scrollToBottom, setScrollToBottom } = useScroll();
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const isInitialRender = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const setVisible = () => {
    return window.innerWidth < 820 ? 3 : 4;
  };

  useEffect(() => {
    // Skip scrolling during initial render
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



  useScrollToBottom({
    scrollToBottom,
    setScrollToBottom,
    ref: containerRef,
  });




  return (
    <main className={theme} ref={containerRef}>
      <div className="background">
        <div className={`${styles.container} text`}>
          <h1
            ref={blogsHeadingRef}
            className={`${existingStyles.stackHeading1} text`}
          >
            {t("blog.title")}
          </h1>
          <h2 className={`${styles.heading2} text`} id="myBlog">
            {t("blog.subtitle")}
          </h2>
          <div className={styles.mainBlogContainer}>
            <section className={styles.sideBarSection}>
              <SideBar onCategoryClick={setSelectedCategory} />
            </section>
            <section className={styles.projectList}>
              <BlogList
                selectedCategory={selectedCategory}
                initialVisiblePosts={setVisible()}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
