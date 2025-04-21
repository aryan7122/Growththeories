import React from "react";
import "./AcquisitionSections.scss";
import img1 from '../../../assets/Activation/Frame 1597883079.svg'
import img2 from '../../../assets/Activation/Frame 1597883080.svg'
import img3 from '../../../assets/Activation/Frame 1597883081.svg'
import img4 from '../../../assets/Activation/Frame 1597883082.svg'

import hotjar_logoImg from '../../../assets/Acquisition/hotjar_logo.png'
import typeform_logoImg from '../../../assets/Acquisition/typeform_logo.png'
import IntercomImg from '../../../assets/Activation/Intercom.png'
import AppcuesImg from '../../../assets/Activation/Appcues.png'
import MixpanelImg from '../../../assets/Activation/Mixpanel.png'
import HeapImg from '../../../assets/Activation/Heap.png'
import ClearbitImg from '../../../assets/Activation/Clearbit.png'
import LoomImg from '../../../assets/Activation/Loom.png'
import CalendlyImg from '../../../assets/Activation/CalendlyImg.png'
import uCalendlyImg from '../../../assets/Activation/Calendly.png'
import CustomerImg from '../../../assets/Activation/Customer.png'
import AmplitudeImg from '../../../assets/Activation/Amplitude.png'

const toolsData = [
   
   
    { name: 'Hotjar', logo: hotjar_logoImg },
    { name: 'Intercom', logo: IntercomImg },
    { name: 'Appcues', logo: AppcuesImg },
    { name: 'Amplitude', logo: AmplitudeImg },
    { name: 'Mixpanel', logo: MixpanelImg },
    { name: 'Heap', logo: HeapImg },
    { name: 'Clearbit', logo: ClearbitImg },
    { name: 'Loom', logo: LoomImg },
    { name: 'Calendly', logo: CalendlyImg },
    { name: 'Calendly', logo: uCalendlyImg },
    { name: 'Customer. io', logo: CustomerImg },
    { name: 'Typeform', logo: typeform_logoImg },
    
];

const acquisitionData = [
    {
        id: 1,
        title: "Website & Funnel Optimization",
        description:
            "Enhance Your Website’s Potential With Our Funnel Optimization Strategies. We Improve User Experience And Boost Conversions, Guiding Visitors Smoothly Through The Sales Process. See How Small Changes Can Yield Big Results!",
        points: [
            "Sales Funnel Analysis & Improvement",
            "Checkout Process Streamlining",
            "Customer Journey Mapping",
            "Reducing Friction In Sign-Ups"
        ],
        image: img1,
        side: "left"
    },
    {
        id: 2,
        title: "A/B Testing & Experimentation",
        description:
            "A/B Testing Is Essential For Enhancing User Experiences. By Comparing Two Versions Of A Webpage Or App, You Can Determine Which One Engages Users More Effectively. This Process Involves Creating Variations Of Content And Analyzing User Interactions, Leading To Data-Driven Decisions That Improve Your Product’s Effectiveness.",
        points: [
            "Split Testing For Landing Pages, Ads, CTAs",
            "Multivariate Testing For Personalization",
            "Continuous Optimization Based On Data"
        ],
        image: img2,
        side: "right"
    },
    {
        id: 3,
        title: "Onboarding & User Experience",
        description:
            "Welcome To Our Platform! We’re Excited To Have You On Board. Here, You’ll Find A User-Friendly Interface Designed To Make Your Experience Seamless. From Easy Navigation To Helpful Tips, We’ve Got Everything You Need To Get Started. Dive In And Explore All The Features We Offer To Enhance Your Journey With Us!",
        points: [
            "Interactive Onboarding Flows",
            "Product Walkthroughs & Tooltips",
            "Reducing Drop-Offs In Sign-Up Processes",
            "Personalized User Journeys"
        ],
        image: img3,
        side: "left"
    },
    {
        id: 4,
        title: "Personalization & Behavioral Targeting",
        description:
            "Personalization and Behavioral Targeting are key strategies for boosting user engagement. By analyzing user behavior, businesses can tailor their marketing to meet individual needs, enhancing customer satisfaction and conversion rates. This data-driven approach fosters personalized experiences that build brand loyalty.",
        points: [
            "AI-driven personalized recommendations",
            "Dynamic content & tailored email sequences",
            "Behavioral segmentation"
        ],
        image: img4,
        side: "right"
    }
];

 const activationPoints = [
    {
        id: '01',
        title: 'Data-Backed Activation Tactics',
        desc: 'We use real user behavior and analytics to craft activation flows that truly convert.',
    },
    {
        id: '02',
        title: 'Customized To Your Product Journey',
        desc: 'No one-size-fits-all—our strategies are built around your business model and user journey.',
    },
    {
        id: '03',
        title: 'Frictionless User Onboarding',
        desc: 'We simplify onboarding to help users reach their “aha!” moment faster and stay engaged longer.',
    },
    {
        id: '04',
        title: 'Rapid Testing & Iteration',
        desc: 'We run continuous A/B tests on onboarding flows, emails, and in-app experiences to maximize activation rates.',
    },
    {
        id: '05',
        title: 'Behavior-Driven Personalization',
        desc: 'Deliver tailored messaging and actions based on what your users do—not just who they are.',
    },
    {
        id: '06',
        title: 'Cross-Channel Strategy',
        desc: 'Activate users across email, push, in-app messages, and even social retargeting for higher impact.',
    },
    {
        id: '07',
        title: 'Integration With Your Stack',
        desc: 'Seamless setup with your existing CRM, analytics, and engagement tools.',
    },
    {
        id: '08',
        title: 'User Psychology-First Approach',
        desc: 'We design activation around cognitive triggers and motivation frameworks that drive action.',
    }
];




const AcquisitionSections = () => {
    return (
        <div className="AcquisitionSections-section">
            <div className="Acquisition-header">
                <div>
                    <h1>What services does our <br />
                        <span>Activation offer?</span></h1>
                    <p>Our Activation services enhance user engagement and streamline onboarding. We provide personalized support, interactive tutorials, real-time assistance, and a feedback system to boost user satisfaction. With our team, users enjoy a smooth transition to our platform, helping them achieve their goals.</p>
                </div>
                <button className="cta_btn">Contact us now</button>
            </div>
            {acquisitionData.map((section) => (
                <div className={`section-container ${section.side}`} key={section.id}>
                    <div className="text-content">
                        <h2>{section.id.toString().padStart(2, "0")}</h2>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                        <ul>
                            {section.points.map((point, index) => (
                                <li key={index}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                                    <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> {point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src={section.image} alt={section.image} />
                    </div>
                </div>
            ))}
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
            <div className="activation-wrapper">
                <h2>Whys Choose Growthheories For Activation</h2>
                <div className="activation-grid">
                    {activationPoints.map(({ id, title, desc }) => (
                        <div className="activation-card" key={id}>
                            <span className="card-id">{id}</span>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcquisitionSections;