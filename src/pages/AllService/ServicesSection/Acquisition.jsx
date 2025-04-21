import React from "react";
import "./Acquisition.scss";
import AcquisitionImg from '../../../assets/allService/Acquisition (Getting new customer).svg'
import ActivationConversionDataImg from '../../../assets/allService/ActivationConversionData.svg'
import RetentionEngagementImg from '../../../assets/allService/Retention & Engagement (Keeping Users Active & Loyal).svg'
import MonetizationImg from '../../../assets/allService/Monetization & Revenue Growth (Maximizing Sales & Revenue) - visual selection 1.svg'
import AnalyticsOptimizationImg from '../../../assets/allService/Analytics & Optimization.svg'

const acquisitionData = {
    title: "Acquisition",
    title2: "(Getting New Customer)",
    subtitle:
        "Acquisition Is All About Attracting New Customers To Your Business. Instead Of Relying On Random Tactics, Focus On A Systematic Approach That Encourages Quick Testing Of Ideas. The Secret To Successful Growth Lies In Figuring Out What Strategies Resonate With Your Audience And Quickly Letting Go Of Those That Don’t.",
    services: [
        {
            id: "01",
            title: "Keyword Research And Optimization",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "02",
            title: "Blog & Long-Form Content Creation",
            description:
                "Increased user engagement and retention, as users are actively participating in the growth process.",
        },
        {
            id: "03",
            title: "Link-Building & Outreach Campaigns",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing",
        },
        {
            id: "04",
            title: "Video Content & YouTube SEO",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
        {
            id: "05",
            title: "Guest Posting & PR Articles",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "06",
            title: "Guest Posting & PR Articles",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "07",
            title: "Link-Building & Outreach Campaigns",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing",
        },
        {
            id: "08",
            title: "Video Content & YouTube SEO",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
    ],
};


const ActivationConversionData = {
    title: "Activation & Conversion ",
    subtitle:
        "Businesses are constantly searching for fresh strategies. Yet, true growth isn't just about tactics. It stems from a well-organized approach to quick experimentation. The secret lies in making successful methods a standard practice while swiftly discarding those that fall flat.",
    services: [
        {
            id: "01",
            title: "Sales funnel analysis & improvement",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "02",
            title: "Checkout process streamlining",
            description:
                "Increased user engagement and retention, as users are actively participating in the growth process.",
        },
        {
            id: "03",
            title: "Customer journey mapping",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing ",
        },
        {
            id: "04",
            title: "Reducing friction in sign-ups",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
    ],
};

// 
const RetentionEngagementData = {
    title: "Retention & Engagement",
    title2: " (Keeping Users Active & Loyal) ",
    subtitle:
        "Retention and Engagement focus on keeping users active, satisfied, and loyal to your brand. By delivering personalized experiences, fostering long-term relationships, and consistently adding value, businesses can boost customer lifetime value and reduce churn.",
    services: [
        {
            id: "01",
            title: "Welcome sequences & drip campaigns",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "02",
            title: "Abandoned cart recovery emails",
            description:
                "Increased user engagement and retention, as users are actively participating in the growth process.",
        },
        {
            id: "03",
            title: "Win-back & re-engagement campaigns",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing ",
        },
        {
            id: "04",
            title: "Newsletters & nurture sequences",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
    ],
};
// 
const MonetizationRevenueData = {
    title: "Monetization & Revenue Growth ",
    title2: " (Maximizing Sales & Revenue) ",
    subtitle:
        "Monetization & Revenue Growth focuses on optimizing sales and increasing revenue through effective strategies. By leveraging data-driven insights, personalized experiences, and scalable solutions, businesses can unlock new income streams and drive sustainable growth.",
    services: [
        {
            id: "01",
            title: "Psychological pricing tactics",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "02",
            title: "Subscription & membership pricing models",
            description:
                "Increased user engagement and retention, as users are actively participating in the growth process.",
        },
        {
            id: "03",
            title: "Dynamic pricing strategies",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing ",
        },
        {
            id: "04",
            title: "Newsletters & nurture sequences",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
    ],
};

const AnalyticsOptimizationData = {
    title: "Analytics & Optimization ",
    title2: "  (Tracking, Measuring, and Scaling Growth) ",
    subtitle:
        "Tracking, measuring, and scaling growth through data-driven insights. Our approach ensures continuous improvement by identifying what works, optimizing performance, and driving sustainable business growth.",
    services: [
        {
            id: "01",
            title: "Google Analytics 4 (GA4) & UTM tracking",
            description:
                "Continuous growth without requiring constant investment in new acquisition strategies.",
        },
        {
            id: "02",
            title: "Mixpanel, Amplitude, or Heap analytics setup",
            description:
                "Increased user engagement and retention, as users are actively participating in the growth process.",
        },
        {
            id: "03",
            title: "Attribution modeling (first-click, last-click, multi-touch)",
            description:
                "A stable, self-sustaining growth mechanism that can provide long-term results even as marketing ",
        },
        {
            id: "04",
            title: "Newsletters & nurture sequences",
            description:
                "Fast and sustained growth, which is partic valuable for startups or businesses looking to scale quickly",
        },
    ],
};


const Acquisition = () => {
    return (
        <>
            <div className="Acquisition-section">
                <div className="Acquisition-header">
                    <div>
                        <h1>{acquisitionData.title} <span>{acquisitionData.title2}</span></h1>
                        <p>{acquisitionData.subtitle}</p>
                    </div>
                    <button className="cta-btn">See All Acquisition services</button>
                </div>
                <div className="services-graphic">
                    <img src={AcquisitionImg} alt="Acquisition Cycle" />
                </div>
                <div className="services-description">
                    <p>
                        Elevate Your Brand With Our All-In-One Research Services In India! From UI/UX Design To
                        Conversion Rate Optimization And Brand Strategy, We’ve Got You Covered.
                    </p>
                </div>
                <div className="services-grid">
                    {acquisitionData.services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-id">{service.id}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="Acquisition-section">
                <div className="Acquisition-header border-top">
                    <div>
                        <h1>{ActivationConversionData.title} <span>{ActivationConversionData.title2}</span></h1>
                        <p>{ActivationConversionData.subtitle}</p>
                    </div>
                    <button className="cta-btn">See all activation services</button>
                </div>
                <div className="services-graphic">
                    <img src={ActivationConversionDataImg} alt="Acquisition Cycle" />
                </div>
                <div className="services-description">
                    <p>
                        Elevate your brand with our activation services! We offer user-friendly solutions like UI/UX design, conversion rate optimization, and strategic branding to help you thrive in India.
                    </p>
                </div>
                <div className="services-grid">
                    {ActivationConversionData.services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-id">{service.id}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="Acquisition-section">
                <div className="Acquisition-header border-top">
                    <div>
                        <h1>{RetentionEngagementData.title} <span>{RetentionEngagementData.title2}</span></h1>
                        <p>{RetentionEngagementData.subtitle}</p>
                    </div>
                    <button className="cta-btn">See all retention services</button>
                </div>
                <div className="services-graphic">
                    <img src={RetentionEngagementImg} alt="Acquisition Cycle" />
                </div>
                <div className="services-description">
                    <p>
                        Boost your brand's success with our tailored retention services! From enhancing user experience to optimizing conversion rates, we provide actionable strategies that keep your customers coming back for more.
                    </p>
                </div>
                <div className="services-grid">
                    {RetentionEngagementData.services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-id">{service.id}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="Acquisition-section">
                <div className="Acquisition-header border-top">
                    <div>
                        <h1>{MonetizationRevenueData.title} <span>{MonetizationRevenueData.title2}</span></h1>
                        <p>{MonetizationRevenueData.subtitle}</p>
                    </div>
                    <button className="cta-btn">See all retention services</button>
                </div>
                <div className="services-graphic">
                    <img src={MonetizationImg} alt="Acquisition Cycle" />
                </div>
                <div className="services-description">
                    <p>
                        Boost your brand's revenue with our tailored monetization services! From user-friendly UI/UX design to effective conversion rate optimization and strategic branding, we’ve got you covered.
                    </p>
                </div>
                <div className="services-grid">
                    {MonetizationRevenueData.services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-id">{service.id}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="Acquisition-section">
                <div className="Acquisition-header border-top">
                    <div>
                        <h1>{AnalyticsOptimizationData.title} <span>{AnalyticsOptimizationData.title2}</span></h1>
                        <p>{AnalyticsOptimizationData.subtitle}</p>
                    </div>
                    <button className="cta-btn">See all Analytics services</button>
                </div>
                <div className="services-graphic">
                    <img src={AnalyticsOptimizationImg} alt="Acquisition Cycle" />
                </div>
                <div className="services-description">
                    <p>
                        Maximize your brand's impact with our user-friendly analytics and optimization services in India. We offer tailored solutions in UI/UX, conversion rate optimization, brand strategy, and more to help you succeed.
                    </p>
                </div>
                <div className="services-grid">
                    {AnalyticsOptimizationData.services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <div className="service-id">{service.id}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Acquisition;
