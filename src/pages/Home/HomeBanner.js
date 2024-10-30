import React from "react";
import { Element } from "react-scroll";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <Element name="banner-section" className="home-banner">
      <div className="banner-text-container">
        <h1 id="top-banner-title">כשמתחילים ללכת</h1>
        <h1 id="bottom-banner-title">מרגישים את השינוי</h1>
      </div>
    </Element>
  );
};

export default HomeBanner;
