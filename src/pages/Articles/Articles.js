import React from "react";
import "./Articles.css";
import eating from "../../assets/eating.webp";
import ocd from "../../assets/ocd.webp";
import depression from "../../assets/depression.webp";
import regulation from "../../assets/regulation.webp";
import anxiety from "../../assets/anxiety.webp";

const Articles = () => {
  return (
    <div>
      <h1>מאמרים</h1>
      <p>
        ברוכים הבאים לאוסף המאמרים שלי, שמוקדשים לדרכי טיפול במגוון הפרעות
        ואתגרים נפשיים באמצעות פסיכותרפיה קוגניטיבית-התנהגותית (CBT). כאן תוכלו
        ללמוד על חרדה, דיכאון, נויסות רגשי, ועוד. כל מאמר מספק הסבר מעמיק על
        ההפרעה והטכניקות הייחודיות של CBT המוכחות כיעילות בטיפול. אני מזמינה
        אתכם לקרוא ולהכיר את הדרכים שבהן ניתן לשפר את איכות החיים ולמצוא איזון
        נפשי.
      </p>

      <div className="articles">
        <div className="article">
          <img src={eating} alt="eating"></img>
          <h2>אכילה רגשית</h2>
          <p>
            האם אי פעם מצאתם את עצמכם פונים למקרר אחרי יום מתסכל בעבודה? האם אתם
            אוכלים חטיף מתוק כשאתם מרגישים עצב או מתח? אם עניתם בחיוב על אחת
            מהשאלות הללו, ייתכן שאתם חווים תופעה שנקראת "אכילה רגשית". תופעה זו
            נפוצה יותר ממה שנדמה, ומשפיעה על מיליוני אנשים ברחבי העולם. אבל מהי
            בעצם אכילה רגשית, ואיך אפשר להתמודד איתה?
          </p>
          <a
            className="read-more-button"
            onClick={() =>
              (window.location.href = "/articles/emotional-eating")
            }
          >
            קרא עוד
          </a>
        </div>
        <div className="article">
          <img src={regulation} alt="regulation"></img>
          <h2>ויסות רגשי</h2>
          <p>
            כולנו חווים רגשות חזקים שמשפיעים על האופן שבו אנחנו מתנהלים בחיי
            היומיום. לפעמים, הרגשות שלנו יכולים להשתלט עלינו בצורה שלא תמיד
            משרתת אותנו. כדי להבין טוב יותר מה זה אומר, נבחן שני מקרים מהחיים:
          </p>
          <a
            className="read-more-button"
            onClick={() =>
              (window.location.href = "/articles/emotional-regulation")
            }
          >
            קרא עוד
          </a>
        </div>

        <div className="article">
          <img src={anxiety} alt="anxiety"></img>
          <h2>חרדה</h2>
          <p>
            חרדה היא תחושה המלווה אותנו עוד מימי קדם, כמעין מנגנון הגנה טבעי
            שמטרתו לשמור עלינו מסכנות. אך מה קורה כאשר החרדה הופכת לחלק מהותי
            ובלתי נפרד מחיי היומיום שלנו? במקרים כאלה, מה שהיה אמור להגן עלינו
            עלול להפוך למכשול המונע מאיתנו לחיות חיים מלאים ומשמעותיים.
          </p>
          <a
            className="read-more-button"
            onClick={() => (window.location.href = "/articles/anxiety")}
          >
            קרא עוד
          </a>
        </div>
        <div className="article">
          <img src={ocd} alt="ocd"></img>
          <h2>OCD</h2>
          <p>
            דמיינו שאתם מתחילים את היום בתחושת דחף בלתי נשלט לבדוק שוב ושוב אם
            נעלתם את הדלת, או שאתם מרגישים צורך לשטוף ידיים בלי סוף למרות שאתם
            יודעים שהן כבר נקיות. עבור רובנו, אלו עשויות להיות מחשבות חולפות, אך
            עבור אנשים עם הפרעה אובססיבית-קומפולסיבית (OCD), המחשבות והפעולות
            האלו יכולות להשתלט על היום ולגרום לאי נוחות. זה נשמע מאתגר, נכון?
            אבל אל דאגה, יש דרכים להתמודד עם זה ולשפר את המצב!
          </p>
          <a
            className="read-more-button"
            onClick={() => (window.location.href = "/articles/ocd")}
          >
            קרא עוד
          </a>
        </div>
        <div className="article">
          <img src={depression} alt="depression"></img>
          <h2>דיכאון</h2>
          <p>
            דיכאון הוא הפרעה נפשית המתאפיינת בתחושות ממושכות של עצב, חוסר תקווה,
            ואובדן עניין בפעילויות שבעבר היו מהנות. זהו מצב מורכב שמשפיע לא רק
            על הרגשות, אלא גם על המחשבות, התפקוד היומיומי, והתחושות הגופניות.
            דיכאון יכול להוביל לשינויים בתיאבון, בבעיות שינה, בירידה באנרגיה,
            ובקשיים בריכוז. במקרים מסוימים, הוא עלול להוביל למחשבות על מוות.
          </p>
          <a
            className="read-more-button"
            onClick={() => (window.location.href = "/articles/depression")}
          >
            קרא עוד
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
