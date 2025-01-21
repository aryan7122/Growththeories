// src/components/ValidationPage.js
import React from "react";
import "./PredictYourGrowth.scss";
import bannerImg from '../../../../assets/service/Creative experiment-bro 1.svg'
const PredictYourGrowth = () => {
    return (
        <div className="validation_PredictYourGrowth">
            <div className="content">
                <span className="badge">Predict your growth</span>
                <h1>
                    <span className="highlight">We fuse data-driven insights with </span> fast-paced testing to optimize growth strategies
                </h1>
                <p>
                    Our Growth Prediction Modeling service uses advanced data analytics to forecast your business's potential for expansion. Identify future opportunities, optimize decision-making, and ensure sustainable growth
                </p>
                <div className="buttons">
                    <button className="start-btn">Start Predicting Your Growth</button>
                    <button className="see-btn">Learn More About Our Methodology</button>
                </div>
            </div>
            <div className="image-container">
                <img
                    src={bannerImg}
                    alt="Business Validation"
                />
            </div>
        </div>
    );
};

export default PredictYourGrowth;
