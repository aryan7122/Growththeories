import React from 'react'
import RevenueCatImg from '../../../assets/Analytics/revenuecat_logo.svg'
import RazorpayImg from '../../../assets/Analytics/Razorpay.svg'
import RefersionImg from '../../../assets/Analytics/Refersion.svg'
import GoogleAnalyticsImg from '../../../assets/Analytics/GoogleAnalytics.png'
import ChargebeeImg from '../../../assets/Analytics/Chargebee.svg'
import MixpanelImg from '../../../assets/Analytics/MixpanelImg.png'
import OptimizelyImg from '../../../assets/Analytics/Optimizely.svg'
import HotjarImg from '../../../assets/Analytics/Hotjar.png'
import SEMrushImg from '../../../assets/Analytics/SEMrush.png'
import MailchimpImg from '../../../assets/Analytics/Mailchimp.png'


import "./TechnologyMonetization.scss";

const toolsData = [
    { name: 'RevenueCat', logo: RevenueCatImg },
    { name: 'Razorpay', logo: RazorpayImg },
    { name: 'Refersion', logo: RefersionImg },
    { name: 'Google Analytics 4', logo: GoogleAnalyticsImg },
    { name: 'Chargebee', logo: ChargebeeImg },
    { name: 'MixpanelImg', logo: MixpanelImg },
    { name: '', logo: '' },
    { name: 'Optimizely', logo: OptimizelyImg },
    { name: 'Hotjar', logo: HotjarImg },
    { name: 'SEMrush', logo: SEMrushImg },
    { name: 'Mailchimp', logo: MailchimpImg },
];

const CompanyLogo = () => {
    return (
        <div className='TechnologyMonetization'>
            <div className="top_title_section">
                <h3>Our Technology Stack for Monetization services</h3>
                <p>Our monetization technology stack optimizes revenue streams with cutting-edge tools for seamless integration and scalability. From advanced analytics to secure payment processing, we help businesses maximize earnings while ensuring a smooth user experience.</p>
            </div>
            <div className="tools-grid">
                {toolsData.map((tool, index) => (
                    <div className='cards' key={index}>
                        <div className="tool-card" >
                            <img src={tool.logo} alt={tool.name} />
                        </div>
                        <p className='p'>{tool.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyLogo