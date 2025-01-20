import React, { useEffect, useRef, useState } from 'react';
import './OurProcess.scss';

const processSteps = [
    {
        id: 1,
        phase: 'Discovery',
        title: 'Research',
        content: `In The Discovery Phase, We Take The Time To Understand Your Business Inside Out. We Work Closely With You To Identify Your Key Challenges, Growth Goals, And Pain Points.

        Through A Series Of Workshops, Interviews, And Analysis, We Gather Critical Insights That Will Guide The Entire Growth Strategy. This Helps Us Align Our Efforts With Your Business Objectives And Ensures That Every Step We Take Is Tailored To Your Unique Needs.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut turpis eget orci suscipit feugiat. Curabitur eget augue vel erat gravida tincidunt. Proin suscipit nunc ut arcu scelerisque, id laoreet libero scelerisque. Fusce nec velit eget nulla ultrices pretium. Vestibulum varius, ipsum non viverra tincidunt, nisi lacus fermentum orci, nec pellentesque risus tortor id mauris. Phasellus ac quam sed neque sollicitudin vehicula. Aenean at sapien vel orci varius ullamcorper. Vivamus et felis sit amet turpis dictum scelerisque. Donec efficitur risus vel ligula vestibulum, a fringilla justo venenatis.
        `,


    },
    {
        id: 2,
        phase: 'Analysis',
        title: 'Exploration',
        content: `Once We’ve Gathered Insights From The Discovery Phase, We Dive Deep Into Data Analysis. Our Team Evaluates Your Current Performance, Market Trends, Audience Behaviors, And Competitors.

        By Leveraging Advanced Analytics, We Uncover Opportunities For Growth And Identify The Key Areas Where Our Efforts Will Have The Most Significant Impact. This Data-Driven Approach Allows Us To Create A Strategic Roadmap Tailored To Achieving Your Business Goals.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut turpis eget orci suscipit feugiat. Curabitur eget augue vel erat gravida tincidunt. Proin suscipit nunc ut arcu scelerisque, id laoreet libero scelerisque. Fusce nec velit eget nulla ultrices pretium. Vestibulum varius, ipsum non viverra tincidunt, nisi lacus fermentum orci, nec pellentesque risus tortor id mauris. Phasellus ac quam sed neque sollicitudin vehicula. Aenean at sapien vel orci varius ullamcorper. Vivamus et felis sit amet turpis dictum scelerisque. Donec efficitur risus vel ligula vestibulum, a fringilla justo venenatis.`,
    },
    {
        id: 3,
        phase: 'Implementation',
        title: 'Deployment',
        content: `With a solid strategy in place, we move into the implementation phase, where we begin executing the customized growth tactics designed specifically for your business.

           Whether it’s launching targeted marketing campaigns, optimizing conversion rates, or enhancing customer engagement, our team works hands-on to bring the plan to life. We keep you in the loop at every stage, ensuring transparency and collaboration as we execute the strategy with precision


        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut turpis eget orci suscipit feugiat. Curabitur eget augue vel erat gravida tincidunt. Proin suscipit nunc ut arcu scelerisque, id laoreet libero scelerisque. Fusce nec velit eget nulla ultrices pretium. Vestibulum varius, ipsum non viverra tincidunt, nisi lacus fermentum orci, nec pellentesque risus tortor id mauris. Phasellus ac quam sed neque sollicitudin vehicula. Aenean at sapien vel orci varius ullamcorper. Vivamus et felis sit amet turpis dictum scelerisque. Donec efficitur risus vel ligula vestibulum, a fringilla justo venenatis.`,
    },
    {
        id: 4,
        phase: 'Optimization',
        title: 'Enhancement',
        content: `Growth is a continuous process, and that’s why optimization is key. In this phase, we continuously monitor performance metrics, test new ideas, and refine tactics to maximize results

Using an iterative approach, we fine-tune your growth strategy based on real-time data and feedback, ensuring sustainable and scalable growth. The goal is to keep adapting and improving, making sure you stay ahead of the competition and on track for long-term success.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut turpis eget orci suscipit feugiat. Curabitur eget augue vel erat gravida tincidunt. Proin suscipit nunc ut arcu scelerisque, id laoreet libero scelerisque. Fusce nec velit eget nulla ultrices pretium. Vestibulum varius, ipsum non viverra tincidunt, nisi lacus fermentum orci, nec pellentesque risus tortor id mauris. Phasellus ac quam sed neque sollicitudin vehicula. Aenean at sapien vel orci varius ullamcorper. Vivamus et felis sit amet turpis dictum scelerisque. Donec efficitur risus vel ligula vestibulum, a fringilla justo venenatis.`,
    },
];

const OurProcess = () => {
    const [scrollProgress, setScrollProgress] = useState(
        Array(processSteps.length).fill(0)
    );
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, processSteps.length);

        const handleDivScroll = (index) => {
            if (contentRefs.current[index]) {
                const scrollTop = contentRefs.current[index].scrollTop;
                const scrollHeight = contentRefs.current[index].scrollHeight - contentRefs.current[index].clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;

                setScrollProgress((prevProgress) => {
                    const newProgress = [...prevProgress];
                    newProgress[index] = progress;
                    return newProgress;
                });
            }
        };

        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.addEventListener('scroll', () => handleDivScroll(index));
            }
        });

        return () => {
            contentRefs.current.forEach((ref, index) => {
                if (ref) {
                    ref.removeEventListener('scroll', () => handleDivScroll(index));
                }
            });
        };
    }, []);

    return (
        <div className="our-process-container">
            {processSteps.map((step, index) => (
                <div key={step.id} className="process-step">
                    <div className="process-header">
                        <span className="process-number">OUR PROCESS 0{step.id}</span>
                        <h2 className="process-phase">{step.phase}</h2>
                        <h3 className="process-title">{step.title}</h3>
                        <span className="keep_scrolling">
                            <div className="circular-progress-container">
                                <svg width="50" height="50">
                                    <circle
                                        cx="24"  // Center x-coordinate
                                        cy="24"  // Center y-coordinate
                                        r="20"   // Reduced radius (original 45)
                                        stroke="#B5B5B5"
                                        strokeWidth="3"  // Adjusting stroke width for smaller size
                                        fill="none"
                                        strokeDasharray="128" // Updated circumference for new radius (2 * π * r)
                                        strokeDashoffset={128 - (scrollProgress[index] / 100) * 128} // Dynamic update
                                        className="progress-ring"
                                    />
                                </svg>

                                <div className="progress-text">
                                    {/* {Math.round(scrollProgress[index])} */}
                                </div>
                            </div>
                            <h4>
                                {scrollProgress[index] === 0
                                    ? 'Start Scrolling'
                                    : Math.round(scrollProgress[index]) >= 94
                                        ? 'End Scrolling'
                                        : 'Keep Scrolling'}
                            </h4>

                        </span>
                    </div>
                    <div
                        className="process-content"
                        ref={(el) => (contentRefs.current[index] = el)}
                    >
                        <p>{step.content}</p>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default OurProcess;
