import React, { useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "./HomeArticles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articlesData } from "../Articles/articlesData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Section1 = () => {
  const articles = [
    { title: "Article 1", content: "This is the content for article 1." },
    { title: "Article 2", content: "This is the content for article 2." },
    { title: "Article 3", content: "This is the content for article 3." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Element name="articles-section" className="home-articles">
      <h1>מאמרים</h1>
      <Slider {...settings}>
        {articlesData.map((article, index) => (
          <div key={index} className="article-slide">
            <div className="image-container">
              <LazyLoadImage
                alt={article.title}
                src={article.image}
                effect="blur"
                scrollableTarget="articles-section"
                className="image-content"
              />
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

export default Section1;
