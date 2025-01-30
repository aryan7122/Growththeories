import React from "react";
import "./JobOpenings.scss";

const jobList = [
    {
        title: "✨ Senior Web Developer",
        workType: "Work From Office",
        roleDescription: "Lorem ipsum dolor sit amet consectetur.Est pellentesque sit auctor ut consectetur.Ipsum eget et commodo sem maecenas varius non.Porttitor et quis aliquet suscipit dis sit amet ut metus.Accumsan in at et amet turpis ornare.Lectus ante neque scelerisque libero sit adipiscing at.Bibendum ut mollis vel ullamcorper.Mauris purus tempus eros amet.",
    },
    {
        title: "✨ Senior Flutter Developer",
        workType: "Remote",
        roleDescription: "Lorem ipsum dolor sit amet consectetur.Est pellentesque sit auctor ut consectetur.Ipsum eget et commodo sem maecenas varius non.Porttitor et quis aliquet suscipit dis sit amet ut metus.Accumsan in at et amet turpis ornare.Lectus ante neque scelerisque libero sit adipiscing at.Bibendum ut mollis vel ullamcorper.Mauris purus tempus eros amet.",
    },
];

const JobOpenings = () => {
    return (
        <div className="job-openings-section">
            <div className="head_job_title">
                <div>
                    <h2>Join us. And help us bring Excellence magic back.</h2>
                    <p>If you believe in our mission of building exceptional software for the next generation of companies, we'd love to talk to you.</p>
                </div>
                <a href="/contact">
                    <button className="contact-btn">Contact Us Now</button>
                </a>
            </div>

            <div className="job-cards-container">
                {jobList.map((job, index) => (
                    <>

                        <div className="job-card" key={index}>
                            <div>
                                <h3>{job.title}</h3>
                                <span className="work-type">{job.workType}</span>
                                <div className="role">
                                    🚀 <strong>Role</strong>
                                    <p>{job.roleDescription}</p>
                                </div>
                            </div>
                            <a href="/application-form">

                                <button className="apply-btn">Apply For Role</button>
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default JobOpenings;
