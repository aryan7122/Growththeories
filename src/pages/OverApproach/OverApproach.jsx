import React, { useState } from "react";
import "./OverApproach.scss";
import img1 from '../../assets/OverApproach/AARRR-FRAMEWORK-01.svg';

import cardIcon1 from '../../assets/OverApproach/card-icon/Vector.svg'
import cardIcon5 from '../../assets/OverApproach/card-icon/Frame.svg'
const data = {
    pirateMetrics: {
        title: "Pirate Metrics (AARRR Framework)",
        description:
            `The Pirate Framework (AARRR) is a widely-used growth model developed by venture capitalist Dave McClure, aimed at understanding and optimizing customer behavior across key stages of a business. It is called the "Pirate Framework" because the acronym spells out "AARRR" – resembling a pirate's chant.`,
        cards: [
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, icon2: cardIcon5, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
        ],
        img: img1,
    },
   
};

const OverApproach = () => {
    const [activeTab, setActiveTab] = useState("pirateMetrics");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const { title, description, cards, img } = data[activeTab];

    return (
        <div className="over-approach">
            <div id="approach_card">
                <div className="ourApproach">
                    <h4>Our Approach</h4>
                    <h2>Tailored Growth Theories for Maximum Impact</h2>
                    <p>Discover proven growth strategies that adapt to your business needs for scalable, sustainable success</p>
                </div>
                <div className="navbar_approach">
                    {Object.keys(data).map((tab) => (
                        <div
                            key={tab}
                            className={`nav-button-approach ${activeTab === tab ? "active-approach" : ""}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                    ))}
                </div>

                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="description">{description}</p>
                    <div className="layout">
                        <div className="cards">
                            {cards.map((card, index) => (
                                <div key={index} className="card">
                                    <img src={card.icon} alt="" />
                                    <h3 className="card-title">{card.title}</h3>
                                    <div className="p-icon2">
                                        <p className="card-content">{card.content}</p>
                                        <img src={card.icon2} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {img && (
                            <div className="image">
                                <img src={img} alt="Framework Illustration" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverApproach;
