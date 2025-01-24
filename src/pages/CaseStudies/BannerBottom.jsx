import React from 'react';
import './BannerBottom.scss';
import review from '../../assets/company/Review List.svg'
const BannerBottom = () => {
    return (
        <div className="banner-BannerBottom">
            <div className="content">
                <h1>Start building high performing growth & grow your business fast.</h1>

                <div className="reviews">
                    <img src={review} alt="" />
                </div>

            </div>
            <div className="buttons">
                <button className="contact-btn">Contact Us Now</button>
                <button className="demo-btn">Try live demo ↗</button>
            </div>
        </div>
    );
};

export default BannerBottom;
