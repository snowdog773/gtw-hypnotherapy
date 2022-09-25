import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">
        <div className="link">Home</div>
      </Link>
      <Link to="/about">
        <div className="link">About Me</div>
      </Link>
      <Link to="whatIs">
        <div className="link">What Is Hypnotherapy?</div>
      </Link>
      <Link to="sessions">
        <div className="link">Sessions & Prices</div>
      </Link>
      <Link to="classes">
        <div className="link">Classes</div>
      </Link>
      <Link to="faq">
        <div className="link">FAQ</div>
      </Link>

      <Link to="contact">
        <div className="link">Get In Touch</div>
      </Link>
    </>
  );
};

export default Nav;
