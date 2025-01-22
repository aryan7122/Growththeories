import React from "react";
import "./GrowthGains.scss";

// Icon imports (replace with actual images or font icons)
import { FaEnvelope, FaBolt, FaChartBar, FaSmile, FaChartPie, FaSearch } from "react-icons/fa";

const GrowthGains = () => {
    const data = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>,
            title: "Increased ROI From Marketing Efforts",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <path d="M6.19351 11.3965L12.192 3.31186C12.6611 2.67957 13.5405 3.07311 13.5405 3.91536V10.1729C13.5405 10.6775 13.8853 11.0865 14.3107 11.0865H17.2283C17.891 11.0865 18.2443 12.0134 17.8065 12.6035L11.808 20.6881C11.3389 21.3204 10.4595 20.9269 10.4595 20.0846V13.8271C10.4595 13.3225 10.1147 12.9135 9.68931 12.9135H6.77173C6.10895 12.9135 5.75566 11.9866 6.19351 11.3965Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            title: "Improved Conversion Rates",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <path d="M3.5 9.5V18.5C3.5 18.9659 3.5 19.1989 3.57612 19.3827C3.67761 19.6277 3.87229 19.8224 4.11732 19.9239C4.30109 20 4.53406 20 5 20C5.46594 20 5.69891 20 5.88268 19.9239C6.12771 19.8224 6.32239 19.6277 6.42388 19.3827C6.5 19.1989 6.5 18.9659 6.5 18.5V9.5C6.5 9.03406 6.5 8.80109 6.42388 8.61732C6.32239 8.37229 6.12771 8.17761 5.88268 8.07612C5.69891 8 5.46594 8 5 8C4.53406 8 4.30109 8 4.11732 8.07612C3.87229 8.17761 3.67761 8.37229 3.57612 8.61732C3.5 8.80109 3.5 9.03406 3.5 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M10.5 5.5V18.4995C10.5 18.9654 10.5 19.1984 10.5761 19.3822C10.6776 19.6272 10.8723 19.8219 11.1173 19.9234C11.3011 19.9995 11.5341 19.9995 12 19.9995C12.4659 19.9995 12.6989 19.9995 12.8827 19.9234C13.1277 19.8219 13.3224 19.6272 13.4239 19.3822C13.5 19.1984 13.5 18.9654 13.5 18.4995V5.5C13.5 5.03406 13.5 4.80109 13.4239 4.61732C13.3224 4.37229 13.1277 4.17761 12.8827 4.07612C12.6989 4 12.4659 4 12 4C11.5341 4 11.3011 4 11.1173 4.07612C10.8723 4.17761 10.6776 4.37229 10.5761 4.61732C10.5 4.80109 10.5 5.03406 10.5 5.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M17.5 12.5V18.5C17.5 18.9659 17.5 19.1989 17.5761 19.3827C17.6776 19.6277 17.8723 19.8224 18.1173 19.9239C18.3011 20 18.5341 20 19 20C19.4659 20 19.6989 20 19.8827 19.9239C20.1277 19.8224 20.3224 19.6277 20.4239 19.3827C20.5 19.1989 20.5 18.9659 20.5 18.5V12.5C20.5 12.0341 20.5 11.8011 20.4239 11.6173C20.3224 11.3723 20.1277 11.1776 19.8827 11.0761C19.6989 11 19.4659 11 19 11C18.5341 11 18.3011 11 18.1173 11.0761C17.8723 11.1776 17.6776 11.3723 17.5761 11.6173C17.5 11.8011 17.5 12.0341 17.5 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
            </svg>,
            title: "Reduced Customer Churn",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            title: "Optimized Sales Funnels",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <circle cx="5" cy="7" r="3" stroke="currentColor" stroke-width="1.5" />
                <circle cx="8" cy="18" r="4" stroke="currentColor" stroke-width="1.5" />
                <circle cx="17" cy="7" r="5" stroke="currentColor" stroke-width="1.5" />
            </svg>,
            title: "Data-Driven Growth Strategies",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#193891" fill="none">
                <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            </svg>,
            title: "Our Make The Difference",
            description: "Lorem ipsum dolor sit amet consectetur. Nunc tristique enim sed etiam vel lorem eu pellentesque.",
        },
    ];

    return (
        <div className="growth-gains">
            <div className="title-section">
                <div className="badge">Gains</div>
                <h1>What You Gain From A Growth Audit</h1>
                <p>
                    Powerful, self-serve product and growth analytics to help you convert, engage,
                    and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <div className="cards">
                {data.map((item, index) => (
                    <div key={index} className="card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrowthGains;
