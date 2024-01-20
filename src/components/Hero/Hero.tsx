// Hero.jsx
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Hero.module.scss";
import ContactIcons from "../ContactIcons/ContactIcons";

function Hero() {
  const { theme } = useContext(ThemeContext);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 820);

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
                Hi &#128075;,
                <br /> My name is Vlad <br /> I am a web developer
              </span>
            </div>

            <div
              className={` ${styles.profileImageContainer} ${styles.column}`}
            >
              {isSmallScreen && (
                <div className={` ${styles.myDataColumn} text`}>
                  <h1>Vlad Baldin</h1>
                  <h2>Front-end developer</h2>
                  <ContactIcons
                    iconSize="30px"
                    containerStyle={{
                      display: "grid",
                      gap:"30px",
                      gridAutoFlow:"column"
                    }}
                  />
                </div>
              )}
              <div className={styles.animatedCircle}></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Hero;
