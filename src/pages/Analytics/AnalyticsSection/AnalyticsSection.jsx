import React from "react";
import "./AnalyticsSection.scss";

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 6H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 18H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 12L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 15L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Advanced Attribution Models",
        description:
            "We go beyond last-click attribution—tracking true customer journeys across touchpoints for smarter decision-making."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M8.73047 21.499C10.0226 19.276 12.9819 19.0139 14.6673 20.7126C15.0441 21.0924 15.2325 21.2824 15.3996 21.3051C15.5667 21.3278 16.6152 20.7265 16.9874 20.5131C17.3668 20.2956 18.4187 19.6922 18.4848 19.5344C18.5509 19.3765 18.4817 19.1074 18.3433 18.5692C17.8399 16.6121 19.0606 14.5524 21.011 14.0212C21.5329 13.879 21.7938 13.8079 21.8969 13.672C22 13.5361 22 12.3409 22 11.9036C22 11.4664 22 10.2711 21.8969 10.1352C21.7938 9.9993 21.5329 9.92819 21.011 9.78607C19.0603 9.25481 17.8386 7.19517 18.3418 5.23798C18.4801 4.69968 18.5493 4.43053 18.4832 4.27271C18.4171 4.1149 17.3652 3.51159 16.9859 3.29406C16.6136 3.0806 15.5651 2.47932 15.3981 2.50204C15.231 2.52478 15.0426 2.71467 14.6657 3.09447C13.2064 4.56489 10.792 4.56495 9.33276 3.09456C8.95585 2.71477 8.76739 2.52487 8.60035 2.50215C8.4333 2.47942 7.38483 3.08071 7.0126 3.29418C6.63327 3.51172 5.58126 4.11501 5.51516 4.27285C5.44907 4.43069 5.51829 4.6998 5.65672 5.23805C6.16008 7.19518 4.9394 9.25477 2.98902 9.78605C2.46711 9.92819 2.20615 9.9993 2.10308 10.1353C2 10.2711 2 11.4664 2 11.9036C2 12.3409 2 13.5361 2.10308 13.6721C2.20617 13.808 2.467 13.879 2.98866 14.0211C2.99478 14.0228 3.00089 14.0245 3.007 14.0261" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.48891 18.1828C3.56891 17.1033 7.24091 13.4688 7.60091 13.0489C7.98148 12.6051 7.67291 12.0054 7.85651 10.1461C7.94535 9.24652 8.13895 8.57254 8.69291 8.071C9.35291 7.44726 9.89291 7.44726 11.7529 7.40527C13.3729 7.44726 13.5649 7.26733 13.7329 7.68716C13.8529 7.98704 13.4929 8.16696 13.0609 8.64677C12.1009 9.60637 11.5369 10.0862 11.4829 10.3861C11.0929 11.7055 12.6289 12.4852 13.4689 11.6455C13.7866 11.328 15.2569 9.84627 15.4009 9.72632C15.5089 9.63036 15.7674 9.635 15.8929 9.78629C16.0009 9.89235 16.0129 9.90624 16.0009 10.386C15.9898 10.8302 15.9948 11.4678 15.9961 12.1253C15.9979 12.9773 15.9529 13.9246 15.5929 14.4044C14.8729 15.4839 13.6729 15.5439 12.5929 15.5919C11.5729 15.6519 10.7329 15.5439 10.4689 15.7358C10.2529 15.8438 9.11291 17.0433 7.73291 18.4227L5.27291 20.8817C3.23291 22.5011 0.988911 19.9821 2.48891 18.1828Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: "Tool-Agnostic Approach",
        description:
            "We integrate and optimize industry-leading tools like GA4, Mixpanel, Segment, and more—based on your unique tech stack."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M19.842 13L20.4127 15.3449L19.4647 14.7618C18.7894 14.2569 17.9501 13.9576 17.0404 13.9576C14.809 13.9576 13 15.7579 13 17.9788C13 20.1996 14.809 22 17.0404 22C18.9951 22 20.6256 20.6185 21 18.783" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 5V10M3 5V19C3 20.6569 6.58172 22 11 22C11.0849 22 11.1694 21.9995 11.2537 21.9985" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 12C3 13.616 6.40729 14.9336 10.6748 14.9976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: "End-To-End Data Strategy",
        description:
            "From setup to reporting, we build customized analytics ecosystems that align with your growth goals."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M9.713 7.97461C6.60492 7.97461 4.08533 10.2303 4.08533 13.0129H9.713V7.97461Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M2.53453 15.926C3.77319 18.368 6.52105 20.0662 9.71196 20.0662L9.71196 13.0127H4.87217C3.40834 13.0127 2.67643 13.0127 2.23141 13.7319C1.78639 14.4511 2.03577 14.9427 2.53453 15.926Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M12.7145 21.6766C16.8431 20.5311 19.8419 17.0854 19.8419 13.0127H9.7121V19.0586C9.7121 20.5322 9.7121 21.269 10.3127 21.7226C10.9134 22.1763 11.5137 22.0097 12.7145 21.6766Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M21.6409 10.0343C20.4534 6.21439 17.0381 3.22528 12.7271 2.25958C11.4776 1.97968 10.8528 1.83973 10.2825 2.29354C9.7121 2.74735 9.7121 3.48208 9.7121 4.95155V13.0127H19.054C20.5339 13.0127 21.2738 13.0127 21.7293 12.3984C22.1848 11.784 22.0035 11.2008 21.6409 10.0343Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        title: "Visual Dashboards For Clarity",
        description:
            "Visual dashboards turn complex data into clear insights, enabling real-time tracking and faster, smarter decisions."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 12.5V6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Optimization-Driven Execution",
        description:
            "Analytics isn’t just for tracking—it powers A/B testing, sharpens user experience, and guides smarter, faster decisions in a changing market."
    }
];

const AnalyticsSection = () => {
    return (
        <section className="analytics-section">
            <div className="content">
                <div className="top_content">
                    <div className="left_content">
                        <h1>
                            Why Choose <span>Growththeories India</span> <br /> For Analytics & Optimization?
                        </h1>
                        <p>
                            Partnering with Growththeories India means collaborating with a dedicated team focused on your growth. Our analysts leverage advanced tools to transform data into actionable insights, addressing your unique challenges to boost efficiency and maximize ROI.
                        </p>
                   </div>
                    <button className="contact-btn">Contact Us Now</button>
                </div>
                <div className="features_card">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
