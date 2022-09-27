import React, { useState } from "react";
// import hamburger from "../assets/simple_hamburger.svg";
import logoMain from "../assets/GTWLogoMain.jpg";
import Nav from "./Nav";
const Header = () => {
  const [showMenu, updateShowMenu] = useState(false);

  const menuSwitch = () => {
    showMenu ? updateShowMenu(false) : updateShowMenu(true);
  };

  const closeMenu = () => {
    showMenu && updateShowMenu(false);
  };

  return (
    <>
      <header>
        <div className="header">
          {/* <img
            className="menuIcon"
            src={hamburger}
            alt="menu icon"
            onClick={() => menuSwitch()}
          ></img> */}
          <p className="menuIcon" onClick={() => menuSwitch()}>
            MENU
          </p>
        </div>
        <h1>GTW Hypnotherapy</h1>
        <img className="topLogo" src={logoMain} alt="G T W Hypnotherapy"></img>
      </header>
      {showMenu && (
        <nav className="dropDown">
          <Nav closeMenu={closeMenu} />
        </nav>
      )}
      <nav className="topNav">
        <Nav closeMenu={closeMenu} />
      </nav>
      {/* <div className="headerUnderline"></div> */}
    </>
  );
};

export default Header;
