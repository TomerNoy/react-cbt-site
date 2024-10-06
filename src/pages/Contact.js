import React from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div>
      <h1>ניתן ליצור קשר בדרכים הבאות</h1>

      <ul className="contact-list">
        <li className="contact-item">
          <div
            className="list-tile"
            onClick={() =>
              (window.location.href = "mailto:inbalshaul@gmail.com")
            }
          >
            <i className="fa-solid fa-envelope contact-icon email-icon"></i>
            <span className="contact-title">inbalshaul@gmail.com</span>
            <span className="contact-trailing">אימייל</span>
          </div>
        </li>
        <li className="contact-item">
          <div
            className="list-tile"
            onClick={() => (window.location.href = "tel:+972587018070")}
          >
            <i className="fa-solid fa-phone contact-icon phone-icon"></i>
            <span className="contact-title">+972 58 701 8070</span>
            <span className="contact-trailing">טלפון</span>
          </div>
        </li>
        <li className="contact-item">
          <div
            className="list-tile"
            onClick={() => (window.location.href = "https://wa.me/0987654321")}
          >
            <i className="fa-brands fa-whatsapp contact-icon whatsapp-icon"></i>
            <span className="contact-title">Whatsapp</span>
            <span className="contact-trailing">וואטסאפ</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
