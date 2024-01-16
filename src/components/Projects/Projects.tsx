// ProjectContainer.jsx

import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Tabs from "./Tabs";
import ProjectPanel from "./ProjectPanel";
import styles from "./Projects.module.scss";


const ProjectContainer = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { theme } = useContext(ThemeContext);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className={theme}>  
      <div className="background">
        <div className={`${styles.container} text`}>
        <h1 className={`${styles.stackHeading1} text`}>My Projects</h1>
        <h2 className={`${styles.stackHeading2} text`}>Things I’ve built so far</h2>
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
          <section className={styles.projectList}>
            <ProjectPanel activeTab={activeTab} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectContainer;
