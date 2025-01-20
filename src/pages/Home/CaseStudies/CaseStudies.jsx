// src/components/GrowthMarketing.jsx
import React from 'react';
import './CaseStudies.scss';

// import growth_overview from '../../assets/growth_overview.svg'
import { motion } from 'framer-motion';
import CaseStudiesReviews from './CaseStudiesReviews';

const CaseStudies = () => {
    return (
        <div className='CaseStudies_3_card'>
            <div className="CaseStudies-section">
                <div className="content">
                    <span className="badge">Case Studies</span>
                    <div className='Marketing_card_2_flex'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >

                            <div>
                                <h1>Real Success Stories:</h1>
                                <h2 className='h1-2'> See How We Drive Growth</h2>
                            </div>

                        </motion.div>

                        <div className='CaseStudies_right_top'>
                            <motion.p
                                initial={{ opacity: 0, x: -130 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='right_p'
                            >
                                See how our tailored strategies helped businesses achieve rapid growth. Each case study highlights our approach and real-world results
                            </motion.p>
                            <motion.button
                                initial={{ opacity: 0, y: -130 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='All_Studies_btn'
                            >
                                See All Case Studies
                            </motion.button>
                       </div>

                    </div>
                </div>


            </div>
            <CaseStudiesReviews/>
        </div>
    );
};

export default CaseStudies;
