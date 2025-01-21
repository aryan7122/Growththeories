import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CaseStudies from './pages/Home/CaseStudies/CaseStudies';
import FAQAccordion from './pages/Home/FAQAccordion/FAQAccordion';
import ImpactsBenefits from './pages/Home/Impactsandbenefits/ImpactsBenefits';
import Industry from './pages/Home/Industry/Industry';
import Slider from './pages/Home/OurGrowthServices/Slider';
import OverApproach from './pages/Home/OverApproach/OverApproach';
import Overview from './pages/Home/Overview/Overview';
import Suitability from './pages/Home/SUTABILLITY/Suitability';
import Service from './pages/Service/Header/Service';
import GrowthTracks from './pages/Service/GrowthTracks/GrowthTracks';
import OurProcess from './pages/Service/OurProcess/OurProcess';
import BenefitsSection from './pages/Service/BenefitsSection/BenefitsSection';
import FAQFreq from './pages/Service/FAQAccordion/FAQFreq';
import BusinessGrowth from './pages/Service/BusinessGrowth/BusinessGrowth';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/"
            element={
              <>
                <Header />
                <Overview />
                <Slider />
                <OverApproach />
                <Suitability />
                <Industry />
                <ImpactsBenefits />
                <CaseStudies />
                <FAQAccordion />
                <Footer />
              </>
            }

          />
          <Route path="/service"
            element={
              <>
                <Service />
                <GrowthTracks />
                <OurProcess />
                <BenefitsSection />
                <FAQFreq />
                <BusinessGrowth/>
                <Footer />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
