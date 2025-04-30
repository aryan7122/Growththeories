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
                        <li><p onClick={() => HandleNavigation('/acquisition')}>Acquisition</p></li>
                        <li><p onClick={() => HandleNavigation('/activation')}>Activation</p></li>
                        <li><p onClick={() => HandleNavigation('/retention-engagement')}>Retention </p></li>
                        <li><p onClick={() => HandleNavigation('/monetization')}>Monetization</p></li>
                        <li><p onClick={() => HandleNavigation('/analytics-optimization')}>Analytics & Optimization</p></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Theory</h4>
                    <ul>
                        <li><p onClick={() => HandleNavigation('/')}>General Theory of Marketing</p></li>
                        <li><p onClick={() => HandleNavigation('/')}>Social Identity Theory</p></li>
                        <li><p onClick={() => HandleNavigation('/')}>Repeat-Buying Theory</p></li>
                        <li><p onClick={() => HandleNavigation('/')}>Gatekeeping Theory</p></li>
                        <li><p onClick={() => HandleNavigation('/')}>Social Marketing Theory</p></li>
                        <li><p onClick={() => HandleNavigation('/')}>More Theories <span>&#9660;</span></p></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><p onClick={() => HandleNavigation('/live-chat')}>Live Chat</p></li>
                        <li><p onClick={() => HandleNavigation('/customer-support')}>Customer Support</p></li>
                        <li><p onClick={() => HandleNavigation('/help-centre')}>Help Centre</p></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><p onClick={() => HandleNavigation('/about-us')}>About Us</p></li>
                        <li><p onClick={() => HandleNavigation('/careers')}>Careers</p></li>
                        <li><p onClick={() => HandleNavigation('/contact')}>Contact Us</p></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Growtheories. All rights reserved.</p>
                <div className="footer-legal">
                    <div className="footer-socials">
                        <a onClick={() => HandleNavigation('/terms-of-use')}>Terms of use</a>
                        <a onClick={() => HandleNavigation('/privacy-policy')}>Privacy Policy</a>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#ffffff" stroke-width="1.5"></path>
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bgTextLast_GrowTheories'>
                <img src={GrowTheories} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
