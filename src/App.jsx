import './App.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import FullCustomize from './pages/Service/PredictYourGrowth/FullCustomize/FullCustomize';
import AuditHeroSection from './pages/Service/Audit/AuditHeroSection/AuditHeroSection';
import GrowthAudit from './pages/Service/Audit/WhatIs/GrowthAudit';
import GrowthGains from './pages/Service/Audit/GrowthGains/GrowthGains';
import AuditProcess from './pages/Service/Audit/AuditProcess/AuditProcess';
import Process2 from './pages/Service/Audit/Process2/Process2';
import AuditCustomerStories from './pages/Service/Audit/AuditCustomerStories/AuditCustomerStories';
import AuditFullCustomize from './pages/Service/Audit/AuditFullCustomize/AuditFullCustomize';
import AuditBusinessGrowth from './pages/Service/Audit/AuditBusinessGrowth/AuditBusinessGrowth';
import AboutUs from './pages/Service/AboutUs/AboutUs';
import About2 from './pages/Service/AboutUs/About2';
import AboutSection from './pages/Service/AboutUs/AboutSection/AboutSection';
import TeamSection from './pages/Service/AboutUs/TeamSection/TeamSection';
import ContactForm from './pages/Company/ContactForm/ContactForm';
import BlogSection from './pages/Company/Blog/OurBlog/BlogSection';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CaseStudiesHero from './pages/CaseStudies/CaseStudiesHero';
import CaseStudiesCard from './pages/CaseStudies/CaseStudiesCard';
import CaseStudyDetail from './pages/CaseStudies/CaseStudyDetail';
import CaseStudiesGrowth from './pages/CaseStudies/CaseGrowth/CaseStudiesGrowth';
import BannerBottom from './pages/CaseStudies/BannerBottom';
import Careers from './pages/Careers/Careers';
import ApplicationForm from './pages/Careers/ApplicationForm';
import CareersTeamSection from './pages/Careers/CareersTeamSection';
import PerksBenefits from './pages/Careers/PerksBenefits';
import JobOpenings from './pages/Careers/JobOpenings';
function LocationTracker() {
  const location = useLocation();
  console.log('Current Location:', location.pathname);
  return null;  // This component will just track the location, no UI needed
}

function App() {

  return (
    <Router>

      <Navbar />
      <LocationTracker />
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
                <OurProcessValidation />
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
                <CustomerStories />
                <FullCustomize />
                <FAQValid />
                <BusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/growth-Audit"
            element={
              <>
                <AuditHeroSection />
                <GrowthAudit />
                <GrowthGains />
                <AuditProcess />
                <Process2 />
                <AuditCustomerStories />
                <AuditFullCustomize />
                <FAQValid />
                <AuditBusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/about"
            element={
              <>
                <AboutUs />
                <About2 />
                <AboutSection />
                <TeamSection />
                <FAQValid />
                <BusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/contact"
            element={
              <>
                <ContactForm />
                <Footer />
              </>
            } />
          <Route path="/blog"
            element={
              <>
                <BlogSection />
                <AuditBusinessGrowth />
                <Footer />
              </>
            } />
          <Route path="/terms-service"
            element={
              <>
                <TermsOfService />
                <Footer />
              </>
            } />
          <Route path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
                <Footer />
              </>
            } />
          <Route path="/case-studies"
            element={
              <>
                <CaseStudiesHero />
                <CaseStudiesCard />
                <BannerBottom />
                <Footer />
              </>
            } />
          <Route path="/blog-detail"
            element={
              <>
                <CaseStudyDetail />
                <CaseStudiesGrowth />
                <Footer />
              </>
            } />
          <Route path="/careers"
            element={
              <>
                <Careers />
                <CareersTeamSection />
                <PerksBenefits />
                <JobOpenings />
                <Footer />
              </>
            } />
          <Route path="/application-form"
            element={
              <>
                <ApplicationForm />
                <Footer />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
