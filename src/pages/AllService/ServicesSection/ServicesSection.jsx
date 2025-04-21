import React from "react";
import "./ServicesSection.scss";
import {
    Search,
    UserCheck,
    Code2,
    TrendingUp,
    Settings,
    RefreshCcw,
} from "lucide-react";

const services = [
    {
        icon: <Search size={32} />,
        title: "Insightful Research",
        desc:
            "Dive deep into market trends and user behaviors with our analytic rigor, transforming data into the fuel that powers your strategic decisions.",
    },
    {
        icon: <UserCheck size={32} />,
        title: "User Centered Design",
        desc:
            "Our designs don't just look good; they feel right. We craft intuitive interfaces focused on usability, ensuring every interaction is seamless.",
    },
    {
        icon: <Code2 size={32} />,
        title: "Agile Development",
        desc:
            "Deploy scalable and secure digital products engineered for performance, with agile development processes that adapt to your evolving needs.",
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Strategic Growth",
        desc:
            "Accelerate your market presence with data-driven marketing that targets growth, optimizes reach, and enhances user acquisition and retention.",
    },
    {
        icon: <Settings size={32} />,
        title: "Tailored Processes",
        desc:
            "Each project is a unique journey; our bespoke solutions are tailored to your brand’s needs, ensuring fluid user journeys and impactful results.",
    },
    {
        icon: <RefreshCcw size={32} />,
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
                            <div className="icon">{service.icon}</div>
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
