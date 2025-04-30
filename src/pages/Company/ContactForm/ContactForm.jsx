import React from "react";
import "./ContactForm.scss";
import icon from '../../../assets/done.svg'

const ContactForm = () => {
    return (
        <div className="contact-form">
            <div className="contact-btn">CONTACT US</div>
            <h1>Connect With us for <span> extraordinary business growth</span></h1>
            <ul>
                <li><img src={icon} /> Get a hands-on experience with our intuitive our platforms</li>
                <li> <img src={icon} /> See how customizable workflows can streamline your  processes</li>
                <li><img src={icon} /> Get answers to your specific questions from experts during the demo</li>
            </ul>
            <div className="form-container">
                <h3>Ready for Your Digital Journey?<span> Fill This Form</span></h3>
                <div className="form_contact">
                    <div className="left">
                        <label>Name<span className="star">*</span> </label>
                        <input type="text" placeholder="Enter Name" />
                        <label>
                             Email<span className="star">*</span>
                        </label>
                        <input type="email" placeholder="Enter Email address" />
                       
                    </div>
                    <div className="right">
                        <label>
                            Mobile Number<span className="star">*</span>
                        </label>
                        <input type="text" placeholder="Enter mobile number" />
                        <label>
                            Company Name<span className="star">*</span>
                        </label>
                        <input type="text" placeholder="Enter Company Name" />
                    </div>
                    <div className="bottom">
                        <label>Message</label>
                        <textarea placeholder="Enter the message..."></textarea>
                   </div>
                </div>
            <button className="submit-btn">Submit</button>
            </div>
        </div>
    );
};

export default ContactForm;
