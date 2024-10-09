import React from "react";
import { Element } from "react-scroll";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <Element name="banner-section" className="home-banner">
      <div className="banner-text-container">
        <h1 id="top-banner-title">איתך במסע לשינוי חשיבה, רגש והתנהגות</h1>
        <h1 id="bottom-banner-title"> בדרך לחיים טובים יותר</h1>
      </div>
    </Element>
  );
};

export default HomeBanner;
