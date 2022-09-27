import React from "react";
import Nav from "./Nav";

import afsfhLogo from "../assets/afsfh_logo.png";
import cphtLogo from "../assets/cpht_logo.jpg";
import dbsLogo from "../assets/dbs_logo.png";
import nchLogo from "../assets/nch_logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footerLeft">
          <img src={afsfhLogo} alt="AFSFH logo"></img>
        </div>
        <div className="footerLeft">
          <img src={cphtLogo} alt="CPHT logo"></img>
        </div>

        <div className="footerRight">
          <img src={nchLogo} alt="NCH logo"></img>
        </div>
        <div className="footerRight">
          <img src={dbsLogo} alt="DBS logo"></img>
        </div>
        <nav className="footerLinks">
          <Nav />
        </nav>
      </div>
      <p className="copyright">
        Copyright &copy; JP Design {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
