import React from "react";
import { Element } from "react-scroll";
import inbalImage from "../../assets/inbal.jpeg";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <Element name="about-section" className="section">
      <div className="home-about">
        <h1>קצת עלי</h1>
        <div className="about-row">
          <img src={inbalImage} alt="Inbal" />
          <div className="about-row-inner">
            <p>
              נעים להכיר, אני ענבל שאול, פסיכותרפיסטית קוגניטיבית-התנהגותית.
            </p>

            <p>
              אני מטפלת ומלווה במצבי קושי ומשבר כמו חרדה, דיכאון, הפרעות התנהגות
              שונות, התמודדות עם כעסים, תחושת ערך עצמי נמוך, תחושת תקיעות, קושי
              בניהול מערכות יחסים ועוד. אני מטפלת בגישה הקוגניטיבית התנהגותית,
              המתייחסת לקשר שבין מחשבות, רגשות והתנהגות. אני מאמינה שבאמצעות
              הקשבה והתבוננות משותפת ללא שיפוטיות אפשר לצמוח.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeAbout;
