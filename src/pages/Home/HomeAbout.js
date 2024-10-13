import React from "react";
import { Element } from "react-scroll";
import inbalImage from "../../assets/inbal.avif";
import inbalImageAlt from "../../assets/inbal.jpeg";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <Element name="about-section" className="section">
      <div className="home-about">
        <h1>קצת עלי</h1>
        <div className="about-row">
          <picture>
            <source srcSet={inbalImage} type="image/avif" />
            <source srcSet={inbalImageAlt} type="image/jpeg" />
            <img src={inbalImage} alt="Inbal" />
          </picture>

          <div className="about-row-inner">
            <p>
              נעים להכיר, אני ענבל שאול, פסיכותרפיסטית קוגניטיבית-התנהגותית.
              <br />
              אם הגעת לכאן, כבר עשית את הצעד הראשון בדרך לשינוי. לעתים אנו
              מרגישים צורך לשנות את הדרך בה אנו חושבים ופועלים מסיבות שונות.
              לפעמים אנו תקועים בדרך מסוימת וכדי לעשות את השינוי ולהתמיד בו נדרש
              כוח נוסף. אני מטפלת בגישה הקוגניטיבית התנהגותית, המתייחסת לקשר
              שבין מחשבות, רגשות והתנהגות. אני מלווה, תומכת ומדריכה במסע הזה
              לשינוי, ומאמינה שבאמצעות הקשבה והתבוננות משותפת ללא שיפוטיות אפשר
              לצעוד ולחוות את השיפור במחשבה, בהרגשה ובהתנהגות.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeAbout;
