import React from 'react';
import './AuditHeroSection.scss';
import auditImage from '../../../../assets/service/Environmental audit-rafiki 1.svg';

const AuditHeroSection = () => {
    return (
        <div className="audit-hero">
            <span className="badge">PERFORM A GROWTH AUDIT</span>
            <h1>
                Optimize <span className="highlight">Your Growth</span> With A <br />
                <span className="highlight">Comprehensive Audit</span>
            </h1>
            <p>
                Our growth audit identifies bottlenecks, gaps, and missed opportunities in your current strategies,
                providing actionable insights to maximize your growth potential.
            </p>
            <div className="buttons">
                <button className="audit-btn">Start Your Free Audit Now</button>
                <button className="info-btn">Learn More About Growth Audits</button>
            </div>
            <div className="audit-image">
                <img src={auditImage} alt="Audit Illustration" />
                <div className="video-btn">
                    <button className="play-btn">▶</button>
                    <span>Watch the Video</span>
                </div>
            </div>
        </div>
    );
};

export default AuditHeroSection;
