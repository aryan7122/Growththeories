// App.jsx
import React, { useState } from "react";
import "./CaseStudyDetail.scss";
import companyLogo from "../../assets/service/logo/Logopreso.svg"; // Replace with a local placeholder logo

const data = [
    {
        id: 1,
        title: "The Objective",
        description:
            "Alpha Manufacturing, a mid-sized company specializing in automotive components, faced significant production delays due to inefficient scheduling and frequent machine downtime. Their manual planning process couldn’t keep up with the increasing demand, leading to bottlenecks and underutilized resources. As a result, production targets were missed, and delivery timelines were compromised, impacting customer satisfaction and profitability.",
        keyPointsTitle: "Key Challenges:",
        keyPoints: [
            "Lack of automated production scheduling.",
            "Frequent machine downtimes due to poor visibility into equipment performance.",
            "Missed production targets and delayed deliveries."
        ]
    },
    {
        id: 2,
        title: "The Challenge",
        description:
            "After understanding Alpha Manufacturing’s unique challenges, we implemented our advanced production planning and shop floor management tools. These tools provided real-time visibility into their production processes and automated their scheduling and resource allocation. Our solution allowed Alpha Manufacturing to easily monitor machine performance, predict potential breakdowns, and adjust production plans in real time to minimize downtime.",
        keyPointsTitle: "Key Features Implemented:",
        keyPoints: [
            "Automated Production Scheduling: Reduced manual intervention and created efficient schedules based on real-time data.",
            "Shop Floor Management: Monitored equipment performance in real-time to identify and resolve issues before they caused delays.",
            "Resource Optimization: Balanced workloads across teams and machines to ensure efficient utilization of resources."
        ]
    },
    {
        id: 3,
        title: "The Approach",
        description:
            "Within just three months of implementing our manufacturing solution, Alpha Manufacturing saw significant improvements in their production efficiency and resource utilization. The automated scheduling system minimized manual errors, while real-time shop floor monitoring reduced machine downtime by 20%. As a result, Alpha Manufacturing increased overall production efficiency by 30% and consistently hit their delivery deadlines, leading to improved customer satisfaction and a stronger market position.",
        keyPointsTitle: "Key Results:",
        keyPoints: [
            "30% improvement in overall production efficiency.",
            "20% reduction in machine downtime.",
            "Consistent delivery of production targets.",
            "Improved resource utilization and workforce productivity"
        ]
    },
    {
        id: 4,
        title: "The Impact and Takeaways",
        description:
            "After understanding Alpha Manufacturing's unique challenges, we implemented our advanced production planning and shop floor management tools. These tools provided real-time visibility into their production processes and automated their scheduling and resource allocation. Our solution allowed Alpha Manufacturing to easily monitor machine performance, predict potential breakdowns, and adjust production plans in real time to minimize downtime.",
        keyPointsTitle: "Key Features Implemented:",
        keyPoints: [
            "Automated Production Scheduling: Reduced manual intervention and created efficient schedules based on real-time data.",
            "Shop Floor Management: Monitored equipment performance in real-time to identify and resolve issues before they caused delays.",
            "Resource Optimization: Balanced workloads across teams and machines to ensure efficient utilization of resources.",
        ]
    }
];
const stories = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/7312/1ed4/f4a45ab20c5903edcfe45d6929b53129?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToJTHgEbYOD4-QXv1JDP0CPg3kiF~oy7UnyvetGOMUDCexYZU8OOkUcOOwsWtRDscquRON10xLa3F2OsYKQ7mzhGVwMk82rOktgCh2bszVi1d4w45JrzhZ5eT3wIFNOqbAsip-tiMV4WsIOOdCNf0bEVltUXpZP-RGLQEMOt7ERQL5AKl-04D3n0aIlEQoWqV4r8IVDxYXyKsX80JRMMmlW~FPsjhHR8pho8kjoB-pDsUo2-XnPY99jw73tFgpN5aqtzEvlRPg0vhCTfwter4uaTHFnctLCqQ6m0PYGhpNGaP0RaCMeKJyyD9XxrDd5zDFkeR8CEkJjDgTq3UynZyQ__',
        title: 'Run Your Business and Manage Your Team In One Place',
        date: '12-Apr-2024',
        tags: ['Implementation', 'HRMS', 'Dashboards'],
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/c948/e16a/2d8abc732ed34b075a2ad121d24b59d8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNIzTpzPrWXpoZWrTdwN6fK0djLwZ~Y6E~ttid1z6sOngecLKibWrAx36MPcIx37HU~mrh1OIEn8dpupgLAPYvcn9R0FNpfvuHyD-AtV6WLieqLS-SP4ujeIjmSzROjFFoxB4~kq2GJ76LPIyh19MIl9GleAwmOXgFXfJ1PuUHzG~BPiy45-Z8nlezYZYvue87Uj15BzSid5XUUOg9aPXzoxgDNKH2UENG5sEoj0Kfk0Hl~BEwYDKN8Zb1m8xeuJeXzzEkv42Y-Wt9g7crq1KvsbNrIcZBvnGEpQ23ni-C2RGq0c~6Q9e8MZzxB1UNrT9NcHKHhoWroCC1HmnUxdWA__',
        title: 'Run Your Business and Manage Your Team In One Place',
        date: '12-Apr-2024',
        tags: ['Implementation', 'HRMS', 'Dashboards'],
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/5e31/1a1f/3fb5eff7ad428883a80f4632444b7ae1?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVQFRG6C68yLkqPZnOyiwiQXmpt2QU9ZfFORBfvzDvVriL5lxT2Tfi4UHJD9AqXmxrXFV75coWdrlMLJNrBRZyKI3MMJO9YSMK3VxvmWvFe14uz~HoSz1T77SSefhGicC-kwwNTLXMew4zupxMJrR4p9WTBB5Hwd30QsviihN3fULjEse~qL1-o5-9J7QUknLoq9DXkkyU~pamSBnMegA~ZNAvJLpXa7a98mL2m~IvaflpOADX2Xi26RWyES~TEwDnlF-H2PfBV~RDTyfkJeHvT01o9G2REEp9DTpdEb4~OAu1HZ2t8JWdrj~vA3bJ7gplFdqCUg6eRYIPsLHePLgA__',
        title: 'Run Your Business and Manage Your Team In One Place',
        date: '12-Apr-2024',
        tags: ['Implementation', 'HRMS', 'Dashboards'],
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/a3fa/280b/bb642d30e7a3313b789cc0644c7d2f12?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hk5eEfmDnYbamn7EYTcx5zpIal7LtbbcqeF36TQM4PAa0bvkGsr2Y7EKBwrDnn3oPXXfJ~n-9PIpyLK1qw7guecJbRZ0Lnd-wFcdTvruRTrFlzNIv3hUD0sYVSoWGhecTbY2LlyOwjLbUibY0oT6eGfRTU2cgmPQajuX2lsHKveVEGuP3I~FNE9Uro42Gcrgt46ICwAS3--hLYiZiQ98O1gadL1vTElApj41ojzmENKguyAFVmllAxs-rp0adNDAzSSWr3q~CJWh8BVpiaVqNerP4XgMN7SaIzlyffFVfVp6Y~ofieV21ezukVuafMz0queK-tHOiND8o2QNkzmwNg__',
        title: 'Run Your Business and Manage Your Team In One Place',
        date: '12-Apr-2024',
        tags: ['Implementation', 'HRMS', 'Dashboards'],
    },
    {
        image: "https://media.licdn.com/dms/image/D4D12AQE-aqRHEBgBrw/article-cover_image-shrink_600_2000/0/1706700951239?e=2147483647&v=beta&t=Tc2CHrHyRZgpT6EQ4BH5yJtQakHrTwbKHB8NPqRSJtw",
        title: "New HRMS Features for 2025",
        date: "01-Jan-2025",
        tags: ["HRMS", "Updates", "Workforce"],
    },
];
const CaseStudyDetail = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < stories.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <div id="CaseStudyDetail">
            <div className="case-study-detail">
                <div className="content">
                    <div className="case-card">
                        <div className="image-container">
                            <img src='https://s3-alpha-sig.figma.com/img/bace/804b/cc72f716482ab553bc0e4e8a27f94010?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzLsj-Gnl9MouA6vnweMi63M3rmiXagKzdrUUtdACzrrk-JLi9MF5eHlxxxxFLAbgoLIeWB0eyYyaOPiECxuMvTFPL4VSkFU000ybo1vp0uBVc7ehzxwe15whltdGvyKwzjr9ApQJe~20qpH49krxY755ubffEElg33gemhkLzSVd0N0A0m-8asG-f2RoC4~5phXaEHJlNM1g7QUX~r6dmK78EAUt8kc49UJjR3xT-ekPjTGKZtu~t1~kUXPO9trB-D3SsCUtbLNs8IMnXjnEowofKvXzJ7S~t18-yGkIAYCJQw7koblgYfN5XG1jZBRVRINTQBhUb7Ae0Np51yGrg__' alt="Case Study" />
                            <div className="logo-containers0">
                                <img src={companyLogo} alt="Company Logo" />
                            </div>
                        </div>

                        <div className="text-content">
                            <div className="meta">
                                Case <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                                    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>  <span>Preso</span>
                            </div>
                            <div className="tag">
                                <p className="p1">Growth Tracks</p>
                                <p className="p2">Business Strategy</p>
                                <p className="p3">Scalability</p>
                            </div>
                            <h2 className="card-title">
                                We refined the roughly drafted value proposition further to give
                                them a commercial wrap designed for the targeted personas and
                                DMU’s
                            </h2>

                            <p className="card-description">
                                Published on 11 Jan 2022, 5 Min Read
                            </p>

                        </div>


                    </div>
                </div>
            </div>

            <div className="CaseStudyDetail-container">
                <main className="CaseStudyDetail-content">
                    {data.map((section) => (
                        <div key={section.id} className="section">
                            <div className="section-title">
                                <h3> {section.id}</h3>
                                <h2> {section.title}</h2>
                            </div>
                            <p className="section-description">{section.description}</p>
                            <h3 className="key-points-title">{section.keyPointsTitle}</h3>
                            <ul className="key-points-list">
                                {section.keyPoints.map((point, index) => (
                                    <li key={index} className="key-point">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </main>
                <aside className="sidebar-jsf">
                    <img src="https://s3-alpha-sig.figma.com/img/6be0/02d7/a94be69a39ad25512776ee85f36701d5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=id1gT7lJBtrRAeyPoHci5hACUJCwNiDcgL4qcJ5HNcnxV9FikLoLgYETLc~iyZkfr3f71stJJnN0W-SJoSldM48Ip3ZA9m1b-ct1pMdYp6iFHVAN8tArM15wT0JO271h788WLnGRKPhe6QRl0Mh1pHpIsdawO03-O144lBss75EmNaxT3FHC5WU9-QuzO~pkSMyMrSOCUib4gJDdrwHw94Ng47~UcUWD31Pm0XqiLom6BI6kkyC5bHKklGyWX8XL44bwaJPdQwW2FHJ8MThSOJ~~02OL7cGAmDNW9xu6GYCJjOZR2JwhZrDLnMuJrQmMSoXqAiZLRmU5Lgl0Wa~YBg__" alt="" />
                    <div className="sidebar-header">
                        <h3>Jadhav Consultancy</h3>
                        <a href="https://jadconsultancy.com" target="_blank" rel="noopener noreferrer">
                            jadconsultancy.com
                        </a>
                    </div>
                    <div className="sidebar-info">
                        <div className="content_info_2">
                            <p>Founder</p>
                            <h4>Gaurav Jadhav</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Location</p>
                            <h4>Pune, Maharashtra</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Industry</p>
                            <h4>Real estate</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Company Size</p>
                            <h4>Mid Size (50-250)</h4>
                        </div>
                        <div className="content_info_2">
                            <p>Attached Theories</p>
                            <h4>Pirate Metrics, Viral Loops</h4>
                        </div>
                    </div>
                </aside>
            </div>

            {/*  */}
            <div className="carousel-stories">
                <div className="top2lr">
                    <h2>Explore Similar Stories</h2>
                    <div className="carousel-buttons">
                        <button
                            className={`left-arrow ${currentIndex === 0 ? 'inactive' : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            &#8592;
                        </button>
                        <button
                            className={`right-arrow ${currentIndex >= stories.length - 3 ? 'inactive' : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex >= stories.length - 3}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
                <div className="carousel-content">
                    {stories.slice(currentIndex, currentIndex + 3).map((story, index) => (
                        <div className="card" key={index}>
                            <img src={story.image} alt="story" className="card-image-" />
                            <h3 className="card-title">{story.title}</h3>
                            <div className="card-tags">
                                {story.tags.map((tag, idx) => (
                                    <span key={idx} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="card-date">| {story.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;
