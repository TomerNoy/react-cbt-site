import React from "react";
import "./Home.css";

import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import HomeTreatment from "./HomeTreatment";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <div className="page">
        <HomeAbout />
        <HomeTreatment />
      </div>
    </div>
  );
};

export default Home;
