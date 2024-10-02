import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // prettier-ignore
    <header className="header">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleMenu}>בית</Link>
            <Link to="/about" onClick={toggleMenu}>אודות</Link>
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
        <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    </header>
  );
};

export default Header;
