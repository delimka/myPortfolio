import { useContext, useEffect, useState } from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLocationPlus,
  BiPhoneCall,
} from "react-icons/bi";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { menuScrollHandler } from "./../../helpers/scrollFunctions";
import styles from "./Footer.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    setIsBlogPage(location.pathname.startsWith("/blog"));
  }, [location.pathname]);

  return (
    <MDBFooter className={`${theme} text-center text-lg-start text-muted`}>
      <section
        className={`${styles[theme]} ${styles.topBottomBorder} d-flex justify-content-center justify-content-lg-between p-4 text background`}
      >
        <div className="me-5 d-none d-lg-block">
          <span>{t("footer.socialNetworks.title")}</span>
        </div>

        <div className="d-flex justify-content-center justify-content-lg-between gap-4">
          <a href="" className="mr-0 text-reset">
            <BiLogoLinkedinSquare
              style={{ color: "#0e76a8" }}
              size={30}
              alt={t("footer.socialNetworks.linkedInIcon")}
              aria-label="LinkedIn Profile"
            />
          </a>
          <a href="" className="me-0 text-reset">
            <BiLogoGmail
              style={{ color: "#D44638" }}
              size={30}
              alt={t("footer.socialNetworks.eMailIcon")}
              aria-label="Send e-mail"
            />
          </a>
          <a href="" className="me-0 text-reset">
            <BiLogoTelegram
              style={{ color: "#0088cc" }}
              size={30}
              alt={t("footer.socialNetworks.gitIcon")}
              aria-label="Telegram Profile"
            />
          </a>
        </div>
      </section>

      <section className="text background">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="pt-5">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                {t("footer.about")}
              </h4>
              <p>{t("footer.aboutMe")}</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                {t("footer.navigation.title")}
              </h4>
              <p>
                <Link
                  to={"/"}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => menuScrollHandler(event, "navbar")}
                  className="text-reset cursor-point"
                >
                  {t("footer.navigation.home")}
                </Link>
              </p>
              <p>
                {isBlogPage ? (
                  <Link
                    to={"/?scrollTo=techStack"}
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                  >
                    {t("footer.navigation.techStack")}
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    onClick={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => menuScrollHandler(event, "techStack")}
                    className="text-reset cursor-point"
                  >
                    {t("footer.navigation.techStack")}
                  </Link>
                )}
              </p>
              <p>
                {isBlogPage ? (
                  <Link
                    to={"/?scrollTo=projects"}
                    className={`${styles.nav__menu__item} ${styles.item} text`}
                  >
                    {t("footer.navigation.projects")}
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    onClick={(
                      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => menuScrollHandler(event, "projects")}
                    className="text-reset cursor-point"
                  >
                    {t("footer.navigation.projects")}
                  </Link>
                )}
              </p>
              <p>
                <Link
                  to={"/"}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => menuScrollHandler(event, "myBlog")}
                  className="text-reset cursor-point"
                >
                  {t("footer.navigation.blog")}
                </Link>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  {t("footer.navigation.downloadCV")}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                {t("footer.contactInfo.title")}
              </h4>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiLocationPlus />
                <a href="https://maps.app.goo.gl/jbMdwp5inkc1maXS9" target="_blank">{t("footer.contactInfo.location")}</a>
              </div>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiLogoGmail />
                <a href="mailto:vlad.baldin.1@eek.ee" target="_blank">
                  {t("footer.contactInfo.email")}
                </a>
              </div>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiPhoneCall />
                <a href="tel:+37258234118" target="_blank">{t("footer.contactInfo.phone")}</a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className={`${styles.topBorder} ${styles[theme]} text-center p-4 text background`}
      >
        <a href="/home" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()}. {t("footer.rightsReserved")}
        </a>
      </div>
    </MDBFooter>
  );
}
