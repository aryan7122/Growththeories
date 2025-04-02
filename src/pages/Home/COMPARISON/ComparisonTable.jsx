import React from "react";
import "./ComparisonTable.scss"; // SCSS file ko import karein
const featuresData = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M2.25607 15.6322C2.29003 15.309 2.52424 15.0485 2.99267 14.5276L4.02374 13.3749C4.27577 13.0558 4.45462 12.5 4.45462 11.9998C4.45462 11.5 4.27571 10.944 4.02371 10.625L2.99267 9.47231C2.52424 8.95137 2.29002 8.6909 2.25607 8.36768C2.22211 8.04446 2.39707 7.74083 2.74698 7.13358L3.24056 6.27698C3.61386 5.62915 3.8005 5.30523 4.11808 5.17607C4.43566 5.0469 4.79482 5.14883 5.51316 5.35267L6.73339 5.69637C7.192 5.80212 7.67315 5.74213 8.0919 5.52698L8.42878 5.33261C8.78786 5.10262 9.06406 4.76352 9.21694 4.36493L9.5509 3.36754C9.77047 2.70753 9.88026 2.37752 10.1416 2.18876C10.403 2 10.7502 2 11.4445 2H12.5593C13.2537 2 13.6009 2 13.8622 2.18876C14.1236 2.37752 14.2334 2.70753 14.453 3.36754L14.7869 4.36493C14.9398 4.76352 15.216 5.10262 15.5751 5.33261L15.912 5.52698C16.3307 5.74213 16.8119 5.80212 17.2705 5.69637L18.4907 5.35267C19.209 5.14883 19.5682 5.0469 19.8858 5.17607C20.2034 5.30523 20.39 5.62915 20.7633 6.27698L21.2569 7.13358C21.6068 7.74083 21.7817 8.04446 21.7478 8.36768C21.7138 8.6909 21.4796 8.95137 21.0112 9.47231L19.9801 10.625C19.7282 10.944 19.5492 11.5 19.5492 11.9998C19.5492 12.5 19.7281 13.0558 19.9801 13.3749L21.0112 14.5276C21.4796 15.0485 21.7138 15.309 21.7478 15.6322C21.7817 15.9555 21.6068 16.2591 21.2569 16.8663L20.7633 17.7229C20.39 18.3707 20.2034 18.6947 19.8858 18.8238C19.5682 18.953 19.209 18.8511 18.4907 18.6472L17.2705 18.3035C16.8118 18.1977 16.3306 18.2578 15.9118 18.473L15.575 18.6674C15.2159 18.8974 14.9398 19.2364 14.787 19.635L14.453 20.6325C14.2334 21.2925 14.1236 21.6225 13.8622 21.8112C13.6009 22 13.2537 22 12.5593 22H11.4445C10.7502 22 10.403 22 10.1416 21.8112C9.88026 21.6225 9.77047 21.2925 9.5509 20.6325" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.73696 18.7798C3.81696 17.6998 7.48896 14.0638 7.84896 13.6438C8.22953 13.1998 7.92096 12.5998 8.10456 10.7398C8.1934 9.8398 8.38699 9.16555 8.94096 8.6638C9.60096 8.0398 10.141 8.0398 12.001 7.99781C13.621 8.0398 13.813 7.8598 13.981 8.27981C14.101 8.57981 13.741 8.7598 13.309 9.23981C12.349 10.1998 11.785 10.6798 11.731 10.9798C11.341 12.2998 12.877 13.0798 13.717 12.2398C14.0346 11.9221 15.505 10.4398 15.649 10.3198C15.757 10.2238 16.0155 10.2284 16.141 10.3798C16.249 10.4859 16.261 10.4998 16.249 10.9798C16.2379 11.4241 16.2428 12.062 16.2442 12.7198C16.2459 13.5721 16.201 14.5198 15.841 14.9998C15.121 16.0798 13.921 16.1398 12.841 16.1878C11.821 16.2478 10.981 16.1398 10.717 16.3318C10.501 16.4398 9.36096 17.6398 7.98096 19.0198L5.52096 21.4798C3.48096 23.0998 1.23696 20.5798 2.73696 18.7798Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>, // Replace with React Icon
        feature: "Customization",
        growthMarketing: "Full customer lifecycle (acquisition, activation, retention, referral, revenue).",
        regularMarketing: "Primarily focused on customer acquisition and brand awareness."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M12.9981 6.5H11.0019C8.13196 6.5 6.19701 9.56909 7.32753 12.328C7.48501 12.7124 7.84633 12.9615 8.24612 12.9615H8.9491C9.18605 12.9615 9.39259 13.1302 9.45006 13.3706L10.3551 17.1567C10.5438 17.9462 11.222 18.5 12 18.5C12.778 18.5 13.4562 17.9462 13.6449 17.1567L14.5499 13.3706C14.6074 13.1302 14.814 12.9615 15.0509 12.9615H15.7539C16.1537 12.9615 16.515 12.7124 16.6725 12.328C17.803 9.56909 15.868 6.5 12.9981 6.5Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M7 16.5L6 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 21.5L12 22.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18 16.5L17 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        feature: "Approach",
        growthMarketing: "Data-driven, iterative, and experimental. Constantly tests and optimizes at all stages of the funnel.",
        regularMarketing: "Campaign-based with pre-defined goals and execution methods."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M6.14839 5.67914C6.82645 4.85343 7.16547 4.44058 7.62894 4.22029C8.09241 4 8.62199 4 9.68114 4H15V11H9.68114C8.62199 11 8.09241 11 7.62894 10.7797C7.16547 10.5594 6.82645 10.1466 6.14839 9.32086L5.87979 8.99376C5.29326 8.27951 5 7.92239 5 7.5C5 7.07761 5.29326 6.72048 5.87979 6.00624L6.14839 5.67914Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 21L15 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 21H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        feature: "Goal",
        growthMarketing: "Achieve sustainable growth by focusing on customer retention, engagement, and advocacy in addition to acquisition.",
        regularMarketing: "Drive traffic, lead generation, and conversions, typically focused on top-of-the-funnel metrics."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485M7.66883 2.69323C5.99196 4.37011 7.46169 8.55859 10.9516 12.0485M10.9516 12.0485L14 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.48804 15L4.75106 17.4884C3.3523 19.4923 2.65291 20.4942 3.17039 21.2471C3.68787 22 5.07589 22 7.85193 22H12.1481C14.9241 22 16.3121 22 16.8296 21.2471C17.301 20.5612 16.7625 19.6686 15.6053 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        feature: "Channels",
        growthMarketing: "Uses a wide range of digital and non-digital channels (product enhancements, user experience, word-of-mouth).",
        regularMarketing: "Primarily focused on digital channels like SEO, SEM, social media, email marketing, and content marketing."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M20.663 8.85C21.2522 6.81022 21.0868 5.03955 20.0236 3.97636C17.7744 1.7271 12.3587 3.49602 7.92736 7.92736C7.45397 8.40074 7.01097 8.88536 6.6 9.37615M17.4 14.6238C16.989 15.1146 16.546 15.5993 16.0726 16.0726C11.6413 20.504 6.22562 22.2729 3.97636 20.0236C2.83569 18.883 2.72842 16.928 3.47772 14.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6754 9.30005L10.9243 11.3704C10.7105 11.6476 10.6037 11.7862 10.6699 11.8931C10.7361 12 10.9288 12 11.3141 12H12.6867C13.072 12 13.2647 12 13.3309 12.107C13.3971 12.2139 13.2902 12.3525 13.0765 12.6297L11.3141 14.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.75 17.7059C9.13145 17.2114 8.52058 16.6659 7.92736 16.0726C3.49602 11.6413 1.7271 6.22562 3.97636 3.97636C5.11702 2.83569 7.07202 2.72842 9.3 3.47772M14.25 20.3607C16.6631 21.2813 18.8068 21.2405 20.0236 20.0236C22.2729 17.7744 20.504 12.3587 16.0726 7.92736C15.4794 7.33413 14.8686 6.78862 14.25 6.29407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        feature: "Methodology",
        growthMarketing: "Heavily relies on A/B testing, growth hacking, and cross-functional collaboration (with product, sales, etc.).",
        regularMarketing: "Standard digital strategies, using analytics to measure and optimize performance."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        feature: "Customer Journey",
        growthMarketing: "Focuses on the entire customer journey from acquisition to retention and referral.",
        regularMarketing: "Focuses primarily on the top and middle of the funnel (awareness and acquisition)."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M16 10V9C16 8.05719 16 7.58579 16.2929 7.29289C16.5858 7 17.0572 7 18 7C18.9428 7 19.4142 7 19.7071 7.29289C20 7.58579 20 8.05719 20 9V10M16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10M16 10H20M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10M8 10V9C8 8.05719 8 7.58579 7.70711 7.29289C7.41421 7 6.94281 7 6 7C5.05719 7 4.58579 7 4.29289 7.29289C4 7.58579 4 8.05719 4 9V10M8 10L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 1.99982L10.625 4.99982H13.625L11.75 7.99982" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        feature: "Retention",
        growthMarketing: "Strong emphasis on customer retention and reducing churn, as keeping customers longer drives growth.",
        regularMarketing: "Less emphasis on retention, with a primary focus on acquiring new customers."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4a4a4a" fill="none">
            <path d="M20.9427 16.8354C20.2864 12.8866 18.2432 9.94613 16.467 8.219C15.9501 7.71642 15.6917 7.46513 15.1208 7.23257C14.5499 7 14.0592 7 13.0778 7H10.9222C9.94081 7 9.4501 7 8.87922 7.23257C8.30834 7.46513 8.04991 7.71642 7.53304 8.219C5.75682 9.94613 3.71361 12.8866 3.05727 16.8354C2.56893 19.7734 5.27927 22 8.30832 22H15.6917C18.7207 22 21.4311 19.7734 20.9427 16.8354Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M10.125 17.5L10.125 11.5M12 11.5V10M12 19V17.5M10.125 14.5H13.875M13.875 14.5C14.4963 14.5 15 15.0037 15 15.625V16.375C15 16.9963 14.4963 17.5 13.875 17.5H9M13.875 14.5C14.4963 14.5 15 13.9963 15 13.375V12.625C15 12.0037 14.4963 11.5 13.875 11.5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.25662 4.44287C7.05031 4.14258 6.75128 3.73499 7.36899 3.64205C8.00392 3.54651 8.66321 3.98114 9.30855 3.97221C9.89237 3.96413 10.1898 3.70519 10.5089 3.33548C10.8449 2.94617 11.3652 2 12 2C12.6348 2 13.1551 2.94617 13.4911 3.33548C13.8102 3.70519 14.1076 3.96413 14.6914 3.97221C15.3368 3.98114 15.9961 3.54651 16.631 3.64205C17.2487 3.73499 16.9497 4.14258 16.7434 4.44287L15.8105 5.80064C15.4115 6.38146 15.212 6.67187 14.7944 6.83594C14.3769 7 13.8373 7 12.7582 7H11.2418C10.1627 7 9.6231 7 9.20556 6.83594C8.78802 6.67187 8.5885 6.38146 8.18945 5.80064L7.25662 4.44287Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
        feature: "Revenue Generation",
        growthMarketing: "Drives revenue by increasing retention, upselling, cross-selling, and focusing on customer lifetime value.",
        regularMarketing: "Focuses on lead generation and short-term sales through direct marketing campaigns."
    }
];

const ComparisonTable = () => {
    return (
        <div className="comparison_table">
            <h2 className="COMPARISON">COMPARISON</h2>
            <h2 className="title">Spot The Difference With Growth Marketing</h2>
            <p className="subtitle">Regular Marketing vs Growth Marketing</p>

            <div className="table_comparison">
                <table>
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Growth Marketing</th>
                            <th>Regular Marketing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featuresData.map((item, index) => (
                            <tr key={index}>
                                {/* <td className="feature-name">
                                <span className="icon">{item.icon}</span>
                                {item.feature}
                            </td> */}
                                <td>
                                    <div className="item-td">
                                        <span className="icon">{item.icon}</span>
                                        {item.feature}
                                    </div>
                                    =
                                </td>
                                <td>{item.growthMarketing}</td>
                                <td>{item.regularMarketing}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparisonTable;
