import React from "react";
import "./Benefits.scss";

const advantages = [
    {
        id: "01",
        title: "Speed To Market",
        description:
            "In today's fast-paced business world, speed to market is crucial for competitiveness. It reflects how quickly a product moves from concept to customer. Companies that excel can adapt swiftly to market changes and meet customer needs, enhancing their success.",
    },
    {
        id: "02",
        title: "More Significant ROI",
        description:
            "In today's fast-paced business world, speed to market is crucial for competitiveness. It reflects how quickly a product moves from concept to customer. Companies that excel can adapt swiftly to market changes and meet customer needs, enhancing their success.",
    },
    {
        id: "03",
        title: "Time Saving Results",
        description:
            "In today's fast-paced business world, speed to market is crucial for competitiveness. It reflects how quickly a product moves from concept to customer. Companies that excel can adapt swiftly to market changes and meet customer needs, enhancing their success.",
    },
    {
        id: "04",
        title: "Data-Driven Decisions",
        description:
            "Growth marketing relies on real-time data analysis to make informed decisions. This approach minimizes guesswork, ensures targeted efforts, and continuously adapts strategies based on insights.",
    },
    {
        id: "05",
        title: "Agile And Adaptive",
        description:
            "With a focus on continuous testing and improvement, growth marketing quickly adapts to market changes, emerging trends, and customer preferences, staying ahead of the competition.",
    },
    {
        id: "06",
        title: "Customer Centric Approach",
        description:
            "Growth marketing prioritizes customer needs and behaviors, delivering personalized experiences. This fosters deeper customer relationships, higher retention rates, and increased lifetime value.",
    },
];

const Benefits = () => {
    return (
        <div className="container">
            <h2 className="benefits">BENEFITS</h2>
            <h1 className="title">Advantages Of Growth Marketing</h1>
            <div className="grid_bg">
                <div className="grid-container">
                    {advantages.map((adv) => (
                        <div className="grid-item" key={adv.id}>
                            <h1 className="number">{adv.id}</h1>
                            <h3 className="adv-title">{adv.title}</h3>
                            <p className="adv-desc">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
