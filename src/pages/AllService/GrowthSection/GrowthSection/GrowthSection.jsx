import React from 'react';
import './GrowthSection.scss';
import formulaImg from '../../../../assets/allService/farmula_gt.svg'
import { div } from 'framer-motion/client';

const GrowthSection = () => {
    return (
        <div className='main_growth-section'>
            <div className="growth-section">
                <div className="content-container">
                    <div className="left">
                        <img src={formulaImg} alt="Growth Formula" className="formula-image" />
                    </div>
                    <div className="right">
                        <h2>Ready To Elevate Your Business Potential </h2>
                        <h1><span role="img" aria-label="wave">👋</span><strong>With Approved Growth Theories</strong></h1>
                        <p>Let's talk about boosting your business growth.</p>
                        <button className="contact-btn">Contact Us Now</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default GrowthSection;
