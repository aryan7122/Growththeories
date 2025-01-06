import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li>Growth Tracks</li>
                        <li>Validation As Service</li>
                        <li>Growth Audit</li>
                        <li>Growth Prediction Modelling</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Product</h4>
                    <ul>
                        <li>Digital Product Experts</li>
                        <li>Digital Product Studio</li>
                        <li>Build Digital Products</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li>Live Chat</li>
                        <li>Customer Support</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li>Case Studies</li>
                        <li>FAQ's</li>
                        <li>Help Centre</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Growtheories. All rights reserved.</p>
                <div className="footer-socials">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-telegram"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
