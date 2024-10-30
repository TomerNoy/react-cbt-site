import React from "react";
import { Element } from "react-scroll";
import "./HomeTreatment.css";

const HomeTreatment = () => {
  return (
    <Element name="treatment-section" className="section">
      <div className="home-treatments">
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

        <p>להלן תחומי הטיפול שבהם אני עוסקת:
        </p>
        <div className="treatment-list">
          <div className="treatment-column">
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              משברי חיים
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              חרדה
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              דיכאון
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              משבר זהות
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              תחושת תקיעות
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              קשרים בינאישיים
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              אובדן ואבל
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              פוביות
            </p>
          </div>
          <div className="treatment-column">
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              קשיים חברתיים
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              אגרנות
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              פרידת הורים וגירושין
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              אכילה רגשית
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              קושי בויסות רגשי
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              קשיי התנהגות והסתגלות
            </p>
            <p>
              <span role="img" aria-label="check">
                ✔️
              </span>{" "}
              אילמות סלקטיבית
            </p>
            <p>
              <span role="img" aria-label="check">
                &nbsp;
              </span>{" "}
              ועוד
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HomeTreatment;
