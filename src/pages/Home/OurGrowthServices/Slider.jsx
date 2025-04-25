// Import React and required libraries
import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss';
import SliderImg1 from '../../../assets/slider/Generating new leads-rafik.svg'
import SliderImg2 from '../../../assets/slider/Consulting-cuate2.svg'
import SliderImg3 from '../../../assets/slider/Refund-bro 1.svg'
import SliderImg4 from '../../../assets/slider/Marketing consulting-bro 1.svg'
import SliderImg5 from '../../../assets/slider/Browser stats-bro 1.svg'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Acquisition',
            title2: '(Getting new customer)',
            description: "Acquisition is all about attracting new customers to your business. Instead of relying on random tactics, focus on a systematic approach that encourages quick testing of ideas. The secret to successful growth lies in figuring out what strategies resonate with your audience and quickly letting go of those that don't.",
            bgColor: '#F6E8EA66',
            img: SliderImg1,
            button: 'Learn More About Acquisition'
        },
        {
            title: 'Activation & Conversion optimization',
            description:
                "Businesses are constantly searching for fresh strategies. Yet, true growth isn't just about tactics. It stems from a well-organized approach to quick experimentation. The secret lies in making successful methods a standard practice while swiftly discarding those that fall flat.",
            bgColor: '#f5E7Bc',
            img: SliderImg2,
            button: 'Learn More About Activation & Conversion optimization'

        },
        {
            title: 'Retention & Engagement',
            title2: '(Keeping Users Active & Loyal)',
            description:
                "Retention and Engagement focus on keeping users active, satisfied, and loyal to your brand. By delivering personalized experiences, fostering long-term relationships, and consistently adding value, businesses can boost customer lifetime value and reduce churn.",
            bgColor: '#F5CDBC',
            img: SliderImg3,
            button: 'Learn More About Retention & Engagement'

        },
        {
            title: 'Monetization & Revenue Growth',
            title2: '(Maximizing Sales & Revenue)',
            description:
                "Monetization & Revenue Growth focuses on optimizing sales and increasing revenue through effective strategies. By leveraging data-driven insights, personalized experiences, and scalable solutions, businesses can unlock new income streams and drive sustainable growth.",
            bgColor: '#E3FAFF',
            img: SliderImg4,
            button: "Learn More About Monetization &  Revenue"
        },
        {
            title: 'Analytics & Optimization',
            title2: '(Tracking, Measuring, and Scaling Growth)',
            description:
                "Tracking, measuring, and scaling growth through data-driven insights. Our approach ensures continuous improvement by identifying what works, optimizing performance, and driving sustainable business growth.",
            bgColor: '#F9E575',
            img: SliderImg5,
            button: "Learn More About Analytics & Optimization"
        },
        // Add more cards here with different bgColor
    ];

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };



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
        <>
            {/* <Helmet>
                <title>Growth Marketing Services | Business Growth</title>
                <meta name="description" content="Discover how our growth marketing services can help your business thrive. Explore our innovative strategies." />
                <meta name="keywords" content="growth marketing, business growth, marketing strategies, digital marketing" />
                <meta name="author" content="Your Company Name" />
                <meta property="og:title" content="Growth Marketing Services" />
                <meta property="og:description" content="Learn about our structured growth marketing process that drives success." />
                <meta property="og:image" content="your-image-url.jpg" />
                <meta property="og:url" content="your-website-url.com" />
            </Helmet> */}

            <div className="slider-container">

                <div
                    className='containerTop'

                >
                    <motion.h2 initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >What does our  <span className='highlight'>growth marketing </span>services include?</motion.h2>
                    <div className='slideBtn'>
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true, amount: 0.1 }}

                            className={`slider-btn ${currentIndex === 0 ? 'inactive' : ''}`}
                            onClick={handlePrev}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#a1182f" fill="none">
                                <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </motion.button>
                        <button
                            className={`slider-btn ${currentIndex === cards.length - 1 ? 'inactive' : ''}`}
                            onClick={handleNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#a1182f" fill="none">
                                <path d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="slider"
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                >
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {cards.map((card, index) => (
                            <>
                                <motion.div
                                    className="slider-card"
                                    key={index}
                                    style={{ backgroundColor: card.bgColor }}

                                >
                                    <div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: true, amount: 0.1 }}>{card.title} <span className="title2_h3">{card.title2}</span></motion.h3>
                                        <motion.p initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: true, amount: 0.1 }}>{card.description}</motion.p>
                                        <motion.button
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            className="learn-more">{card.button}</motion.button>

                                    </div>
                                    <img src={card.img} alt={`Image of ${card.title}`} title={card.title} />
                                </motion.div>

                            </>
                        ))}
                    </div>


                </div>
            </div>
        </>
    );
};

export default Slider;
