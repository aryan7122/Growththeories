// OurProcess.jsx
import React, { useState } from 'react';
import './OurProcess.scss';

const PredictOurProcess = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const steps = [
        {
            id: 1,
            title: 'Data Collection',
            content: 'We gather key data from your business, such as customer insights, sales history, and market trends. This helps us tailor growth strategies that are data-driven, ensuring smarter decisions and optimized outcomes.',
        },
        {
            id: 2,
            title: 'Model Creation',
            content: 'We build models using the data collected, ensuring accuracy and alignment with your business objectives.',
        },
        {
            id: 3,
            title: 'Forecasting',
            content: 'Using the created models, we forecast trends, helping you stay ahead in the market and optimize your growth strategies.',
        },
        {
            id: 4,
            title: 'Strategy Implementation',
            content: 'We implement the strategies tailored for your business, ensuring seamless execution and measurable results.',
        },
    ];

    const handleStepClick = (index) => {
        setActiveIndex(index);
    };

    const getVisibleSteps = () => {
        const visibleSteps = [];
        for (let i = 0; i < 2; i++) {
            visibleSteps.push(steps[(activeIndex + i) % steps.length]);
        }
        return visibleSteps;
    };

    return (
        <div className="our-process">
            <div className='process_top_card'>
                <div className="left-content">
                    <p className="subtitle">OUR PROCESS</p>
                    <h2 className="title">How We Build Your <span>Growth Prediction</span> Model</h2>
                    <p className="description">Our 4-step approach to predict your business growth</p>
                </div>

                <div className="right-content">
                    <div className="cards">
                        {getVisibleSteps().map((step, index) => (
                            <div key={step.id} className="card">
                                <div className="card-header">
                                    <div className="step-number">{step.id}</div>
                                    <h3 className="card-title">{step.title}</h3>
                                </div>
                                <p className="card-content">{step.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="steps-navigation">
                <div className="das_lineOur"></div>
                <>
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`step-indicator ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleStepClick(index)}
                        >
                            <div className="circle">{step.id}</div>
                            <p className="step-title">{step.title}</p>
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
};

export default PredictOurProcess;