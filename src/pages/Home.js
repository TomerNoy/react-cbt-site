import React from "react";
import "./Home.css";
import { Element } from "react-scroll";

import inbalImage from "../assets/inbal.jpeg";

const Home = () => {
  return (
    <div>
      <Element name="banner-section" className="section home-banner">
        {/* <div id="top-banner-title">
          Dolor consectetur deserunt do et pariatur anim .
        </div> */}
        <p id="bottom-banner-title">
        טיפול CBT – איתך במסע לשינוי חשיבה, <br/>רגש והתנהגות בדרך לחיים טובים יותר
        </p>
      </Element>
      <Element name="about-section" className="section">
        <div className="home-about">
          <h2>קצת עלי</h2>
          <div className="about-row">
            <img src={inbalImage} alt="Inbal"></img>
            <div className="about-row-inner">
              <p>
                נעים להכיר, אני ענבל שאול, פסיכותרפיסטית קוגניטיבית-התנהגותית.
              </p>

              <p>
                אני מטפלת ומלווה במצבי קושי ומשבר כמו חרדה, דיכאון, הפרעות
                התנהגות שונות, התמודדות עם כעסים, תחושת ערך עצמי נמוך, תחושת
                תקיעות, קושי בניהול מערכות יחסים ועוד. אני מטפלת בגישה
                הקוגניטיבית התנהגותית, המתייחסת לקשר שבין מחשבות, רגשות
                והתנהגות. אני מאמינה שבאמצעות הקשבה והתבוננות משותפת ללא
                שיפוטיות אפשר לצמוח.
              </p>
            </div>
          </div>
        </div>
      </Element>
      <Element name="treatment-section" className="section">
        <div className="home-treatments">
          <h2>תחומי טיפול</h2>
          <p>
            טיפול פסיכולוגי קוגניטיבי התנהגותי מתמקד בקשר בין מחשבות, רגשות
            והתנהגות. טיפול זה מתאים לאנשים המתמודדים עם קשיים כמו חרדה, דיכאון,
            תחושת ערך עצמי נמוך, קשיים בניהול מערכות יחסים ועוד.
          </p>
          <p>
            במהלך הטיפול אני מסייעת לך להבין את המחשבות והרגשות שלך, לזהות
            תהליכים חשיבתיים שליליים ולפתור ביחד איתך קשיים ומשברים.
          </p>
        </div>
      </Element>

      
    </div>
  );
};

export default Home;
