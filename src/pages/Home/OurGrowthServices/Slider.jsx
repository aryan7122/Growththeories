// Import React and required libraries
import React, { useState, useEffect, useRef } from 'react';
import './Slider.scss';
import SliderImg1 from '../../../assets/slider/Business-inequality-cuate1.svg'
import SliderImg2 from '../../../assets/slider/Consulting-cuate2.svg'
import SliderImg3 from '../../../assets/slider/Creative-experiment-bro3.svg'
import SliderImg4 from '../../../assets/slider/Environmental-audit-rafiki4.svg'
import SliderImg5 from '../../../assets/slider/Online-ads-pana5.svg'
import { motion } from 'framer-motion';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Growth Tracks: Your Blueprint For Success',
            description:
                "Companies Are Always On The Lookout For 'new Tactics'. Growth However, Has Nothing To Do With Tactics. Good Growth Comes From Implementing A Structured Process Of Rapid Experimentation. The Key Is In Institutionalizing What Works And Dropping What Doesn't ASAP.",
            bgColor: '#eaf7fe',
            img: SliderImg1,
            button: 'Learn More About Growth Tracks'
        },
        {
            title: 'Validation Services',
            description:
                "Companies Are Always On The Lookout For 'new Tactics'. Growth However, Has Nothing To Do With Tactics. Good Growth Comes From Implementing A Structured Process Of Rapid Experimentation.",
            bgColor: '#f5E7Bc',
            img: SliderImg2,
            button: 'Learn More About Growth Tracks'

        },
        {
            title: 'Validation Services',
            description:
                "Companies Are Always On The Lookout For 'new Tactics'. Growth However, Has Nothing To Do With Tactics. Good Growth Comes From Implementing A Structured Process Of Rapid Experimentation.",
            bgColor: '#F5CDBC',
            img: SliderImg3,
            button: 'Learn More About Growth Prediction'

        },
        {
            title: 'Validation Services',
            description:
                "Companies Are Always On The Lookout For 'new Tactics'. Growth However, Has Nothing To Do With Tactics. Good Growth Comes From Implementing A Structured Process Of Rapid Experimentation.",
            bgColor: '#BCEBF5',
            img: SliderImg4,
            button: "Learn More About Growth Audit"
        },
        {
            title: 'Validation Services',
            description:
                "Companies Are Always On The Lookout For 'new Tactics'. Growth However, Has Nothing To Do With Tactics. Good Growth Comes From Implementing A Structured Process Of Rapid Experimentation.",
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

    // useEffect(() => {
    //     const autoSlide = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    //     }, 5000);

    //     return () => clearInterval(autoSlide);
    // }, [cards.length]);


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
        <div className="slider-container">

            <motion.div
                className='containerTop'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2>Our Comprehensive Growth Services</h2>
                <div className='slideBtn'>
                    <button
                        className={`slider-btn ${currentIndex === 0 ? 'inactive' : ''}`}
                        onClick={handlePrev}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#a1182f" fill="none">
                            <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
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
            </motion.div>

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
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <button className="learn-more">{card.button}</button>
                                </div>
                                <img src={card.img} alt="" />
                            </motion.div>

                        </>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Slider;
