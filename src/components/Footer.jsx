import React from 'react';
import './Footer.scss';
import GrowTheories from '../assets/card/Growtheories.svg'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const HandleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to top after navigation

        // Smooth scroll
        const element = document.getElementById([path]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="" onClick={() => HandleNavigation('/growth-tracks')}>Growth Tracks</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/validation-as-service')}>Validation As Service</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/growth-audit')}>Growth Audit</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/growth-prediction-modelling')}>Growth Prediction Modelling</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="" onClick={() => HandleNavigation('/digital-product-experts')}>Digital Product Experts</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/digital-product-studio')}>Digital Product Studio</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/build-digital-products')}>Build Digital Products</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="" onClick={() => HandleNavigation('/live-chat')}>Live Chat</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/customer-support')}>Customer Support</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/terms-service')}>Terms Service</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/privacy-policy')}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="" onClick={() => HandleNavigation('/case-studies')}>Case Studies</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/faqs')}>FAQ's</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/help-centre')}>Help Centre</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="" onClick={() => HandleNavigation('/about-us')}>About Us</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/careers')}>Careers</a></li>
                        <li><a href="" onClick={() => HandleNavigation('/contact')}>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Growtheories. All rights reserved.</p>
                <div className="footer-socials">
                    {/* Social media icons here */}
                </div>
            </div>
            <div className='bgTextLast_GrowTheories'>
                <img src={GrowTheories} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
