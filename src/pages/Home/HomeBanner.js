import React from "react";
import { Element } from "react-scroll";
import "./HomeBanner.css";
import bannerImage from "../../assets/banner.avif";
import bannerImageAlt from "../../assets/banner.webp";

const HomeBanner = () => {
  return (
    <Element name="banner-section" className="home-banner">
      <picture>
        <source srcSet={bannerImage} type="image/avif" />
        <source srcSet={bannerImageAlt} type="image/webp" />
        <img src={bannerImage} alt="Banner" className="banner-background" />
      </picture>

      <div className="banner-text-container">
        <h1 id="top-banner-title">כשמתחילים ללכת</h1>
        <h1 id="bottom-banner-title">מרגישים את השינוי</h1>
      </div>
    </Element>
  );
};

export default HomeBanner;
