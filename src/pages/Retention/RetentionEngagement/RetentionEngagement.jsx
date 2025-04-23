import React from 'react';
import './RetentionEngagement.scss';
import { FaChartLine, FaBullseye, FaUsers, FaSync, FaHandshake, FaShieldAlt, FaCogs, FaDatabase } from 'react-icons/fa';

const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M7 17L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 17L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M17 17L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
        title: 'Predictive Analytics',
        desc: 'Predictive Analytics leverages historical data to forecast trends, helping businesses make informed decisions and enhance customer experiences.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M10.9961 10H11.0111M10.9998 16H11.0148" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 13H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 16 8)" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        title: 'Sales Forecasting',
        desc: 'Sales forecasting allows businesses to predict trends by analyzing past data, helping them make informed decisions on inventory, staffing, and marketing to optimize resources and boost profits.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M7.5 19.5C7.5 18.5344 7.82853 17.5576 8.63092 17.0204C9.59321 16.3761 10.7524 16 12 16C13.2476 16 14.4068 16.3761 15.3691 17.0204C16.1715 17.5576 16.5 18.5344 16.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="12" cy="11" r="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 11C18.6101 11 19.6415 11.3769 20.4974 12.0224C21.2229 12.5696 21.5 13.4951 21.5 14.4038V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="17.5" cy="6.5" r="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.5 11C5.38987 11 4.35846 11.3769 3.50256 12.0224C2.77706 12.5696 2.5 13.4951 2.5 14.4038V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: 'Customer Behavior Insights',
        desc: 'Customer Behavior Insights show how consumers interact with products. Analyzing these patterns helps businesses improve strategies and enhance user experience.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.50006 12.0001C2.50006 7.52172 2.50006 5.28255 3.8913 3.8913C5.28255 2.50006 7.52172 2.50006 12.0001 2.50006C16.4784 2.50006 18.7176 2.50006 20.1088 3.8913C21.5001 5.28255 21.5001 7.52172 21.5001 12.0001C21.5001 16.4784 21.5001 18.7176 20.1088 20.1088C18.7176 21.5001 16.4784 21.5001 12.0001 21.5001C7.52172 21.5001 5.28255 21.5001 3.8913 20.1088C2.50006 18.7176 2.50006 16.4784 2.50006 12.0001Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        title: 'Real-Time Data Integration',
        desc: 'Real-Time Data Integration allows organizations to instantly connect and sync data across platforms, ensuring accurate information for better decision-making.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M10.5 2V4M13.5 2V4M8 6.5H6M8 9.5H6M18 6.5H16M18 9.5H16M13.3333 4H10.6667C9.40959 4 8.78105 4 8.39052 4.39052C8 4.78105 8 5.40959 8 6.66667V9.33333C8 10.5904 8 11.219 8.39052 11.6095C8.78105 12 9.40959 12 10.6667 12H13.3333C14.5904 12 15.219 12 15.6095 11.6095C16 11.219 16 10.5904 16 9.33333V6.66667C16 5.40959 16 4.78105 15.6095 4.39052C15.219 4 14.5904 4 13.3333 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.61732 21.9239C3.80109 22 4.03406 22 4.5 22C4.96594 22 5.19891 22 5.38268 21.9239C5.62771 21.8224 5.82239 21.6277 5.92388 21.3827C6 21.1989 6 20.9659 6 20.5C6 20.0341 6 19.8011 5.92388 19.6173C5.82239 19.3723 5.62771 19.1776 5.38268 19.0761C5.19891 19 4.96594 19 4.5 19C4.03406 19 3.80109 19 3.61732 19.0761C3.37229 19.1776 3.17761 19.3723 3.07612 19.6173C3 19.8011 3 20.0341 3 20.5C3 20.9659 3 21.1989 3.07612 21.3827C3.17761 21.6277 3.37229 21.8224 3.61732 21.9239Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M11.1173 21.9239C11.3011 22 11.5341 22 12 22C12.4659 22 12.6989 22 12.8827 21.9239C13.1277 21.8224 13.3224 21.6277 13.4239 21.3827C13.5 21.1989 13.5 20.9659 13.5 20.5C13.5 20.0341 13.5 19.8011 13.4239 19.6173C13.3224 19.3723 13.1277 19.1776 12.8827 19.0761C12.6989 19 12.4659 19 12 19C11.5341 19 11.3011 19 11.1173 19.0761C10.8723 19.1776 10.6776 19.3723 10.5761 19.6173C10.5 19.8011 10.5 20.0341 10.5 20.5C10.5 20.9659 10.5 21.1989 10.5761 21.3827C10.6776 21.6277 10.8723 21.8224 11.1173 21.9239Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M12 19V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.5 19C4.5 17.5955 4.5 16.8933 4.83706 16.3889C4.98298 16.1705 5.17048 15.983 5.38886 15.8371C5.89331 15.5 6.59554 15.5 8 15.5H16C17.4045 15.5 18.1067 15.5 18.6111 15.8371C18.8295 15.983 19.017 16.1705 19.1629 16.3889C19.5 16.8933 19.5 17.5955 19.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.6173 21.9239C18.8011 22 19.0341 22 19.5 22C19.9659 22 20.1989 22 20.3827 21.9239C20.6277 21.8224 20.8224 21.6277 20.9239 21.3827C21 21.1989 21 20.9659 21 20.5C21 20.0341 21 19.8011 20.9239 19.6173C20.8224 19.3723 20.6277 19.1776 20.3827 19.0761C20.1989 19 19.9659 19 19.5 19C19.0341 19 18.8011 19 18.6173 19.0761C18.3723 19.1776 18.1776 19.3723 18.0761 19.6173C18 19.8011 18 20.0341 18 20.5C18 20.9659 18 21.1989 18.0761 21.3827C18.1776 21.6277 18.3723 21.8224 18.6173 21.9239Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
        title: 'Lifecycle Marketing Expertise',
        desc: 'From onboarding to loyalty, we map and optimize every stage of the customer lifecycle for sustained engagement.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M10 12.5C10 12.5 10.5 12.5 11 13.5C11 13.5 12.5882 11 14 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: 'Proactive Churn Prediction',
        desc: 'Using predictive modeling, we identify drop-off signals early and take action before users leave.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <path d="M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M14.384 9.43749C13.7591 8.85581 12.9211 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 12.9211 8.85581 13.7591 9.43749 14.384" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M9.78 20.436C9.33442 19.9904 9.18844 19.8566 8.90573 19.7389C8.62149 19.6204 8.3257 19.6161 7.69171 19.6161C6.1838 19.6161 5.32083 19.6161 4.85239 19.1476C4.38394 18.6792 4.38394 17.8162 4.38394 16.3083C4.38394 15.6777 4.37981 15.3817 4.26299 15.0987C4.14573 14.8147 3.93965 14.6022 3.49166 14.1541C2.92759 13.59 2 12.8859 2 12C2 11.114 2.92756 10.4099 3.49166 9.84585C3.93756 9.39996 4.14378 9.18799 4.26137 8.90515C4.37951 8.62098 4.38394 8.32526 4.38394 7.69171C4.38394 6.1838 4.38394 5.32083 4.85239 4.85239C5.32083 4.38394 6.1838 4.38394 7.69171 4.38394C8.32091 4.38394 8.61661 4.38 8.89929 4.26379C9.18454 4.14652 9.39688 3.94064 9.84585 3.49166C10.4099 2.92756 11.2104 2 12 2C12.7896 2 13.59 2.92759 14.1541 3.49167C14.6029 3.94037 14.8155 4.14637 15.1001 4.26355C15.3827 4.37992 15.6787 4.38394 16.3083 4.38394C17.8162 4.38394 18.6792 4.38394 19.1476 4.85239C19.6161 5.32083 19.6161 6.1838 19.6161 7.69171C19.6161 8.32383 19.6202 8.6196 19.7378 8.9032C19.8555 9.18695 19.9891 9.3211 20.436 9.768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: 'Customized Frameworks',
        desc: 'Every business is unique—we tailor retention plans to fit your industry, product, and customer journey.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
            <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M6 10.8418C6.60158 11.0226 7.27434 11.1716 8 11.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12C3 13.5299 6.05369 14.7923 10 14.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6 17.8418C6.60158 18.0226 7.27434 18.1716 8 18.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M11 22C6.58172 22 3 20.6569 3 19V5M19 5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 20.7143V22M17 20.7143C15.8432 20.7143 14.8241 20.1461 14.2263 19.2833M17 20.7143C18.1568 20.7143 19.1759 20.1461 19.7737 19.2833M17 14.2857C18.1569 14.2857 19.1761 14.854 19.7738 15.7169M17 14.2857C15.8431 14.2857 14.8239 14.854 14.2262 15.7169M17 14.2857V13M21 14.9286L19.7738 15.7169M13.0004 20.0714L14.2263 19.2833M13 14.9286L14.2262 15.7169M20.9996 20.0714L19.7737 19.2833M19.7738 15.7169C20.1273 16.2271 20.3333 16.8403 20.3333 17.5C20.3333 18.1597 20.1272 18.773 19.7737 19.2833M14.2262 15.7169C13.8727 16.2271 13.6667 16.8403 13.6667 17.5C13.6667 18.1597 13.8728 18.773 14.2263 19.2833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: 'Data-Driven Retention',
        desc: 'Our strategies are backed by real-time data insights to reduce churn and maximize lifetime value.'
    }
];

