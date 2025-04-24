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
            <button className="about-us__BTN">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                    <path d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z" stroke="currentColor" stroke-width="1.5" />
                </svg>
                Start Growing Today
            </button>
            {/* <div className="about-us__stats">
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
            </div> */}
        </div>
    );
};

export default AboutUs;
