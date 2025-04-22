import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
// import CaseStudies from './pages/Home/CaseStudies/CaseStudies';
import FAQAccordion from './pages/Home/FAQAccordion/FAQAccordion';
// import ImpactsBenefits from './pages/Home/Impactsandbenefits/ImpactsBenefits';
// import Industry from './pages/Home/Industry/Industry';
import Slider from './pages/Home/OurGrowthServices/Slider';
import OverApproach from './pages/Home/OverApproach/OverApproach';
// import Overview from './pages/Home/Overview/Overview';
// import Suitability from './pages/Home/SUTABILLITY/Suitability';
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
import MathematicalLawsPage from './pages/Home/MathematicalLaws/MathematicalLaws';
import Benefits from './pages/Home/BENEFITS/Benefits';
import ComparisonTable from './pages/Home/COMPARISON/ComparisonTable';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
// import { useEffect, useState } from 'react';
import GrowthTheoriesHomepage from './assets/GrowthTheoriesHomepage.png'
import IndustriesTabs from './pages/Home/IndustriesTabs/IndustriesTabs';
import BlogSlider from './pages/Home/BlogSlider/BlogSlider';
import HeroSection from './pages/AllService/HeroSection/HeroSection';
import ServicesSection from './pages/AllService/ServicesSection/ServicesSection';
import Acquisition from './pages/AllService/ServicesSection/Acquisition.jsx';
import GrowthSection from './pages/AllService/GrowthSection/GrowthSection/GrowthSection.jsx';
import AcquisitionHeroSection from './pages/Acquisition/HeroSection/AcquisitionHeroSection.jsx';
import AcquisitionSection from './pages/Acquisition/AcquisitionSection/AcquisitionSection.jsx';
import AcquisitionServices from './pages/Acquisition/AcquisitionServices/AcquisitionServices.jsx';
import AcquisitionToolsSection from './pages/Acquisition/AcquisitionToolsSection/AcquisitionToolsSection.jsx';
import ActivationHero from './pages/Activation/hero/ActivationHero.jsx';
import AcquisitionSections from './pages/Activation/AcquisitionSections/AcquisitionSections.jsx';
import AnalyticsHero from './pages/Analytics/hero/AnalyticsHero.jsx';
import ServiceSlider from './pages/Analytics/ServiceSlider/ServiceSlider.jsx';
import ServiceSlider2 from './pages/Analytics/ServiceSlider2/ServiceSlider2.jsx';
import TechnologyMonetization from './pages/Analytics/TechnologyMonetization/TechnologyMonetization.jsx';
import AnalyticsSection from './pages/Analytics/AnalyticsSection/AnalyticsSection.jsx';
import MonetizationHeroSection from './pages/Monetization/MonetizationHeroSection/MonetizationHeroSection.jsx';
import MonetizationSection from './pages/Monetization/MonetizationSection/MonetizationSection.jsx';
import CompanyLogo from './pages/Analytics/TechnologyMonetization/TechnologyMonetization.jsx';


