import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.png';
import { OutsideClick } from '../utils/common/OutsideClick';
import CustomDropdown from '../utils/common/CustomDropdown';
import BlogImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (3).svg'
import CareerImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (2).svg'
import ContactImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (1).svg'
import aboutImg from '../assets/Navbar/vecteezy_3d-male-character-sitting-onsofa-andtvuggj (4).svg'
import AcquisitionImg from '../assets/Navbar/Acquisition.svg'
import MonetizationImg from '../assets/Navbar/Monetization.svg'
import ActivationConversionImg from '../assets/Navbar/Activation & Conversion.svg'
import RetentionEngagementImg from '../assets/Navbar/Retention & Engagement.svg'
import AnalyticsOptimizationImg from '../assets/Navbar/Analytics & Optimization.svg'
import { useLocation, useNavigate } from 'react-router-dom';

const languageOptions = [
    'English', 'Spanish', 'French', 'German',
    'Hindi', 'Italian', 'Arabian', 'Roman',
    'Portuguese', 'Dutch'
];
const Navbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isWhite, setIsWhite] = useState(false);
    const [isWhite2, setIsWhite2] = useState(false);
    const servicesDropdown = OutsideClick();
    const companyDropdown = OutsideClick();
    const productsDropdown = OutsideClick();
    const [isFixed, setIsFixed] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const location = useLocation();

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

    const HandleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(!isMobileMenuOpen);
        window.scrollTo(0, 0);
        const element = document.getElementById([path]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        servicesDropdown.handleToggle();
        companyDropdown.handleToggle();
    };




    // Check if pathname includes specific keywords
    const specialPaths = ['/validation-service', 'predict-growth',];
    const isSpecialPath = specialPaths.some((path) => location.pathname.includes(path));
    // audit
    const audit = ['growth-audit'];
    const isAudit = audit.some((path) => location.pathname.includes(path));
    // audit
    const contact = [',,,'];
    const isContact = contact.some((path) => location.pathname.includes(path));
    // white bg
    const whiteBg = ['services'];
    const whiteBg2 = ['acquisition', 'analytics-optimization', 'monetization', 'retention-engagement'];
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || window.pageYOffset;
            console.log("Scroll position:", scrollTop);

            const matchedPath = whiteBg.some((path) => location.pathname.includes(path));
            const matchedPath2 = whiteBg2.some((path) => location.pathname.includes(path));

            if (scrollTop > 50) {
                setIsWhite(false);
                setIsWhite2(false);
            } else {
                setIsWhite(matchedPath);
                setIsWhite2(matchedPath2);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    console.log('isFixed', isFixed)

    return (
        <nav className={`navbar ${isMobileMenuOpen ? "openBg" : ""}  ${isFixed ? 'isFixedNav' : ''} ${isSpecialPath ? 'specialPath' : ''}  ${isAudit ? 'isAuditPath' : ''}  ${isContact ? 'isContact' : ''}  ${isWhite || isWhite2 ? 'isWhite' : ''}`} >
            <div className={`mobile_flex_toggle`} >
                <div className="navbar__logo">
                    <img
                        onClick={() => HandleNavigation('/')}
                        src={logo} alt="GrowthTheories Logo" />
                </div>
                <button
                    className={`navbar__toggle ${isWhite || isWhite2 ? 'isWhite_navbar__toggle ' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* {!isMobileMenuOpen && */}
            <div className="navbar__actions">
                <ul className={`navbar__links ${isMobileMenuOpen ? "open" : ""} ${isWhite ? 'isWhiteUl' : ''} ${isWhite2 ? 'isWhiteUl2' : ''}`}>
                    <li
                        className="navbar__dropdown" ref={servicesDropdown.ref}>
                        <a className={` ${servicesDropdown.isOpen ? "a_openClass" : ""}`}
                            href="#services" ref={servicesDropdown.buttonRef} onClick={servicesDropdown.handleToggle}>
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
                            <>
                                <div className="dropdown dropdownS">
                                    <div className='dropdown_services '>
                                        <div className="right_drop">
                                            <div className="dropdown__item">
                                                <div className='oneNavBar'>
                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/acquisition')}>Acquisition</h4>
                                                        <p>Getting New Customers</p>
                                                    </div>
                                                    <img src={AcquisitionImg} alt="" />
                                                </div>
                                            </div>
                                            <div className="dropdown__item">
                                                <div className="two_list two_list1">
                                                    <div className="firstNavbar">
                                                        <div>
                                                            <h4 onClick={() => HandleNavigation('/activation-conversion')}>Activation & Conversion</h4>
                                                            <p>Activate new and existing customers</p>
                                                        </div>
                                                        <img src={ActivationConversionImg} alt="" />
                                                    </div>
                                                    <div className="firstNavbar">
                                                        <div>
                                                            <h4 onClick={() => HandleNavigation('/monetization')}>Monetization</h4>
                                                            <p>Maximizing sales & revenue growth</p>
                                                        </div>
                                                        <img src={MonetizationImg} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown__item">
                                            <div className="two_list two_list2">
                                                <div className="firstNavbar">

                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/retention-engagement')}>Retention & Engagement</h4>
                                                        <p>Keeping users active and loyal</p>
                                                    </div>
                                                    <img src={RetentionEngagementImg} alt="" />
                                                </div>
                                                <div className="firstNavbar">
                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/analytics-optimization')}>Analytics & Optimization</h4>
                                                        <p>Tracking, measuring and scaling growth</p>
                                                    </div>
                                                    <img src={AnalyticsOptimizationImg} alt="" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <h4 className='btn_services' onClick={() => HandleNavigation('/services')}>All services</h4>
                                </div>
                                <div className="mobile_dropdown">
                                    <div className="div_item_m" onClick={() => HandleNavigation('/acquisition')}>Acquisition</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/activation-conversion')}>Activation & Conversion</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/monetization')}>Monetization</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/retention-engagement')}>Retention & Engagement</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/analytics-optimization')}>Analytics & Optimization</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/services')}>All services</div>
                                </div>
                            </>
                        )}
                    </li>
                    <li className="navbar__dropdown" ref={productsDropdown.ref}>
                        <a href="" ref={productsDropdown.buttonRef} onClick={productsDropdown.handleToggle}>
                            Theories
                            {/* {productsDropdown.isOpen ? (

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )} */}
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
                    {/* <li className="navbar__dropdown"><a href="">Customer</a></li> */}
                    <li className="navbar__dropdown" ref={companyDropdown.ref}>
                        <a
                            className={` ${companyDropdown.isOpen ? "a_openClass" : ""}`}
                            href="#Company" ref={companyDropdown.buttonRef} onClick={companyDropdown.handleToggle}>
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
                            <>
                                <div className="dropdown">
                                    <div className="dropdown_services dropdown_services_Company">
                                        <div className="dropdown__item">
                                            <div className="two_list">
                                                <div className="firstNavbar">
                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/blog')}>Blog</h4>
                                                        <p>Read Recent Blogs</p>
                                                    </div>
                                                    <img src={BlogImg} alt="" />
                                                </div>
                                                <div className="firstNavbar">
                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/careers')}>Career</h4>
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
                                                        <h4 onClick={() => HandleNavigation('/contact')}>Contact us</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                                    </div>
                                                    <img src={ContactImg} alt="" />
                                                </div>
                                            </div>
                                            <div className="dropdown__item">
                                                <div className='oneNavBar'>
                                                    <div>
                                                        <h4 onClick={() => HandleNavigation('/about')}>About us</h4>
                                                        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                                    </div>
                                                    <img className='imgAbout' src={aboutImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile_dropdown">
                                    <div className="div_item_m" onClick={() => HandleNavigation('/blog')}>Blog</div>
                                    <div className="div_item_m">Career</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/contact')}>Contact us</div>
                                    <div className="div_item_m" onClick={() => HandleNavigation('/about')}>About us</div>
                                </div>
                            </>
                        )}
                    </li>
                    <button className="btn btn-secondary" onClick={() => HandleNavigation('/contact')}>Contact Us</button>
                </ul>
            </div>
            {/* } */}

        </nav>
    );
};

export default Navbar;
////