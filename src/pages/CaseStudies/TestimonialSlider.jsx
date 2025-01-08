// TestimonialSlider.jsx
import React, { useState } from 'react';
import './CaseStudies.scss';
import { motion } from 'framer-motion';

const testimonials = [
    {
        logo: 'https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg',
        userImg: 'https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg',
        quote: "The Team At [Agency Name] Helped Us Scale From A Startup To A Fully-Fledged Business With Their Growth Tracks And Validation Services. They Customized Their Strategies To Fit Our Needs, And We Saw A 200% Increase In Customer Retention Within Six Months!",
        name: "Alex Morgan",
        position: "Founder, TechStart"
    },
    {
        logo: 'https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg',
        userImg: 'https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg',
        quote: "Their expertise and professionalism were outstanding. We experienced exponential growth and achieved goals faster than expected.",
        name: "Jessica Lee",
        position: "CEO, InnovateHub"
    },
    {
        logo: 'https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg',
        userImg: 'https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg',
        quote: "Working with [Agency Name] was the best decision we made. Their insights and strategies helped us dominate the market.",
        name: "Michael Smith",
        position: "CTO, WebNext"
    }
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    return (
        <div className="testimonial-slider">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="slider-content" style={{ backgroundImage: `url('/path/to/background.jpg')` }}>
                <img src={testimonials[current].logo} alt="" />
                <p className="quote">{testimonials[current].quote}</p>
                <p className="author">
                    <img src={testimonials[current].userImg} alt="" />
                    {testimonials[current].name} - {testimonials[current].position}
                </p>
                <button className="prev" onClick={prevSlide}>&#x2039;</button>
                <button className="next" onClick={nextSlide}>&#x203A;</button>
            </motion.div>
        </div>
    );
};

export default TestimonialSlider;
