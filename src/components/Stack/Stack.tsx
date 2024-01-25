import { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext";
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
import styles from "./Stack.module.scss";

function Stack() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <div className="background">
        <div id="techStack"  className={`${styles.container} margin text`}>
          <h1 className={styles.stackHeading1}>My Tech Stack</h1>
          <h2 className={styles.stackHeading2}>Technologies I’ve been working with recently</h2>
          <div className={styles.stackLogoList}>
            <SiHtml5 size={120} style={{ color: "#E34F26" }} alt="HTML5 Logo"/>
            <SiCss3 size={120} style={{ color: "#1572B6" }} alt="CSS Logo"/>
            <SiJavascript size={120} style={{ color: "#F7DF1E" }} alt="Javascript Logo"/>
            <SiTypescript size={120} style={{ color: "#3178C6" }} alt="Typescript Logo"/>
            <SiReact size={120} style={{ color: "#61DAFB" }} alt="React Logo"/>
            <SiGraphql size={120} style={{ color: "#E535AB" }} alt="Adobe Illustrators Logo"/>
            <SiSass size={120} style={{ color: "#CC6699" }} alt="Sass Logo"/>
            <SiBootstrap size={120} style={{ color: "#563D7C" }} alt="Bootstrap Logo"/>
            <SiMui size={120} style={{ color: "#2196F3" }} alt="SiMui Logo"/>
            <SiGithub size={120} alt="GitHub Logo"/>
            <SiFigma size={120} alt="Figma Logo"/>
            <SiAdobephotoshop size={120} style={{ color: "#31A8FF" }} alt="Adobe Photoshop Logo"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Stack;
