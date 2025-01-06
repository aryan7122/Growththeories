import React, { useState } from 'react';
import './FAQAccordion.scss';

const faqs = [
    {
        question: 'What makes growth hacking different from traditional marketing?',
        answer: 'Growth hacking focuses on rapid experimentation and unconventional strategies to drive business growth, often relying on data analysis, creativity, and technology. Traditional marketing, on the other hand, typically involves more long-term branding and customer acquisition strategies using established channels.'
    },
    {
        question: 'How can TikTok advertising help my business grow?',
        answer: 'TikTok advertising can expand your brand reach by engaging a younger audience, driving higher engagement through creative short videos, and utilizing data-driven targeting features to boost conversion rates.'
    },
    {
        question: 'What is a growth audit and how does it benefit my business?',
        answer: 'A growth audit evaluates your business processes and identifies opportunities for improvement, ensuring your strategies align with business goals and market trends.'
    },
    {
        question: 'How does growth prediction modeling work?',
        answer: 'Growth prediction modeling uses historical data and machine learning algorithms to forecast future growth trends, helping businesses make data-driven decisions.'
    },
    {
        question: 'Can growth strategies be customized for small businesses?',
        answer: 'Yes, growth strategies can be tailored to fit the unique needs and budgets of small businesses, ensuring scalability and sustainable development.'
    },
    {
        question: 'What’s the advantage of using a marketplace strategy for growth?',
        answer: 'A marketplace strategy provides access to a larger customer base, reduces operational costs, and leverages network effects for accelerated growth.'
    }
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="faq-container">
            <div className="title_header">
                <span className="badge">FAQs</span>
                <h2 className="faq-title">We Have Got All The Answers <h4>(007)</h4></h2>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <>

                        <div
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
                        </div>
                        <div className='hr-line'></div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;