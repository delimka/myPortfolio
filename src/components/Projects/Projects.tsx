// ProjectContainer.jsx

import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";
import ProjectPanel from "./ProjectPanel";
import styles from "./Projects.module.scss";
import useScrollToElement from "../../hooks/useScrollToElement";

const ProjectContainer = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { theme } = useContext(ThemeContext);
  const {t} = useTranslation();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const elementId = "projects";
    useScrollToElement(elementId);
    

  return (
    <main  className={theme}>  
      <div className="background">
        <div className={`${styles.container} text`}>
        <h1  className={`${styles.h1} text`}>{t("projects.title")}</h1>
        <h2 id={elementId} className={`${styles.h2} text`}>{t("projects.subtitle")}</h2>
        <Tabs  activeTab={activeTab} onTabChange={handleTabChange} />
          <section className={styles.panelSection}>
            <ProjectPanel activeTab={activeTab} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectContainer;
