import React from "react";
import "./AcquisitionServices.scss";
import AcquisitionSection from "../AcquisitionSection/AcquisitionSection";

const services = [
    {
        id: "01",
        title: "SEO & Content Marketing",
        description:
            "Discover Effective Strategies To Improve Your SEO And Content Marketing. Increasing Traffic And Audience Engagement. Learn How To Optimize Your Content For Search Engines While Ensuring It Resonates With Your Audience. Find Best Practices For Creating Compelling Content That Engages Readers.",
        points: [
            "Keyword Research And Optimization",
            "Blog & Long-Form Content Creation",
            "Link-Building & Outreach Campaigns",
            "Link-Building & Outreach Campaigns",
            "Video Content & YouTube SEO",
        ],
    },
    {
        id: "02",
        title: "Paid Advertising",
        description:
            "Unlock The Potential Of Your Business With Our Premium Services! Experience Seamless Solutions Designed To Elevate Your Brand And Drive Results. Join Countless Satisfied Customers Who Have Transformed Their Operations With Our Innovative Tools. Don’t Miss Out—Start Your Journey To Success Today!",
        points: [
            "Google Ads (Search, Display, Shopping, YouTube)",
            "Facebook, Instagram, TikTok, LinkedIn, Twitter Ads",
            "Retargeting & Lookalike Audience Campaigns",
            "Conversion Tracking & ROAS Optimization",
            "Performance Creatives (Ad Copy & Visuals)",
        ],
    },
    {
        id: "03",
        title: "Social Media Growth & Engagement",
        description:
            "Unlock The Secrets To Boosting Your Social Media Growth! Discover Strategies That Engage Your Audience And Enhance Interaction. Learn To Create Compelling Content And Leverage Analytics To Build A Thriving Online Community. Transform Your Social Media Presence Into A Powerful Tool For Connection!",
        points: [
            "Organic Content Strategy (Posts, Reels, Stories, Tweets)",
            "Community Building & Engagement (Comments, Shares, UGC)",
            "Hashtag & Trend Research",
            "Collaborations With Micro & Macro Influencers",
            "Social Listening & Sentiment Analysis",
        ],
    },
    {
        id: "04",
        title: "Influencer & Affiliate Marketing",
        description:
            "Influencer And Affiliate Marketing Harness The Power Of Social Media Personalities To Promote Products. By Partnering With Influencers, Brands Gain Visibility And Credibility Among Loyal Followers. Affiliates Earn Commissions By Sharing Unique Links, Driving Traffic And Sales. This Collaboration Benefits Both Influencers And Brands.",
        points: [
            "Influencer Outreach & Partnerships (Instagram, TikTok, YouTube)",
            "Performance-Based Affiliate Programs",
            "Discount Codes & Referral Links",
            "User-Generated Content (UGC) Campaigns",
        ],
    },
    {
        id: "05",
        title: "Referral & Viral Marketing Campaigns",
        description:
            "Harness the power of word-of-mouth with our Referral & Viral Marketing Campaigns! Motivate customers to share their experiences and reward them for bringing in new clients. Use social media and engaging content to create buzz around your brand and turn satisfied customers into enthusiastic advocates.",
        points: [
            "Creating referral programs (Dropbox, Uber-style rewards)",
            "Gamification for viral loops (leaderboards, incentives)",
            "Social sharing & invite features",
            "Contests & giveaways",
        ],
    },
    {
        id: "06",
        title: "Landing Page Optimization",
        description:
            "Boost your website's effectiveness with our Landing Page Optimization service. We improve user engagement and conversion rates by refining layouts and enhancing load times. Our experts will analyze your setup and implement strategies to attract and retain visitors.",
        points: [
            "High-converting landing pages (A/B tested CTAs, headlines)",
            "Fast load speed & mobile-first design",
            "Heatmaps & behavior tracking (Hotjar, Crazy Egg)",
            "Exit-intent popups & lead magnets",
        ],
    },
];

const AcquisitionServices = () => {
    return (
        <section className="acquisition-wrapper">
            <AcquisitionSection />
            <div className="top-section">

                <div>
                    <h1>What services does our <span> Acquisition offer?</span></h1>
                    <p>Our Acquisition services offer comprehensive expertise in sourcing, negotiating, and securing valuable assets, ensuring that your business portfolio is not only enhanced but also strategically positioned for future growth and success.</p>
                </div>
                <button className="cta-btn">Contact us now</button>

            </div>

            <div className="service-grid">
                {services.map((item) => (
                    <div className="service-card" key={item.id}>
                        <h3 className="left_card_sec">
                            {item.id}
                        </h3>
                        <div className="right_card_sec">
                            <h2> {item.title}</h2>
                            <p className="desc">{item.description}</p>
                            <ul>
                                {item.points.map((point, index) => (
                                    <li key={index}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                        <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> {point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcquisitionServices;
