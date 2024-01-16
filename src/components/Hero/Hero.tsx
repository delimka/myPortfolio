// Hero.jsx
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Hero.module.scss";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={theme}>
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
            <section
              className={` ${styles.profileImageContainer} ${styles.column}`}
            >
              <div className={styles.animatedCircle}></div>
            </section>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Hero;
