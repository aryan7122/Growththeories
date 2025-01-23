import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="contact-btn">CONTACT US</div>
            <h1>
                <span className="highlight-text">Let’s Discuss</span>
            </h1>
            <div className="h2p">
                <h2>Your Business</h2>
                <p>
                    Or Reach out via email <br /> <span>hr@theories.com</span>
                </p>
            </div>
            <div className="form-container">
                <div className="info-text">
                    <dov className="dot">●</dov>
                    <p>
                        Begin your treatment with consultation. We will reach out to you
                        during working hours
                    </p>
                </div>
                <div className="form_contact">
                    <div className="left">
                        <label>Business Type </label>
                        <input type="text" placeholder="Dummy@exapmple.com" />
                        <label>
                            Work Email<span className="star">*</span>
                        </label>
                        <input type="email" placeholder="Dummy@exapmple.com" />
                        <label>Message</label>
                    </div>
                    <div className="right">
                        <label>
                            Phone<span className="star">*</span>
                        </label>
                        <input type="text" placeholder="Eg. 50" />
                        <label>
                            Company Size<span className="star">*</span>
                        </label>
                        <input type="text" placeholder="Eg. 50" />
                    </div>
                    <textarea placeholder="Enter the message..."></textarea>
                </div>
            </div>
            <button className="submit-btn">Submit</button>
        </div>
    );
};

export default ContactForm;
