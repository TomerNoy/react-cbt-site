import React, { useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "./HomeArticles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articlesData } from "../Articles/articlesData";

const HomeArticles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  // Preload images on page start
  const preloadImages = () => {
    articlesData.forEach((article) => {
      const img = new Image();
      img.src = article.image;
    });
  };

  // Call preloadImages when the component mounts
  useState(() => {
    preloadImages();
  }, []);

  return (
    <Element name="articles-section" className="home-articles">
      <h1>מאמרים</h1>
      <Slider {...settings}>
        {articlesData.map((article, index) => (
          <div key={index} className="article-slide">
            <div className="image-container">
              <picture>
                <source srcSet={article.image} type="image/avif" />
                <source srcSet={article.imageAlt} type="image/webp" />
                <img
                  alt={article.title}
                  src={article.imageAlt}
                  className="image-content"
                />
              </picture>
            </div>
            <div className="column">
              <h2 className="title">{article.title}</h2>
              <p className="content">{article.description}</p>
              <a
                className="button"
                onClick={() => (window.location.href = article.link)}
              >
                קרא עוד
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </Element>
  );
};

export default HomeArticles;