const RetentionEngagement = () => {
    return (
        <section className="retention-engagement">
            <div className="section-header">
                <div>
                    <h2>What Is <span>Retention & Engagement?</span></h2>
                    <p>
                        Retention and engagement are strategies businesses use to keep customers returning and interacting with their products. Retention aims to maintain loyalty,
                        while engagement fosters meaningful interactions that enhance the customer experience. Together, they strengthen the brand-audience relationship, driving growth and success.
                    </p>
                </div>
                <button className="btn-red">Get Your Retention Proposal!</button>
            </div>

            <hr className="divider" />

            <div className="feature-header">
                <div>
                    <span className="tag">FEATURES</span>
                    <h3>Whys Choose Growththeories For Retention</h3>
                    <p>
                        Growththeories offers innovative strategies tailored to enhance customer loyalty and engagement. Our data-driven insights help you understand your audience better, ensuring that your retention efforts are effective and impactful. With personalized communication and targeted campaigns, we empower your business to build lasting relationships with customers, ultimately driving growth and success.
                    </p>
                </div>
                <button className="btn-red">Contact Us Now</button>
            </div>

            <div className="features-grid">
                {features.map((feature, idx) => (
                    <div key={idx} className="feature-box">
                        <div className="icon">{feature.icon}</div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RetentionEngagement;