import React, { useState } from "react";
import "./CaseStudiesCard.scss";

const cardData = [
  // E-commerce
  {
    id: 1,
    category: "E-commerce",
    readTime: "5 min read",
    title: "E-commerce: Boosting Conversion Rates with Personalized Marketing",
    description:
      "An e-commerce brand implemented a Growth Track strategy that focused on personalized marketing and customer segmentation.",
        image: "https://inc42.com/wp-content/uploads/2014/07/ecommerce-personalization.png",
  },
  {
    id: 2,
    category: "E-commerce",
    readTime: "5 min read",
    title: "E-commerce: Enhancing Customer Loyalty",
    description:
      "This case study focuses on how loyalty programs improved customer retention and boosted sales by 30%.",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 3,
    category: "E-commerce",
    readTime: "5 min read",
    title: "E-commerce: Improving Checkout Experiences",
    description:
      "Streamlined checkout experiences reduced cart abandonment rates by 40% for an online retailer.",
      image: "https://res.cloudinary.com/dugcmkito/image/upload/v1669924904/ecommerce_checkout_best_practices_eaef87bcda.jpg",
  },
  {
    id: 4,
    category: "E-commerce",
    readTime: "5 min read",
    title: "E-commerce: Leveraging AI for Recommendations",
    description:
      "How AI-based product recommendations boosted sales by identifying customer preferences.",
      image: "https://www.pacificdataintegrators.com/hubfs/a-futuristic-design-with-a-teal-background-and-a-c-pg-hNToNRpi4bi90_usfxQ-EXsFDi_MSTWoMlpnykt6Dg.jpeg",
  },
  // Fintech
  {
    id: 5,
    category: "Fintech",
    readTime: "5 min read",
    title: "Fintech: Enhancing Security for Online Transactions",
    description:
      "A fintech startup implemented AI to detect fraud in real-time, ensuring secure online transactions.",
      image: "https://cdn.prod.website-files.com/64a6f67b79a80fd9ff31ca7a/6518618b4aed4b545a77395d_651189bfaf7fb9de6907480d_64c2401a5bd3fc5f86e5f5a9_th.png",
  },
  {
    id: 6,
    category: "Fintech",
    readTime: "5 min read",
    title: "Fintech: Scaling Investment Platforms",
    description:
      "Case study on scaling a fintech platform to support 1 million users with zero downtime.",
      image: "https://media.dashdevs.com/images/how-to-scale-fintech-internationally-desk.jpg",
  },
  {
    id: 7,
    category: "Fintech",
    readTime: "5 min read",
    title: "Fintech: Simplifying Loan Approvals",
    description:
      "This case study showcases how automation reduced loan approval times by 60%.",
      image: "https://www.cashe.co.in/wp-content/uploads/2024/02/Fintechs-1.png",
  },
  {
    id: 8,
    category: "Fintech",
    readTime: "5 min read",
    title: "Fintech: Personalizing User Experiences",
    description:
      "How personalization led to a 35% increase in user engagement on a fintech app.",
      image: "https://startupsmagazine.co.uk/sites/default/files/2023-09/finance%20ai.png",
  },
  // Healthcare
  {
    id: 9,
    category: "Health Care",
    readTime: "5 min read",
    title: "Healthcare: Optimizing Patient Scheduling Systems",
    description:
      "A healthcare provider improved patient satisfaction by streamlining scheduling systems.",
      image: "https://pixelplex.io/wp-content/uploads/2023/09/patient-scheduling-software-guide-meta.jpg",
  },
  {
    id: 10,
    category: "Health Care",
    readTime: "5 min read",
    title: "Healthcare: Telemedicine Adoption",
    description:
      "How a healthcare provider increased telemedicine adoption by 70%.",
      image: "https://business.cornell.edu/wp-content/uploads/sites/2/2022/04/telehealth-overview-600x400-1-600x400.png",
  },
  {
    id: 11,
    category: "Health Care",
    readTime: "5 min read",
    title: "Healthcare: Reducing Operational Costs",
    description:
      "Implemented data-driven solutions to cut operational costs by 25% for a hospital chain.",
      image: "https://www.crouse.org/wp-content/uploads/2019/02/Hospital-Prices.jpg",
  },
  {
    id: 12,
    category: "Health Care",
    readTime: "5 min read",
    title: "Healthcare: Improving Emergency Response",
    description:
      "Enhanced emergency response times through technology integration.",
      image: "https://img.freepik.com/premium-photo/doctors-wearing-vr-simulation-with-hologram-medical-technology_1234738-167569.jpg",
  },
  // SaaS
  {
    id: 13,
    category: "SaaS",
    readTime: "5 min read",
    title: "SaaS: Automating Workflows",
    description:
      "A SaaS company achieved greater productivity by automating repetitive workflows.",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 14,
    category: "SaaS",
    readTime: "5 min read",
    title: "SaaS: Reducing Infrastructure Costs",
    description:
      "Case study on reducing infrastructure costs by adopting serverless technologies.",
      image: "https://www.activtrak.com/wp-content/uploads/2024/12/blog-header-workforce-planning-template.jpg",
  },
  {
    id: 15,
    category: "SaaS",
    readTime: "5 min read",
    title: "SaaS: Enhancing Customer Retention",
    description:
      "Improved customer retention through detailed analytics and feedback loops.",
      image: "https://images.prismic.io/labsmedia/ZvqBMLVsGrYSwIBW_SaaScustomerretentionstrategies.jpg?auto=format,compress",
  },
  {
    id: 16,
    category: "SaaS",
    readTime: "5 min read",
    title: "SaaS: Customizing B2B Solutions",
    description:
      "How custom B2B solutions increased adoption rates by 50% for enterprise clients.",
      image: "https://media.assettype.com/analyticsinsight%2F2024-06%2Fb4936945-34a9-4041-bb9b-839b497cbbf3%2F68.png?w=1024&auto=format%2Ccompress&fit=max",
  },
];

const categories = ["All", "SaaS", "E-commerce", "Health Care", "Fintech", "Real Estate"];

const CaseStudiesCard = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter cards based on active category
    const filteredCards = activeCategory === "All"
        ? cardData
        : cardData.filter((card) => card.category === activeCategory);

    return (
        <div className="case-studies-page">
            <div className="header">
                <nav className="categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? "active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="cards-container">
                {filteredCards.map((card) => (
                    <div key={card.id} className="card">
                        <div className="card-image">
                            <img src={card.image} alt={card.category} />
                        </div>
                        <div className="card-content">
                            <div className="card-meta">
                                <span className="category">{card.category}</span>
                                <span className="read-time">{card.readTime}</span>
                            </div>
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-description">{card.description}</p>
                            <a href="/blog-detail" className="read-more">
                                Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudiesCard;
