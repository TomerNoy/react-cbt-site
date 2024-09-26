// Footer.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <p className="copyright">copyright © Tomer Noy 2024</p>
                <a
                    href="https://wa.me/972587018070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    דברו איתי <FaWhatsapp className="whatsapp-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
