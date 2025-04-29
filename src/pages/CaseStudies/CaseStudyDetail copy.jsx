// App.jsx
import React, { useState } from "react";
import "./CaseStudyDetail.scss";
import companyLogo from "../../assets/service/logo/Logopreso.svg"; // Replace with a local placeholder logo

const data = [
    {
        id: 1,
        title: "The Objective",
        description:
            "Alpha Manufacturing, a mid-sized company specializing in automotive components, faced significant production delays due to inefficient scheduling and frequent machine downtime. Their manual planning process couldn’t keep up with the increasing demand, leading to bottlenecks and underutilized resources. As a result, production targets were missed, and delivery timelines were compromised, impacting customer satisfaction and profitability.",
        keyPointsTitle: "Key Challenges:",
        keyPoints: [
            "Lack of automated production scheduling.",
            "Frequent machine downtimes due to poor visibility into equipment performance.",
            "Missed production targets and delayed deliveries."
        ]
    },
    {
        id: 2,
        title: "The Challenge",
        description:
            "After understanding Alpha Manufacturing’s unique challenges, we implemented our advanced production planning and shop floor management tools. These tools provided real-time visibility into their production processes and automated their scheduling and resource allocation. Our solution allowed Alpha Manufacturing to easily monitor machine performance, predict potential breakdowns, and adjust production plans in real time to minimize downtime.",
        keyPointsTitle: "Key Features Implemented:",
        keyPoints: [
            "Automated Production Scheduling: Reduced manual intervention and created efficient schedules based on real-time data.",
            "Shop Floor Management: Monitored equipment performance in real-time to identify and resolve issues before they caused delays.",
            "Resource Optimization: Balanced workloads across teams and machines to ensure efficient utilization of resources."
        ]
    },
    {
        id: 3,
        title: "The Approach",
        description:
            "Within just three months of implementing our manufacturing solution, Alpha Manufacturing saw significant improvements in their production efficiency and resource utilization. The automated scheduling system minimized manual errors, while real-time shop floor monitoring reduced machine downtime by 20%. As a result, Alpha Manufacturing increased overall production efficiency by 30% and consistently hit their delivery deadlines, leading to improved customer satisfaction and a stronger market position.",
        keyPointsTitle: "Key Results:",
        keyPoints: [
            "30% improvement in overall production efficiency.",
            "20% reduction in machine downtime.",
            "Consistent delivery of production targets.",
            "Improved resource utilization and workforce productivity"
        ]
    },
    {
        id: 4,
        title: "The Impact and Takeaways",
        description:
            "After understanding Alpha Manufacturing's unique challenges, we implemented our advanced production planning and shop floor management tools. These tools provided real-time visibility into their production processes and automated their scheduling and resource allocation. Our solution allowed Alpha Manufacturing to easily monitor machine performance, predict potential breakdowns, and adjust production plans in real time to minimize downtime.",
        keyPointsTitle: "Key Features Implemented:",
        keyPoints: [
            "Automated Production Scheduling: Reduced manual intervention and created efficient schedules based on real-time data.",
            "Shop Floor Management: Monitored equipment performance in real-time to identify and resolve issues before they caused delays.",
            "Resource Optimization: Balanced workloads across teams and machines to ensure efficient utilization of resources.",
        ]
    }
];
const stories = [
    {
        id: 4,
        image: "https://www.appier.com/hubfs/Imported_Blog_Media/Predictive-Modeling-1.jpg",
        title:
            "Growth Prediction Modeling: Anticipating the Future of Your Business",
        author: "Alec Whitten",
        date: "17 Jan 2022",
        description:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        tags: ["Leadership", "Management"],

    },
    {
        id: 5,
        image: "https://slidebazaar.com/wp-content/uploads/2024/08/Free-Tiktok-PowerPoint-Template.jpg",
        title:
            "The Power of TikTok Advertising: Reaching New Audiences  Faster",
        author: "Demi Wilkinson",
        date: "16 Jan 2022",
        description:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        tags: ["Product", "Research", "Frameworks"],
    },
    {
        id: 6,
        image: "https://www.marketresearchintellect.com/images/blogs/audit-management-software-market-surge-what-s-driving-growth-and-innovation-this-year.webp",
        title:
            "Growth Audits: How to Identify and Overcome Your Business’s Bottlenecks",
        author: "Candice Wu",
        date: "15 Jan 2022",
        description:
            "Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        tags: ["Design", "Research"],

    },
    {
        id: 7,
        image: "https://img.freepik.com/free-vector/hands-holding-smartphone-with-bar-chart-screen-rocket_1262-20646.jpg?semt=ais_hybrid&w=740",
        title: "Scaling Startups: What Every Founder Needs to Know About Growth Hacking",
        author: "Emma Davis",
        date: "5 Jan 2024",
        description:
            "Dive into the future of  automotive innovation with trends like AI-driven cars, sustainable materials, and next-gen manufacturing technologies.",
        tags: ["Design", "Research"],

    },
    {
        id: 8,
        image: "https://www.shutterstock.com/image-photo/increase-sales-volume-profit-revenue-600nw-2133052357.jpg",
        title: "Boosting Customer Retention with Data-Driven Strategies",
        author: "Sarah Johnson",
        date: "20 Mar 2023",
        description:
            "Explore how autonomous vehicle technology is reshaping the automotive industry, along with its challenges and future prospects.",
        tags: ["Software Development", "Tools", "SaaS"],

    },
    {
        id: 9,
        image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150165975.jpg?semt=ais_hybrid&w=740",
        title: "Maximizing ROI with Growth Audit Insights",
        author: "James Anderson",
        date: "12 Dec 2023",
        description:
            "Learn about the rapid adoption of electric vehicles and their impact on the automotive industry and global sustainability efforts.",
        tags: ["Podcasts", "Customer Success"],

    }
];
const CaseStudyDetail = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < stories.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <div id="CaseStudyDetail">
            <div className="case-study-detail">
                <div className="content">
                    <div className="case-card">
                        <div className="image-container">
                            <img src='https://assets.mofoprod.net/network/images/Mozilla_From_Detection_to_Disclosure_Cover_Di.width-1200_5P9zk6V.png' alt="Case Study" />
                            <div className="logo-containers0">
                                <img src={companyLogo} alt="Company Logo" />
                            </div>
                        </div>

                        <div className="text-content">
                            <div className="meta">
                                All Blog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>  <span>Growth Tracks</span>
                            </div>
                            <h2 className="card-title">
                                How Growth Tracks Can Fast-Track Your Business Success
                            </h2>
                            {/* <div className="tag">
                                <p className="p1">Growth Tracks</p>
                                <p className="p2">Business Strategy</p>
                                <p className="p3">Scalability</p>
                            </div> */}

                            <p className="card-description">
                                Published on 11 Jan 2022, 5 Min Read
                            </p>

                        </div>


                    </div>
                </div>
            </div>

            {/* <div className="CaseStudyDetail-container">
                <main className="CaseStudyDetail-content">
                    {data.map((section) => (
                        <div key={section.id} className="section">
                            <div className="section-title">
                                <h3> {section.id}</h3>
                                <h2> {section.title}</h2>
                            </div>
                            <p className="section-description">{section.description}</p>
                            <h3 className="key-points-title">{section.keyPointsTitle}</h3>
                            <ul className="key-points-list">
                                {section.keyPoints.map((point, index) => (
                                    <li key={index} className="key-point">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </main>
                <aside className="sidebar-jsf">
                    <img src="https://s3-alpha-sig.figma.com/img/6be0/02d7/a94be69a39ad25512776ee85f36701d5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=id1gT7lJBtrRAeyPoHci5hACUJCwNiDcgL4qcJ5HNcnxV9FikLoLgYETLc~iyZkfr3f71stJJnN0W-SJoSldM48Ip3ZA9m1b-ct1pMdYp6iFHVAN8tArM15wT0JO271h788WLnGRKPhe6QRl0Mh1pHpIsdawO03-O144lBss75EmNaxT3FHC5WU9-QuzO~pkSMyMrSOCUib4gJDdrwHw94Ng47~UcUWD31Pm0XqiLom6BI6kkyC5bHKklGyWX8XL44bwaJPdQwW2FHJ8MThSOJ~~02OL7cGAmDNW9xu6GYCJjOZR2JwhZrDLnMuJrQmMSoXqAiZLRmU5Lgl0Wa~YBg__" alt="" />
                    <div className="sidebar-header">
                        <h3>Jadhav Consultancy</h3>
                        <a href="https://jadconsultancy.com" target="_blank" rel="noopener noreferrer">
                            jadconsultancy.com
                        </a>
                    </div>
                    <div className="sidebar-info">
                        <div className="content_info_2">
                            <p>Founder</p>
                            <h4>Gaurav Jadhav</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Location</p>
                            <h4>Pune, Maharashtra</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Industry</p>
                            <h4>Real estate</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Company Size</p>
                            <h4>Mid Size (50-250)</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Attached Theories</p>
                            <h4>Pirate Metrics, Viral Loops</h4>
                        </div>
                    </div>
                </aside>
            </div>

          
            <div className="carousel-stories">
                <div className="top2lr">
                    <h2>Explore Similar Stories</h2>
                    <div className="carousel-buttons">
                        <button
                            className={`left-arrow ${currentIndex === 0 ? 'inactive' : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            &#8592;
                        </button>
                        <button
                            className={`right-arrow ${currentIndex >= stories.length - 3 ? 'inactive' : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex >= stories.length - 3}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
                <div className="carousel-content">
                    {stories.slice(currentIndex, currentIndex + 3).map((story, index) => (
                        <div className="card" key={index}>
                            <img src={story.image} alt="story" className="card-image-" />
                            <h3 className="card-title">{story.title}</h3>
                            <div className="card-tags">
                                {story.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="card-date">| {story.date}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default CaseStudyDetail;
