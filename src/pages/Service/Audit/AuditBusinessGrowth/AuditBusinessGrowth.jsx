import React from 'react';
import './BusinessGrowth.scss';
import img1 from '../../../../assets/service/icon/business-3d-businessman-meditating-with-bitcoins-in-hands 1.svg'
import img2 from '../../../../assets/service/icon/Group 1000007749@2x.svg'
import img3 from '../../../../assets/service/icon/Group 1000007750.svg'
const AuditBusinessGrowth = () => {
    return (
        <div className="audit_business-growth-container">
            <div className="box_conent_growth">
                <div className="content">
                    <h1>Unlock Your Business's Growth Potential</h1>
                    <p>
                        Ready to see the impact of a thorough growth audit? Take the first step towards optimizing your growth strategy today
                    </p>
                    <button className="contact-btn">Contact Us Now</button>
                </div>
                <div className="images_A">
                    <img src={img2} alt="Rocket" />
                    {/* <img src={img1} alt="Business" />
                    <img src={img3} alt="Trophy" /> */}
                </div>
            </div>
        </div>
    );
};

export default AuditBusinessGrowth;