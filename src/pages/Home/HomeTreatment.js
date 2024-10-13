import React from "react";
import { Element } from "react-scroll";
import "./HomeTreatment.css";

const HomeTreatment = () => {
  return (
    // prettier-ignore
    <Element name="treatment-section" className="section">
      <div className="home-treatments">
        <h1>תחומי טיפול</h1>
        <p>
          טיפול פסיכולוגי קוגניטיבי התנהגותי מתמקד בקשר בין מחשבות, רגשות
          והתנהגות. טיפול זה מתאים לאנשים המתמודדים עם קשיים כמו חרדה, דיכאון,
          תחושת ערך עצמי נמוך, קשיים בניהול מערכות יחסים ועוד.
        </p>
        <p>
          במהלך הטיפול אני מסייעת לך להבין את המחשבות והרגשות שלך, לזהות תהליכים
          חשיבתיים שליליים ולפתור ביחד איתך קשיים ומשברים.
        </p>
        <p>הנה כמה מהתחומים שבהם אני מתמחה:</p>    
        <div className="treatment-list">
          <div className="treatment-column">
            <p><span role="img" aria-label="check">✔️</span> משברי חיים</p>
            <p><span role="img" aria-label="check">✔️</span> חרדה</p>
            <p><span role="img" aria-label="check">✔️</span> דיכאון</p>
            <p><span role="img" aria-label="check">✔️</span> משבר זהות</p>
            <p><span role="img" aria-label="check">✔️</span> תחושת תקיעות</p>
            <p><span role="img" aria-label="check">✔️</span> קשרים בינאישיים</p>
            <p><span role="img" aria-label="check">✔️</span> אובדן ואבל</p>
            <p><span role="img" aria-label="check">✔️</span> פוביות</p>
          </div>
          <div className="treatment-column">
            <p><span role="img" aria-label="check">✔️</span> קשיים חברתיים</p>
            <p><span role="img" aria-label="check">✔️</span> אגרנות</p>
            <p><span role="img" aria-label="check">✔️</span> פרידת הורים וגירושין</p>
            <p><span role="img" aria-label="check">✔️</span> אכילה רגשית</p>
            <p><span role="img" aria-label="check">✔️</span> קושי בויסות רגשי</p>
            <p><span role="img" aria-label="check">✔️</span> קשיי התנהגות והסתגלות</p>
            <p><span role="img" aria-label="check">✔️</span> אילמות סלקטיבית</p>
            <p><span role="img" aria-label="check">&nbsp;</span> ועוד</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeTreatment;
