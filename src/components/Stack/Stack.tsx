import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiBootstrap,
  SiReact,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiAdobephotoshop,
  SiMui,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import useScrollToElement from "../../hooks/useScrollToElement";
import styles from "./Stack.module.scss";

function Stack() {
  const { theme } = useContext(ThemeContext);
  const{t} = useTranslation();

  const techStack = "techStack";
  useScrollToElement(techStack);

  return (
    <main className={theme}>
      <div className="background">
        <div  className={`${styles.container} margin text`}>
          <h1 id={techStack} className={styles.stackHeading1}>{t("stack.title")}</h1>
          <h2 className={styles.stackHeading2}>{t("stack.description")}</h2>
          <div className={styles.stackLogoList}>
            <SiHtml5 size={120} style={{ color: "#E34F26" }} alt={t("stack.icons.HTML5")}/>
            <SiCss3 size={120} style={{ color: "#1572B6" }} alt={t("stack.icons.CSS3")}/>
            <SiJavascript size={120} style={{ color: "#F7DF1E" }} alt={t("stack.icons.Javascript")}/>
            <SiTypescript size={120} style={{ color: "#3178C6" }}alt={t("stack.icons.Typescript")}/>
            <SiReact size={120} style={{ color: "#61DAFB" }} alt={t("stack.icons.React")}/>
            <SiGraphql size={120} style={{ color: "#E535AB" }} alt={t("stack.icons.GraphQL")}/>
            <SiSass size={120} style={{ color: "#CC6699" }} alt={t("stack.icons.Sass")}/>
            <SiBootstrap size={120} style={{ color: "#563D7C" }} alt={t("stack.icons.Bootstrap")}/>
            <SiMui size={120} style={{ color: "#2196F3" }} alt={t("stack.icons.Mui")}/>
            <SiGithub size={120} alt={t("stack.icons.GitHub")}/>
            <SiFigma size={120}alt={t("stack.icons.Figma")}/>
            <SiAdobephotoshop size={120} style={{ color: "#31A8FF" }} alt={t("stack.icons.HTML5")}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Stack;
