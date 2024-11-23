import React from "react";
import { Element } from "react-scroll";
import inbalImage from "../../assets/inbal.avif";
import inbalImageAlt from "../../assets/inbal.jpeg";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <Element name="about-section" className="section">
      <div className="home-about page-text">
        <h1>קצת עלי</h1>
        <div className="about-row">
          <picture>
            <source srcSet={inbalImage} type="image/avif" />
            <source srcSet={inbalImageAlt} type="image/jpeg" />
            <img src={inbalImage} alt="Inbal" />
          </picture>

          <div className="about-row-inner">
            <p>
              נעים להכיר, אני ענבל שאול, פסיכותרפיסטית קוגניטיבית-התנהגותית. אם
              הגעת לכאן, כנראה שיש בך רצון לשנות משהו – והנה, כבר עשית את הצעד
              הראשון לקראת השינוי… <br />
              אני מטפלת בגישה הקוגניטיבית-התנהגותית, שמתמקדת בקשר בין מחשבות,
              רגשות והתנהגויות. במהלך הטיפול, אני כאן כדי לתמוך, להכווין וללוות
              אותך בהתמודדות עם השינוי הרצוי. אני מאמינה שלכל אחד ואחת מגיעה
              הזכות לחיות חיים מספקים, ודרך התבוננות משותפת והכוונה מדויקת, נוכל
              להגיע לשיפור משמעותי ולהשגת היעדים שחשובים לך.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeAbout;
