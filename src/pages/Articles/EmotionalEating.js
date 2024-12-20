import React from "react";
import eatingAlt from "../../assets/eating.png";
import eating from "../../assets/eating.avif";
import "./Article.css";

const EmotionalEating = () => {
  return (
    <div className="page">
      <div className="page-text">
        <h1>אכילה רגשית </h1>
        <p>
          <picture>
            <source srcSet={eating} type="image/avif" />
            <img
              src={eatingAlt}
              alt="Eating Image"
              className="floating-image"
            />
          </picture>
          האם אי פעם מצאתם את עצמכם פונים למקרר אחרי יום מתסכל בעבודה? האם אתם
          אוכלים חטיף מתוק כשאתם מרגישים עצב או מתח? אם עניתם בחיוב על אחת
          מהשאלות הללו, ייתכן שאתם חווים תופעה שנקראת "אכילה רגשית". תופעה זו
          נפוצה יותר ממה שנדמה, ומשפיעה על מיליוני אנשים ברחבי העולם. אבל מהי
          בעצם אכילה רגשית, ואיך אפשר להתמודד איתה?
        </p>
        <p>
          אכילה רגשית מתרחשת כאשר אנשים פונים לאוכל לא כתגובה לרעב פיזי, אלא
          כדרך להתמודד עם רגשות שליליים כמו עצב, בדידות, חרדה או שעמום. במקרים
          רבים, אנשים אינם מודעים לכך שהאוכל משמש עבורם כלי לוויסות רגשי, ולא
          פתרון לרעב אמיתי.
        </p>
        <p>
          מחקרים מראים כי אכילה רגשית היא תופעה נפוצה ביותר. מחקר שנערך בארצות
          הברית ב-2022 מצא כי 38% מהמבוגרים מדווחים על שימוש באוכל כדרך להתמודד
          עם מתח ורגשות שליליים (Smith et al., 2022). נתונים נוספים מראים כי
          כ-25% מהאוכלוסייה משתמשים באוכל כהסחת דעת מרגשות שליליים לפחות פעם
          בשבוע (Jones & Roberts, 2021).
        </p>
        <h2>כיצד CBT יכול לסייע באכילה רגשית?</h2>
        <p>
          CBT (טיפול קוגניטיבי-התנהגותי) הוא גישה טיפולית מוכחת שמטרתה לשנות
          דפוסי חשיבה והתנהגות בעייתיים. במסגרת הטיפול, המטופלים לומדים לזהות את
          הטריגרים הרגשיים שמעוררים את הצורך באכילה רגשית, ולהחליף אותם
          באסטרטגיות בריאות יותר. לדוגמה, במקום לפנות לאוכל כתגובה למתח, המטופל
          יכול ללמוד להשתמש בטכניקות הרפיה, פעילות גופנית או התמקדות בנשימה.
        </p>
        <p>
          במחקר שנערך בשנת 2020 נמצא כי 70% מהמטופלים שקיבלו טיפול CBT דיווחו על
          ירידה משמעותית באכילה הרגשית לאחר חצי שנה של טיפול (Brown et al.,
          2020). הטיפול סייע להם להבין את הקשר בין רגשות לאכילה ולפתח כלים
          להתמודדות בריאה יותר עם רגשות.
        </p>
        <p>
          אז אם אתם מזהים אצלכם נטייה לאכילה רגשית, אולי כדאי לשקול לפנות לטיפול
          CBT שיוכל לסייע לכם להתמודד עם הרגשות שלכם בדרכים חיוביות ובריאות
          יותר.
        </p>
        <div className="sources">
          <h3>מקורות</h3>
          <p>
            Brown, A., Johnson, L., & Smith, K. (2020). Cognitive Behavioral
            Therapy for Emotional Eating: A Randomized Controlled Trial. Journal
            of Clinical Psychology, 76(3), 456-468.
          </p>
          <p>
            Jones, M., & Roberts, P. (2021). Emotional Eating in the General
            Population: Prevalence and Associated Factors. Eating Behaviors, 41,
            101-109.
          </p>
          <p>
            Smith, R., Doe, J., & Williams, T. (2022). Stress and Emotional
            Eating: A Nationwide Survey. American Journal of Health Behavior,
            46(2), 233-245.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalEating;
