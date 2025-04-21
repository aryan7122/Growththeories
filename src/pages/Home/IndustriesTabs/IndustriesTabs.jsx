import React, { useState } from "react";
import "./IndustriesTabs.scss";
import img1 from "../../../assets/IndustriesTabs/Beauty salon-bro.svg";
import img2 from "../../../assets/IndustriesTabs/Travelers-pana.svg";
import img3 from "../../../assets/IndustriesTabs/Blood donation-cuate.svg";
//  
import { Helmet } from "react-helmet-async";

import { motion } from 'framer-motion';

const industryData = {
    salon: {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
            <path d="M8.69128 2.15168C5.80039 1.36313 3 3.74875 3 7C3 10.2513 5.80039 12.6369 8.69128 11.8483C10.9979 11.2192 14.2043 9.58049 16.6244 9.80217C17.5008 9.88246 18.126 10.6464 18.9467 10.8707C20.0559 11.1739 20.4902 9.50002 20.7285 8.75297C21.0905 7.61771 21.0905 6.38229 20.7285 5.24703C20.4902 4.49998 20.0559 2.82606 18.9467 3.12929C18.126 3.35364 17.5008 4.11755 16.6244 4.19783C14.2043 4.41951 10.9979 2.78085 8.69128 2.15168Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 11.5C6.87177 12.9095 6.77428 15.2676 6.8188 17.376C6.8373 18.2518 7.50261 19 8.34709 19H9.5674C10.2374 19 10.6397 17.4957 10.8465 17.0224C11.1215 16.3927 11.0041 15.6743 10.6757 15.0727C9.98228 13.8023 9.5 13 10 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5 4.5L16.8789 6.01942C17.0404 6.66673 17.0404 7.33327 16.8789 7.98058L16.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 19C9 19.9319 9 20.3978 8.82601 20.7654C8.59402 21.2554 8.14906 21.6448 7.58899 21.8478C7.16894 22 6.06501 22 5 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        title: "Our Impact In The Salon Industry",
        description:
            "At our company, we are dedicated to empowering salon businesses to reach new heights through cutting-edge marketing techniques and highly effective customer acquisition strategies. Our customized engagement models are designed to not only increase repeat bookings but also to cultivate lasting loyalty among your clientele. By meticulously optimizing pricing structures, implementing strategic upselling tactics, and enhancing retention strategies, we work closely with you to unlock greater profitability and long-term success in your salon business. Together, we can transform your vision into reality and ensure your salon thrives in a competitive market.",
        stats: [
            { value: "200+", label: "Digital Experts" },
            { value: "300+", label: "Happy Clients" },
        ],
        imgBanner: img1,
        whyChooseUsIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
            <path d="M15.6972 15H8C6.89543 15 6 14.0951 6 12.9788C6 11.8625 6.89796 10.9517 8.00141 11.002C12.6902 11.2157 15.2951 12.1485 16.384 12.6526C16.78 12.836 17 13.2432 17 13.6834C17 14.4105 16.4167 15 15.6972 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 14L20.9401 3.48443C21.1497 2.90943 20.7906 2.29091 20.1533 2.12892C18.5192 1.71359 16.8081 2.31124 16.2695 3.78511C15.6441 5.49648 15 8.13095 15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 7.96065C15 7.96065 11.6187 6.56598 10.3204 7.13972C9.93065 7.31195 9.59819 7.59728 9.36369 7.96079C9 8.52455 9 9.3497 9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 13V16C6 16.9319 6 17.3978 5.84776 17.7654C5.64477 18.2554 5.25542 18.6448 4.76537 18.8478C4.39782 19 3.93188 19 3 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 21H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        whyChooseUs: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
                    <path d="M7 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7 15V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Data-Backed Results",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 22L10 16H2L4 22H12ZM12 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>,
                title: "End-To-End Marketing Support",
                desc: "Get marketing support to grow your business using data insights for better resource allocation."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M14.5 10.5C14.5 10.5 12 12.5 12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 15H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 8.5C10 8.5 12 11 12 14.9993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Continuous Improvement",
                desc: "Enhance your business capabilities through ongoing improvement. Continuously assess key metrics to optimize your resources and foster sustainable growth."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.5521 6.5L11.0305 8.19458C10.8214 8.42743 10.9486 8.79939 11.2566 8.85537L12.7453 9.12605C13.0732 9.18567 13.1886 9.59658 12.9398 9.81826L11.0521 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Budget-Friendly Solutions",
                desc: "Discover cost-effective strategies to elevate your business. Evaluate key metrics to maximize resources and foster sustainable growth."
            }
        ],
        howWeHelp: {
            title: 'How We Help Salons Thrive',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 14.75H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M8.5 6.75003L2 6.75003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>,
            desc: "To attract more clients, use targeted social media ads, optimize your website for SEO, and partner with influencers. Enhance client retention with personalized deals, re-engagement campaigns, and referral incentives. For upselling, consider strategic pricing, service bundles, and cross-selling complementary products.",
            tags: [
                "✓ Customized Growth Playbooks",
                "✓ Tech-Enabled Solutions",
                "✓ Industry-Specific Expertise",
                "✓ Customized Growth Playbooks"
            ]
        },

    },

    clinical: {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
            <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M12 10V16M9 13L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: "Our Impact in the Clinical Industry",
        description:
            "We help clinical businesses grow by using data-driven marketing and smart patient acquisition strategies. Our goal is to enhance the patient experience through personalized communication and seamless digital interactions. With our targeted marketing campaigns, we boost your brand's credibility and drive sustainable success.",
        stats: [
            { value: "270+", label: "Digital Experts" },
            { value: "440+", label: "Happy Clients" },
        ],
        imgBanner: img3,
        whyChooseUsIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
            <path d="M15.6972 15H8C6.89543 15 6 14.0951 6 12.9788C6 11.8625 6.89796 10.9517 8.00141 11.002C12.6902 11.2157 15.2951 12.1485 16.384 12.6526C16.78 12.836 17 13.2432 17 13.6834C17 14.4105 16.4167 15 15.6972 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 14L20.9401 3.48443C21.1497 2.90943 20.7906 2.29091 20.1533 2.12892C18.5192 1.71359 16.8081 2.31124 16.2695 3.78511C15.6441 5.49648 15 8.13095 15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 7.96065C15 7.96065 11.6187 6.56598 10.3204 7.13972C9.93065 7.31195 9.59819 7.59728 9.36369 7.96079C9 8.52455 9 9.3497 9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 13V16C6 16.9319 6 17.3978 5.84776 17.7654C5.64477 18.2554 5.25542 18.6448 4.76537 18.8478C4.39782 19 3.93188 19 3 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 21H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        whyChooseUs: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
                    <path d="M7 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7 15V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Data-Backed Results",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 22L10 16H2L4 22H12ZM12 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>,
                title: "End-To-End Marketing Support",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M14.5 10.5C14.5 10.5 12 12.5 12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 15H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 8.5C10 8.5 12 11 12 14.9993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Continuous Improvement",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.5521 6.5L11.0305 8.19458C10.8214 8.42743 10.9486 8.79939 11.2566 8.85537L12.7453 9.12605C13.0732 9.18567 13.1886 9.59658 12.9398 9.81826L11.0521 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Budget-Friendly Solutions",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            }
        ],
        howWeHelp: {
            title: 'How we Approach',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 14.75H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M8.5 6.75003L2 6.75003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>,
            desc: "We develop customized, data-driven strategies specifically designed for clinics and hospitals. Our cutting-edge models prioritize the expansion of patient acquisition while ensuring cost efficiency remains a key focus. By leveraging advanced AI insights, we significantly improve patient outreach and retention efforts, ultimately fostering strong, long-lasting relationships with patients. Our approach not only enhances the patient experience but also drives sustainable growth for healthcare providers.",
            tags: [
                "✓ Industry-Specific Expertise",
                "✓ Tech-Enabled Solutions",
                "✓ Market Insights",
                "✓ Customized Growth Playbooks"
            ]
        },

    },
    travel: {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#4a4a4a" fill="none">
            <path d="M6.00391 10V5M11.0039 10V5M16.0039 10V5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.01609 17C3.59614 17 2.88616 17 2.44503 16.5607C2.00391 16.1213 2.00391 15.4142 2.00391 14V8C2.00391 6.58579 2.00391 5.87868 2.44503 5.43934C2.88616 5 3.59614 5 5.01609 5H12.1005C15.5742 5 17.311 5 18.6402 5.70624C19.619 6.22633 20.4346 7.0055 20.9971 7.95786C21.7609 9.25111 21.8332 10.9794 21.9779 14.436C22.0168 15.3678 22.0363 15.8337 21.8542 16.1862C21.7204 16.4454 21.5135 16.6601 21.2591 16.8041C20.913 17 20.4449 17 19.5085 17H19.0039M9.00391 17H15.0039" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.00391 19C8.10848 19 9.00391 18.1046 9.00391 17C9.00391 15.8954 8.10848 15 7.00391 15C5.89934 15 5.00391 15.8954 5.00391 17C5.00391 18.1046 5.89934 19 7.00391 19Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M17.0039 19C18.1085 19 19.0039 18.1046 19.0039 17C19.0039 15.8954 18.1085 15 17.0039 15C15.8993 15 15.0039 15.8954 15.0039 17C15.0039 18.1046 15.8993 19 17.0039 19Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M1.99609 10.0009H15.3641C15.9911 10.0009 16.2041 10.3681 16.6841 10.9441C17.2361 11.4841 17.6093 11.8628 18.1241 11.9401C18.8441 12.0481 21.5081 11.9941 21.5081 11.9941" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>,
        title: "Our Impact in the Travel Industry",
        description:
            "We helped travel agencies and hospitality brands increase conversions and customer loyalty through personalized engagement strategies. This improved retention rates and optimized digital marketing campaigns for better ROI, attracting new customers while keeping existing ones satisfied.",
        stats: [
            { value: "1790+", label: "Digital Experts" },
            { value: "130+", label: "Happy Clients" },
        ],
        imgBanner: img2,
        whyChooseUsIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
            <path d="M22 7.28342C22 9.92499 19.7611 12.0668 17 12.0668C16.6753 12.0672 16.3516 12.0372 16.0327 11.9773C15.8031 11.9342 15.6883 11.9127 15.6082 11.9249C15.5281 11.9371 15.4145 11.9975 15.1874 12.1183C14.545 12.4599 13.7959 12.5806 13.0755 12.4466C13.3493 12.1098 13.5363 11.7057 13.6188 11.2725C13.6688 11.0075 13.545 10.7501 13.3594 10.5617C12.5166 9.70583 12 8.5526 12 7.28342C12 4.64184 14.2388 2.50006 17 2.50006C19.7611 2.50006 22 4.64184 22 7.28342Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M7.50189 21.5001H4.71817C4.39488 21.5001 4.07021 21.4546 3.77327 21.327C2.80666 20.9117 2.31624 20.3633 2.08769 20.0202C1.95764 19.8251 1.97617 19.5764 2.11726 19.389C3.23716 17.9015 5.83846 17.0031 7.50665 17.003C9.17484 17.0031 11.7714 17.9015 12.8913 19.389C13.0324 19.5764 13.0509 19.8251 12.9209 20.0202C12.6923 20.3633 12.2019 20.9117 11.2353 21.327C10.9383 21.4546 10.6137 21.5001 10.2904 21.5001H7.50189Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.2854 11.7889C10.2854 13.3202 9.04129 14.5616 7.50664 14.5616C5.97199 14.5616 4.72791 13.3202 4.72791 11.7889C4.72791 10.2576 5.97199 9.01624 7.50664 9.01624C9.04129 9.01624 10.2854 10.2576 10.2854 11.7889Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        whyChooseUs: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
                    <path d="M7 8V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7 15V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Data-Backed Results",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 22L10 16H2L4 22H12ZM12 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>,
                title: "End-To-End Marketing Support",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M14.5 10.5C14.5 10.5 12 12.5 12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 15H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 8.5C10 8.5 12 11 12 14.9993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Continuous Improvement",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.5521 6.5L11.0305 8.19458C10.8214 8.42743 10.9486 8.79939 11.2566 8.85537L12.7453 9.12605C13.0732 9.18567 13.1886 9.59658 12.9398 9.81826L11.0521 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>,
                title: "Budget-Friendly Solutions",
                desc: "Unlock your business potential by smart scaling. Analyze metrics to optimize resources and drive growth efficiently."
            }
        ],
        howWeHelp: {
            title: 'How we Approach',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 14.75H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M8.5 6.75003L2 6.75003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>,
            desc: "Leverage advanced AI analytics to gain deep insights into customer travel preferences, enabling you to craft a truly personalized experience for each traveler. Design captivating advertisements that resonate with potential customers at various stages of their decision-making journey, ensuring that your message aligns with their needs and desires. Additionally, enhance your website and booking platforms to provide a seamless and intuitive user experience, making it effortless for users to navigate and complete their bookings with confidence.",
            tags: [
                "✓ Industry-Specific Expertise",
                "✓ Tech-Enabled Solutions",
                "✓ Market Insights",
                "✓ Customized Growth Playbooks"
            ]
        },

    },
};

