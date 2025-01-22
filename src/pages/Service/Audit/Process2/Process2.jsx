import React from "react";
import "./Process2.scss";

const Process2 = () => {
    return (
        <div className="process2">
            <div className="p2_header">
                <div>
                    <span className="badge">OUR PROCESS</span>
                    <h1>CLEAR & SIMPLE <br /> PROCESS</h1>
                </div>
                <p className="subtext">Our 4-step approach to get you a better results</p>

            </div>
            <div className="steps">
                <div className="step">
                    <h2>BUSINESS <br /> CHECK</h2>
                    <p className="p2_p1">Lorem Ipsum Dolor Sit Amet Consectetur. Dolor Gravida Mattis Quis Platea.</p>
                </div>
                <div className="step">
                    <h2>ANALYTICS <br /> DEEP DIVE</h2>
                    <p className="p2_p2">Lorem Ipsum Dolor Sit Amet Consectetur. Mi Diam Malesuada Lectus Velit.</p>
                </div>
                <div className="step">
                    <h2>TECH <br /> STACK</h2>
                    <p className="p2_p3">Lorem Ipsum Dolor Sit Amet Consectetur. Convallis Gravida Metus Eu.</p>
                </div>
                <div className="step">
                    <h2>ART OF <br /> GROWTH</h2>
                    <p className="p2_p4">Lorem Ipsum Dolor Sit Amet Consectetur. Varius Bibendum Odio Mattis Eu.</p>
                </div>
            </div>

            <div className="timeline">
                <div className="das_p2"></div>
                <div className="dotP2"></div>
                <span className="response">Response Within A Day</span>
                <div className="dotP2"></div>
                <span className="response">Response Within 3 Day</span>
                <div className="dotP2"></div>
                <span className="response">Response Within 3 Day</span>
                <div className="dotP2"></div>
            </div>
        </div>
    );
};

export default Process2;
