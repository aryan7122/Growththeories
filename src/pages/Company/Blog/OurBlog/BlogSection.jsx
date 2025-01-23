import React from "react";
import "./BlogSection.scss";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const BlogSection = () => {
    const recentPosts = [
        {
            id: 1,
            image: "https://s3-alpha-sig.figma.com/img/9ca4/12fa/840de131974162b09d68033e23a850b5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~qhFdDondgCr9JIlbE1~Jf1QgzlXm78oF~AbIuqBeOAs-V0yt9jQjUcr-9zHf6AeWlwS0G-wjbsLUsQjWkMLl8dKHSHshS98cewuuNHPJ--M0BJob3Swh2w7o8A2hPal0O16Sqv7X2r7v9YiT5LxnjkuHruH0a2KBTnJGbmIMtNDEHLep0KTJIkqJ64WjGj4lwA2FFolWiLqV9I9pNcIsAtdiMa8f9tq-NKcNVfr1l-LRaHhRZo1Mg~L4KW-JD5JX5EjSOaUa0X4sIFWPDT33wImfo5b-noV0Zwhh-2qScYSXGSrVsuUDO6kzk4txHje1TQT0-G61aPX16gGMeWAw__", // Replace with actual image URL
            title: "How Growth Tracks Can Fast-Track Your Business Success",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
            tags: ["Growth Tracks", "Business Strategy", "Scalability"],
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at.",
        },
        {
            id: 2,
            image: "https://s3-alpha-sig.figma.com/img/0095/33dd/b18880647940253fa905f2a8d6a3a95e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3IpxHTFpqsAQwO3iaN9YWJUqHCShONQDK2OBQ15eae4etbRjQShpN-Gjh07x5VgNsHk~9~IFmZ83yHSashjyK0To-m8Zpi9gol416zPXTFtxbS3dB84hNm57l6y4OjYQ3RBSiu6oYrr7soBPThuOJMD1161X4Pl5r0OehOyzkwDAhLKCFjftocB5vkEPT-sYuBCpGh1kwyFv16SDWALCfdrJGUF1ByxkCvo5SdRef4kykgEkkLFkwUasivSaj8JBf1TJvdJazQbu5KXInLDFfvykj0zxaOnju6A83Yb0S70YrnKcfL2-fYvUKIfpzOtZiCeSHtdmKcDkQE3Wsmkww__",
            title: "How to Tap into New Revenue Streams",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
            tags: ["Marketplaces", "E-commerce"],
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur  Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam. turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
        },
        {
            id: 3,
            image: "https://s3-alpha-sig.figma.com/img/cc38/6537/30f1dbd43e8996a38be1322cbc424f82?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zjsq~xk6hIoTmEOK5wyker-XFsK-0ipjH25VnUIRcNzIsttuQDqX69Hhpv49dcFbQrnXvHX4MK753~y5F8l01BF3ngqNCWdr~HEFCNMPlVQINS7z6UaiLZ58NkSVDNO9SbGX~RZ39zgkR3qYBNPO1~OgCU-H7IphswnJIgcyfXB2TtHRN5dIgzTPfpqP3v-AojGcASkBP2X3OLfT61-9Uh5NaC3dZyZc6X6LAA5VK3Z4R0aPxCsAzTgqwtQW8Uul2ROkXiWObE61E7yUjtOUp9DJjp21CiF3gXy9hWfNTO5JFKu4dpUd1zlgYM1SPkqw4aal3Z5yI2YKliCZiyOtqA__",
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
            image: "https://s3-alpha-sig.figma.com/img/425d/5d07/5a9d3c167aebe8c4a692bd198db12c93?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hmaZV6k9MwsmdIiLaoik2fw7c8FFrhfvSru60ofvv448YP1XfgE9tBDo~941z9em6vL3zmagny-lXvi8aS6NCNFgEhmTymijq84eSPQ8tGGxaS3wv9oPw-Riw2zVj63a2rB3JQ9xj5J7AsYmix9JNyAGDJ0q2oCc0RvYWbpsKrPNeIjOpsZiMtcRpRrWxdr9bZgZux2jvEWZcejlksXxNnaEUYWL0r8256FTdfRkYna3PijM0EvYC3L4fiV3NpDKuWbzvJ4eZAsMlTBaMb7CsJIjCjbCUh7K2~F5SUDEciuIrAa68dpCPJrAGrtu9gHBiP~ujiU0Cqbop3tDfdQZEA__",
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
            image: "https://s3-alpha-sig.figma.com/img/a942/2d2c/dbc7fec700fc6fc88327903dc767588e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3eml6GNckt2sVBU1yBQwMO~XU5A4F1IkJCQgRTd2kG91psf-hCVrKA1ceH7ytf1J7-u939eM1A3rj8lgaagHoqilnHTtM63qnvBQQimuX3t4jZX3QOJd0FEZ7ZmvFIEx8iPlhgxo9TkZbmWXGl-U4dUmrEkCJIHr5u3n3Qbm7qNAqowZaxn0uIiaTXiPIs3Mf6vJp8~Z8CdIzHihkT~cqaHY2bgok32RQLBRql6LyaTQe8G8FdlfbPeNrap2D9dmDcoOIOcHezRQ9lRD4GqHBYFn-p5g8dgrQz09f~5ja5yCFS36ia3-U48LjHWsks~ED4KrKMFfR2lArsQLCpAbg__",
            title:
                "The Power of TikTok Advertising: Reaching New Audiences  Faster",
            author: "Demi Wilkinson",
            date: "16 Jan 2022",
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Pellentesque feugiat viverra urna neque at. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
            tags: ["Product", "Research","Frameworks"],
        },
        {
            id: 6,
            image: "https://s3-alpha-sig.figma.com/img/349d/c050/6e9042f0ec4ed12ec835d9e6bab83a11?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PoIxOpfxgF~q8c7DnETaykOf~qNp13LIOQQj-laDcOGpxg1RYbsph9BImpE~Ek-FbhVb~0rC1cgqJXXQzR5ocImTSNH7hi6a7IXvY7eiwAN01kQfZErXDu-HLjEmGKOKq9kLiWFXTcBrNUBQQPvBQB6mTBFnPZ3dQ9t73NX4oLjhawuU6t9oKGI41W3Ztf01CoE05AoQiHkdgdLN6NBgC~5jmzuYpATvN2PVppS87NT~Sjdkd-FVJ1VHAifBHRT08GI4eIXjprvFlEO1XcmCP7v796vv6GjKGfxPYA1l5HiOQSmKW7kAifQhgjMz31PWHRyS3Az5Dtc5nsTo~4cRjw__",
            title:
                "Growth Audits: How to Identify and Overcome Your Business’s Bottlenecks",
            author: "Candice Wu",
            date: "15 Jan 2022",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam. Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam Lorem ipsum dolor sit amet consectetur. Vulputate dignissim aenean consectetur turpis parturient sed diam.",
            tags: ["Design","Research"],

        },
        {
            id: 7,
            image: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nm74i-cGyYu8ZaFU99f1kc75I5b0XjDB7AnhlytnGLRAyAi25hJ4Z2Ok0Vm2z~u-l1N942l3xbda3TdOJJYQrQFNo5dNA0JvwJHM2AoOVgFTskRhPVn6zpZQMsOKByKvdECXfiv58gFJHLgjtgE5k~f77fJmX2p7CDdC4GhaSo0vOqTa9FktE8xqdkqo7LyvcOtAeeR-mhOi2LUwef0Ax-acxGujB7w4UBLpOAZ8wsvYTzd8FvFj5FuioXJ7jHsSL7AEiFzidcdr8yKXT1tbrXnD4VImzjNGpuXXDcel-rHGyvzAwK6YnpBu3m9AjC1rGZZPR8L4v4XQJbgwAsoyjw__",
            title: "Scaling Startups: What Every Founder Needs to Know About Growth Hacking",
            author: "Emma Davis",
            date: "5 Jan 2024",
            description:
                "Dive into the future of  automotive innovation with trends like AI-driven cars, sustainable materials, and next-gen manufacturing technologies.",
            tags: ["Design", "Research"],

        },
        {
            id: 8,
            image: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k211o3vwxYOLc0OLGJaeuZqhf2W9OI13E2rJR7wqzZQ2Q~FzgdwVgC4Stvb8hGSAWbxSom7CM1b7lx8z-zH6jPnBU5-EuHL3~zHTLdaJBJFxhM4x~YRhWzezyOBqdLknKds9hexQK7-~cDiTbXd0jRsLzySVUxjJ9SAUiOzDyHxQ4nKjd87rQHGwAx-7x7IHRs-yh-hVcbncbk3dogw5dfO~T~zbWyHCiMNCsjTNT9CSIeuU1aj2OYGa65T1j7yDYFv4MUt-dK7KUoRKsGL52y2HhiaXYrevx~cQY8HpeUVdu2~3qAD05pGt9OncXREx1Mfo-Me4NEzJ2W9yo~Fw4w__",
            title: "Boosting Customer Retention with Data-Driven Strategies",
            author: "Sarah Johnson",
            date: "20 Mar 2023",
            description:
                "Explore how autonomous vehicle technology is reshaping the automotive industry, along with its challenges and future prospects.",
            tags: ["Software Development", "Tools","SaaS"],

        },
        {
            id: 9,
            image: "https://s3-alpha-sig.figma.com/img/7cbf/6b83/47e473fc0d5f9485cefdbbf25539ba63?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxBCk54CTWS24KmNydjk8SQMlAFKfN7BnC-0Nipc93CxYZcOe05nukeM~VZJhN~RSS3ss-bIQb-gTYPZlF~BDIv26TUMCfea6wMBkoV0jNGbai0LkKw6E2iXREL9VSZ4gdk36mxM6JiEdpprT848G5m5CH~6vJxbZ7z5MtRZJzybv6Gj6FHN94GUgYZ9N8kHXaUTv3CQmnIMpDkIaqsAEl6c~7ihXblkvGFvk7GJ045YYoM~wWyuKcu6djLrMh0ritaD4Jk3zdT2kW5J4c2x2gPJoYItUV2cl~5PAwuBySuE~36MQNkVOJU0tnTCLFLqPMUWb4Wpo4KvkCT2cCawqQ__",
            title: "Maximizing ROI with Growth Audit Insights",
            author: "James Anderson",
            date: "12 Dec 2023",
            description:
                "Learn about the rapid adoption of electric vehicles and their impact on the automotive industry and global sustainability efforts.",
            tags: ["Podcasts","Customer Success"],

        }
    ];
    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to top after navigation
    };
    return (
        <>
            <div className="blog-posts">
                <h5 className="blog-label">OUR BLOGS</h5>
                <h2 className="blog-heading">Stories And Interviews</h2>
                <p className="blog-description">
                    Dive into inspiring journeys and exclusive insights from business
                    leaders and growth experts. Learn how they've overcome challenges and
                    driven success through innovation, strategy, and data-driven growth.
                </p>
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
                                        <svg className="span_svg_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                            <path d="M16.5 7.5L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
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
                </section>
            </div>

        </>
    );
};

export default BlogSection;
//