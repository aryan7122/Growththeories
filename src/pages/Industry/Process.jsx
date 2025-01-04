import React, { useRef } from "react";
import './Process.scss';
import handImg from '../../assets/hand.svg'

const stepsData = [
    {
        id: 1,
        title: "Discovery & Validation",
        description: `We begin with extensive research to understand your market, target audience, and current growth performance. We validate your product's market fit using the Lean Startup method, ensuring we have clear data on what resonates with customers.`,
    },
    {
        id: 2,
        title: "Growth Strategy",
        description: `Once we've validated your product and market fit, we apply the Pirate Framework (AARRR) to map out a full customer journey from acquisition to revenue generation. Each stage is optimized for growth based on your unique business model.`,
    },
    {
        id: 3,
        title: "Execution & Testing",
        description: `After creating a growth strategy, we execute and rigorously test to ensure success. We use data-driven insights to iterate and perfect your growth engine.`,
    },
];

const Process = () => {
    const scrollContainerRef = useRef(null);

    const handleMouseDown = (e) => {
        const container = scrollContainerRef.current;
        container.isDragging = true;
        container.startX = e.pageX - container.offsetLeft;
        container.scrollLeftStart = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
        const container = scrollContainerRef.current;
        if (!container.isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - container.startX) * 2; // Adjust scrolling speed
        container.scrollLeft = container.scrollLeftStart - walk;
    };

    const handleMouseUp = () => {
        const container = scrollContainerRef.current;
        container.isDragging = false;
    };
    return (
        <section className="process">
            <div className="process-header">
                {/* <h1>
                    <span className="highlight">oh</span> & the process <br /> is simple.
                </h1>
                <p className="swear">We Swear!</p> */}
            </div>

            <div className='card-processes'>


                <div className="process-navigation">
                    <p>DRAG OR SWIPE TO GO THROUGH THE PROCESS.</p>
                    <div>
                        <span className="swipe-icon">↔</span>
                        <img src={handImg} alt="" />
                    </div>
                </div>
                <div
                    className="process-steps"
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                >
                    {stepsData.map((step) => (
                        <div className="step" key={step.id}>
                            <h2>{step.id}</h2>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <div className="rightBorder"></div>
                        </div>
                    ))}
                </div>

            </div>
                <div className="process-footer">
                    <p>A PROCESS THAT LEAVES OUT POTENTIAL MISTAKES.</p>
                    <button className="btn-start">Start your project here</button>
                </div>
        </section>
    );
};

export default Process;
