// AcquisitionToolsSection.jsx
import React from 'react';
import './AcquisitionToolsSection.scss';
import AhrefsImg from '../../../assets/Acquisition/Ahrefs.png'
import SEMrushImg from '../../../assets/Acquisition/semrush_logo.png'
import SegmentImg from '../../../assets/Acquisition/Segment.png'
import BuzzSumoImg from '../../../assets/Acquisition/BuzzSumo.png'
import UpfluenceImg from '../../../assets/Acquisition/Upfluence.png'
import databoxImg from '../../../assets/Acquisition/databox.png'
import googleImg from '../../../assets/Acquisition/gooogle.png'
import googlealgorithmImg from '../../../assets/Acquisition/googlealgorithm_logo.png'
import unbounce_logoImg from '../../../assets/Acquisition/unbounce_logo.png'
import hotjar_logoImg from '../../../assets/Acquisition/hotjar_logo.png'
import typeform_logoImg from '../../../assets/Acquisition/typeform_logo.png'
import hubspot_logoImg from '../../../assets/Acquisition/hubspot_logo.png'
import metaImg from '../../../assets/Acquisition/meta_logo.png'
import mailchimp_logoImg from '../../../assets/Acquisition/mailchimp_logo.png'
import YoutubeImg from '../../../assets/Acquisition/Youtube.png'
import thetradedeskImg from '../../../assets/Acquisition/thetradedesk.png'
import { div } from 'framer-motion/client';
// data
const toolsData = [
    { name: 'Ahrefs', logo: AhrefsImg },
    { name: 'SEMrush', logo: SEMrushImg },
    { name: 'Segment', logo: SegmentImg },
    { name: 'BuzzSumo', logo: BuzzSumoImg },
    { name: 'Upfluence', logo: UpfluenceImg },
    { name: 'Databox', logo: databoxImg },
    { name: 'Google Ads', logo: googleImg },
    { name: 'Google Analytics 4', logo: googlealgorithmImg },
    { name: 'Unbounce', logo: unbounce_logoImg },
    { name: 'Hotjar', logo: hotjar_logoImg },
    { name: 'Typeform', logo: typeform_logoImg },
    { name: 'CRM Integration', logo: hubspot_logoImg },
    { name: '2', logo: '2' },
    { name: 'Meta Ads Manager', logo: metaImg },
    { name: 'Mailchimp', logo: mailchimp_logoImg },
    { name: 'Youtube Ads', logo: YoutubeImg },
    { name: 'Thetradedesk', logo: thetradedeskImg },
];

const whyChooseData = [
    {
        title: 'Proven Expertise:',
        desc: 'We analyze user behavior deeply to create personalized engagement plans that resonate with your audience.',
    },
    {
        title: 'Industry Recognition:',
        desc: 'Whether you’re in salon, clinical, or travel—we bring retention strategies that already work for your space.',
    },
    {
        title: 'Easy Analytics:',
        desc: 'Stay ahead with dashboards that track retention metrics and allow for agile adjustments.',
    },
    {
        title: 'Channel Optimization:',
        desc: 'We identify and double down on the acquisition channels that bring you the highest ROI—be it paid ads, SEO, social, or partnerships.',
    },
    {
        title: 'Data-Driven Targeting:',
        desc: 'We use real-time insights and customer behavior data to find and target the most profitable audience segments.',
    },
    {
        title: 'Collaborative Process:',
        desc: 'From onboarding to loyalty, we map and optimize every stage of the customer lifecycle for sustained engagement.',
    },
];
const AcquisitionToolsSection = () => {
    return (
        <section className="AcquisitionToolsSection-section">
            <div className="container">
                <h2 className="section-title">All Tools Stack We Use For Acquisition</h2>
                <p className="section-subtitle">
                    Our Acquisition Tools Help You Identify, Negotiate, And Acquire Key Assets, Strengthening
                    Your Portfolio For Sustainable Growth.
                </p>

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

                <h2 className="why-title">Whys Choose Growththeories For Acquisition</h2>

                <div className="why-grid">
                    {whyChooseData.map((item, index) => (
                        <div className="why-card" key={index}>
                            <span className="emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#b44659" fill="none">
                                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <h3>
                                <strong>{item.title}</strong> {item.desc}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcquisitionToolsSection;