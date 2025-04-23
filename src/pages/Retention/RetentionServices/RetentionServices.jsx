import React from "react";
import "./Retention.scss";

const services = [
    {
        id: "01",
        title: "Email & Lifecycle Marketing",
        desc: "Email And Lifecycle Marketing Are Vital For Engaging Customers Throughout Their Journey With Personalized Messages. By Using Data Analytics, Businesses Can Boost Customer Retention And Conversion Rates, Enhancing Brand Loyalty And Making Marketing Efforts More Effective.",
        points: [
            "Welcome Sequences & Drip Campaigns",
            "Abandoned Cart Recovery Emails",
            "Win-Back & Re-Engagement Campaigns",
            "Newsletters & Nurture Sequences"
        ]
    },
    {
        id: "02",
        title: "Loyalty & Rewards Programs",
        desc: "Discover The Benefits Of Our Loyalty & Rewards Programs! Earn Points With Every Purchase And Unlock Exclusive Discounts, Special Offers, And Unique Experiences. Enjoy Personalized Rewards Tailored Just For You, And Watch Your Points Accumulate As You Shop. Join Us Today And Start Reaping The Rewards Of Your Loyalty!",
        points: [
            "Points-Based Rewards Systems",
            "VIP Customer Clubs",
            "Referral-Based Incentives"
        ]
    },
    {
        id: "03",
        title: "Push Notifications & SMS Campaigns",
        desc: "Engage Your Audience With Impactful Push Notifications And SMS Campaigns. Use Concise Messages To Showcase Your Latest Offers And Updates. Ensure Your Notifications Are Timely And Relevant To Enhance User Engagement And Drive Conversions.",
        points: [
            "Mobile & Web Push Notifications",
            "SMS Marketing For Instant Engagement",
            "Behavioral-Triggered Messages"
        ]
    },
    {
        id: "04",
        title: "Gamification Strategies",
        desc: "Gamification strategies use game-like elements in non-game contexts to boost engagement. By offering points, badges, and leaderboards, they encourage active participation. For example, a fitness app rewards users with badges for milestones, while a learning platform gives points for completing courses.",
        points: [
            "Leaderboards & achievement badges",
            "Streaks & progress tracking",
            "Contests & engagement rewards"
        ]
    },
];

const RetentionServices = () => {
    return (
        <div className="retention-section">

            <div className="top-retention">
                <div className='top_setion'>
                    <h1>What services does our
                        <br /><span>Retention offer?
                        </span></h1>
                    <p>
                        Our Retention services boost customer loyalty and satisfaction through personalized support and proactive engagement. By analyzing feedback and behavior, we develop targeted initiatives that keep clients connected and invested. Our aim is to build long-term relationships that benefit both our customers and our business.
                    </p>
                </div>
                <button className="cta-button">Contact Us Now</button>
            </div>

            <div className="service-wrapper">
                {services.map((service) => (
                    <div className="service-box" key={service.id}>
                        <div className="service-left">
                            <h3>{service.id}</h3>
                        </div>
                        <div className="service-middle">
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                        </div>
                        <div className="service-right">
                            {service.points.map((point, idx) => (
                                <span key={idx} className="tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                    <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> {point}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RetentionServices;
