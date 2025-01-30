import React from "react";
import { FaHeart, FaDollarSign, FaLaptop, FaPlane, FaSmile, FaCoffee } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiOutlineWifi, AiFillHome } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import "./PerksBenefits.scss";

const perksList = [
    { icon: <FaHeart />, text: "Work Life Balance" },
    { icon: <FaDollarSign />, text: "Competitive Salary And Equity" },
    { icon: <MdWork />, text: "Work Remotely, No Commuting To The Office" },
    { icon: <AiFillHome />, text: "Health, Dental And Vision Insurance" },
    { icon: <FaPlane />, text: "5 Weeks Paid Vacation" },
    { icon: <FaSmile />, text: "Parental Leave" },
];

const benefitsList = [
    { icon: <FiMonitor />, text: "Macbook, 5K Display And Accessories" },
    { icon: <FaLaptop />, text: "Paid Co-Working Space/Desk At An Office" },
    { icon: <FaCoffee />, text: "Regular Team Events And Offsites" },
    { icon: <FaCoffee />, text: "Paid Lunch And Coffee During Work Days" },
    { icon: <AiOutlineWifi />, text: "Internet Bill Compensation" },
    { icon: <FaHeart />, text: "Employee-Friendly Equity Terms" },
];

const PerksBenefits = () => {
    return (
        <div className="perks-benefits-section">
            <h2>Perks & Benefits</h2>
            <div className="perks-benefits-grid">
                <div className="perks-list">
                    {perksList.map((perk, index) => (
                        <div className="perk-item" key={index}>
                            <span className="icon">{perk.icon}</span>
                            <span className="text">{perk.text}</span>
                        </div>
                    ))}
                </div>
                <div className="benefits-list">
                    {benefitsList.map((benefit, index) => (
                        <div className="benefit-item" key={index}>
                            <span className="icon">{benefit.icon}</span>
                            <span className="text">{benefit.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerksBenefits;
