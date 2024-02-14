import { useState, useRef, useContext, useEffect } from "react";
import SideBar from "../../components/Blog/SideBar";
import BlogList from "../../components/Blog/BlogList";
import { useScroll } from "../../context/ScrollContext";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./BlogPage.module.scss";
import {
  useScrollToBottom,
  useScrollToTop,
} from "../../helpers/scrollFunctions";
import SearchInput from "../../components/SerchInput/SearchInput";
import BlogPost from "./BlogPost";
import useDebounce from "../../hooks/useDebounce";
import {  useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const { scrollToBottom, setScrollToBottom } = useScroll();
  const { scrollToTop, setScrollToTop } = useScroll();
  const blogsHeadingRef = useRef<HTMLHeadingElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const { theme } = useContext(ThemeContext);

  const cardSlug = searchParams.get("post");
  const categoryParam = searchParams.get("category");

  
  const debounceSearchValue = useDebounce(searchValue, 500);
 
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

  useEffect(() => {
    setScrollToTop(true);
  }, [searchParams.get("post"), searchParams.get("category")]);

  return (
    <div className={theme}>
      <div className="background">
        <div
          className={`${styles[theme]} ${styles.blogPageContainer}`}
          ref={blogsHeadingRef}
        >
          <div className={styles.searchInputContainer}>
            <SearchInput
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              className={styles.searchInput}
              hidden={cardSlug}
            />
          </div>
          <section className={styles.sideBarSection}>
            <SideBar />
          </section>

          <section
            className={`${styles.blogContentSection} ${
              cardSlug ? styles.hideOverflow : ""
            }`}
          >
            {cardSlug ? (
              <BlogPost slug={cardSlug} />
            ) : (
              <BlogList
                searchTerm={debounceSearchValue}
                selectedCategory={categoryParam}
                columns={getColumns()}
                initialVisiblePosts={changeVisiblePost()}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
