import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import { SiLinkedin, SiGithub, SiMinutemailer } from "react-icons/si";
import { FaRegSun, FaCloudMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import "./../../App.scss";
import { useScroll } from "../../context/ScrollContext";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const { scrollToTop, setScrollToTop } = useScroll();
  const navbarRef = useRef<HTMLDivElement>(null);

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
    <nav className={theme} ref={navbarRef}>
      <div className="background">
        <div className={`${styles.navMainContainer} margin`}>
          <section className={styles.navLogoContainer}>
            <img alt="Logo" />
          </section>
          <ul className={`${styles.navMenuList} text`}>
            <Link
              to={`/`}
              className={`${styles.navMenuItem} ${styles.item1} text`}
            >
              Home
            </Link>
            <li className={`${styles.navMenuItem} ${styles.item2}`}>
              Tech Stack
            </li>
            <li className={`${styles.navMenuItem} ${styles.item3}`}>
              Projects
            </li>
            <Link
              to={`/blog`}
              className={`${styles.navMenuItem} ${styles.item1} text`}
            >
              Blog
            </Link>
            <li className={`${styles.navMenuItem} ${styles.item5}`}>
              Download CV
            </li>
            <ul className={`${styles.iconList} text`}>
              <li className={styles.icon} style={{ color: "#f05033" }}>
                <SiGithub />
              </li>
              <li className={styles.icon} style={{ color: "#0A66C2" }}>
                <SiLinkedin />
              </li>
              <li className={styles.icon} style={{ color: "#009688" }}>
                <SiMinutemailer />
              </li>
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
