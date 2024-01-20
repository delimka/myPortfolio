// ContactIcons.jsx
import React from "react";
import { SiLinkedin, SiGithub, SiMinutemailer } from "react-icons/si";

interface ContactIconsProps {
  iconSize?: string;
  listStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const ContactIcons = ({ iconSize, listStyle, containerStyle  }: ContactIconsProps) => {
  return (
    <div style={{...containerStyle}}>
      <li style={{ color: "#f05033", fontSize: iconSize, ...listStyle }}>
        <SiGithub />
      </li>
      <li style={{ color: "#0A66C2", fontSize: iconSize, ...listStyle }}>
        <SiLinkedin />
      </li>
      <li style={{ color: "#009688", fontSize: iconSize, ...listStyle }}>
        <SiMinutemailer />
      </li>
    </div>
  );
};

export default ContactIcons;
