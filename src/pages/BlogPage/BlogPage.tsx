import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/Blog/SideBar";
import BlogList from "../../components/Blog/BlogList";
import { useScroll } from "../../hooks/ScrollContext";
import { ThemeContext } from "../../hooks/ThemeContext";
import styles from "./BlogPage.module.scss";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { scrollToBottom, setScrollToBottom } = useScroll();
  const { scrollToTop, setScrollToTop } = useScroll();
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setScrollToTop(true);
    setSelectedCategory(category);
  };

  const getColumns = () => {
    return window.innerWidth < 1740 ? 2 : 3;
  };

  const changeVisiblePost = () => {
    return window.innerWidth < 1740 ? 4 : 6;
  };

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

  useLayoutEffect(() => {
    blogsHeadingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    navigate("/blog");
  }, [scrollToTop]);

  return (
    <div className={theme}>
      <div className="background">
        <div className={`${styles[theme]} ${styles.blogPageContainer}`}  ref={blogsHeadingRef}>
          <SideBar onCategoryClick={handleCategoryClick} />
          <section  className={styles.listContainer}>
            <BlogList
              selectedCategory={selectedCategory}
              columns={getColumns()}
              initialVisiblePosts={changeVisiblePost()}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
