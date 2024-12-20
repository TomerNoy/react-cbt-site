import React from "react";
import "./Articles.css";
import { articlesData } from "./articlesData";

const Articles = () => {
  return (
    <div className="page">
      <div className="page-text">
        <h1>מאמרים</h1>
        <p>
          ברוכים הבאים לאוסף המאמרים שלי, שמוקדשים לדרכי טיפול במגוון הפרעות
          ואתגרים נפשיים באמצעות פסיכותרפיה קוגניטיבית-התנהגותית (CBT). כאן
          תוכלו ללמוד על חרדה, דיכאון, נויסות רגשי, ועוד. כל מאמר מספק הסבר
          מעמיק על ההפרעה והטכניקות הייחודיות של CBT המוכחות כיעילות בטיפול. אני
          מזמינה אתכם לקרוא ולהכיר את הדרכים שבהן ניתן לשפר את איכות החיים
          ולמצוא איזון נפשי.
        </p>

        <div className="articles">
          {articlesData.map((article) => (
            <div key={article.id} className="article">
              <picture>
                <source srcSet={article.image} type="image/avif" />
                <source srcSet={article.imageAlt} type="image/png" />
                <img alt={article.title} src={article.imageAlt} />
              </picture>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a
                className="read-more-button"
                onClick={() => (window.location.href = article.link)}
              >
                קרא עוד
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
