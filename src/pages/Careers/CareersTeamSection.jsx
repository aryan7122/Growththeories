import React from "react";
import "./TeamSection.scss";
import icon1 from '../../assets/company/icon/SVG.svg'
import icon2 from '../../assets/company/icon/SVG (1).svg'
import icon3 from '../../assets/company/icon/SVG (2).svg'
import icon4 from '../../assets/company/icon/SVG (5).svg'
import icon5 from '../../assets/company/icon/SVG (4).svg'
import icon6 from '../../assets/company/icon/SVG (3).svg'

const CareersTeamSection = () => {
    return (
        <div className="team-section">
            <div className="content">
                <div className="heading">
                    <div>
                        <h1 className="title">Join a team of makers</h1>
                        <p className="subtitle">
                            We are designers and engineers. Problem solvers and storytellers. We are a
                            diverse team of individuals, all makers at heart.
                        </p>
                        <a href="#team" className="link">Meet the team →</a>
                    </div>
                    <button className="join-button">Join Now</button>

                </div>
                <div className="qualities">
                    <div className="quality">
                        <div className="icon"><img src={icon1} alt="icon" /></div>
                        <p className="text">You are clear, concise, and engaging.</p>
                    </div>
                    <div className="quality">
                        <div className="icon"><img src={icon2} alt="icon" /></div>
                        <p className="text">You care deeply about the quality of your work. Down to the last pixel.</p>
                    </div>
                    <div className="quality">
                        <div className="icon"><img src={icon3} alt="icon" /></div>
                        <p className="text">You're able to take a bird’s eye view and solve issues.</p>
                    </div>
                    <div className="quality">
                        <div className="icon"><img src={icon4} alt="icon" /></div>
                        <p className="text">You are a team player who loves to co-create.</p>
                    </div>
                    <div className="quality">
                        <div className="icon"><img src={icon5} alt="icon" /></div>
                        <p className="text">You are passionate about building truly great software.</p>
                    </div>
                    <div className="quality">
                        <div className="icon"><img src={icon6} alt="icon" /></div>
                        <p className="text">You are a self-starter who gets things done.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersTeamSection;