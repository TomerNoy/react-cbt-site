import eatingAlt from "../../assets/eating.webp";
import ocdAlt from "../../assets/ocd.webp";
import depressionAlt from "../../assets/depression.webp";
import regulationAlt from "../../assets/regulation.webp";
import anxietyAlt from "../../assets/anxiety.webp";

import eating from "../../assets/eating.avif";
import ocd from "../../assets/ocd.avif";
import depression from "../../assets/depression.avif";
import regulation from "../../assets/regulation.avif";
import anxiety from "../../assets/anxiety.avif";

export const articlesData = [
  {
    id: 1,
    title: "אכילה רגשית",
    description: `אכילה רגשית מתרחשת כאשר אנשים פונים לאוכל לא כתגובה לרעב פיזי, אלא כדרך להתמודד עם רגשות שליליים כמו עצב, בדידות, חרדה או שעמום. במקרים רבים, אנשים אינם מודעים לכך שהאוכל משמש עבורם כלי לוויסות רגשי, ולא פתרון לרעב אמיתי.`,
    image: eating,
    imageAlt: eatingAlt,
    link: "/articles/emotional-eating",
  },
  {
    id: 2,
    title: "ויסות רגשי",
    description: `ויסות רגשי הוא המיומנות שמאפשרת לנו להבין, לשלוט ולנהל את הרגשות שלנו בצורה שמועילה לנו ולא מזיקה לסובבים אותנו. זהו תהליך שבו אנחנו מזהים את הרגשות שלנו, מבינים מה גרם להם, ומחליטים איך להגיב בצורה מתאימה. לדוגמה, במקום להתרגז ולהתפרץ, נוכל לקחת רגע לחשוב על המצב ולהגיב בצורה מתונה ומחושבת יותר.`,
    image: regulation,
    imageAlt: regulationAlt,
    link: "/articles/emotional-regulation",
  },
  {
    id: 3,
    title: "חרדה",
    description: `חרדה היא תחושה המלווה אותנו עוד מימי קדם, כמעין מנגנון הגנה טבעי שמטרתו לשמור עלינו מסכנות. אך מה קורה כאשר החרדה הופכת לחלק מהותי ובלתי נפרד מחיי היומיום שלנו? במקרים כאלה, מה שהיה אמור להגן עלינו עלול להפוך למכשול המונע מאיתנו לחיות חיים מלאים ומשמעותיים. חרדה יכולה לבוא לידי ביטוי בדרכים רבות ושונות, ולעיתים קרובות היא מתעצמת ומסתבכת. ראשית, נבין שיש סוגים שונים של חרדה.`,
    image: anxiety,
    imageAlt: anxietyAlt,
    link: "/articles/anxiety",
  },
  {
    id: 4,
    title: "OCD",
    description: `הפרעה אובססיבית-קומפולסיבית (OCD) היא הפרעה נפשית המתאפיינת במחשבות טורדניות (אובססיות) ובפעולות כפייתיות (קומפולסיות) שנועדו להקל על החרדה שנגרמת מאותן מחשבות. המחשבות הטורדניות הן רעיונות, דימויים או דחפים החוזרים על עצמם ונתפסים כלא נעימים ולא הגיוניים. הפעולות הכפייתיות הן התנהגויות חוזרות על עצמן שאנשים מרגישים צורך לבצע בתגובה לאובססיות, במטרה להפחית את החרדה או למנוע אירוע מסוים שהם חוששים ממנו.`,
    image: ocd,
    imageAlt: ocdAlt,
    link: "/articles/ocd",
  },
  {
    id: 5,
    title: "דיכאון",
    description: `דיכאון הוא הפרעה נפשית המתאפיינת בתחושות ממושכות של עצב, חוסר תקווה, ואובדן עניין בפעילויות שבעבר היו מהנות. זהו מצב מורכב שמשפיע לא רק על הרגשות, אלא גם על המחשבות, התפקוד היומיומי, והתחושות הגופניות. דיכאון יכול להוביל לשינויים בתיאבון, בבעיות שינה, בירידה באנרגיה, ובקשיים בריכוז. במקרים מסוימים, הוא עלול להוביל למחשבות על מוות.`,
    image: depression,
    imageAlt: depressionAlt,
    link: "/articles/depression",
  },
];
