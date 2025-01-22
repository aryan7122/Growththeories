import React from "react";
import "./GrowthAudit.scss";
import { div } from "framer-motion/client";
// import auditImage from "https://www.kanakkupillai.com/learn/wp-content/uploads/2023/11/Audits-for-Private-Limited-Companies.jpg"; 

const GrowthAudit = () => {
    return (
        <div className="GrowthAudit">
            <div className="growth-audit">
                <div className="content">
                    <h1>What Is A Growth Audit?</h1>
                    <p>
                        A growth audit is a thorough examination of your marketing, sales,
                        and customer acquisition efforts to identify inefficiencies and missed
                        opportunities. We analyze every stage of your growth funnel to deliver
                        customized, actionable insights.
                    </p>
                    <button className="cta-button">Discover How Our Growth Tracks Work</button>
                </div>
                <div className="image">
                    <img src='https://www.kanakkupillai.com/learn/wp-content/uploads/2023/11/Audits-for-Private-Limited-Companies.jpg' alt="Growth Audit" />
                </div>
            </div>
       </div>
    );
};

export default GrowthAudit;
