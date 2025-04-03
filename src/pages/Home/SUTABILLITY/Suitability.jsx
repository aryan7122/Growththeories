import React, { useState } from 'react';
import './Suitability.scss';
import CustomDropdown from '../../../utils/common/CustomDropdown';
import imgOk from '../../../assets/ok.svg'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,  // Delay between each card
      }
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Suitability | Best Business Growth Theories</title>
        <meta name="description" content="Discover the best business growth theories like Lean Startup, Growth Hacking, and more. Find the right strategy for your business." />
        <meta name="keywords" content="Lean Startup, Growth Hacking, Pirate Metrics, Growth Loops, Business Strategies" />
      </Helmet>
      <div
        className="header">
        <motion.span initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="suitability">SUITABILITY</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        >Know Theories Are Suitables In Seconds</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        >Just Select Your business size, industry or goals, will let you know how Helps businesses visualize the customization potential of each theory in real-time.</motion.p>
      </div>

      <div
        
        className="selectors-range">
        <div className="business-size"
          style={{ '--min-val': minVal, '--max-val': maxVal }}>
          <motion.label initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >Business Size</motion.label>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="slider-container-range">
          
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="size-labels">
            <span>Startup</span>
            <span>Small Scale</span>
            <span>Mid-Sized</span>
            <span>Enterprise</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="industry">
          <label>Industry</label>
          <div className="optionSelected">
            <CustomDropdown
              options={industryTypes}
              defaultValue="Select Industry"
              onChange={handleLanguageChange}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >{card.title}</motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >{card.description}</motion.p>
            <motion.ul
              variants={cardVariants} 
            >
              {card.points.map((point, i) => (
                <div className='li_okCard' key={i}>
                  <motion.img initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                    src={imgOk} alt={card.title} />
                  <motion.li initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >{point}</motion.li>
                </div>
              ))}
            </motion.ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Suitability;


//