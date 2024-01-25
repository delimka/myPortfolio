import { useContext } from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLocationPlus,
  BiPhoneCall,
} from "react-icons/bi";

import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { ThemeContext } from "../../hooks/ThemeContext";
import styles from "./Footer.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Link as ScrollLink } from "react-scroll";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <MDBFooter className={`${theme} text-center text-lg-start text-muted`}>
      <section
        className={`${styles[theme]} ${styles.topBottomBorder} d-flex justify-content-center justify-content-lg-between p-4 text background`}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="d-flex justify-content-center justify-content-lg-between">
          <a href="" className="me-4 text-reset">
            <BiLogoLinkedinSquare style={{ color: "#0e76a8" }} size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <BiLogoGmail style={{ color: "#D44638" }} size={30} />
          </a>
          <a href="" className="me-4 text-reset">
            <BiLogoTelegram style={{ color: "#0088cc" }} size={30} />
          </a>
        </div>
      </section>

      <section className="text background">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="pt-5">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <ScrollLink to={"navbar"} className="text-reset cursor-point">
                  Home
                </ScrollLink>
              </p>
              <p>
                <ScrollLink
                  to={"/ techStack"}
                  className="text-reset cursor-point"
                >
                  Tech Stack
                </ScrollLink>
              </p>
              <p>
                <ScrollLink
                  to={"projects"}
                  className="text-reset cursor-point"
                >
                  Projects
                </ScrollLink>
              </p>
              <p>
                <ScrollLink to={"myBlog"} className="text-reset cursor-point">
                  Blog
                </ScrollLink>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Download CV
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiLocationPlus />
                <a>Estonia, Tallinn</a>
              </div>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiLogoGmail />
                <a href="mailto:vlad.baldin.1@eek.ee">vlad.baldin.1@eek.ee</a>
              </div>
              <div className={`${styles.footerContactStyles} ${styles[theme]}`}>
                <BiPhoneCall />
                <a href="tel:+37258234118">+372 58234118</a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className={`${styles.topBorder} ${styles[theme]} text-center p-4 text background`}
      >
        <a href="/home" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()}. All rights reserved.
        </a>
      </div>
    </MDBFooter>
  );
}
