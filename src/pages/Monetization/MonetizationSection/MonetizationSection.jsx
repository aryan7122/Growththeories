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
                            <div className='left_01'>
                                <h2>{s.title}</h2>
                                <p className="description">{s.desc}</p>
                            </div>
                            <ul className='ul_right'>
                                {s.points.map((point, j) => (
                                    <li key={j}>
                                        <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                            <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" stroke="currentColor" stroke-width="1.5" />
                                            <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
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
