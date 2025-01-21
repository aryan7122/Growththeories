// src/components/CustomerStories.jsx
import React, { useState } from "react";
import "./customerStories.scss";

const storiesData = [
    {
        id: 1,
        name: "Preso",
        image: "https://s3-alpha-sig.figma.com/img/bace/804b/cc72f716482ab553bc0e4e8a27f94010?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzLsj-Gnl9MouA6vnweMi63M3rmiXagKzdrUUtdACzrrk-JLi9MF5eHlxxxxFLAbgoLIeWB0eyYyaOPiECxuMvTFPL4VSkFU000ybo1vp0uBVc7ehzxwe15whltdGvyKwzjr9ApQJe~20qpH49krxY755ubffEElg33gemhkLzSVd0N0A0m-8asG-f2RoC4~5phXaEHJlNM1g7QUX~r6dmK78EAUt8kc49UJjR3xT-ekPjTGKZtu~t1~kUXPO9trB-D3SsCUtbLNs8IMnXjnEowofKvXzJ7S~t18-yGkIAYCJQw7koblgYfN5XG1jZBRVRINTQBhUb7Ae0Np51yGrg__",
        title: "Real-time Analytics",
        description: "We refined the roughly drafted value proposition further to give them a commercial wrap designed for the targeted personas and DMU’s",
        detail:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Albert Flores",
        position: "Co-Founder",
    },
    {
        id: 2,
        name: "Alpha - Alpha Enterprise",
        image: "https://www.webfx.com/wp-content/uploads/2024/06/052408_market_territory-expansion.png",
        title: "Market Expansion",
        description: "Expanded their reach by focusing on personalized experiences for their users.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "John Doe",
        position: "CEO",
    },
    {
        id: 3,
        name: "VG - Van Group",
        image: "https://media.licdn.com/dms/image/v2/D4E12AQGlU8l1zXNcVQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702503002252?e=2147483647&v=beta&t=inL_VywKOfi3ZTuz3PLBqYHkKt1bOdkKtqfcbKS9DNk",
        title: "Efficiency Optimization",
        description: "Implemented smart analytics to streamline their operations.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Jane Smith",
        position: "CTO",
    },
    {
        id: 4,
        name: "Xi - Xian Group",
        image: "https://www.podium.com/_next/image/?url=https%3A%2F%2Fcms.podium.com%2Fwp-content%2Fuploads%2F2024%2F07%2FCustomer-Lifecycle.jpeg&w=1440&q=75",
        title: "Customer Retention",
        description: "Created a unique loyalty program to enhance customer satisfaction.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Emily Johnson",
        position: "CMO",
    },
    {
        id: 5,
        name: "Jaco - Jaguar Corporation",
        image: "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_767486674%20%281%29.jpg?itok=WTWlg6Oa",
        title: "Innovative Solutions",
        description: "Developed cutting-edge solutions to stay ahead in the market.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Michael Brown",
        position: "Founder",
    },
];

const CustomerStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const progress = ((activeIndex + 1) / storiesData.length) * 100;

    return (
        <div className="customer-stories">
            <div className="head_box_info">
                <div>
                    <span className="badge">customer stories</span>
                    <h2>Validation Success Stories</h2>
                </div>
                <p>See how businesses like yours have reduced risk, accelerated growth, and made smarter decisions with our validation services.</p>
            </div>
            <div className="tabs">
                {storiesData.map((story, index) => (
                    <div
                        key={story.id}
                        className={`tab ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {story.name}
                    </div>
                ))}
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="content">
                <img src={storiesData[activeIndex].image} alt={storiesData[activeIndex].name} />
                <div className="details">
                    <h3>{storiesData[activeIndex].title}</h3>
                    <h2>{storiesData[activeIndex].description}</h2>
                    <p>{storiesData[activeIndex].detail}</p>
                    <h4><strong>{storiesData[activeIndex].author}</strong> - {storiesData[activeIndex].position}</h4>
                    <button className="read-more">Read Full Case Study  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#ffffff" fill="none">
                        <path d="M17 7L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div>
            </div>


        </div>
    );
};

export default CustomerStories;
