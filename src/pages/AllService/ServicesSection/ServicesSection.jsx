import React from "react";
import "./ServicesSection.scss";
import icon1 from '../../../assets/allService/icon/icon1.png'
import icon2 from '../../../assets/allService/icon/icon2.png'
import icon3 from '../../../assets/allService/icon/icon3.png'
import icon4 from '../../../assets/allService/icon/icon4.png'
import icon5 from '../../../assets/allService/icon/icon5.png'
import icon6 from '../../../assets/allService/icon/icon6.png'

const services = [
    {
        icon: icon1,
        title: "Insightful Research",
        desc:
            "Dive deep into market trends and user behaviors with our analytic rigor, transforming data into the fuel that powers your strategic decisions.",
    },
    {
        icon: icon2,
        title: "User Centered Design",
        desc:
            "Our designs don't just look good; they feel right. We craft intuitive interfaces focused on usability, ensuring every interaction is seamless.",
    },
    {
        icon: icon3,
        title: "Agile Development",
        desc:
            "Deploy scalable and secure digital products engineered for performance, with agile development processes that adapt to your evolving needs.",
    },
    {
        icon: icon4,
        title: "Strategic Growth",
        desc:
            "Accelerate your market presence with data-driven marketing that targets growth, optimizes reach, and enhances user acquisition and retention.",
    },
    {
        icon: icon5,
        title: "Tailored Processes",
        desc:
            "Each project is a unique journey; our bespoke solutions are tailored to your brand’s needs, ensuring fluid user journeys and impactful results.",
    },
    {
        icon: icon6,
        title: "Continuous Optimization",
        desc:
            "Embrace a culture of continuous improvement with our iterative approach to refining and optimizing your digital platforms for peak performance.",
    },
];

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="container">
                <h2>
                    We Turn Intangible Concepts Into{" "} <br />
                    <span>Tangible Design Outcomes.</span>
                </h2>
                <p>
                    We simplify complex problem statements & turn them into holistic
                    experiences.
                </p>
                <button className="cta">Contact Us Now</button>

                <div className="grid">
                    {services.map((service, index) => (
                        <div className="card" key={index}>
                            <div className="icon"><img src={service.icon} alt={service.title} /></div>
                            <h4>
                                <span>0{index + 1}</span> {service.title}
                            </h4>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default ServicesSection;
