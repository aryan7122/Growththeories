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
        setIsWhite(false);
        setIsWhite2(false);
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

    // console.log('isFixed', isFixed)

    const getActiveClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

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
                    {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#4a4a4a" fill="none">
                        <path d="M10.2471 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7532 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1182 4.37524 16.3302 4.25283C17.3966 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7472 7.66981C19.6248 7.88183 19.421 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6248 16.1179 19.7472 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3965 20.3626 16.3302 19.7469C16.1182 19.6246 15.9143 19.4208 15.5067 19.013L13.7534 17.2598L13.7533 17.2597C12.9272 16.4336 12.5136 16.02 12.0001 16.02C11.4867 16.02 11.073 16.4336 10.2469 17.2598L10.2469 17.2598L8.49353 19.013C8.0859 19.4208 7.88208 19.6246 7.67005 19.7469C6.60377 20.3626 5.72534 19.7516 4.98693 19.013C4.2484 18.2746 3.63744 17.3963 4.25307 16.3299C4.37549 16.1179 4.5793 15.9141 4.98693 15.5065L6.74044 13.7529C7.56681 12.9266 7.98 12.5134 7.98 11.9999C7.98 11.4864 7.5666 11.073 6.74022 10.2466L4.98685 8.49321C4.57928 8.08563 4.37548 7.88183 4.25307 7.66981C3.63741 6.60345 4.24845 5.72518 4.98693 4.98669C5.72542 4.24821 6.60369 3.63716 7.67005 4.25283C7.88207 4.37524 8.08593 4.5791 8.49352 4.98668L8.49353 4.98669L10.2471 6.7402Z" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#4a4a4a" fill="none">
                        <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
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
                                                        <h4 className={getActiveClass("/acquisition")} onClick={() => HandleNavigation('/acquisition')}>Acquisition</h4>
                                                        <p>Getting New Customers</p>
                                                    </div>
                                                    <img src={AcquisitionImg} alt="" />
                                                </div>
                                            </div>
                                            <div className="dropdown__item">
                                                <div className="two_list two_list1">
                                                    <div className="firstNavbar">
                                                        <div>
                                                            <h4 className={getActiveClass("/activation-conversion")} onClick={() => HandleNavigation('/activation-conversion')}>Activation & Conversion</h4>
                                                            <p>Activate new and existing customers</p>
                                                        </div>
                                                        <img src={ActivationConversionImg} alt="" />
                                                    </div>
                                                    <div className="firstNavbar">
                                                        <div>
                                                            <h4 className={getActiveClass("/monetization")} onClick={() => HandleNavigation('/monetization')}>Monetization</h4>
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
                                                        <h4 className={getActiveClass("/retention-engagement")} onClick={() => HandleNavigation('/retention-engagement')}>Retention & Engagement</h4>
                                                        <p>Keeping users active and loyal</p>
                                                    </div>
                                                    <img src={RetentionEngagementImg} alt="" />
                                                </div>
                                                <div className="firstNavbar">
                                                    <div>
                                                        <h4 className={getActiveClass("/analytics-optimization")} onClick={() => HandleNavigation('/analytics-optimization')}>Analytics & Optimization</h4>
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
                                    <div className={getActiveClass("/acquisition")} onClick={() => HandleNavigation('/acquisition')}>Acquisition</div>
                                    <div className={getActiveClass("/activation-conversion")} onClick={() => HandleNavigation('/activation-conversion')}>Activation & Conversion</div>
                                    <div className={getActiveClass("/monetization")} onClick={() => HandleNavigation('/monetization')}>Monetization</div>
                                    <div className={getActiveClass("/retention-engagement")} onClick={() => HandleNavigation('/retention-engagement')}>Retention & Engagement</div>
                                    <div className={getActiveClass("/analytics-optimization")} onClick={() => HandleNavigation('/analytics-optimization')}>Analytics & Optimization</div>
                                    <div className={getActiveClass("/services")} onClick={() => HandleNavigation('/services')}>All services</div>
                                </div>
                            </>
                        )}
                    </li>
                    <li className="navbar__dropdown" ref={productsDropdown.ref}>
                        <a href="#Theories" ref={productsDropdown.buttonRef} onClick={productsDropdown.handleToggle}>
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