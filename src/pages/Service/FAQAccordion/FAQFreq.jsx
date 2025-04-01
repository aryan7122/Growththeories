import React, { useState } from 'react';
import './FAQAccordion.scss';

import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'What is growth marketing, and how is it different from traditional marketing?',
        answer: 'Growth hacking focuses on rapid experimentation and unconventional strategies to drive business growth, often relying on data analysis, creativity, and technology. Traditional marketing, on the other hand, typically involves more long-term branding and customer acquisition strategies using established channels.'
    },
    {
        question: 'How long does it take to see results from a growth track?',
        answer: 'TikTok advertising can expand your brand reach by engaging a younger audience, driving higher engagement through creative short videos, and utilizing data-driven targeting features to boost conversion rates.'
    },
    {
        question: 'Are growth tracks suitable for small businesses?',
        answer: 'A growth audit evaluates your business processes and identifies opportunities for improvement, ensuring your strategies align with business goals and market trends.'
    },
    {
        question: 'What does your growth audit service involve?',
        answer: 'Growth prediction modeling uses historical data and machine learning algorithms to forecast future growth trends, helping businesses make data-driven decisions.'
    },
    {
        question: 'How does your data-driven approach help in growth prediction modeling?',
        answer: 'Yes, growth strategies can be tailored to fit the unique needs and budgets of small businesses, ensuring scalability and sustainable development.'
    },
    {
        question: 'Do I need a large budget to benefit from your services?',
        answer: 'A marketplace strategy provides access to a larger customer base, reduces operational costs, and leverages network effects for accelerated growth.'
    }
];

const FAQFreq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const tableRowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const staggerTable = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2  // Row delay
            }
        }
    };
    return (
        <div className="faq-container0101">
            <div className="title_header_-">
                <span className="badge">FAQs</span>
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <p>We have got all The answers</p>
            </div>
            <motion.div
                variants={staggerTable}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="faq-list">
                {faqs.map((faq, index) => (
                    <>
                        <motion.div
                            variants={tableRowVariants}
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {index + 1}. {faq.question}
                                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <>
                                    <div className="faq-answer">{faq.answer}</div>
                                </>

                            )}
                        </motion.div>
                        <div className='hr-line'></div>
                    </>
                ))}
            </motion.div>
        </div>
    );
};

export default FAQFreq;