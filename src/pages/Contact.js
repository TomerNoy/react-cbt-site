import React, { useRef, useEffect, useState } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import contactImage from "../assets/contact.avif";
import contactImageAlt from "../assets/contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init("_lr6SrcAsRFXsdiKb");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q69h04f",
        "template_b9a3srl",
        form.current,
        "_lr6SrcAsRFXsdiKb"
      )
      .then(
        () => {
          setStatus("success");
        },
        (error) => {
          setStatus("failure");
        }
      );
  };

  return (
    <div className="contact-page">
      <picture>
        <source srcSet={contactImage} type="image/avif" />
        <source srcSet={contactImageAlt} type="image/png" />
        <img src={contactImage} alt="Contact" className="contact-background" />
      </picture>

      <div className="text-container">
        <h1>לשיחת ייעוץ ללא עלות, צרו איתי קשר</h1>
        <ul className="contact-list">
          <li className="contact-item">
            <div
              className="list-tile"
              onClick={() => window.open("tel:+972587018070", "_blank")}
            >
              <span className="contact-title">058-701-8070</span>
              <i className="fa-solid fa-phone contact-icon phone-icon"></i>
            </div>
          </li>

          <li className="contact-item">
            <div
              className="list-tile"
              onClick={() =>
                window.open("mailto:inbalshaul.cbt@gmail.com", "_blank")
              }
            >
              <span className="contact-title">InbalShaul.CBT@Gmail.com</span>
              <i className="fa-solid fa-envelope contact-icon email-icon"></i>
            </div>
          </li>
        </ul>
        <h2>או השאירו פניה ואחזור אליכם</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input
            className="text-input"
            type="text"
            name="user_name"
            placeholder="שם*"
            required
            onInvalid={(e) => e.target.setCustomValidity("אנא הזן את שמך.")}
            onInput={(e) => e.target.setCustomValidity("")}
          />

          <input
            className="text-input"
            type="email"
            name="user_email"
            placeholder="דואר אלקטרוני*"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("אנא הזן כתובת דוא״ל חוקית.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />

          <input
            className="text-input"
            type="tel"
            name="user_phone"
            placeholder="טלפון"
            pattern="[0-9]{10}"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("אנא הזן מספר טלפון בן 10 ספרות.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />

          <textarea
            className="text-input text-input-long"
            name="message"
            placeholder="אני רוצה להתייעץ לגבי..."
            required
            onInvalid={(e) => e.target.setCustomValidity("אנא הזן הודעה.")}
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <input className="submit" type="submit" value="שליחה" />
        </form>
        {status === "success" && (
          <div className="popup success">
            <h2>ההודעה נשלחה בהצלחה !</h2>
          </div>
        )}
        {status === "failure" && (
          <div className="popup failure">
            <p>ארעה שגיאה, אנא צור קשר בדרך אחרת!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
