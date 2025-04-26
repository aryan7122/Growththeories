import React from 'react';
import './ActivationHero.scss';
import bannerImg from '../../../assets/Activation/Essential Strategies for Customer Activation and Enhanced Satisfaction - visual selection 1.svg'
import banner_florImg from '../../../assets/Activation/banner_flor.svg'
import { FaPhoneAlt } from "react-icons/fa";

const ActivationHero = () => {
    return (
        <div className="ActivationHero-section">
            <p className="subheading">LEADING AGENCY</p>
            <h1 className="main-heading">
                Essential Strategies For Customer Activation And Enhanced Satisfaction
            </h1>
            <p className="description">
                Unlocking Potential: Discover Proven Techniques To Deeply Engage Customers And Significantly 
                Enhance Their Overall Experience. Explore Innovative Strategies That Not Only Capture Attention But 
                Also Foster Lasting Relationships, Ensuring Your Customers Feel Valued And Understood.
            </p>
            <button className="cta-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                    <path d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg> Book A Call Now
            </button>
            <div className="img_activation">
                <img src={bannerImg} className='img_' alt="Essential Strategies img" />
                <img src={banner_florImg} className='banner_florImg' alt="banner_flor" />
            </div>
        </div>
    );
};

export default ActivationHero;
