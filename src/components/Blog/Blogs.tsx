import { useContext, useState, useRef, useEffect } from "react";
import BlogList from "./BlogList";
import SideBar from "./SideBar";
import { ThemeContext } from "../../hooks/ThemeContext";
import existingStyles from "./../Projects/Projects.module.scss";
import styles from "./Blogs.module.scss";
import { useScroll } from "../../hooks/ScrollContext";


function Blogs() {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const isInitialRender = useRef(true);
  const { scrollToBottom, setScrollToBottom} = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

const setVisible = () =>{
  return window.innerWidth < 820 ? 3 : 4;
}
  
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


  useEffect(() => {
    if (scrollToBottom) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom, setScrollToBottom]);


  return (
    <main id="myBlog" className={theme} ref={containerRef}>
      <div className="background">
        <div className={`${styles.container} text`}>
          <h1
            ref={blogsHeadingRef}
            className={`${existingStyles.stackHeading1} text`}
          >
            My Blog
          </h1>
          <h2 className={`${styles.heading2} text`}>
            Personal blog for learning purpose
          </h2>
          <div className={styles.mainBlogContainer}>
            <section className={styles.sideBarSection}>
              <SideBar onCategoryClick={setSelectedCategory} />
            </section>
            <section className={styles.projectList}>
              <BlogList selectedCategory={selectedCategory}  initialVisiblePosts={setVisible()}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
