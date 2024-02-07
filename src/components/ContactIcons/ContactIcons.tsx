// ContactIcons.jsx
import React, { MouseEventHandler, ReactNode } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useTranslation } from "react-i18next";
interface ContactIconsProps {
  iconSize?: string;
  listStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLLIElement | undefined>;
  additionalButtons?: ReactNode[]; 
}

const ContactIcons = ({
  iconSize,
  listStyle,
  containerStyle,
  onClick,
  additionalButtons, 
}: ContactIconsProps) => {
  const { t } = useTranslation();

  return (
    <ul style={{ ...containerStyle }}>
      {additionalButtons && additionalButtons.map((button, index) => (
        <li key={index} onClick={onClick}>
          {button}
        </li>
      ))}
      <li onClick={onClick}>
        <button
          style={{ color: "#f05033", fontSize: iconSize, ...listStyle }}
        >
          <SiGithub aria-label={t("contactIcons.gitIcon")} />
        </button>
      </li>
      <li onClick={onClick}>
        <button
          style={{ color: "#0A66C2", fontSize: iconSize, ...listStyle }}
        >
          <SiLinkedin aria-label={t("contactIcons.linkedInIcon")} />
        </button>
      </li>
    </ul>
  );
};

export default ContactIcons;