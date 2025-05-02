import React, { useState } from 'react';
import './FAQAccordion.scss';
import { Helmet } from 'react-helmet-async';

import { motion } from 'framer-motion';

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

const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};
const FAQAccordion = () => {
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
                staggerChildren: 0.2
            }
        }
    };
    return (
        <div className="faq-container007">
            {/* <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(FAQSchema)}
                </script>
            </Helmet> */}
            <div className="title_header">
                <motion.span
                    // initial={{ opacity: 0, y: 50 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.3 }}
                    // viewport={{ once: true, amount: 0.1 }}
                    className="badge">FAQs</motion.span>
                <motion.h2
                    // initial={{ opacity: 0, y: 50 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }} className="faq-title">We Have Got All The Answers
                  
                    <h4>
                        <button className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                <path d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            Start Growing Today
                        </button>
                    </h4>
                </motion.h2>
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
                                <span className="faq-toggle">{activeIndex === index ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#a1182f" fill="none">
                                        <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#a1182f" fill="none">
                                        <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                }</span>
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

export default FAQAccordion;