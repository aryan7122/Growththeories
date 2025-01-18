import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';
import { OutsideClick } from '../utils/common/OutsideClick';
import CustomDropdown from '../utils/common/CustomDropdown';
import BlogImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (3).svg'
import CareerImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (2).svg'
import ContactImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (1).svg'
import aboutImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (4).svg'
import grothImg from '../assets/Navbar/Growth Tracks.svg'
import gpmImg from '../assets/Navbar/Creative experiment-bro 1.svg'
import vaImg from '../assets/Navbar/Consulting-cuate 2.svg'
import gtImg from '../assets/Navbar/Environmental audit-rafiki 1.svg'
const languageOptions = [
    'English', 'Spanish', 'French', 'German',
    'Hindi', 'Italian', 'Arabian', 'Roman',
    'Portuguese', 'Dutch'
];
const Navbar = () => {
    const servicesDropdown = OutsideClick();
    const companyDropdown = OutsideClick();
    const productsDropdown = OutsideClick();
    const [isFixed, setIsFixed] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const toggleDisplay = () => {
        setIsDisplayed(!isDisplayed);
        if (isDisplayed === false) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLanguageChange = (selected) => {
        console.log("Selected Language:", selected);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isFixed ? 'isFixedNav' : ''}`} >
            <div className={`mobile_flex_toggle`} >
                <div className="navbar__logo">
                    <img src={logo} alt="GrowthTheories Logo" />
                </div>
                <button
                    className="navbar__toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>
            </div>
            <ul className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>
                <li className="navbar__dropdown" ref={servicesDropdown.ref}>
                    <a href="#services" ref={servicesDropdown.buttonRef} onClick={servicesDropdown.handleToggle}>
                        Services
                        {servicesDropdown.isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </a>

                    {servicesDropdown.isOpen && (
                        <div className="dropdown dropdownS">
                            <div className="right_drop">
                                <div className="dropdown__item">
                                    <div className='oneNavBar'>
                                        <div>
                                            <h4>Growth Tracks</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img src={grothImg} alt="" />
                                    </div>
                                </div>
                                <div className="dropdown__item">
                                    <div className='oneNavBar'>
                                        <div>
                                            <h4>Growth Prediction Modelling</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img className='imgAbout' src={gpmImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown__item">
                                <div className="two_list">
                                    <div className="firstNavbar">
                                        <div>
                                            <h4>Validation As A Servivce</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img src={vaImg} alt="" />
                                    </div>
                                    <div className="firstNavbar">
                                        <div>
                                            <h4>Growth Audit</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img src={gtImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
                <li className="navbar__dropdown" ref={productsDropdown.ref}>
                    <a href="#company" ref={productsDropdown.buttonRef} onClick={productsDropdown.handleToggle}>
                        Products
                        {productsDropdown.isOpen ? (

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </a>
                    {/* {productsDropdown.isOpen && (
                        <div className="dropdown">
                            <div className="dropdown__item">Blog</div>
                            <div className="dropdown__item">Contact Us</div>
                            <div className="dropdown__item">About Us</div>
                            <div className="dropdown__item">Career</div>
                        </div>
                    )} */}
                </li>
                <li><a href="#customer">Customer</a></li>
                <li className="navbar__dropdown" ref={companyDropdown.ref}>
                    <a href="#company" ref={companyDropdown.buttonRef} onClick={companyDropdown.handleToggle}>
                        Company
                        {companyDropdown.isOpen ? (

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </a>
                    {companyDropdown.isOpen && (
                        <div className="dropdown">
                            <div className="dropdown__item">
                                <div className="two_list">
                                    <div className="firstNavbar">
                                        <div>
                                            <h4>Blog</h4>
                                            <p>Read Recent Blogs</p>
                                        </div>
                                        <img src={BlogImg} alt="" />
                                    </div>
                                    <div className="firstNavbar">
                                        <div>
                                            <h4>Career</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img src={CareerImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="right_drop">
                                <div className="dropdown__item">
                                    <div className='oneNavBar'>
                                        <div>
                                            <h4>Contact us</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img src={ContactImg} alt="" />
                                    </div>
                                </div>
                                <div className="dropdown__item">
                                    <div className='oneNavBar'>
                                        <div>
                                            <h4>About us</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                        <img className='imgAbout' src={aboutImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            {/* {!isMobileMenuOpen && */}
            <div className="navbar__actions">
                <CustomDropdown
                    options={languageOptions}
                    defaultValue="Language"
                    onChange={handleLanguageChange}
                />
                <button className="btn btn-secondary">Contact Us</button>
            </div>
            {/* } */}

        </nav>
    );
};

export default Navbar;
////