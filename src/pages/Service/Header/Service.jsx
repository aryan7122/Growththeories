import React from 'react';
import './Service.scss';
import bannerImg from '../../../assets/service/Growth analytics-cuate.svg'
const Service = () => {
    return (
        <div className='main_service_container'>
            <div className="service-container">
                <div className="box_service_content">
                    <div className="content">
                        <span className="badge">GROWTH TRACK</span>
                        <h1>
                            Accelerate <span className="highlight">Your Growth</span> With <span className="highlight">Tailored Tracks</span>
                        </h1>
                        <p>Our Custom-Built Growth Tracks Are Designed To Fast-Track Your Business Success.</p>
                        <div className="buttons">
                            <button className="btn btn-primary">Contact Us Now</button>
                            <button className="btn btn-secondary">Learn More</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={bannerImg} alt="Growth Illustration" />
                        <div className="round-shape"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