export default function IndustriesTabs() {
    const [activeTab, setActiveTab] = useState("salon");
    const data = industryData[activeTab];

    return (
        <>
            <Helmet>
                {/* General Page SEO */}
                <title>Industries We Serve | Salon, Clinical & Travel Industry Marketing Experts</title>
                <meta name="description" content="We empower salon, clinical, and travel industries in India and abroad with data-driven marketing, digital transformation, and industry-specific growth strategies." />
                <meta name="keywords" content="Salon marketing, Clinical marketing, Travel marketing, Digital marketing for salons, Clinic growth strategies, Travel agency SEO, Industry-specific marketing" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Industries We Serve | Digital Marketing Experts for Salon, Clinical & Travel" />
                <meta property="og:description" content="Discover how we help salons, clinics, and travel brands grow through AI-driven strategies, patient acquisition, customer engagement, and end-to-end marketing support." />
              

                {/* Twitter */}
                <meta name="twitter:title" content="Industries We Serve | Empowering Salon, Clinical & Travel Sectors" />
                <meta name="twitter:description" content="Explore our impact in the salon, clinical, and travel industries using smart marketing strategies, digital tools, and expert-driven insights." />
             
            </Helmet>
            <div className="industries-section">
                <div className="card_title">
                    <motion.h4
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="subheading">Industries</motion.h4>
                    <h2 className="main-heading">Industries We Served In India & Abroad</h2>
                </div>
                <div className="card_industries">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="desc-text">
                        We Enthusiastically Back <span className="gray">A Range Of Sectors</span>, Consistently Dedicated To <strong> <br />Outstanding Service And Top-Notch Quality</strong>.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="desc-small">
                        Delving Into The Diverse Industries We Proudly Support, While Maintaining Our Commitment To Excellence And Quality In All We Do.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="cta-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                            <path d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M16.9959 7H17.0049" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.5 21.5L7.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M8.5 21.5L10.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M2.5 15.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg> Start Growing Today</motion.button>

                    <div className="tabs_">
                        {Object.keys(industryData).map((key) => (
                            <motion.button
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true, amount: 0.1 }}
                                key={key}
                                className={`tab_btn ${activeTab === key ? "active" : ""}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)} Industry
                            </motion.button>
                        ))}
                    </div>

                    <div className="industry-content">
                        <div className="cardInfo_indus">
                            <div className="Industry_main_content">
                                <div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        className="industry-title"><span>{data.icon}</span> {data.title}</motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        className="industry-desc">{data.description}</motion.p>
                                    <motion.img
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        className="img2" src={data.imgBanner} alt={`Image of ${data.title}`} title={data.title} />
                                    <div className="stats">
                                        {data.stats.map((item, index) => (
                                            <div className="stat-item" key={index}>
                                                <motion.h2
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    viewport={{ once: true, amount: 0.1 }}>{item.value}</motion.h2>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                >{item.label}</motion.p>
                                            </div>
                                        ))}
                                        <div className="BG">

                                        </div>
                                    </div>
                                </div>
                                <motion.img
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    viewport={{ once: true, amount: 0.1 }} className="img" src={data.imgBanner} alt={`Image of ${data.title}`} title={data.title} />
                            </div>
                        </div>


                        <div className="bottom-section">
                            <div className="why-choose">
                                <div className="section-title">
                                    <div className="line"></div>
                                    <motion.h4
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <span className="icon">{data.whyChooseUsIcon}</span>
                                        Why They Choose Us
                                    </motion.h4>
                                    <div className="line2"></div>
                                </div>

                                <div className="choose-grid">
                                    {data.whyChooseUs.map((item, index) => (
                                        <div className="choose-item" key={index}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="icon_item">{item.icon}</motion.div>
                                            <div>
                                                <motion.h5
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    viewport={{ once: true, amount: 0.1 }}>{item.title}</motion.h5>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                >{item.desc}</motion.p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="how-help">

                                <h4 className="h4_help">{data.howWeHelp.icon} {data.howWeHelp.title}</h4>
                                <div className="help-box">
                                    <motion.p
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >{data.howWeHelp.desc}</motion.p>
                                    <div className="tags">
                                        {data.howWeHelp.tags.map((tag, idx) => (
                                            <motion.span
                                                initial={{ opacity: 0, y: 50 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="tag" key={idx}>{tag}</motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}