import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Sessions from "../pages/Sessions";
import WhatIs from "../pages/WhatIs";
import Classes from "../pages/Classes";
import Faq from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
const Body = () => {
  return (
    <>
      <div className="pageBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/whatIs" element={<WhatIs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
