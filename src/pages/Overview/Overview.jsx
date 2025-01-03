// src/components/GrowthMarketing.jsx
import React from 'react';
import './Overview.scss';
import AdvantagesCards from './AdvantagesCards';
import MarketingSituations from './MarketingSituations';
import growth_overview from '../../assets/growth_overview.svg'
import { motion } from 'framer-motion';

const Overview = () => {
    return (
        <div className='Overview_3_card'>
            <div className="growth-section">
                <div className="content">
                    <span className="badge">OVERVIEW</span>
                    <div className='Marketing_card_2_flex'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >

                            <h1>Growth Marketing</h1>
                            <p>
                                Growth Marketing is the sum of user-focused, tactical activities that are both experimental and constantly evolving.
                                Growth Marketing takes the traditional marketing and adds multiple valuable layers such as A/B testing, SEO, data-driven
                                campaigns, engaging blog content, etc. The focus of Growth Marketing is on maximizing all growth opportunities for the
                                business throughout the entire funnel.
                            </p>

                        </motion.div>
                        <motion.img
                            initial={{ opacity: 0, x: 130 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            src={growth_overview} alt="growth overview" />
                    </div>
                    <h4>
                        This is why Growth Marketing is the preferred strategy for businesses looking to position themselves on the market and
                        scale quickly as it delivers performance-based ROI.
                    </h4>
                </div>


            </div>
            <AdvantagesCards />
            <MarketingSituations />
        </div>
    );
};

export default Overview;
