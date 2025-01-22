// OurProcess.jsx
import React, { useState } from 'react';
import './AuditProcess.scss';

const AuditProcess = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const steps = [
        {
            id: 1,
            title: 'Business Check',
            content: 'We dive into your business and uncover the problems you are dealing with. Ultimately the goal is to how the company is working on the revenue point of view.',
        },
        {
            id: 2,
            title: 'Analytics Deep dive',
            content: 'After gathering the data, our team of experts performs a deep dive into each metric. We evaluate how effective each of your growth strategies has been, from marketing and sales to customer engagement and retention. We identify leaks in your sales funnel, ineffective marketing channels, and underperforming campaigns that are holding your growth back',
        },
        {
            id: 3,
            title: 'Tech Stack',
            content: 'This step is where we provide real, actionable changes that will make an immediate impact on your business’s growth. The recommendations are tailored to your company’s size, market, and unique goals, making them highly relevant and effective',
        },
        {
            id: 4,
            title: 'Interviews',
            content: 'The Success of the company depends on the how much value and efforts we provide for our loyal customers. With doing an in depth interview with our clients, we want to know how can we improve customer journey till the customer reaches a specified goal.',
        },
        {
            id: 5,
            title: 'Act For Growth',
            content: 'Many companies fail to execute strategies due to lack of support. By providing hands-on assistance during the implementation process, we ensure that your business can fully leverage the audit’s findings and implement them without any hiccups',
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
        <div className="audit-process">
            <div className='process_top_card'>
                <div className="left-content">
                    <p className="subtitle">OUR PROCESS</p>
                    <h2 className="title">Our <span> Growth audit </span> Approach</h2>
                    <p className="description">Our 6-step approach to get you a better results</p>
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

export default AuditProcess;