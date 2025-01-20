import React from 'react';
import './BenefitsSection.scss';
import bannerImg1 from '../../../assets/service/Frame 1000007875.svg'
import bannerImg2 from '../../../assets/service/Frame 1000007876.svg'
import bannerImg3 from '../../../assets/service/Frame 1000007877.svg'
import bannerImg4 from '../../../assets/service/Image Box.svg'

const BenefitsSection = () => {
    const iconOk = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#2563eb" fill="none">
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    return (
        <>
            <section className="benefits">
                <div className="container">
                    <div className="header_content">
                        <div className="headLeft">
                            <span className="badge">BENEFITS</span>
                            <h1>Unlock The Power Of Tailored Growth Solutions</h1>
                            <button className="contact-btn">Contact Us Now</button>
                        </div>
                        <p className="sub-text">
                            Experience cost-efficient, scalable growth with data-driven strategies tailored to your business.
                        </p>
                    </div>

                    <div className="benefit-items">
                        <div className="benefit">
                            <h3>  Save Time And Resources With Our Pre-Validated Strategies</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</h4>
                            <img src={bannerImg1} alt="Save Time" />
                            <p>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.rem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</p>
                        </div>

                        <div className="benefit">
                            <h3>Boost Revenue With Data-Driven Growth Tactics</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</h4>
                            <img src={bannerImg2} alt="Boost Revenue" />
                            <p>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.rem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</p>
                        </div>

                        <div className="benefit">
                            <h3>Achieve Sustainable Growth Without Breaking Your Budget</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</h4>
                            <img src={bannerImg3} alt="Sustainable Growth" />
                            <p>Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.Lorem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.rem ipsum dolor sit amet consectetur. Euismod nunc facilisis tortor risus non nisl viverra.</p>

                        </div>
                    </div>
                </div>
            </section>
            {/*  */}

            <div className="benefits-section">
                <div className="content">
                    <h4 className="badge">Benefits</h4>
                    <h2 className="heading">Unlock The Power Of Tailored <br /> Growth Solutions</h2>
                    <p className="description">
                        Experience cost-efficient, scalable growth with data-driven strategies tailored to your business.
                    </p>
                    <ul className="benefits-list">
                        <li>{iconOk} Save time and resources with our pre-validated strategies</li>
                        <div className='row-li_benefits'>
                            <li><div>{iconOk}</div> Boost revenue with data-driven growth tactics</li>
                            <li><div>{iconOk}</div> Achieve sustainable growth without breaking your budget</li>
                        </div>
                    </ul>
                    <button className="cta-button">Contact Us Now</button>
                </div>
                <div className="image-section">
                    <img src={bannerImg4} alt="User" />
                </div>
            </div>

        </>
    );
};

export default BenefitsSection;
