import React from "react";
import "./MathematicalLawsPage.scss";
import image1 from '../../../assets/lows/image1.svg'
import image2 from '../../../assets/lows/image2.svg'
import image3 from '../../../assets/lows/image3.svg'
import image4 from '../../../assets/lows/image4.svg'
import image5 from '../../../assets/lows/image5.svg'
import image6 from '../../../assets/lows/image6.svg'
import image7 from '../../../assets/lows/image7.svg'
import image8 from '../../../assets/lows/image8.svg'

const data = [
    {
        title: "Reilly’s Law Of Retail Gravitation",
        description: "Used To Determine How Consumers Are Drawn To Retail Centers Based On Size And Distance.",
        image: image1
    },
    {
        title: "Ehrenberg’s NBD-Dirichlet Model",
        description: "Describes Consumer Buying Patterns, Showing That Brand Loyalty And Purchase Frequency Follow A Predictable Probability Distribution.",
        image: image2
    },
    {
        title: "The Law Of Double Jeopardy (DJ Law)",
        description: "States That Larger Brands Have Higher Market Share AND Higher Customer Loyalty Compared To Smaller Brands.",
        image: image3
    },
    {
        title: "Pareto Principle (80/20 Rule)",
        description: "States That 80% Of Revenue Comes From 20% Of Customers.",
        image: image4
    },
    {
        title: "Share Of Voice (SOV) Vs. Share Of Market (SOM)",
        description: "Suggests That A Brand’s Advertising Spend (SOV) Is Directly Linked To Its Market Share (SOM) Growth.",
        image: image5
    },
    {
        title: "Customer Lifetime Value (CLV)",
        description: "Estimates The Total Revenue A Business Can Expect From A Customer During Their Entire Relationship.",
        image: image6
    },
    {
        title: "Bass Diffusion Model (New Product Adoption)",
        description: "Used To Forecast How New Products Or Technologies Spread In A Market.",
        image: image7
    },
    {
        title: "Price Elasticity of Demand (Marketing Pricing Strategy)",
        description: "This concept evaluates how fluctuations in price can influence the demand for a particular product. Essentially, it helps us understand the relationship between pricing and consumer interest, showing us how a rise or fall in price might lead to an increase or decrease in the quantity of the product that people are willing to buy.",
        image: image8,
        button: true
    }
];

const MathematicalLawsPage = () => {
    return (
        <div className="laws-page">
            <span className="LAWS">LAWS</span>
            <h1>We Follow Mathematical Laws In Marketing</h1>
            <div className="laws-grid ">
                <div className="grid_c_c_1">
                    {data.slice(0, 2).map((card, index) => (
                        <div key={index} className="card">
                            <div className="content">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                {/* {card.button && <button>Start Growing Today</button>} */}
                            </div>
                            <div className="img_">
                                <img src={card.image} alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid_c_c_2">
                    {data.slice(2, 5).map((card, index) => (
                        <div key={index} className="card">
                            <div className="content">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                            <div className="img_">
                                <img src={card.image} alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid_c_c_3">
                    {data.slice(5,7).map((card, index) => (
                        <div key={index} className="card">
                            <div className="content">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                {/* {card.button && <button>Start Growing Today</button>} */}
                            </div>
                            <div className="img_">
                                <img src={card.image} alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid_c_c_5">
                    {data.slice(7,8).map((card, index) => (
                        <div key={index} className="card">
                            <div className="content">
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                {card.button && <button className="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
                                        <path d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z" stroke="currentColor" stroke-width="1.5" />
                                    </svg>
                                    Start Growing Today
                                </button>}
                            </div>
                            <div className="img_">
                                <img src={card.image} alt={card.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MathematicalLawsPage;
