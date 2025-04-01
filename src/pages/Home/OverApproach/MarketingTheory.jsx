import React, { useState } from "react";
import "./MarketingTheory.scss";
import general_marketing from '../../../assets/OverApproach/marketingDataImg/general-marketing.svg'
import social_identity from '../../../assets/OverApproach/marketingDataImg/social-identity.svg'
import repeat_buying from '../../../assets/OverApproach/marketingDataImg/repeat-buying.svg'
import gatekeeping from '../../../assets/OverApproach/marketingDataImg/gatekeeping.svg'
import constraints from '../../../assets/OverApproach/marketingDataImg/constraints.svg'
import social_marketing from '../../../assets/OverApproach/marketingDataImg/social-marketing.svg'
import product_life_cycle from '../../../assets/OverApproach/marketingDataImg/product-life-cycle.svg'
import blue_ocean from '../../../assets/OverApproach/marketingDataImg/blue-ocean.svg'
import agenda_setting from '../../../assets/OverApproach/marketingDataImg/agenda-setting.svg'
import diffusion_innovations from '../../../assets/OverApproach/marketingDataImg/diffusion-innovations.svg'
import prospect from '../../../assets/OverApproach/marketingDataImg/prospect.svg'
import relationship_marketing from '../../../assets/OverApproach/marketingDataImg/relationship-marketing.svg'
import retail_gravitation from '../../../assets/OverApproach/marketingDataImg/retail-gravitation.svg'
import field from '../../../assets/OverApproach/marketingDataImg/field.svg'

const marketingData = [
    {
        key: "general_theory",
        title: "General Theory of Marketing",
        description:
            "Marketing is the process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large. It involves understanding consumer needs and ",
        image: general_marketing,
    },
    {
        key: "social_identity",
        title: "Social Identity Theory",
        description: "Social Identity Theory explains how individuals define themselves based on group memberships, influencing their behavior, attitudes, and self-esteem. It highlights how belonging to a group shapes identity, fosters loyalty, and drives decision-making.",
        image: social_identity,
    },
    {
        key: "repeat_buying",
        title: "Repeat Buying Theory",
        description: "The Repeat Buying Theory focuses on driving consistent, long-term purchases from existing customers. By understanding buying patterns, creating personalized experiences, and nurturing loyalty, businesses can maximize customer lifetime value, reduce acquisition costs, and achieve sustainable growth.",
        image: repeat_buying,
    },
    {
        key: "gatekeeping",
        title: "Gatekeeping Theory",
        description: "Gatekeeping theory is about managing the flow of information and resources in a business. It ensures that only the most relevant opportunities reach decision-makers, helping them allocate resources wisely and make strategic choices. This approach allows businesses to focus on valuable growth opportunities while reducing risks.",
        image: gatekeeping,
    },
    {
        key: "constraints",
        title: "Theory of Constraints",
        description: "The Theory of Constraints (TOC) is a problem-solving approach that focuses on identifying and addressing the most critical bottleneck limiting a system’s performance. By systematically improving this constraint, businesses can enhance efficiency, optimize processes, and achieve sustainable growth.",
        image: constraints,
    },
    {
        key: "social_marketing",
        title: "Social Marketing Theory",
        description: "Social Marketing Theory leverages marketing principles to influence behavior change for social good. It focuses on understanding target audiences, crafting impactful messages, and motivating positive actions. By addressing societal challenges, this theory drives meaningful change while delivering long-term value.",
        image: social_marketing,
    },
    {
        key: "product_life_cycle",
        title: "Product Life Cycle Theory",
        description: "Product Lifecycle Theory explains how products progress through stages—Introduction, Growth, Maturity, and Decline—highlighting the need for tailored strategies at each phase to maximize growth, profitability, and longevity.",
        image: product_life_cycle,
    },
    {
        key: "blue_ocean",
        title: "Blue Ocean Theory",
        description: "The Blue Ocean Theory focuses on creating uncontested market space by redefining boundaries and delivering unique value. Instead of competing in saturated markets, businesses innovate to unlock new demand, making the competition irrelevant and driving profitable growth.",
        image: blue_ocean,
    },
    {
        key: "agenda_setting",
        title: "Agenda Setting Theory",
        description: "Agenda Setting Theory emphasizes how media shapes public perception by highlighting specific topics and issues. By controlling the narrative, it influences what audiences consider important. This approach helps businesses guide customer focus and drive interest in key offerings.",
        image: agenda_setting,
    },
    {
        key: "diffusion_innovations",
        title: "Diffusion of Innovations",
        description: "Diffusion of Innovations explains how new ideas, products, or technologies spread through a population over time. It identifies the process from early adopters to the majority, highlighting the importance of understanding market segments to accelerate adoption and achieve sustainable growth.",
        image: diffusion_innovations,
    },
    {
        key: "prospect",
        title: "Prospect Theory",
        description: "It highlights that individuals value potential losses more heavily than equivalent gains, leading to risk-averse behavior when facing gains and risk-seeking behavior when facing losses. This theory helps businesses understand customer decision-making, enabling tailored marketing strategies that resonate with real human behavior.",
        image: prospect,
    },
    {
        key: "relationship_marketing",
        title: "Relationship Marketing Theory",
        description: "Focuses on building long-term relationships with customers by prioritizing trust, loyalty, and personalized experiences. This approach enhances customer retention, drives repeat business, and fosters brand advocacy through meaningful connections.",
        image: relationship_marketing,
    },
    {
        key: "retail_gravitation",
        title: "Retail Gravitation Theory",
        description: "Retail Gravitation Theory explains how customers are drawn to larger retail centers based on distance and size. It helps businesses understand where to establish stores for maximum foot traffic and profitability by predicting customer behavior and shopping patterns.",
        image: retail_gravitation,
    },
    {
        key: "field",
        title: "Field Theory",
        description: "Field Theory is a psychological framework that analyzes how various internal and external forces influence individual and organizational behavior. By understanding these dynamics, businesses can create strategies that drive growth, adaptability, and effective decision-making.",
        image: field,
    },
];

const MarketingTheory = () => {
    const [selected, setSelected] = useState(marketingData[0]);

    return (
        <div className="marketing-container">
            <div className="left-tabs">
                {marketingData.slice(0, 7).map((item) => (
                    <button
                        key={item.key}
                        className={selected.key === item.key ? "active" : ""}
                        onMouseEnter={() => setSelected(item)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="content">
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
                <img src={selected.image} alt={selected.title} />
            </div>
            <div className="right-tabs">
                {marketingData.slice(7).map((item) => (
                    <button
                        key={item.key}
                        className={selected.key === item.key ? "active" : ""}
                        onMouseEnter={() => setSelected(item)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MarketingTheory;
