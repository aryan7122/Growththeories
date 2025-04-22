import React, { useState, useEffect } from "react";
import styles from "./ServiceSlider.module.scss";


import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const sliderData = [
    {
        id: 1,
        title: "Data Tracking & Attribution",
        desc: "Data Tracking & Attribution is essential for analyzing user interactions and marketing effectiveness. It gathers user behavior data across platforms and connects conversions to specific touchpoints, helping businesses refine strategies.",
        points: [
            "Behavioral & Demographic Segmentation",
            "Retargeting Campaigns On Social & Google",
            "CRM-Based Audience Management"
        ],
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#93162b" fill="none">
            <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
    },
    {
        id: 2,
        title: "Customer Segmentation & Retargeting",
        desc: "Customer segmentation and retargeting are essential for effective marketing. By categorizing your audience, you can craft tailored messages. Retargeting helps engage users interested in your brand, boosting their experience and conversion rates.",
        points: [
            "Behavioral & Demographic Segmentation",
            "Retargeting Campaigns On Social & Google",
            "CRM-Based Audience Management"
        ],
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#93162b" fill="none">
            <path d="M4.51255 19.4866C7.02498 21.8794 10.016 20.9223 11.2124 19.9532C11.8314 19.4518 12.1097 19.1277 12.3489 18.8884C13.1864 18.1107 13.1326 17.3331 12.5882 16.711C12.3704 16.462 10.9731 15.1198 9.63313 13.7439C8.93922 13.0499 8.46066 12.5595 8.05149 12.1647C7.50354 11.6185 7.02499 10.9922 6.30715 11.0101C5.64913 11.0101 5.17057 11.5904 4.57237 12.1886C3.88422 12.8767 3.37598 13.7439 3.19652 14.5216C2.65814 16.7947 3.49562 18.4098 4.51255 19.4866ZM4.51255 19.4866L2.00012 21.999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M19.4867 4.51472C16.9736 2.12078 13.9929 3.09593 12.7962 4.06548C12.177 4.56712 11.8987 4.89138 11.6593 5.13078C10.8216 5.90881 10.8755 6.68683 11.42 7.30926C11.4983 7.39881 11.7292 7.62975 12.055 7.95281M19.4867 4.51472C20.504 5.59199 21.3528 7.22547 20.8142 9.49971C20.6347 10.2777 20.1264 11.1453 19.438 11.8338C18.8397 12.4323 18.361 13.0128 17.7028 13.0128C16.9847 13.0308 16.6121 12.5115 16.064 11.9651M19.4867 4.51472L21.9999 2.0011M16.064 11.9651C15.6547 11.5701 15.07 10.9721 14.3759 10.2777C13.5175 9.39612 12.6355 8.52831 12.055 7.95281M16.064 11.9651L14.5024 13.4896M10.5114 9.50609L12.055 7.95281" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    },

];



const ServiceSlider2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1.8);

    const updateCardCount = () => {
        const width = window.innerWidth;
        if (width < 640) setCardsToShow(1);
        else if (width < 1024) setCardsToShow(1.8);
        else setCardsToShow(1.8);
    };

    useEffect(() => {
        updateCardCount();
        window.addEventListener("resize", updateCardCount);
        return () => window.removeEventListener("resize", updateCardCount);
    }, []);

    const totalSlides = Math.ceil(sliderData.length - (cardsToShow - 1));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <Helmet>
                <title>Unlock Tailored Growth Strategies | Boost Business with Smart Blogs</title>
                <meta name="description" content="Explore expert insights on business growth, revenue boosting, and budget-friendly strategies. Read blogs crafted to accelerate your success." />
                <meta name="keywords" content="Business Growth, Data-Driven Strategies, Revenue Boost, Budget Marketing, Growth Solutions, Blogs, Business Tips" />
                {/* <meta name="author" content="Your Company Name" />
                <link rel="canonical" href="https://yourdomain.com/blogs" /> */}

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Unlock Tailored Growth Strategies | Smart Business Blogs" />
                <meta property="og:description" content="Explore our collection of expert blogs to grow your business using data-driven, cost-effective strategies." />


                {/* Twitter */}
                <meta name="twitter:title" content="Unlock Tailored Growth Strategies | Smart Business Blogs" />
                <meta name="twitter:description" content="Explore expert blogs to boost your business growth and revenue using data and smart insights." />
                {/* <meta name="twitter:image" content="https://yourdomain.com/path-to-featured-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" /> */}
            </Helmet>

            <div className={styles.blogWrapper}>
                <div className={styles.head_top}>
                    <div>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >What services does our <br />
                            <strong>Analytics & Optimization offer?</strong>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            Our Analytics & Optimization services offer tools to boost your business performance. We provide data analysis to uncover insights, optimize marketing strategies, and enhance customer engagement. With our expert guidance, you can make informed decisions that drive growth and efficiency. Let us help you turn your data into actionable strategies for measurable results.
                        </motion.p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={styles.blogButton}>Contact us now</motion.button>
                </div>

                <div className={styles.sliderContainers}>
                    <div
                        className={styles.sliders}
                        style={{
                            transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
                            gridTemplateColumns: `repeat(${sliderData.length}, ${100 / cardsToShow}%)`,
                        }}
                    >
                        {sliderData.map((data) => (
                            <div className={styles.cardss} key={data.id}>
                                <div className={styles.card_lr}>
                                    <div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {data.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {data.desc}
                                        </motion.p>
                                    </div>
                                    <div className={styles.icon}>
                                        {data.icon}
                                    </div>
                                </div>
                                <ul>
                                    {data.points.map((point, index) => (
                                        <li key={index}>✓ {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                    <div className={styles.navLeftRightButtons}>
                        <div className={styles.dots}>
                            {Array.from({ length: totalSlides }, (_, i) => (
                                <span
                                    key={i}
                                    className={i === currentSlide ? styles.activeDot : ""}
                                    onClick={() => setCurrentSlide(i)}
                                ></span>
                            ))}
                        </div>
                        <div className={styles.navButtons}>
                            <button onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" color="#000000" fill="none">
                                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                            <button onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" color="#000000" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSlider2;
