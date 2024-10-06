import React from "react";
import "./Home.css";

import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import HomeTreatment from "./HomeTreatment";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeTreatment />
    </div>
  );
};

export default Home;
