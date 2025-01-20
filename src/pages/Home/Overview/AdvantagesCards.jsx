// src/components/AdvantagesCards.jsx
import React from 'react';
import './Overview.scss';
import { motion } from 'framer-motion';

const AdvantagesCards = () => {
    const dasbord = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ededff" fill="none">
        <path d="M7 17L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M12 17L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M17 17L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
    const paperDoller = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ededff" fill="none">
        <path d="M20.016 2C18.9026 2 18 4.68629 18 8H20.016C20.9876 8 21.4734 8 21.7741 7.66455C22.0749 7.32909 22.0225 6.88733 21.9178 6.00381C21.6414 3.67143 20.8943 2 20.016 2Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M18 8.05426V18.6458C18 20.1575 18 20.9133 17.538 21.2108C16.7831 21.6971 15.6161 20.6774 15.0291 20.3073C14.5441 20.0014 14.3017 19.8485 14.0325 19.8397C13.7417 19.8301 13.4949 19.9768 12.9709 20.3073L11.06 21.5124C10.5445 21.8374 10.2868 22 10 22C9.71321 22 9.45546 21.8374 8.94 21.5124L7.02913 20.3073C6.54415 20.0014 6.30166 19.8485 6.03253 19.8397C5.74172 19.8301 5.49493 19.9768 4.97087 20.3073C4.38395 20.6774 3.21687 21.6971 2.46195 21.2108C2 20.9133 2 20.1575 2 18.6458V8.05426C2 5.20025 2 3.77325 2.87868 2.88663C3.75736 2 5.17157 2 8 2H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.125 13.5L8.125 7.5M10 7.5V6M10 15V13.5M8.125 10.5H11.875M11.875 10.5C12.4963 10.5 13 11.0037 13 11.625V12.375C13 12.9963 12.4963 13.5 11.875 13.5H7M11.875 10.5C12.4963 10.5 13 9.99632 13 9.375V8.625C13 8.00368 12.4963 7.5 11.875 7.5H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    const speed = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ededff" fill="none">
        <path d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M2.50006 12.0001C2.50006 7.52172 2.50006 5.28255 3.8913 3.8913C5.28255 2.50006 7.52172 2.50006 12.0001 2.50006C16.4784 2.50006 18.7176 2.50006 20.1088 3.8913C21.5001 5.28255 21.5001 7.52172 21.5001 12.0001C21.5001 16.4784 21.5001 18.7176 20.1088 20.1088C18.7176 21.5001 16.4784 21.5001 12.0001 21.5001C7.52172 21.5001 5.28255 21.5001 3.8913 20.1088C2.50006 18.7176 2.50006 16.4784 2.50006 12.0001Z" stroke="currentColor" stroke-width="1.5" />
    </svg>
    const advantages = [
        {
            icon: dasbord,
            title: 'Speed To Market',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut hac feugiat pulvinar lorem sed sapien quis fringilla.',
        },
        {
            icon: paperDoller,
            title: 'More Significant ROI',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut hac feugiat pulvinar lorem sed sapien quis fringilla.',
        },
        {
            icon: speed,
            title: 'Time Saving Results',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut hac feugiat pulvinar lorem sed sapien quis fringilla.',
        },
    ];

    return (
        <div className="advantages-section">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Advantages Of Growth Marketing
            </motion.h2>

            <div className="cards-container">
                {advantages.map((adv, index) => (
                    <motion.div
                        className="card " key={index}
                        initial={{ opacity: 0, y: 60, scale: 0.5, rotate: 45 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="icon">{adv.icon}</div>
                        <h3>{adv.title}</h3>
                        <p>{adv.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AdvantagesCards;
