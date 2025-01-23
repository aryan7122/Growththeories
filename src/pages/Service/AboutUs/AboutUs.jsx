import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <div className="about-us">
            <h5 className="about-us__tag">ABOUT US</h5>
            <h2 className="about-us__title">
                Driving Impactful Growth <br /> Marketing Solutions Worldwide
            </h2>
            <p className="about-us__description">
                Our mission is to empower businesses of all sizes by delivering
                cost-effective, results-driven growth strategies tailored to their unique
                needs. We believe that achieving sustainable growth doesn’t have to come
                at a high price. By leveraging data, innovative marketing techniques, and
                scalable solutions, we help businesses maximize their potential while
                keeping costs in check. Our goal is to ensure that every business we work
                with can access the tools and strategies needed to thrive in today’s
                competitive landscape without compromising on quality or impact.
            </p>
            <div className="about-us__stats">
                <img
                    src="https://s3-alpha-sig.figma.com/img/a7a3/66dc/dee5065d93f01f54c809f1f2ebf9f11c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQvN7WHPjpa27c4teE5JsjRUP6KsIrzxgIBolllXToo3ji~SD8A4JV241PxlH-upfMSI11ViWOyUA1Dm1SahXD7Z-vIw5graj5iLw1QdYipKK4yR6yS7z6M2QREC-taXtZlKwpz7n0oUmVZLReZyk3NYMNKFmav8LRhdLuViR9ofLam~IRpr0yv8HDdU001MyjgUv2fapIIgc3jUBd3SyVaSbyfp6XWqg9HWOCQlcS8vSVQQbopnJwYGQfFXoUcmWgsAoqzmQKCrUXDRQyFj6AoeGFEu2sgno08rNaRGMCZlgB7bDPikxKpFo2mMHLiAA46D8ksi6v6DLPt2nlhIGg__"
                    alt="About Us"
                    className="about-us__image"
                />
                <div className="about-us__data">
                    <div className="about-us__item">
                        <p className="about-us__label">Employees</p>
                        <p className="about-us__number">150+</p>
                    </div>
                    <div className="about-us__item">
                        <p className="about-us__label">Our Clients</p>
                        <p className="about-us__number">20+</p>
                    </div>
                    <div className="about-us__item">
                        <p className="about-us__label">Revenue Generated</p>
                        <p className="about-us__number">$2500+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
