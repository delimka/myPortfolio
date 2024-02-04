import {useContext} from "react";
import styles from "./SuspenseBackground.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

const SuspenseBackground = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <div className="background">
        <div className={styles.SuspenseBackgroundContainer}>Loading...</div>
      </div>
    </main>
  );
};

export default SuspenseBackground;
