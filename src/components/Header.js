import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.avif";
import logoAlt from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.location.href = "/";
  };

  return (
    // prettier-ignore
    <header className="header">
      <picture onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <source srcSet={logo} type="image/avif" />
        <source srcSet={logoAlt} type="image/png" />
      </picture>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>בית</Link>
        <Link to="/about" onClick={toggleMenu}>מי אני</Link>
        <Link to="/cbt" onClick={toggleMenu}>CBT</Link>

        <div className="dropdown">
          <Link to="/articles" onClick={toggleMenu}>מאמרים</Link>
          <div className="dropdown-content">
            <Link to="/articles/emotional-eating" onClick={toggleMenu}>אכילה רגשית</Link>
            <Link to="/articles/emotional-regulation" onClick={toggleMenu}>ויסות רגשי</Link>
            <Link to="/articles/anxiety" onClick={toggleMenu}>חרדה</Link>
            <Link to="/articles/ocd" onClick={toggleMenu}>OCD</Link>
            <Link to="/articles/depression" onClick={toggleMenu}>דיכאון</Link>
          </div>
        </div>

        <Link to="/contact" onClick={toggleMenu}>צור קשר</Link>
      </nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
