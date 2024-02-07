import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaRegSun, FaCloudMoon, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { menuScrollHandler } from "../../helpers/scrollFunctions";
import DropDownBtn from "./../../components/DropDownBtn/DropDwonBtn";
import ContactIcons from "../ContactIcons/ContactIcons";
import styles from "./NavBar.module.scss";
import "./../../App.scss";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const [isBlogPage, setIsBlogPage] = useState<boolean>(false);

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
    setIsBlogPage(location.pathname.startsWith("/blog"));
  }, [location.pathname]);

  return (
    <header id="navbar" className={`${theme} ${styles.header}`}>
      <div className="background">
        <div className={`${styles.header__content} margin text`}>
          <DropDownBtn />
          <nav
            className={`${styles.header__content__nav} ${
              menuOpen && window.innerWidth < 980 ? styles.isMenu : ""
            } background`}
          >
            <ul className={`${styles.nav__menu__list}`}>
              <li>
                <Link
                  to={"/"}
                  className={`${styles.nav__menu__item} ${styles.item} text`}
                  onClick={menuToggleHandler}
                >
                  {t("navbar.home")}
                </Link>
              </li>
              {isBlogPage ? (
                <li>
                  <Link
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                    to={"/?scrollTo=techStack"}
                    onClick={menuToggleHandler}
                  >
                    {t("navbar.techStack")}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    onClick={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => menuScrollHandler(event, "techStack", setMenuOpen)}
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                    to={"/"}
                  >
                    {t("navbar.techStack")}
                  </Link>
                </li>
              )}

              {isBlogPage ? (
                <li>
                  <Link
                    to={"/?scrollTo=projects"}
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                    onClick={menuToggleHandler}
                  >
                    {t("navbar.projects")}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to={"/"}
                    onClick={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => menuScrollHandler(event, "projects", setMenuOpen)}
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                  >
                    {t("navbar.projects")}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to={`/blog`}
                  className={`${styles.nav__menu__item} ${styles.item} text`}
                  onClick={menuToggleHandler}
                >
                  {t("navbar.blog")}
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.nav__menu__item} ${styles.item} text`}
                  to={"/"}
                  onClick={menuToggleHandler}
                >
                  {t("navbar.downloadCV")}
                </Link>
              </li>
              <li className={`${styles.icon__list} text`}>
                <ContactIcons
                  iconSize="29px"
                  containerStyle={{ display: "flex", flexDirection:"row-reverse"}}
                  listStyle={{ cursor: "pointer" }}
                  onClick={menuToggleHandler}
                  additionalButtons={[
                    <button
                      className={`${styles.themeBtn} text ${
                        theme === "light" ? styles.lightTheme : styles.darkTheme
                      }`}
                      onClick={toggleTheme}
                      aria-label={t("navbar.themeBtn")}
                    >
                      {theme === "light" ? (
                        <FaCloudMoon
                          size={32}
                          onClick={menuToggleHandler}
                          aria-label={t("navbar.themeIcons.moon")}
                        />
                      ) : (
                        <FaRegSun
                          size={32}
                          onClick={menuToggleHandler}
                          aria-label={t("navbar.themeIcons.sun")}
                        />
                      )}
                    </button>,
                  ]}
                />
              </li>
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
