import React from 'react';
import './MonetizationSection.scss';

const services = [
    {
        number: '01',
        title: 'Pricing Strategy & Optimization',
        desc: 'Introducing Our Innovative Pricing Strategy & Optimization Service We Focus On Maximizing Your Revenue Potential By Analyzing Market Trends And Consumer Behavior. Our Team Utilizes Advanced Algorithms To Set Competitive Prices That Attract Customers While Ensuring Profitability. With Tailored Strategies, We Help You Stay Ahead In The Market And Adapt To Changes Swiftly. Let Us Guide You In Making Informed Pricing Decisions That Drive Growth And Success!',
        points: [
            'Psychological Pricing Tactics',
            'Subscription & Membership Pricing Models',
            'Dynamic Pricing Strategies',
        ],
    },
    {
        number: '02',
        title: 'Upselling & Cross-Selling Strategies',
        desc: 'Boost Your Sales With Smart Upselling And Cross-Selling! Understand Your Customers’ Needs To Recommend Complementary Products. For Example, If Someone Buys A Laptop, Suggest A Protective Case Or Productivity Software. Personalize Offers Based On Their Purchase History And Emphasize The Perks Of Premium Options. Tailored Recommendations Not Only Raise Your Average Order Value But Also Enhance Customer Loyalty.',
        points: [
            'Bundling & Discount Strategies',
            'Product Recommendations (Amazon-Style)',
            'One-Click Upsells & Order Bumps',
        ],
    },
    {
        number: '03',
        title: 'Subscription & Membership Growth',
        desc: 'Unlock Exclusive Benefits With Our Subscription And Membership Plans! Enjoy Access To Premium Content, Special Events, And Personalized Support. Join Our Community Today And Experience Growth Like Never Before. With Tailored Resources And Networking Opportunities, You’ll Be Equipped To Reach Your Goals And Thrive!',
        points: [
            'Recurring Revenue Model Optimization',
            'Churn Reduction Strategies',
            'Retention-Based Membership Perks',
        ],
    },
    {
        number: '04',
        title: 'Affiliate & Partnership Marketing',
        desc: 'Affiliate And Partnership Marketing Involves Businesses Teaming Up With Individuals Or Companies To Promote Products Or Services. This Strategy Utilizes Partners’ Reach To Drive Sales And Enhance Brand Visibility. By Building Mutually Beneficial Relationships, Companies Can Access New Audiences And Improve Credibility. Successful Partnerships Require Clear Communication, Shared Goals, And Effective Performance Tracking.',
        points: [
            'Expanding Through Strategic Partnerships',
            'White-Label & Co-Branding Opportunities',
            'Influencer-Driven Sales',
        ],
    },
];

const MonetizationSection = () => {
    return (
        <section className="monetization">
            <div className="top">
                <div className='top_setion'>
                    <h1>What Services Does Our<br /><span>Monetization Offer?</span></h1>
                    <p>
                        Our Monetization Services Provide A Comprehensive Suite Of Tools Designed To Help You Maximize Revenue From Your Content. We Offer Advanced Analytics To Track Performance, Flexible Ad Placements To Suit Your Audience, And Seamless Integration With Various Payment Systems. Whether You’re A Creator Or A Business, Our Platform Empowers You To Optimize Your Monetization Strategy Effectively.
                    </p>
                </div>
                <button className="cta">Contact Us Now</button>
            </div>

            <div className="service-grid">
                {services.map((s, i) => (
                    <div className="service-card" key={i}>
                        <div className="number">{s.number}</div>
                        <div className="content">
                            <h2>{s.title}</h2>
                            <p className="description">{s.desc}</p>
                            <ul>
                                {s.points.map((point, j) => (
                                    <li key={j}>
                                        <span className="icon">⚙️</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MonetizationSection;
