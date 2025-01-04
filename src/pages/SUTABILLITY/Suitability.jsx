import React, { useState } from 'react';
import './Suitability.scss';
import CustomDropdown from '../../utils/common/CustomDropdown';
import imgOk from '../../assets/ok.svg'
const cardsData = [
  {
    title: 'Lean Startup',
    description: 'Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam.',
    points: [
      'Focuses on creating a Minimum Viable Product (MVP) to quickly test ideas',
      'Encourages iterative development based on customer feedback',
      'Helps minimize resource waste by avoiding unnecessary features',
      'Ideal for reducing risks and improving time-to-market for smaller companies.'
    ]
  },
  {
    title: 'Pirate Metrics (AARRR)',
    description: 'Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam.',
    points: [
      'Breaks down the customer journey into Acquisition, Activation, Retention, Referral, and Revenue.',
      'Helps small businesses identify and improve the stages that need the most attention.',
      'Improves customer retention and lifetime value, reducing acquisition costs',
      'Supports data-driven decision-making at every step.'
    ]
  },
  {
    title: 'Growth Hacking',
    description: 'Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam.',
    points: [
      'Leverages low-cost experiments for rapid growth',
      'Focuses on creative, out-of-the-box tactics to maximize results',
      'Perfect for small businesses with limited marketing budgets',
      'Encourages constant testing and optimization to find scalable growth paths'
    ]
  },
  {
    title: 'Growth Loops',
    description: 'Lorem ipsum dolor sit amet consectetur. Phasellus lectus sit egestas posuere. Sit integer orci mattis sit cras rhoncus sit faucibus nam.',
    points: [
      'Creates self-reinforcing loops, where one action (like a referral) leads to more customers',
      'Builds a sustainable growth engine that doesn’t rely heavily on paid marketing',
      'Perfect for generating organic growth with minimal investment.',
      'Allows small businesses to leverage customer actions for long-term growth'
    ]
  }
];

const Suitability = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(30);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 5);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 5);
    setMaxVal(value);
  };
  const industryTypes = [
    'Technology', 'Healthcare', 'Finance', 'Education',
    'Retail', 'Entertainment', 'Manufacturing', 'Construction',
    'Transportation', 'Real Estate', 'Tourism', 'Agriculture',
    'Food & Beverage', 'Automotive', 'Telecommunications', 'Energy',
    'Non-Profit', 'Government', 'E-commerce', 'Media & Journalism'
  ];
  const handleLanguageChange = (selected) => {
    console.log("Selected Language:", selected);
  };
  return (
    <div className="container">
      <div className="header">
        <span className="suitability">SUITABILITY</span>
        <h1>Know Theories Are Suitables In Seconds</h1>
        <p>Just Select Your business size, industry or goals, will let you know how Helps businesses visualize the customization potential of each theory in real-time.</p>
      </div>

      <div className="selectors-range">
        <div className="business-size" style={{ '--min-val': minVal, '--max-val': maxVal }}>
          <label>Business Size</label>
          <div className="slider-container-range">
            <div className='slider-track-range'></div>
            <input
              type="range"
              min="0"
              max="100"
              value={minVal}
              onChange={handleMinChange}
              className="slider-range slider-min"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={maxVal}
              onChange={handleMaxChange}
              className="slider-range slider-max"
            />
          </div>
          <div className="size-labels">
            <span>Startup</span>
            <span>Small Scale</span>
            <span>Mid-Sized</span>
            <span>Enterprise</span>
          </div>
        </div>

        <div className="industry">
          <label>Industry</label>
          <div className="optionSelected">
            <CustomDropdown
              options={industryTypes}
              defaultValue="Select Industry"
              onChange={handleLanguageChange}
            />
          </div>
        </div>
      </div>

      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.points.map((point, i) => (
                <div className='li_okCard' key={i}>
                  <img src={imgOk} alt="" />
                  <li>{point}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suitability;
