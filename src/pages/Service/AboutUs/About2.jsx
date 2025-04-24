import React from 'react';
import './About2.scss';

const About2 = () => {
    const values = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>,
            title: 'Empathy',
            description: 'We value empathy, ensuring our solutions are delivered with understanding of what matters to you.',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                <path d="M2 10.5C2 5.5 6 3 12 3C18 3 22 5.5 22 10.5C22 15.5 18 18 12 18V21C12 21 2 18 2 10.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8 8.5H16M8 12.5H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>,
            title: 'Communication',
            description: 'We foster clear, effective, and collaborative communication, ensuring enhanced engagement, stronger relationships, and an outstanding service.',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                <path d="M12 4.49988C12 3.11917 10.8807 1.99988 9.5 1.99988C8.11929 1.99988 7 3.11917 7 4.49988C5.34315 4.49988 4 5.84303 4 7.49988C4 8.06854 4.15822 8.60025 4.43304 9.05338C3.04727 9.31843 2 10.5369 2 11.9999C2 13.4629 3.04727 14.6813 4.43304 14.9464C4.15822 15.3995 4 15.9312 4 16.4999C4 18.1568 5.34315 19.4999 7 19.4999C7 20.8806 8.11929 21.9999 9.5 21.9999C10.8807 21.9999 12 20.8806 12 19.4999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 19.4999C12 20.8806 13.1193 21.9999 14.5 21.9999C15.8807 21.9999 17 20.8806 17 19.4999C18.6569 19.4999 20 18.1568 20 16.4999C20 15.9312 19.8418 15.3995 19.567 14.9464C20.9527 14.6813 22 13.4629 22 11.9999C22 10.5369 20.9527 9.31843 19.567 9.05338C19.8418 8.60025 20 8.06854 20 7.49988C20 5.84303 18.6569 4.49988 17 4.49988C17 3.11917 15.8807 1.99988 14.5 1.99988C13.1193 1.99988 12 3.11917 12 4.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.487 7.00085V8.97987M7 10.5012H9.05198M15.0231 10.5012H17.075M15.0231 13.4745H17.075M7 13.4745H9.05198M10.487 15.0201V16.9991M13.5125 15.0201V16.9991M13.5017 7.00085V8.97987M10.052 14.9684H14.0231C14.5753 14.9684 15.0231 14.5207 15.0231 13.9684V9.97987C15.0231 9.42759 14.5753 8.97987 14.0231 8.97987H10.052C9.49969 8.97987 9.05198 9.42759 9.05198 9.97987V13.9684C9.05198 14.5207 9.49969 14.9684 10.052 14.9684Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>,
            title: 'Mastery',
            description: 'We’re committed to delivering unmatched excellence through deep industry knowledge and high quality consulting.',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
                <path d="M12 3C9.05058 3 6.59627 5.11144 6.07743 7.8996C5.9907 8.36569 5.94733 8.59873 6.1089 8.90532C6.27048 9.2119 6.49914 9.31381 6.95646 9.51763C8.33509 10.1321 10.0897 10.5 12 10.5C13.9103 10.5 15.6649 10.1321 17.0435 9.51763C17.5009 9.31381 17.7295 9.2119 17.8911 8.90532C18.0527 8.59873 18.0093 8.36569 17.9226 7.8996C17.4037 5.11144 14.9494 3 12 3Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 5.5C19.989 6.28752 22 7.75946 22 9.44533C22 11.9608 17.5228 14 12 14C6.47715 14 2 11.9608 2 9.44533C2 7.75946 4.01099 6.28752 7 5.5" stroke="#000000" stroke-width="1.5"></path>
                <path d="M12 18V21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 17L18 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 17L6 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>,
            title: 'Innovation',
            description: 'We actively embrace creative and forward thinking approaches to ensure we create solutions that are future proof and solve real problems.',
        },
    ];

    return (
        <div className="about2-us">
            <div className="section-header">
                {/* <span className="code">(002)</span> */}
                <div>
                    <span className="name">(What’s In A Name)</span>
                    <h1>
                        Growththories Is Mixture Of Growth And Theory. At GrowthTheories, Our Name Is More Than Just A Label—It’s A Reflection Of Our Core Philosophy
                    </h1>
                </div>
                <div className="content">
                    <p className="text-left">
                        At GrowthTheories, Our Name Is More Than Just A Label—It’s A Reflection Of Our Core Philosophy.
                        The word <strong>"Growth"</strong> symbolizes our commitment to helping businesses expand and reach new heights,
                        while <strong>"Theories"</strong> represents the strategic, research-based approaches we use to fuel that growth.
                        By combining these two powerful concepts, we’ve built a unique agency that merges practical experience with data-driven insights.
                    </p>

                    <p className="text-right">
                        We believe that every successful <strong>Growth Journey Is Backed By Strong, Adaptable Theories.</strong>
                        Whether you’re a startup or a well-established company, our blend of innovative growth strategies and proven methodologies
                        ensures that your business thrives in any market. Every action we take is rooted in tested principles,
                        and we customize these theories to fit your specific needs, ensuring maximum impact.
                    </p>
                </div>
            </div>



            <div className="mission-section">
                <span className="mission-title">MISSION, VALUES + GOALS</span>
                <h2>
                    At GrowthTheories, Our Mission Is To Drive Sustainable Business Growth By Offering Budget-Friendly Solutions
                    That Deliver Maximum Impact. We Are Committed To Helping Businesses Scale.
                </h2>
            </div>
            <section className="values-section">
                <div className="headers">
                    <div>
                        <p className="subtitle">Our Values</p>
                        <h2 className="title">Our Values and Importance</h2>
                        <p className="description">
                            Our values are the cornerstone of our identity in India, and the driving force behind our actions. These values ensure our interactions and decisions deliver a high quality and revenue-focused outcome for our India clients.
                        </p>
                    </div>
                    <button className="cta-button">Start Growing Today</button>
                </div>
                <div className="values-list">
                    {values.map((value, index) => (
                        <div className="value-item" key={index}>
                            <div className="icon">{value.icon}</div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About2;
