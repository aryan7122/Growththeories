import React from 'react';
import './CaseStudies.scss';
import cardImg1 from '../../../assets/card/Rectangle 3463657.svg'
import cardImg2 from '../../../assets/card/Rectangle 3463656.svg'
import cardImg3 from '../../../assets/card/Rectangle 3463656 (1).svg'
import icon2 from '../../../assets/card/Vector.svg'
import icon1 from '../../../assets/card/Frame (7).svg'
import award from '../../../assets/card/Frame 1000007833.svg'
import TestimonialSlider from './TestimonialSlider';
import { motion } from 'framer-motion';

const CaseStudiesReviews = () => {
    return (
        <div className="case-studies-reviews">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="case-studies">
                <div className="case-study-card">
                    <img src={cardImg1} alt="Google" />
                    <div className="content">
                        <div>
                            <h3>Google</h3>
                            <p>Case study <img src={icon1} alt="" /> </p>
                        </div>
                        <div className='hart_cards'>  <img src={icon2} alt="" /> Pirate Theory (AARRR Framework)</div>
                    </div>
                </div>
                <div className="case-study-card">
                    <img src={cardImg2} alt="Amnora" />
                    <div className="content">
                        <div>

                            <h3>Amnora</h3>
                            <p>Case study <img src={icon1} alt="" /> </p>
                        </div>
                        <div className='hart_cards'>  <img src={icon2} alt="" /> Viral Loop</div>
                    </div>
                </div>
                <div className="case-study-card">
                    <img src={cardImg3} alt="Vijeta" />
                    <div className="content">
                        <div>

                            <h3>Vijeta</h3>
                            <p>Case study <img src={icon1} alt="" /> </p>
                        </div>
                        <div className='hart_cards'> <img src={icon2} alt="" />Growth Loop Theory</div>
                    </div>
                </div>
            </motion.div>
            <div className="reviews-section">
                <div className='badge'>REVIEWS</div>
                <h2>People Love Using Growththeories</h2>
                <p>See How Our Tailored Strategies Helped Businesses Achieve Rapid Growth. Each Case Study Highlights Our Approach And Real-World Results</p>
                <div className="reviews">
                    <div className="testimonial">
                        <TestimonialSlider/>
                    </div>
                    <div className="award">
                        <img src={award} alt="Award" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesReviews;
