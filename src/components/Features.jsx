import React from 'react';
import './Features.scss';
import pirateMetricsImg from '../assets/pirate-metrics.svg';
import leanImg from '../assets/rocet.png';
import productLedImg from '../assets/product-led.svg';
import bgGif from '../assets/taxi-browser-window-with-money-growth.gif';
const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#4a4a4a" fill="none">
    <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
const Features = () => {
    document.addEventListener("scroll", function () {
        const elements = document.querySelectorAll(".scroll-element");
        elements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight * 0.85) {  // Jab element viewport me aata hai
                element.classList.add("visible");
            }
        });
    });

    return (
        <section className="features">
            <div className="background-container">
                <div className="cardPirateMetrics scroll-element">
                    <h3>Pirate Metrics</h3>
                    <img src={pirateMetricsImg} alt="Pirate Metrics" />
                </div>
                <img className="background-image" src={bgGif} alt="Background" />
                <div className="navigation">
                    <span>{arrowRight} Pirate Metrics (AARRR)</span>
                    <span>{arrowRight} Growth Loops</span>
                    <span>{arrowRight} Lean Startup</span>
                </div>
                <div className="cardLeanStarUp">
                    <img src={leanImg} alt="Lean StarUp" />
                    <div className="LeanStarUp">
                        <h3>Lean Starup</h3>
                        <p>Whether you're a startup or a well-established business, Growththeories delivers growth hacking solutions that fuel both immediate and enduring success</p>
                    </div>
                </div>
                <div className="cardProductLedImg">
                    <h3>Product led growth</h3>
                    <img src={productLedImg} alt="Pirate Metrics" />
                </div>


            </div>

        </section>
    );
};

export default Features;
