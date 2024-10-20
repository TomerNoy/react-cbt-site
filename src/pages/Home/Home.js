import React from "react";
import "./Home.css";

import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import HomeTreatment from "./HomeTreatment";
import HomeArticles from "./HomeArticles";

const Home = () => {
  return (
    <div className="page">
      <HomeBanner />
      <HomeAbout />
      <HomeTreatment />
      <HomeArticles />
    </div>
  );
};

export default Home;
