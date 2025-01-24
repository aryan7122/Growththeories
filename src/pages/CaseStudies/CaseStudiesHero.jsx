import React from "react";
import "./CaseStudiesHero.scss";
// import placeholderImage from "./placeholder.jpg"; // Replace with a local placeholder image
import companyLogo from "../../assets/service/logo/Logopreso.svg"; // Replace with a local placeholder logo

const CaseStudiesHero = () => {
    return (
        <div className="case-study">
            <div className="content">
                <h4 className="section-title">CASE STUDIES</h4>
                <h1 className="main-title">We accelerate your growth</h1>
                <p className="description">
                    We’ve accelerated growth for amazing companies across Europe. We’ve
                    bundled some of the work we have done so far. You’ll find some cases
                    we can talk about today.
                </p>

                <div className="case-card">
                    <div className="image-container">
                        <img src='https://s3-alpha-sig.figma.com/img/bace/804b/cc72f716482ab553bc0e4e8a27f94010?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzLsj-Gnl9MouA6vnweMi63M3rmiXagKzdrUUtdACzrrk-JLi9MF5eHlxxxxFLAbgoLIeWB0eyYyaOPiECxuMvTFPL4VSkFU000ybo1vp0uBVc7ehzxwe15whltdGvyKwzjr9ApQJe~20qpH49krxY755ubffEElg33gemhkLzSVd0N0A0m-8asG-f2RoC4~5phXaEHJlNM1g7QUX~r6dmK78EAUt8kc49UJjR3xT-ekPjTGKZtu~t1~kUXPO9trB-D3SsCUtbLNs8IMnXjnEowofKvXzJ7S~t18-yGkIAYCJQw7koblgYfN5XG1jZBRVRINTQBhUb7Ae0Np51yGrg__' alt="Case Study" />
                        <div className="logo-container">
                            <img src={companyLogo} alt="Company Logo" />
                        </div>
                    </div>

                    <div className="text-content">
                        <div className="meta">
                            <span className="category">SaaS</span>
                            <span className="read-time">5 min read</span>
                        </div>

                        <h2 className="card-title">
                            We refined the roughly drafted value proposition further to give
                            them a commercial wrap designed for the targeted personas and
                            DMU’s
                        </h2>

                        <p className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                            non sed est cursus. Vel hoc convallis ipsum, facilisi odio
                            pellentesque bibendum viverra tempus.
                        </p>

                        <a href="#" className="read-more">
                            Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CaseStudiesHero;