function App() {
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  // ssr
  // const [html, setHtml] = useState("");

  // useEffect(() => {
  //   fetch("/api/ssr?url=https://my-app.vercel.app") // ✅ Vercel SSR API
  //     .then((res) => res.text())
  //     .then((data) => {
  //       setHtml(data);
  //       document.documentElement.innerHTML = data; // ✅ Replace Full HTML
  //     });
  // }, []);
  // // ssr



  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <div className="app" >
          <Routes>
            <Route path="/"
              element={
                <>
                  <SEO
                    title="Growth Theories | Proven Growth Marketing & Business Strategies"
                    description="Boost your business growth with data-driven marketing strategies, growth hacking, SEO optimization, and revenue-focused frameworks. Learn proven business scaling techniques."
                    keywords={[
                      "growth marketing strategies",
                      "business growth hacking",
                      "SEO for startups",
                      "digital marketing growth",
                      "customer acquisition",
                      "revenue optimization",
                      "business expansion tips",
                      "scalable marketing techniques",
                      "brand positioning strategies"
                    ]}
                    canonicalPath="/"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "WebSite",
                      "name": "Growth Theories",
                      "url": siteUrl,
                      "description": "Growth Theories offers expert business strategies, marketing frameworks, and customer acquisition techniques to help startups and enterprises scale sustainably.",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl
                      }
                    }}
                  />

                  <Header />
                  <OverApproach />
                  <Slider />
                  <ComparisonTable />
                  <Benefits />
                  <MathematicalLawsPage />
                  {/* <Overview /> */}
                  {/* <Suitability /> */}
                  <IndustriesTabs />
                  {/* <Industry /> */}
                  {/* <ImpactsBenefits /> */}
                  {/* <CaseStudies /> */}
                  <BlogSlider />
                  <FAQAccordion />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <SEO
                    title="Growth Theories Services | Growth Marketing Agency in India"
                    description="Discover Growth Theories’ expert services in research, design, development, and growth marketing. We help businesses scale with SEO, user acquisition, retention, monetization, and analytics."
                    keywords={[
                      "growth marketing agency India",
                      "digital product studio",
                      "user acquisition strategies",
                      "SEO services India",
                      "conversion rate optimization",
                      "customer retention services",
                      "digital marketing for startups",
                      "business scaling services",
                      "growth hacking agency India",
                      "monetization strategies"
                    ]}
                    canonicalPath="/services"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Theories - Growth Marketing Services",
                      "url": siteUrl + "/services",
                      "description": "Explore comprehensive growth services from Growth Theories including insightful research, user-centered design, agile development, and strategic marketing. Designed to boost startups and established businesses in India and globally.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "areaServed": {
                        "@type": "Country",
                        "name": "India"
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl + "/services"
                      }
                    }}
                  />

                  <HeroSection />
                  <ServicesSection />
                  <Acquisition />
                  <GrowthSection />
                  <FAQAccordion />
                  <Footer />
                </>
              }
            />
            <Route
              path="/acquisition"
              element={
                <>
                  <SEO
                    title="Customer Acquisition Services | Growth Marketing Agency in India"
                    description="Boost customer acquisition with Growth Theories' data-driven strategies in SEO, paid ads, social media, influencer marketing, landing page optimization, and more."
                    keywords={[
                      "customer acquisition services",
                      "growth marketing agency India",
                      "SEO and content marketing",
                      "paid advertising agency",
                      "social media growth services",
                      "influencer marketing agency India",
                      "affiliate marketing for startups",
                      "referral and viral marketing",
                      "landing page optimization services",
                      "digital acquisition strategy"
                    ]}
                    canonicalPath="/acquisition"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Theories - Customer Acquisition Services",
                      "url": siteUrl + "/acquisition",
                      "description":
                        "Explore customer acquisition services from Growth Theories, a leading growth marketing agency in India. We offer SEO, paid advertising, influencer campaigns, social media growth, referral marketing, and landing page optimization to scale your business effectively.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "areaServed": {
                        "@type": "Country",
                        "name": "India"
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl + "/acquisition"
                      }
                    }}
                  />


                  <AcquisitionHeroSection />
                  {/* <AcquisitionSection /> */}
                  <AcquisitionServices />
                  <AcquisitionToolsSection />
                  <GrowthSection />

                  <Footer />
                </>
              }
            />
            <Route
              path="/activation-conversion"
              element={
                <>
                  <SEO
                    title="Growth Theories Services | Growth Marketing Agency in India"
                    description="Discover Growth Theories’ expert services in research, design, development, and growth marketing. We help businesses scale with SEO, user acquisition, retention, monetization, and analytics."
                    keywords={[
                      "growth marketing agency India",
                      "digital product studio",
                      "user acquisition strategies",
                      "SEO services India",
                      "conversion rate optimization",
                      "customer retention services",
                      "digital marketing for startups",
                      "business scaling services",
                      "growth hacking agency India",
                      "monetization strategies"
                    ]}
                    canonicalPath="/services"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Theories - Growth Marketing Services",
                      "url": siteUrl + "/services",
                      "description": "Explore comprehensive growth services from Growth Theories including insightful research, user-centered design, agile development, and strategic marketing. Designed to boost startups and established businesses in India and globally.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "areaServed": {
                        "@type": "Country",
                        "name": "India"
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl + "/services"
                      }
                    }}
                  />

                  <ActivationHero />
                  <AcquisitionSections />
                 
                  <GrowthSection />

                  <Footer />
                </>
              }
            />
            <Route
              path="/analytics-optimization"
              element={
                <>
                  <SEO
                    title="Growth Theories Services | Growth Marketing Agency in India"
                    description="Discover Growth Theories’ expert services in research, design, development, and growth marketing. We help businesses scale with SEO, user acquisition, retention, monetization, and analytics."
                    keywords={[
                      "growth marketing agency India",
                      "digital product studio",
                      "user acquisition strategies",
                      "SEO services India",
                      "conversion rate optimization",
                      "customer retention services",
                      "digital marketing for startups",
                      "business scaling services",
                      "growth hacking agency India",
                      "monetization strategies"
                    ]}
                    canonicalPath="/services"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Theories - Growth Marketing Services",
                      "url": siteUrl + "/services",
                      "description": "Explore comprehensive growth services from Growth Theories including insightful research, user-centered design, agile development, and strategic marketing. Designed to boost startups and established businesses in India and globally.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "areaServed": {
                        "@type": "Country",
                        "name": "India"
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl + "/services"
                      }
                    }}
                  />

                  <AnalyticsHero />
                  <ServiceSlider />
                  <ServiceSlider2 />
                  <TechnologyMonetization />
                  <AnalyticsSection />
                  <GrowthSection />

                  <Footer />
                </>
              }
            />
            <Route
              path="/monetization"
              element={
                <>
                  <SEO
                    title="Growth Theories Services | Growth Marketing Agency in India"
                    description="Discover Growth Theories’ expert services in research, design, development, and growth marketing. We help businesses scale with SEO, user acquisition, retention, monetization, and analytics."
                    keywords={[
                      "growth marketing agency India",
                      "digital product studio",
                      "user acquisition strategies",
                      "SEO services India",
                      "conversion rate optimization",
                      "customer retention services",
                      "digital marketing for startups",
                      "business scaling services",
                      "growth hacking agency India",
                      "monetization strategies"
                    ]}
                    canonicalPath="/services"
                    ogImage={GrowthTheoriesHomepage}
                    jsonLd={{
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Theories - Growth Marketing Services",
                      "url": siteUrl + "/services",
                      "description": "Explore comprehensive growth services from Growth Theories including insightful research, user-centered design, agile development, and strategic marketing. Designed to boost startups and established businesses in India and globally.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Growth Theories",
                        "url": siteUrl,
                        "logo": {
                          "@type": "ImageObject",
                          "url": siteUrl + "/images/logo.png"
                        }
                      },
                      "areaServed": {
                        "@type": "Country",
                        "name": "India"
                      },
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": siteUrl + "/services"
                      }
                    }}
                  />

                  <MonetizationHeroSection />
                  <MonetizationSection />
                  <CompanyLogo />
                  
                  <GrowthSection />

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
            <Route path="/growth-audit"
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
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    
      </Router>
    </HelmetProvider>
  );
}

export default App;
