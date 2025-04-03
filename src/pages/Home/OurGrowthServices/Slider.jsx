// Import React and required libraries
import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss';
import SliderImg1 from '../../../assets/slider/Business-inequality-cuate1.svg'
import SliderImg2 from '../../../assets/slider/Consulting-cuate2.svg'
import SliderImg3 from '../../../assets/slider/Creative-experiment-bro3.svg'
import SliderImg4 from '../../../assets/slider/Environmental-audit-rafiki4.svg'
import SliderImg5 from '../../../assets/slider/Online-ads-pana5.svg'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Growth Tracks: Your Blueprint For Success',
            description:
                "Companies are always on the lookout for ‘new tactics’. Growth however, has nothing to do with tactics. Good growth comes from implementing a structured process of rapid experimentation. The key is in institutionalizing what works and dropping what doesn’t ASAP.",
            bgColor: '#D9D9D9',
            img: SliderImg1,
            button: 'Learn More About Growth Tracks'
        },
        {
            title: 'Validation Services',
            description:
                "Companies are always on the lookout for ‘new tactics’. Growth however, has nothing to do with tactics. Good growth comes from implementing a structured process of rapid experimentation. The key is in institutionalizing what works and dropping what doesn’t ASAP.",
            bgColor: '#f5E7Bc',
            img: SliderImg2,
            button: 'Learn More About Growth Tracks'

        },
        {
            title: 'Growth Prediction modelling',
            description:
                "Are you already in experiment mode? Is your team already working according the growth marketing methodology? In that case prediction modeling can lift you to the next level by infusing your growth experiments with a data science layer",
            bgColor: '#F5CDBC',
            img: SliderImg3,
            button: 'Learn More About Growth Prediction'

        },
        {
            title: 'Growth Audit',
            description:
                "With a growth audit, our aim is to identify new growth potential very fast. In only five days we make an analysis of your market, your techstack, your audience, etc. The main deliverable of such an audit is a shortlist of experiments to unlock new growth levers",
            bgColor: '#BCEBF5',
            img: SliderImg4,
            button: "Learn More About Growth Audit"
        },
        {
            title: 'Tiktok Advertising',
            description:
                "The days of slow content are numbered. TikTok advertising is perfect for reaching your young and growing audience with creative and engaging content. Conquer a place in the hearts of your audience with a massive brand engagement at never seen before CPMs!",
            bgColor: '#F9E575',
            img: SliderImg5,
            button: "Learn More About Growth Audit"
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
            <Helmet>
                <title>Growth Marketing Services | Business Growth</title>
                <meta name="description" content="Discover how our growth marketing services can help your business thrive. Explore our innovative strategies." />
                <meta name="keywords" content="growth marketing, business growth, marketing strategies, digital marketing" />
                <meta name="author" content="Your Company Name" />
                <meta property="og:title" content="Growth Marketing Services" />
                <meta property="og:description" content="Learn about our structured growth marketing process that drives success." />
                <meta property="og:image" content="your-image-url.jpg" />
                <meta property="og:url" content="your-website-url.com" />
            </Helmet>

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
                                            viewport={{ once: true, amount: 0.1 }}>{card.title}</motion.h3>
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
                                    <img src={card.img} alt={card.title} />
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
