import React from 'react';
import auditImage from '../../../../assets/company/Environmental audit-rafiki 1.svg';
import './AboutSection.scss';

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="ab_container">
                <div className="ab-card mission">
                    <span className="number">01</span>
                    <h2 className="title">Our Mission</h2>
                    <p className="description">
                        We strive to help businesses achieve sustainable growth by providing innovative, budget-friendly strategies.
                        Our mission is to maximize your potential with tailored, high-impact solutions designed to deliver measurable results.
                    </p>
                </div>

                <div className="ab-card ab_goals">
                    <span className="number">02</span>
                    <h2 className="title">Our Goals</h2>
                    <p className="description">
                        Our goal is simple: to empower businesses with the tools and strategies needed to thrive in today’s competitive market.
                        We focus on creating scalable growth strategies that drive long-term success without compromising on cost or quality.
                    </p>
                </div>

                <div className="ab-card ab_values">
                    <span className="number">03</span>
                    <h2 className="title">Our Values</h2>
                    <p className="description">
                        Integrity, innovation, and collaboration are at the heart of everything we do.
                        We believe in building lasting relationships, ensuring transparency, and constantly evolving to meet the ever-changing needs of your business.
                    </p>
                </div>
            </div>

            <div className="image-section">
                <img src={auditImage} alt="Environmental Audit" />
            </div>
        </div>
    );
};

export default AboutSection;
