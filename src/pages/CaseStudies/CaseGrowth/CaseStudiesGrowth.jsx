import React from 'react';
import './CaseStudiesGrowth.scss';
import img1 from '../../../assets/service/icon/business-3d-businessman-meditating-with-bitcoins-in-hands 1.svg'
import img2 from '../../../assets/service/icon/Group 1000007749@2x.svg'
import img3 from '../../../assets/service/icon/Group 1000007750.svg'
const CaseStudiesGrowth = () => {
    return (
        <div className="CaseStudiesGrowth-growth-container">
            <div className="box_conent_growth-CaseStudiesGrowth">
                <div className="content">
                    <h1>Ready To Grow Your Business?</h1>
                    
                    <button className="contact-btn">Contact Us Now</button>
                </div>
                <div className="images">
                    <img src={img2} alt="Rocket" />
                    <img src={img1} alt="Business" />
                    <img src={img3} alt="Trophy" />
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesGrowth;