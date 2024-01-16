import { useContext } from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTelegram,
  BiLocationPlus,
  BiPhoneCall,
} from "react-icons/bi";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Footer.module.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

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
          <a href="" className="me-4 text-reset" >
            <BiLogoLinkedinSquare style={{ color: "#0e76a8" }} size={30} />
          </a>
          <a href="" className="me-4 text-reset" >
            <BiLogoGmail style={{ color: "#D44638" }} size={30}/>
          </a>
          <a href="" className="me-4 text-reset" >
            <BiLogoTelegram style={{ color: "#0088cc" }} size={30}/>
          </a>
        </div>
      </section>

      <section className="text background">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="pt-5">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
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
