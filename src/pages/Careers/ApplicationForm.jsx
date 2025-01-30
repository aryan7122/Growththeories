import React from "react";
import "./ApplicationForm.scss";
import { div } from "framer-motion/client";

const ApplicationForm = () => {
    return (
        <div className="ApplicationForm">
            <h1>✨ Junior Flutter Developer</h1>
            <h2>Work from Office</h2>
            <div className="application-form">

                <form className="form-container">
                    <h3>Submit Your Application</h3>

                    <div className="form-group">
                        <label>Resume/CV</label>
                        <div className="label_cv">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#737577" fill="none">
                                <path d="M5.82338 12L4.27922 10.4558C2.57359 8.75022 2.57359 5.98485 4.27922 4.27922C5.98485 2.57359 8.75022 2.57359 10.4558 4.27922L19.7208 13.5442C21.4264 15.2498 21.4264 18.0152 19.7208 19.7208C18.0152 21.4264 15.2498 21.4264 13.5442 19.7208L10.0698 16.2464C9.00379 15.1804 9.00379 13.4521 10.0698 12.386C11.1358 11.32 12.8642 11.32 13.9302 12.386L15.8604 14.3162" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            ATTACH RESUME/CV
                        <input type="file" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label>Current Company</label>
                        <input type="text" placeholder="Enter your current company" />
                    </div>

                    <div className="form-group">
                        <label>Current CTC</label>
                        <input type="text" placeholder="Enter your current CTC" />
                    </div>

                    <div className="form-group">
                        <label>Expected CTC</label>
                        <input type="text" placeholder="Enter your expected CTC" />
                    </div>

                    <h4>Links</h4>
                    <div className="form-group">
                        <label>LinkedIn URL</label>
                        <input type="url" placeholder="Enter your LinkedIn profile link" />
                    </div>

                    <div className="form-group">
                        <label>Other Website</label>
                        <input type="url" placeholder="Enter your website link" />
                    </div>

                    <h4>Cover Letter</h4>
                    <div className="form-group">
                        <textarea placeholder="Write your cover letter here..."></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
