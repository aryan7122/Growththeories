// src/components/CustomerStories.jsx
import React, { useState } from "react";
import "./customerStories.scss";
import usbLogo from '../../../../assets/service/logo/Logousb.svg'

const storiesData = [
    {
        id: 1,
        name: "UBS",
        image: "https://s3-alpha-sig.figma.com/img/fde9/0740/5daee352bcc29cac381472cc48c388f6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KfLbotNv9pq0vh8OnUsKoePm~Ywq9hWBoLtnCUDtOkX-PTedaNxupNayUyYworBah-ikbLqRKKQgy3K25pVB3Q051l8ZzZuOZcnsB1MJeZ4fz4aiFbXlRwLLO4PCC7KsIsa4sMU2uqvdH54gjxU~DurmyXLFvN~qTaiW8jGQRP80dolG7xSdirCFrrIWD6erUnsq8UOd9nMh7yTmMx2LCTsI5H8hkEAqgB0sDXpD66QPhz1p0tKfWMFF5OhjKifHi3cW9qK8Le0PCNswXLLN-CO~C3gA7XUai7P3VTSNzoHnvUQ66hJPdRnwkyZtD569v907Pc-H1qqUn-wh1TCf6w__",
        logo: usbLogo,
        title: "Real-time Analytics",
        description: "We refined the roughly drafted value proposition further to give them a commercial wrap designed for the targeted personas and DMU’s",
        detail:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Albert Flores",
        position: "Co-Founder",
    },
    {
        id: 2,
        name: "Binford Ltd.",
        image: "https://www.webfx.com/wp-content/uploads/2024/06/052408_market_territory-expansion.png",
        title: "Market Expansion",
        description: "Expanded their reach by focusing on personalized experiences for their users.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "John Doe",
        position: "CEO",
    },
    {
        id: 3,
        name: "Abstergo Ltd.",
        image: "https://media.licdn.com/dms/image/v2/D4E12AQGlU8l1zXNcVQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702503002252?e=2147483647&v=beta&t=inL_VywKOfi3ZTuz3PLBqYHkKt1bOdkKtqfcbKS9DNk",
        title: "Efficiency Optimization",
        description: "Implemented smart analytics to streamline their operations.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Jane Smith",
        position: "CTO",
    },
    {
        id: 4,
        name: "Big Kahuna Burger Ltd.",
        image: "https://www.podium.com/_next/image/?url=https%3A%2F%2Fcms.podium.com%2Fwp-content%2Fuploads%2F2024%2F07%2FCustomer-Lifecycle.jpeg&w=1440&q=75",
        title: "Customer Retention",
        description: "Created a unique loyalty program to enhance customer satisfaction.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Emily Johnson",
        position: "CMO",
    },
    {
        id: 5,
        name: "Barone LLC.",
        image: "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_767486674%20%281%29.jpg?itok=WTWlg6Oa",
        title: "Innovative Solutions",
        description: "Developed cutting-edge solutions to stay ahead in the market.",
        detail: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”',
        author: "Michael Brown",
        position: "Founder",
    },
];

const AuditCustomerStories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const progress = ((activeIndex + 1) / storiesData.length) * 100;

    return (
        <div className="customer-stories">
            <div className="head_box_info">
                <div>
                    <span className="badge">customer stories</span>
                    <h2>Real Results from Our Clients</h2>
                </div>
                <p>See how our growth audits have transformed businesses, identifying bottlenecks and unlocking growth opportunities</p>
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
                <img className="logoCom--" src={storiesData[activeIndex].logo} alt={storiesData[activeIndex].name} />
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

export default AuditCustomerStories;
