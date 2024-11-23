import React from "react";
import { Element } from "react-scroll";
import "./HomeBanner.css";
import bannerImage from "../../assets/banner.avif";
import bannerImageAlt from "../../assets/banner.png";

const HomeBanner = () => {
  return (
    <Element className="home-banner">
      <picture>
        <source srcSet={bannerImage} type="image/avif" />
        <source srcSet={bannerImageAlt} type="image/webp" />
        <img src={bannerImage} alt="Banner Image" className="banner-image"/>
      </picture>
    </Element>
  );
};

export default HomeBanner;
