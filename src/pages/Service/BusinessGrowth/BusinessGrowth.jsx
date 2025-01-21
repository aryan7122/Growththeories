import React from 'react';
import './BusinessGrowth.scss';
import img1 from '../../../assets/service/icon/business-3d-businessman-meditating-with-bitcoins-in-hands 1.svg'
import img2 from '../../../assets/service/icon/Group 1000007749@2x.svg'
import img3 from '../../../assets/service/icon/Group 1000007750.svg'
const BusinessGrowth = () => {
    return (
        <div className="business-growth-container">
            <div className="content">
                <h1>Ready To Grow Your Business?</h1>
                <p>
                    We're here to help. Let's discuss how we can work together to drive your business growth.
                </p>
                <button className="contact-btn">Contact Us Now</button>
            </div>
            <div className="images">
                <img src={img2} alt="Rocket" />
                <img src={img1} alt="Business" />
                <img src={img3} alt="Trophy" />
            </div>
        </div>
    );
};

export default BusinessGrowth;