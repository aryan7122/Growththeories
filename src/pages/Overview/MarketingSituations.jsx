// src/components/MarketingSituations.jsx
import React from 'react';
import './Overview.scss';
import { motion } from 'framer-motion';

const MarketingSituations = () => {
    const situations = [
        { icon: '❤️', text: 'You Own A Startup But Have No Marketing Experience,' },
        { icon: '😃', text: 'You Drive Impressive Organic Traffic To Your Website, But There Is Almost No Growth On Your Pillar Channel' },
        { icon: '😃', text: 'You’re Launching A New Product And Need A Go-To-Market Strategy,' },
        { icon: '😃', text: 'You’re Experiencing A Growing Product Demand But Lack The Resources To Establish Meaningful Relationships With Potential Customers' },
        { icon: '😃', text: 'You Have A Big Paid Marketing Budget But Don’t See A Lot Of ROI' },
        { icon: '😃', text: 'Your Company Is Looking Into Improving The Branding Across All Platforms' },
        { icon: '😃', text: 'You Have So Much Valuable Content, But Don’t Know How To Market It Well' },
    ];

    return (

        < >
            <motion.div
                className="situations-section "
                initial={{ opacity: 0, x: -130 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    duration: 0.6
                }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className=''>Businesses That Need Growth Marketing Will Typically Be In One Of These Situations</h2>
                <div className="situations-list ">
                    {situations.map((item, index) => (
                        <>
                            <motion.div
                                className="situation-item"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <span className="icon">{item.icon}</span>
                                <p>{item.text}</p>
                            </motion.div>
                        </>
                    ))}
                </div>

                <motion.div
                    className="cta-section"
                    initial={{ opacity: 0, x: 130 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        duration: 0.6
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p>If Your Business Is Having Similar Issues?</p>
                    <button className="cta-button">Contact Us Now</button>

                </motion.div>
            </motion.div>
        </>
    );
};

export default MarketingSituations;
