import React, { useState } from 'react';
import './Industry.scss';
import img1 from '../../../assets/comany/acen.png'
import gooo from '../../../assets/comany/goo.webp'
import aplex from '../../../assets/comany/aplex.png'
import noImg from '../../../assets/comany/noImg.webp'
import Process from './Process';
import { motion } from 'framer-motion';

const Industry = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const data = [
        { img: gooo, name: "Google", category: "SaaS" },
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


    const tableRowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const staggerTable = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2  // Row delay
            }
        }
    };


    return (
        <div className="Industry_content">
            <motion.div
                initial={{ opacity: 0, y: -130 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="header-Industry">
                <span className="suitability-INDUSTRY">INDUSTRY</span>
                <h1>Meet the teams who build the future</h1>
                <p>Tens of thousands of companies use growtheories to grow businesses from zero to infinity</p>
                <button className="btn-btn-secondary">Start Growing Today</button>
            </motion.div>
            <div id='tabs_mobile'>
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
            </div>

            <motion.table
                variants={staggerTable}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="table">
                <thead>
                    <tr>
                        {/* <th>Company</th>
                        <th>Category</th>
                        <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <motion.tr
                            variants={tableRowVariants}
                            key={index}>
                            <td >
                                <div className='td1'>
                                    <div className='tdImg'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    {item.name}
                                </div>
                            </td>
                            <td id='categoryTd'>{item.category}</td>
                            <td><a href="#" className="read-story">Read Story</a></td>
                        </motion.tr>
                    ))}
                </tbody>
            </motion.table>
            <Process />
        </div>
    );
};

export default Industry;
