import  {
  useState,
  useRef,
  useContext,
} from "react";
import SideBar from "../../components/Blog/SideBar";
import BlogList from "../../components/Blog/BlogList";
import { useScroll } from "../../context/ScrollContext";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./BlogPage.module.scss";
import { useScrollToBottom, useScrollToTop } from "../../helpers/scrollFunctions";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { scrollToBottom, setScrollToBottom } = useScroll();
  const { scrollToTop, setScrollToTop } = useScroll();
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const { theme } = useContext(ThemeContext);


  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setScrollToTop(true);
  };

  const getColumns = () => {
    return window.innerWidth < 1746 ? 2 : 3;
  };

  const changeVisiblePost = () => {
    return window.innerWidth < 1745 ? 4 : 6;
  };

  useScrollToBottom({
    scrollToBottom,
    setScrollToBottom,
    ref: blogsHeadingRef,
  });
  useScrollToTop({ scrollToTop, setScrollToTop, ref: blogsHeadingRef });

  return (
    <div className={theme}>
      <div className="background">
        <div
          className={`${styles[theme]} ${styles.blogPageContainer}`}
          ref={blogsHeadingRef}
        >
          <section className={styles.sideBarSection}>
            <SideBar onCategoryClick={handleCategoryClick} />
          </section>
          
          <section className={styles.listContainer}>
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
