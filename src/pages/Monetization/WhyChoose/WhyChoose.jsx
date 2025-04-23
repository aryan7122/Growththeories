import React from 'react';
import './WhyChoose.scss';
import icon1 from '../../../assets/monetization/icon1.svg'
import icon2 from '../../../assets/monetization/icon2.svg'
import icon3 from '../../../assets/monetization/icon3.svg'
import icon4 from '../../../assets/monetization/icon4.svg'
import icon5 from '../../../assets/monetization/icon5.svg'
import icon6 from '../../../assets/monetization/icon6.svg'
const data = [
    {
        icon: icon1,
        title: "Tailored Monetization Strategies",
        description: "Explore tailored monetization strategies that boost revenue and improve user experience. We guide you through subscription models and targeted advertising in the digital landscape.",
    },
    {
        icon: icon2,
        title: "Data-Driven Decisions",
        description: "Data-driven decisions use analysis to guide strategic choices. By leveraging insights from various sources, organizations enhance decision-making, minimize risks, and achieve improved outcomes.",
    },
    {
        icon: icon3,
        title: "Growth Framework Integration",
        description: "The Growth Framework Integration unifies growth strategies, boosts team collaboration, and aligns initiatives with business goals. It leverages data-driven insights to optimize growth and adapt to market changes.",
    },
    {
        icon: icon4,
        title: "Cross-Channel Expertise",
        description: "Cross-Channel Expertise links customer interactions across platforms, providing a consistent and personalized experience through social media, email, or in-store visits. This approach helps businesses boost customer satisfaction and loyalty.",
    },
    {
        icon: icon5,
        title: "Rapid Experimentation",
        description: "Rapid Experimentation enables teams to swiftly test ideas and learn from outcomes. This culture of experimentation helps organizations innovate quickly, adapt, and make informed decisions based on feedback.",
    },
    {
        icon: icon6,
        title: "Trusted by Fast-Growing Brands",
        description: "We empower growth and success for innovative brands. Our commitment to excellence makes us the preferred partner for fast-growing companies.",
    }
];

const WhyChoose = () => {
    return (
        <div className="whychoose">
            <h2>Why Choose Growththeories<br />India For Monetization?</h2>
            <p className="subtitle">
                Choosing Growththeories India for monetization is a smart move for businesses looking to increase revenue. Our experts develop innovative strategies tailored to your needs, helping you maximize assets and uncover new revenue streams for lasting growth.
            </p>
            <div className="cards">
                {data.map((item, idx) => (
                    <div className="card" key={idx}>
                        <img src={item.icon} className='icon' alt="icon" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;
