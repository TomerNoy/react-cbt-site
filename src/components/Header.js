import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>בית</Link>
                <Link to="/about" onClick={toggleMenu}>אודות</Link>
                <Link to="/cbt" onClick={toggleMenu}>CBT</Link>
                <Link to="/articles" onClick={toggleMenu}>מאמרים</Link>
                <Link to="/contact" onClick={toggleMenu}>צור קשר</Link>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;
