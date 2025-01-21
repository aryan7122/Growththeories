// src/components/ValidationPage.js
import React from "react";
import "./ValidationPage.scss";
import bannerImg from '../../../../assets/service/Consulting-cuate 2.svg'
const ValidationPage = () => {
    return (
        <div className="validation-page">
            <div className="content">
                <span className="badge">VALIDATE YOUR NEW BUSINESS IDEAS</span>
                <h1>
                    <span className="highlight">De-Risk Your Ideas</span> With Expert-Led
                    Validation
                </h1>
                <p>
                    Validate Your Business Ideas Through Rapid Experimentation And
                    Real-World User Testing. Our Validation As A Service Helps You Make
                    Informed Decisions, Reduce Risk, And Accelerate Growth.
                </p>
                <div className="buttons">
                    <button className="start-btn">Start Validating Today</button>
                    <button className="see-btn">See How It Works</button>
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

export default ValidationPage;
