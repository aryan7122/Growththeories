import React, { useState } from "react";
import "./OverApproach.scss";
import img1 from '../../assets/OverApproach/AARRR-FRAMEWORK-01.svg';
import img2 from '../../assets/OverApproach/VIRAL LOOP-01 1.svg';
import img3 from '../../assets/OverApproach/product-led 1.svg';
import img4 from '../../assets/OverApproach/The graphic should depict a cyclical loop.svg';
import img5 from '../../assets/OverApproach/Infographic of growth marketing.svg';

import cardIcon1 from '../../assets/OverApproach/card-icon/Vector.svg'
import cardIcon5 from '../../assets/OverApproach/card-icon/Frame.svg'
import cardIcon54 from '../../assets/OverApproach/card-icon/stock_10527717 1.svg'
import cardIcon53 from '../../assets/OverApproach/card-icon/cooperation_11126971 1.svg'
import cardIcon55 from '../../assets/OverApproach/card-icon/business-finance_17030424 1.svg'
const data = {
    pirateMetrics: {
        title: "Pirate Metrics (AARRR Framework)",
        description:
            `The Pirate Framework (AARRR) is a widely-used growth model developed by venture capitalist Dave McClure, aimed at understanding and optimizing customer behavior across key stages of a business. It is called the "Pirate Framework" because the acronym spells out "AARRR" – resembling a pirate's chant.`,
        btn: 'See How AARRR Benefits Your Business',
        cards: [
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
            { icon: cardIcon1, icon2: cardIcon5, title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
        ],
        img: img1,
    },
    ViralLoops: {
        title: "Viral Loops",
        description:
            `Viral loops capitalize on the power of word-of-mouth and provide exponential growth through a chain reaction. The more users participate, the faster the loop grows, often at minimal cost compared to paid acquisition methods. They can be engineered into a product's design to be highly scalable and sustainable.`,
        btn: 'See Viral Loops Benefits Your Business',
        cards: [
            { icon: cardIcon1, btn: "Learn about Viral Loops", title: "Cost-Efficiency", content: " Once set up, viral loops can grow your user base organically without requiring massive marketing budgets. ", content2: ' There is a clear benefit for the user to share the product (e.g., discounts, rewards, or enhanced functionality).' },
            { icon: cardIcon1, btn: "Learn about Viral Loops", title: "Scalability", content: "The loop accelerates growth as more people join, leading to faster adoption   ", content2: 'There is a clear benefit for the user to share the product (e.g., discounts, rewards, or enhanced functionality).' },

            { icon: cardIcon1, btn: 'Learn about Viral Loops', title: "Acquisition", content: "Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam." },
        ],
        img: img2,
    },
    ProductLedGrowth: {
        title: "Product-Led Growth",
        description:
            `The Product-Led Growth (PLG) theory focuses on using the product itself as the primary driver of customer acquisition, retention, and expansion. Unlike traditional growth strategies that depend heavily on marketing and sales, PLG revolves around delivering immediate value through the product, allowing it to "sell itself" by showcasing its benefits to the user from the very beginning`,
        btn: 'See Product Led Benefits Your Business',
        cards: [
            { icon: cardIcon1, title: "Self-Sustaining Growth", content: "The product becomes a critical part of the sales funnel, reducing reliance on sales teams and marketing campaigns. As users experience its value firsthand, they become advocates, spreading awareness organically" },
            { icon: cardIcon1, title: "Scalable Growth", content: "With the product as the central growth engine, businesses can scale rapidly by focusing on product enhancements and user experience, allowing easy entry into new markets" },
            { icon: cardIcon1, title: "Customer-Centric Innovation", content: "Continuous feedback from users informs product updates, ensuring that features align with customer needs, leading to higher satisfaction and retention" },
            { icon: cardIcon1, title: "Lower Customer Acquisition Costs", content: "Since the product itself drives conversions and expansions, the cost of acquiring customers drops compared to traditional marketing-heavy approaches." },
            { icon: cardIcon1, icon2: cardIcon53, title: "Frictionless Onboarding", content: "PLG emphasizes an intuitive user experience that quickly helps users understand and benefit from the product without needing extensive demos or tutorials" },
        ],
        img: img3,
    },
    TheGrowthLoopTheory: {
        title: "The Growth Loop theory",
        description:
            `The Growth Loop Theory focuses on creating a sustainable, repeatable process where each stage of the customer journey feeds back into the acquisition and growth cycle. Unlike traditional linear funnels, where prospects flow through a one-way path from awareness to conversion, growth loops emphasize creating feedback systems that continuously generate new users through referrals, product usage, or content creation`,
        btn: 'See Viral Loops Benefits Your Business',
        cards: [
            { icon: cardIcon1, title: "Self-Perpetuating Growth", content: "Growth loops are cyclical, meaning each new customer or user contributes to bringing in additional users through product interaction, sharing, or referrals. This creates a compounding effect that scales over time" },
            { icon: cardIcon1, title: "Efficient Resource Usage", content: "By leveraging existing users to fuel future growth, companies can achieve greater expansion without heavy investments in marketing or sales. The product, experience, or content itself serves as the primary growth driver" },
            { icon: cardIcon1, title: "Improved Customer Retention", content: "Growth loops often depend on high engagement and satisfaction. As users become more involved with the product, they tend to stay longer, contributing to both retention and organic growth" },
            { icon: cardIcon1, title: "Scalability Across Channels", content: "Growth loops work well across various digital channels, including social media, product features (such as sharing tools), or content platforms. This flexibility allows for scaling across multiple user acquisition paths" },
            { icon: cardIcon1, icon2: cardIcon54, title: "Organic and Viral Potential", content: "By encouraging users to share their experiences, create content, or invite others, growth loops tap into the viral potential of social networks and word-of-mouth marketing, driving significant growth without heavy advertising spend" },
        ],
        img: img4,
    },
    GrowthFunnelsAndFlywheels: {
        title: "Growth funnels and flywheels",
        description:
            `The Growth Funnels and Flywheels approach combines traditional funnel-based marketing with the momentum-driven mechanics of the flywheel, enabling sustained growth. While funnels focus on a linear path from awareness to conversion, flywheels emphasize continuous motion, where the energy applied to any part of the customer journey enhances the overall growth loop`,
        btn: 'See Viral Loops Benefits Your Business',
        cards: [
            { icon: cardIcon1, title: "Focus on Conversion Metrics", content: "By segmenting users into different stages (top, middle, and bottom of the funnel), businesses can focus on improving specific metrics, such as lead generation or nurturing campaigns" },
            { icon: cardIcon1, title: "Continuous Motion for Growth", content: "Unlike the funnel, which ends at conversion, the flywheel model keeps moving. Every interaction with a customer generates momentum, feeding back into the cycle to encourage more users and growth" },
            { icon: cardIcon1, title: "Increased Retention and Lifetime Value", content: "With a flywheel, businesses focus not just on acquiring new customers but on keeping existing ones engaged. This continuous engagement increases customer lifetime value, as happy users come back and refer others." },
            { icon: cardIcon1, title: "Sustainable and Scalable Growth", content: "Growth flywheels are built for long-term scalability. The better the product experience and customer satisfaction, the faster the flywheel spins, leading to scalable growth without constantly relying on paid channels or high acquisition costs" },
            { icon: cardIcon1, icon2: cardIcon55, title: "Balanced Approach", content: "Combining funnels and flywheels allows businesses to benefit from both models: using funnels for structured marketing and sales efforts while leveraging the flywheel for ongoing customer retention and organic growth" },
        ],
        img: img5,
    },

};

const OverApproach = () => {
    const [activeTab, setActiveTab] = useState("pirateMetrics");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const { title, description, btn, cards, img } = data[activeTab];

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
                    <div className="content_box">
                        <div>
                            <h1 className="title">{title}</h1>
                            <p className="description">{description}</p>
                        </div>
                        <button className="cta-button">{btn}</button>
                    </div>

                    <div className="layout">
                        <div className="cards">
                            {cards.map((card, index) => (
                                <div key={index} className="card">
                                    <div>
                                        <img src={card.icon} alt="" />
                                        <h3 className="card-title">{card.title}</h3>
                                    </div>
                                    <div className="p-icon2">
                                        <p className="card-content">{card.content}</p>
                                        <p className="card-content">{card.content2}</p>
                                        <img src={card.icon2} alt="" />
                                        {index === 2 && card?.btn &&
                                        <button className="cta-button">{card.btn}</button>
                                    }
                                    </div>
                                    {card?.btn && index !== 2 &&
                                        <button className="cta-button">{card.btn}</button>
                                    }
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
