import React from "react";
import "./styles/App.css";
import "./styles/tablet.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <div className="outerGutters">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default App;
