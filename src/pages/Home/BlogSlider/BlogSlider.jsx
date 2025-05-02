import React, { useState, useEffect } from "react";
import styles from "./BlogSlider.module.scss";

import img1 from '../../../assets/blog/img1.png'
import img2 from '../../../assets/blog/img2.png'
import img3 from '../../../assets/blog/img3.png'
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const blogData = [
    {
        id: 1,
        time: '5 min read',
        title: 'Save Time And Resources With Our Pre-Validated Strategies',
        desc: 'Maximize efficiency and minimize waste with our expertly crafted, pre-validated strategies. Save valuable time and resources while achieving your goals with ease. Our solutions are designed to streamline your processes, allowing you to focus on what truly matters.',
        image: img1
    },
    {
        id: 2,
        time: '5 min read',
        title: 'Boost Revenue With Data-Driven Growth Tactics',
        desc: "Unlock your business's potential by leveraging data-driven growth tactics. By analyzing customer behavior and market trends, you can identify new revenue streams and optimize your existing strategies. Implement targeted marketing campaigns, personalize.",
        image: img2
    },
    {
        id: 3,
        time: '5 min read',
        title: 'Achieve Sustainable Growth Without Blowing Your Budget',
        desc: 'Unlock the secrets to sustainable growth without overspending. Discover innovative strategies that help you stay within budget while achieving your business goals efficiently.',
        image: img3
    },
];

const BlogSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(2.5);

    const updateCardCount = () => {
        const width = window.innerWidth;
        if (width < 640) setCardsToShow(1);
        else if (width < 1024) setCardsToShow(1.5);
        else setCardsToShow(2.5);
    };

    useEffect(() => {
        updateCardCount();
        window.addEventListener("resize", updateCardCount);
        return () => window.removeEventListener("resize", updateCardCount);
    }, []);

    const totalSlides = Math.ceil(blogData.length - (cardsToShow - 1));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            {/* <Helmet>
                <title>Unlock Tailored Growth Strategies | Boost Business with Smart Blogs</title>
                <meta name="description" content="Explore expert insights on business growth, revenue boosting, and budget-friendly strategies. Read blogs crafted to accelerate your success." />
                <meta name="keywords" content="Business Growth, Data-Driven Strategies, Revenue Boost, Budget Marketing, Growth Solutions, Blogs, Business Tips" />
                
                
            </Helmet> */}

            <div className={styles.blogWrapper}>
                <div className={styles.head_top}>
                    <div>
                        <motion.p
                            initial={{ opacity: 0,y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className={styles.blogLabel}>BLOGS</motion.p>
                        <motion.h2
                            initial={{ opacity: 0,y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >Unlock The Power Of Tailored Growth Solutions</motion.h2>
                        <motion.p
                            initial={{ opacity: 0,y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            Boost your growth with smart, data-driven strategies tailored to your business. Use insights from your data to make informed decisions that lead to success and sustainable development.
                        </motion.p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0,y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={styles.blogButton}>View All Blogs</motion.button>
                </div>

                <div className={styles.sliderContainer}>
                    <div
                        className={styles.slider}
                        style={{
                            transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
                            gridTemplateColumns: `repeat(${blogData.length}, ${100 / cardsToShow}%)`,
                        }}
                    >
                        {blogData.map((blog) => (
                            <div className={styles.card} key={blog.id}>
                                <motion.img
                                    initial={{ opacity: 0,y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    src={blog.image} alt="Blog" />
                                <p className={styles.meta}>{blog.time}</p>
                                <motion.h3
                                    initial={{ opacity: 0,y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >{blog.title}</motion.h3>
                                <motion.p
                                    initial={{ opacity: 0,y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >{blog.desc}</motion.p>
                                <motion.a
                                    initial={{ opacity: 0,y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    href="#">Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                        <path d="M16.5 7.5L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></motion.a>
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
                            <button onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                            <button onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSlider;
