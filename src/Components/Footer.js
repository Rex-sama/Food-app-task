import main from "../assets/main-logo.svg";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress, SiDiscover } from "react-icons/si";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-main-container ">
      <p></p>
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "50px" }}
      >
        <img src={main} alt="logo" width={70} height={70} />
      </div>
      <div
        className="d-flex justify-content-center my-4"
        style={{ columnGap: "30px" }}
      >
        <div className="social-media-logo">
          <FiFacebook />
        </div>
        <div className="social-media-logo">
          <FiLinkedin />
        </div>
        <div className="social-media-logo">
          <FaInstagram />
        </div>
      </div>
      <div
        className="d-flex justify-content-center footer-content my-4 flex-wrap"
        style={{ columnGap: "40px" }}
      >
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>HOW IT WORKS?</p>
        <p>MENUS</p>
        <p>PROFILE</p>
      </div>
      <div className="footer-rights">
        <p>All Rights Are Reserved 2021 Lokal Grub | Designed by Cart Geek</p>
        <div className="footer-cards">
          <RiVisaLine />
          <FaCcMastercard />
          <SiAmericanexpress />
          <SiDiscover />
        </div>
      </div>
    </div>
  );
}

export default Footer;
