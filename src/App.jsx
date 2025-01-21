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
import ValidationPage from './pages/Service/Validation/Headers/ValidationPage';
import ValidationTracks from './pages/Service/Validation/ValidationTracks/ValidationTracks';
import OurProcessValidation from './pages/Service/Validation/OurProcessValidation/OurProcessValidation';
import CustomerStories from './pages/Service/Validation/CustomerStories/CustomerStories';
import ValidationServices from './pages/Service/Validation/ValidationServices/ValidationServices';
import FAQValid from './pages/Service/Validation/FAQValid/FAQValid';
import PredictYourGrowth from './pages/Service/PredictYourGrowth/Header/PredictYourGrowth';
import GrowthPrediction from './pages/Service/PredictYourGrowth/GrowthPrediction/GrowthPrediction';
import PredictOurProcess from './pages/Service/PredictYourGrowth/OurProcess/PredictOurProcess';

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
          <Route path="/growth-tracks"
            element={
              <>
                <Service />
                <GrowthTracks />
                <OurProcess />
                <BenefitsSection />
                <FAQFreq />
                <BusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/validation-service"
            element={
              <>
                <ValidationPage />
                <ValidationTracks />
                <OurProcessValidation/>
                <CustomerStories />
                <ValidationServices />
                <FAQValid />
                <BusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/predict-growth"
            element={
              <>
                <PredictYourGrowth />
                <GrowthPrediction />
                <PredictOurProcess />
                <FAQValid />
                <BusinessGrowth />
                <Footer />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
