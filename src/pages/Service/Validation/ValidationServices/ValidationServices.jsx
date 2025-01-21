import React from "react";
import styles from "./ValidationServices.module.scss";
import bannerImg from '../../../../assets/service/Growth curve-cuate 1.svg'
import icon1 from '../../../../assets/service/icon/noun-competitor-6672812 1.svg'
import icon2 from '../../../../assets/service/icon/noun-surveys-6775941 1.svg'
import icon3 from '../../../../assets/service/icon/noun-based-data-7110657 1.svg'
import icon4 from '../../../../assets/service/icon/noun-best-quality-6913213 1 - Copy.svg'
const ValidationServices = () => {
    return (
        <section className={styles.validationSection}>
            <div className={styles.validationSectionHeader}>
                <div className={styles.content}>
                    <span className={styles.badge}>FEATURES</span>
                    <h2>What’s Included In Our Validation Services?</h2>
                    <p>
                        Our suite of growth marketing services offers a unique combination of proven strategies, real-time data insights, and tailored solutions to fit your specific business needs. From developing actionable growth tracks to testing new ideas with validation, we provide the tools and expertise to help you scale efficiently. Explore how each feature works seamlessly to optimize your customer journey, increase engagement, and boost revenue, all while staying within budget. Discover how our cutting-edge features empower your business to thrive in a competitive landscape
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img src={bannerImg} alt="Growth Illustration" />
                </div>
           </div>
            <div className={styles.features}>
                <div className={styles.featureCard}>
                    <img src={icon1} alt="" className={styles.icon} />
                    <h4>Market Research and Competitive Analysis</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh nisi vestibulum enim
                        maecenas. Hendrerit leo id vestibulum netus.
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <img src={icon2} alt="" className={styles.icon} />
                    <h4>User Testing and Surveys</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh nisi vestibulum enim
                        maecenas. Hendrerit leo id vestibulum netus.
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <img src={icon3} alt="" className={styles.icon} />
                    <h4>Data-Driven Experimentation</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh nisi vestibulum enim
                        maecenas. Hendrerit leo id vestibulum netus.
                    </p>
                </div>
                <div className={styles.featureCard}>
                    <img src={icon4} alt="" className={styles.icon} />
                    <h4>Hypothesis Validation and Reporting</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nibh nisi vestibulum enim
                        maecenas. Hendrerit leo id vestibulum netus.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ValidationServices;
