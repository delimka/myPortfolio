import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import { FaRegSun, FaCloudMoon, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import styles from "./NavBar.module.scss";
import "./../../App.scss";
import { useScroll } from "../../context/ScrollContext";
import ContactIcons from "../ContactIcons/ContactIcons";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { scrollToTop, setScrollToTop } = useScroll();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  useEffect(() => {
    if (window.innerWidth > 980 && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (scrollToTop) {
      navbarRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop, setScrollToTop]);

  return (
    <header id="navbar"className={`${theme} ${styles.header}`} ref={navbarRef}>
      <div className="background">
        <div className={`${styles.header__content} margin text`}>
          <Link className={styles.header__content__logo} to={`/`}>
            <img alt="Logo" />
          </Link>
          <nav
            className={`${styles.header__content__nav} ${
              menuOpen && window.innerWidth < 980 ? styles.isMenu : ""
            } background`}
          >
            <ul className={`${styles.nav__menu__list}`}>
              <Link
                to={"/"}
                className={`${styles.nav__menu__item} ${styles.item} text`}
                onClick={menuToggleHandler}
              >
                Home
              </Link>

              <ScrollLink
                className={`${styles.nav__menu__item} ${styles.item} text`}
                to={"techStack"}
                onClick={menuToggleHandler}
              >
                Tech Stack
              </ScrollLink>

              <ScrollLink
                className={`${styles.nav__menu__item} ${styles.item} text`}
                to={"projects"}
                onClick={menuToggleHandler}

              >
                Projects
              </ScrollLink>

              <Link
                to={`/blog`}
                className={`${styles.nav__menu__item} ${styles.item} text`}
                onClick={menuToggleHandler}
              >
                Blog
              </Link>
              <Link
                className={`${styles.nav__menu__item} ${styles.item} text`}
                to={"/"}
                onClick={menuToggleHandler}
              >
                Download CV
              </Link>
              <ul className={`${styles.icon__list} text`}>

              <ContactIcons iconSize="29px" containerStyle={{display:"flex"}} />

                <li>
                  <button
                    className={`${styles.themeBtn} text ${
                      theme === "light" ? styles.lightTheme : styles.darkTheme
                    }`}
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <FaCloudMoon size={30} />
                    ) : (
                      <FaRegSun size={30} />
                    )}
                  </button>
                </li>
              </ul>
            </ul>
          </nav>
          <div className={styles.header__content__toggle}>
            {!menuOpen ? (
              <FaBars onClick={menuToggleHandler} />
            ) : (
              <FaTimes onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
