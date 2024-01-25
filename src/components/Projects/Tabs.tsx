import React, { useContext } from "react";
import styles from "./Tabs.module.scss";
import { ThemeContext } from "../../hooks/ThemeContext";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <button
        onClick={() => onTabChange("frontend")}
        className={`${
          activeTab === "frontend" ? `${styles.active} ${styles.clicked}` : ""
        } ${styles[theme]}`}
      >
        FRONT-END
      </button>
      <button
        onClick={() => onTabChange("backend")}
        className={`${
          activeTab === "backend" ? `${styles.active} ${styles.clicked}` : ""
        } ${styles[theme]}`}
      >
        BACK-END
      </button>
      <button
        onClick={() => onTabChange("figma")}
        className={`${
          activeTab === "figma" ? `${styles.active} ${styles.clicked}` : ""
        } ${styles[theme]}`}
      >
        FIGMA
      </button>
    </div>
  );
};

export default Tabs;
