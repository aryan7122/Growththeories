import React, { useState } from 'react';
import './Industry.scss';
import img1 from '../../assets/comany/acen.png'
import gooo from '../../assets/comany/goo.webp'
import aplex from '../../assets/comany/aplex.png'
import noImg from '../../assets/comany/noImg.webp'
import Process from './Process';

const Industry = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const data = [
        { img: gooo,name: "Google", category: "SaaS" },
        { img: noImg, name: "Gen - General Enterprise", category: "Real Estate" },
        { img: aplex, name: "Apex - Apex Enterprise", category: "Fintech" },
        { img: img1, name: "accenture", category: "SaaS" },
        { img: noImg, name: "Chco - Charlie Corporation", category: "E-commerce" },
        { img: noImg, name: "VG - Van Group", category: "SaaS" },
        { img: noImg, name: "Base - Base Corporation", category: "Health care" },
        { img: noImg, name: "Acme - Acme Corporation", category: "SaaS" },
        { img: noImg, name: "Beco - Beta Corporation", category: "E-commerce" },
        { img: noImg, name: "Ind - Indian Corporation", category: "Health care" },
        { img: noImg, name: "Mu - Mu Group", category: "E-commerce" },
        { img: noImg, name: "Alpha - Alpha Enterprise", category: "Real Estate" }
    ];

    const categories = ["all", "SaaS", "Fintech", "E-commerce", "Health care", "Real Estate"];

    const filteredData = activeCategory === 'all' ? data : data.filter(item => item.category === activeCategory);

    return (
        <div className="Industry_content">
            <div className="header-Industry">
                <span className="suitability-INDUSTRY">INDUSTRY</span>
                <h1>Meet the teams who build the future</h1>
                <p>Tens of thousands of companies use growtheories to grow businesses from zero to infinity</p>
                <button className="btn-btn-secondary">Start Growing Today</button>
            </div>

            <div className="tabs">
                {categories.map(category => (
                    <div
                        key={category}
                        className={`tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            <table className="table">
                <thead>
                    <tr>
                        {/* <th>Company</th>
                        <th>Category</th>
                        <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.img } alt="" />  {item.name}</td>
                            <td id='categoryTd'>{item.category}</td>
                            <td><a href="#" className="read-story">Read Story</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Process />
        </div>
    );
};

export default Industry;
