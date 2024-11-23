import React from "react";
import { Element } from "react-scroll";
import "./HomeTreatment.css";
import checkIcon from "../../assets/home_treatment_icon.png";

const HomeTreatment = () => {
  return (
    <Element name="treatment-section" className="section">
      <div className="home-treatments page-text">
        <h1>תחומי טיפול במתבגרים ומבוגרים</h1>
        <p>
          בחיים ישנם רגעים של קושי, מצבים שבהם אנחנו מרגישים תקועים, אבודים או
          מתמודדים עם כאב רגשי שאינו מרפה. במצבים כאלה, הצעד הראשון הוא להכיר
          בכך שיש דרך להתמודד ולהתקדם.
        </p>
        <p>
          למבוגרים ולמתבגרים יש צרכים שונים בהתמודדות עם אותם נושאים, ולכן
          הטיפול מותאם לגיל ולשלב החיים. במבוגרים, הטיפול מתמקד בהתמודדות עם
          אתגרי החיים המשתנים, כגון שינויים בקריירה, מערכות יחסים, הורות,
          התמודדות עם אובדן, משברים אישיים ועוד. בכל שלב בחיים מבוגרים עשויים
          להרגיש צורך לבחון מחדש את מטרותיהם ולבנות תחושת מסוגלות וביטחון עצמי
          מחודשת.
        </p>
        <p>
          אצל מתבגרים, נושא הזהות תופס מקום מרכזי, שכן גיל ההתבגרות הוא שלב
          קריטי בגיבוש הזהות האישית. במקביל לכך, מתבגרים מתמודדים עם מצבי לחץ,
          דימוי עצמי, והמתח בין חיפוש אחר עצמאות לבין ציפיות החברה. בטיפול, אנו
          מתמקדים במציאת הקול הפנימי של המתבגר, בהעצמה, ובחיזוק תחושת הביטחון.
          יחד נפתח את היכולת לאמץ נקודות מבט חדשות, שיאפשרו למתבגר לראות את עצמו
          ואת העולם סביבו בצורה בהירה ומיטיבה יותר.
        </p>

        <p>להלן חלק מתחומי הטיפול בהם אני עוסקת:</p>

        <div className="treatment-list">
          <div className="treatment-column">
            <p>
              <img src={checkIcon} alt="check" />
              משברי חיים
            </p>

            <p>
              <img src={checkIcon} alt="check" />
              חרדה
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              דיכאון
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              תחושת תקיעות
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              מערכות יחסים
            </p>
          </div>
          <div className="treatment-column">
            <p>
              <img src={checkIcon} alt="check" />
              פוביות
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              קשיים חברתיים
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              אגרנות
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              אכילה רגשית
            </p>
            <p>
              <img src={checkIcon} alt="check" />
              קושי בויסות רגשי
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeTreatment;
