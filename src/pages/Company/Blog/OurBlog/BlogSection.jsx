import React from "react";
import "./BlogSection.scss";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const BlogSection = () => {
    const recentPosts = [
        {
            id: 1,
            image: "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/vip/2025/01/metrics-for-success-inc.jpg", // Replace with actual image URL
            title: "How Growth Tracks Can Fast-Track Your Business Success",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
            tags: ["Growth Tracks", "Business Strategy", "Scalability"],
            description: "Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at.",
        },
        {
            id: 2,
            image: "https://www.shutterstock.com/image-photo/business-model-canvas-concept-innovative-260nw-2377048093.jpg",
            title: "How to Tap into New Revenue Streams",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
            tags: ["Marketplaces", "E-commerce"],
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur  Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam. turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        },
        {
            id: 3,
            image: "https://www.shutterstock.com/image-photo/aidriven-workflow-automating-data-management-600nw-2428568631.jpg",
            title: "The Key to Making Data-Driven Decisions",
            author: "Lana Steiner",
            date: "18 Jan 2024",
            tags: ["Validation", "Risk Reduction"],
            description:
                "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.  Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        },
    ];

    const allPosts = [
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
    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to top after navigation
    };
    return (
        <>
            <div className="topBlogitle">
                <h5 className="blog-label">OUR BLOGS</h5>
                <h2 className="blog-heading">Stories And Interviews</h2>
                <p className="blog-description">
                    Dive into inspiring journeys and exclusive insights from business
                    leaders and growth experts. Learn how they've overcome challenges and
                    driven success through innovation, strategy, and data-driven growth.
                </p>
            </div>
            <div className="blog-posts">
                <section className="recent-posts">
                    <motion.h2
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        Recent Blog Posts
                    </motion.h2>
                    <div className="recent-grid">
                        <div className="main-post">
                            <motion.img
                                onClick={() => handleNavigation('/blog-detail')}
                                src={recentPosts[0].image}
                                alt={recentPosts[0].title}
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.1 }}
                            />
                            <div className="content">
                                <motion.p
                                    onClick={() => handleNavigation('/blog-detail')}
                                    className="author"
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    {recentPosts[0].author} • {recentPosts[0].date}
                                </motion.p>
                                <motion.h3
                                    onClick={() => handleNavigation('/blog-detail')}
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    {recentPosts[0].title}
                                </motion.h3>
                                <motion.p
                                    onClick={() => handleNavigation('/blog-detail')}
                                    className="description"
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    {recentPosts[0].description}
                                </motion.p>
                                <div className="blog-tags">
                                    {recentPosts[0].tags.map((tag, index) => (
                                        <span className="tag" key={index}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="side-posts">
                            {recentPosts.slice(1).map((post) => (
                                <div key={post.id} className="side-post">
                                    <motion.img
                                        onClick={() => handleNavigation('/blog-detail')}
                                        src={post.image}
                                        alt={post.title}
                                        initial={{ opacity: 0, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    />
                                    <div className="content">
                                        <motion.p
                                            onClick={() => handleNavigation('/blog-detail')}
                                            className="author"
                                            initial={{ opacity: 0, y: 0 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {post.author} • {post.date}
                                        </motion.p>
                                        <motion.h3
                                            onClick={() => handleNavigation('/blog-detail')}
                                            initial={{ opacity: 0, y: 0 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {post.title}
                                        </motion.h3>
                                        <motion.p
                                            onClick={() => handleNavigation('/blog-detail')}
                                            className="description"
                                            initial={{ opacity: 0, y: 0 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {post.description}
                                        </motion.p>
                                        <div className="blog-tags">
                                            {post.tags.map((tag, index) => (
                                                <span className="tag" key={index}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="all-posts">
                    <motion.h2
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        All Blog Posts
                    </motion.h2>
                    <div className="all-grid">
                        {allPosts.map((post) => (
                            <div key={post.id} className="post-card">
                                <motion.img
                                    onClick={() => handleNavigation('/blog-detail')}
                                    src={post.image}
                                    alt={post.title}
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                />
                                <div className="content">
                                    <motion.p
                                        onClick={() => handleNavigation('/blog-detail')}
                                        className="author"
                                        initial={{ opacity: 0, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {post.author} • {post.date}
                                    </motion.p>
                                    <motion.h3
                                        onClick={() => handleNavigation('/blog-detail')}
                                        initial={{ opacity: 0, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <span>
                                            {post.title}
                                        </span>
                                       
                                    </motion.h3>
                                    <motion.p
                                        onClick={() => handleNavigation('/blog-detail')}
                                        className="description"
                                        initial={{ opacity: 0, y: 0 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        {post.description}
                                    </motion.p>
                                    <div className="blog-tags">
                                        {post.tags.map((tag, index) => (
                                            <span className="tag" key={index}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="readMore">Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#a1182f" fill="none">
                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#a1182f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </>
    );
};

export default BlogSection;
//