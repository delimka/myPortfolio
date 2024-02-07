import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import flags from "./../../assets/flags/flags";
import styles from "./DropDownBtn.module.scss";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).catch((error) => {
      console.error(`Error changing language to ${lng}:`, error);
    });
  };
  const currentLanguage = i18n.language;

  return (
    <MDBDropdown className={styles.Dropdown}>
      <MDBDropdownToggle aria-haspopup="true" >
        {currentLanguage === "en" && (
          <img src={flags.en}  alt={t("navbar.languages.eng")} />
        )}
        {currentLanguage === "est" && (
          <img src={flags.est} alt={t("navbar.languages.ee")}/>
        )}
        {currentLanguage === "ru" && (
          <img src={flags.ru}  alt={t("navbar.languages.ru")} />
        )}
      </MDBDropdownToggle>
      <MDBDropdownMenu className={styles.DropdownMenu}>
        <MDBDropdownItem
          link
          childTag="button"
          onClick={() => changeLanguage("en")}
          className={currentLanguage === "en" ? styles.active : ""}
        >
          <img src={flags.en} alt={t("navbar.languages.eng")} />
        </MDBDropdownItem>
        <MDBDropdownItem
          link
          childTag="button"
          onClick={() => changeLanguage("est")}
          className={currentLanguage === "est" ? styles.active : ""}
        >
          <img src={flags.est}  alt={t("navbar.languages.ee")} />
        </MDBDropdownItem>
        <MDBDropdownItem
          link
          childTag="button"
          onClick={() => changeLanguage("ru")}
          className={currentLanguage === "ru" ? styles.active : ""}
        >
          <img src={flags.ru} alt={t("navbar.languages.ru")}  />
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
