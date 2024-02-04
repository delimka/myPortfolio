// Hero.jsx
import React from "react";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Hero.module.scss";
import ContactIcons from "../ContactIcons/ContactIcons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Hero() {
  const { theme } = useContext(ThemeContext);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 820);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 823);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={theme}>
      <div className="background">
        <div className={`${styles.heroMainContainer} margin`}>
          <section className={styles.columnContainer}>
            <div
              className={`${styles.introductionContainer} ${styles.column} text`}
            >
              <span className={styles.heading}>
                <span className={styles.heading}>
                  {t("hero.description")
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </span>
              </span>
            </div>

            <div
              className={` ${styles.profileImageContainer} ${styles.column}`}
            >
              {isSmallScreen && (
                <div className={` ${styles.myDataColumn} text`}>
                  <h1>{t("hero.smScreen.h1")}</h1>
                  <h2>{t("hero.smScreen.h2")}</h2>
                  <ContactIcons
                    iconSize="30px"
                    containerStyle={{
                      display: "grid",
                      gap: "30px",
                      gridAutoFlow: "column",
                    }}
                    listStyle={{ cursor: "pointer" }}
                  />
                </div>
              )}
              <motion.div
                className={styles.animatedCircle}
                aria-label={t("hero.labelText")}
                initial={{ scale: 0.8, opacity: 0.2 }} 
                animate={{ scale: 1 , opacity: 1}} 
                transition={{ duration: 0.5 }} 
              ></motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Hero;
