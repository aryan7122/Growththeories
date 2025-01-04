import React from 'react'
import './ImpactsBenefits.scss';
import bannerImg from '../../assets/Holding the arrow-bro 1.svg'

const iconMail = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7f56d9" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
const Boosts = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7f56d9" fill="none">
    <path d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
const graph = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7f56d9" fill="none">
    <path d="M7 17L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M12 17L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M17 17L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>

const featuresData = [
    {
        icon: iconMail,
        title: 'Scalable Solutions',
        description: 'Continuous growth without requiring constant investment in new acquisition strategies.',
    },
    {
        icon: Boosts,
        title: 'Boosts User Engagement',
        description: 'Increased user engagement and retention, as users actively participate in the growth process.',
    },
    {
        icon: graph,
        title: 'Long-Term Sustainability',
        description: 'A stable, self-sustaining growth mechanism that provides long-term results even as marketing efforts shift.',
    },
    {
        icon: iconMail,
        title: 'Organic Reach',
        description: 'Expands brand visibility and market presence without heavy investment in external marketing channels.',
    },
    {
        icon: Boosts,
        title: 'Accelerated User Acquisition',
        description: 'Fast and sustained growth, valuable for startups or businesses looking to scale quickly.',
    },
    {
        icon: graph,
        title: 'Increased Customer Trust',
        description: 'Higher conversion rates and loyalty due to the trust factor from personal recommendations.',
    },
];


const ImpactsBenefits = () => {
    return (
        <div className="ImpactsBenefits-container">
            <div className="header">
                <span className="suitability">IMPACTS & BENEFITS</span>
                <h1 className='h1-1'>Maximize Your Growth Potential with Proven Strategies</h1>
                <p>Discover how our tailored growth strategies deliver results. From rapid testing to scalable solutions, we help you achieve sustainable growth—without breaking the bank. Whether it's boosting retention, increasing revenue, or scaling fast, our data-driven approach optimizes every stage for maximum impact.</p>
            </div>
            <div className="features-grid">
                {featuresData.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="icon-container">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                        <a href="#">Learn more</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImpactsBenefits