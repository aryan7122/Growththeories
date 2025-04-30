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
import GrowthTheoriesHomepage from '../public/GrowthTheoriesHomepage.png'
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
import WhyChoose from './pages/Monetization/WhyChoose/WhyChoose.jsx';
import Retention from './pages/Retention/Retention.jsx';
import RetentionServices from './pages/Retention/RetentionServices/RetentionServices.jsx';
import RetentionEngagement from './pages/Retention/RetentionEngagement/RetentionEngagement.jsx';
import { useEffect, useState } from 'react';
import Loader from './components/Loading/Loader.jsx';
import NotFoundPage from './components/404Page/NotFoundPage.jsx';
import SupportSection from './pages/SupportSection/SupportSection.jsx';


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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <>
        {loading ? (
          <Loader />
        ) : (
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
                     
                    </>
                  }
                />
                <Route
                  path="/acquisition"
                  element={
                    <>
                      <SEO
                        title="Customer Acquisition Services | SEO, Ads, Social & Influencer Marketing India"
                        description="Drive growth with Growth Theories' top customer acquisition services in India. Boost ROI with SEO, paid ads, social media growth, influencer campaigns, referral marketing, landing page optimization & more."
                        keywords={[
                          "customer acquisition services India",
                          "growth marketing agency India",
                          "SEO and content marketing agency",
                          "paid advertising and PPC agency",
                          "social media growth services",
                          "influencer and affiliate marketing agency",
                          "referral and viral marketing campaigns",
                          "landing page optimization agency",
                          "digital growth strategy India",
                          "data-driven acquisition strategies"
                        ]}
                        canonicalPath="/acquisition"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "name": "Growth Theories - Customer Acquisition Services",
                          "url": siteUrl + "/acquisition",
                          "description":
                            "Get premium customer acquisition services with Growth Theories. We specialize in SEO, paid advertising, social media engagement, influencer and affiliate marketing, referral campaigns, and landing page optimization to help businesses scale.",
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
                          "serviceType": [
                            "SEO & Content Marketing",
                            "Paid Advertising",
                            "Social Media Growth",
                            "Influencer & Affiliate Marketing",
                            "Referral & Viral Marketing",
                            "Landing Page Optimization"
                          ],
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

                     
                    </>
                  }
                />
                <Route
                  path="/activation-conversion"
                  element={
                    <>
                      <SEO
                        title="Customer Activation Services | Growth Marketing by Growth Theories"
                        description="Boost user engagement with Growth Theories' activation services. From onboarding to personalized experiences, discover strategies to enhance customer satisfaction and retention."
                        keywords={[
                          "customer activation services",
                          "user onboarding strategies",
                          "growth marketing India",
                          "user engagement tools",
                          "conversion optimization",
                          "personalized user journeys",
                          "A/B testing and experimentation",
                          "digital growth agency India",
                          "activation funnel optimization",
                          "behavioral targeting marketing"
                        ]}
                        canonicalPath="/activation-conversion"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "name": "Customer Activation - Growth Theories",
                          "url": siteUrl + "/activation-conversion",
                          "description": "Explore Growth Theories’ powerful customer activation strategies, including onboarding, funnel optimization, personalization, and behavioral targeting. Maximize engagement and satisfaction.",
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
                            "@id": siteUrl + "/activation-conversion"
                          }
                        }}
                      />


                      <ActivationHero />
                      <AcquisitionSections />

                      <GrowthSection />

                     
                    </>
                  }
                />
                <Route
                  path="/analytics-optimization"
                  element={
                    <>
                      <SEO
                        title="Analytics & Optimization Services | Growth Theories India"
                        description="Boost your business growth with Growth Theories’ Analytics & Optimization services. We specialize in data tracking, attribution, customer segmentation, and monetization strategies."
                        keywords={[
                          "analytics services India",
                          "data tracking services",
                          "attribution modeling agency",
                          "customer segmentation agency",
                          "retargeting strategies India",
                          "marketing optimization",
                          "conversion optimization",
                          "monetization technology stack",
                          "growth analytics",
                          "performance marketing"
                        ]}
                        canonicalPath="/analytics-optimization"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "name": "Analytics & Optimization Services - Growth Theories",
                          "url": siteUrl + "/analytics-optimization",
                          "description": "Leverage Growth Theories’ expertise in analytics, tracking, segmentation, and monetization to improve your digital performance and drive ROI.",
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
                            "@id": siteUrl + "/analytics-optimization"
                          },
                          "serviceType": "Analytics, Optimization, and Monetization",
                          "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, SMBs, Enterprises"
                          }
                        }}
                      />
                      <AnalyticsHero />
                      <ServiceSlider />
                      <ServiceSlider2 />
                      <TechnologyMonetization />
                      <AnalyticsSection />
                      <GrowthSection />

                     
                    </>
                  }
                />
                <Route
                  path="/monetization"
                  element={
                    <>
                      <SEO
                        title="Monetization & Revenue Growth Services | Growth Theories India"
                        description="Maximize your revenue with Growth Theories' expert monetization services. From pricing strategies to affiliate marketing, we help scale your business sustainably."
                        keywords={[
                          "monetization services India",
                          "revenue growth strategies",
                          "pricing optimization",
                          "subscription growth services",
                          "upselling strategies",
                          "cross-selling techniques",
                          "affiliate marketing India",
                          "growth marketing monetization",
                          "business revenue optimization",
                          "scalable monetization strategies"
                        ]}
                        canonicalPath="/monetization"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "name": "Growth Theories - Monetization & Revenue Growth Services",
                          "url": siteUrl + "/monetization",
                          "description": "Explore our comprehensive monetization and revenue growth services. Leverage data-driven strategies, dynamic pricing models, affiliate marketing, and more to increase business income.",
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
                            "@id": siteUrl + "/monetization"
                          },
                          "serviceType": "Monetization & Revenue Growth Strategy",
                          "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Businesses, Entrepreneurs"
                          }
                        }}
                      />


                      <MonetizationHeroSection />
                      <MonetizationSection />
                      <CompanyLogo />
                      <WhyChoose />

                      <GrowthSection />

                     
                    </>
                  }
                />

                <Route
                  path="/retention-engagement"
                  element={
                    <>
                      <SEO
                        title="Customer Retention & Engagement Services | Growth Marketing Agency India"
                        description="Boost user loyalty and engagement with Growth Theories' expert retention strategies. Personalized email marketing, gamification, SMS campaigns, and more to reduce churn and increase lifetime value."
                        keywords={[
                          "customer retention strategies",
                          "engagement marketing services",
                          "email lifecycle campaigns India",
                          "gamification marketing",
                          "user retention agency India",
                          "push notifications marketing",
                          "sms marketing for engagement",
                          "growth marketing retention services",
                          "customer loyalty programs",
                          "reduce churn rate strategies"
                        ]}
                        canonicalPath="/retention-engagement"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Service",
                          "name": "Retention & Engagement Services - Growth Theories",
                          "url": siteUrl + "/retention-engagement",
                          "description": "Discover advanced customer retention and engagement strategies with Growth Theories. From lifecycle marketing to gamification and real-time analytics, we help businesses reduce churn and boost loyalty.",
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
                            "@id": siteUrl + "/retention-engagement"
                          },
                          "serviceType": "Customer Retention & Engagement",
                          "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Startups, Enterprises"
                          }
                        }}
                      />

                      <Retention />
                      <RetentionServices />
                      <RetentionEngagement />


                      <GrowthSection />
                     
                    </>
                  }
                />

                {/* <Route path="/growth-tracks"
              element={
                <>
                  <Service />
                  <GrowthTracks />
                  <OurProcess />
                  <BenefitsSection />
                  <FAQFreq />
                  <BusinessGrowth />
                 
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
                 
                </>
              } /> */}
                <Route
                  path="/about"
                  element={
                    <>
                      <SEO
                        title="About Us | Growth Theories - Top Growth Marketing Agency in India"
                        description="Learn about Growth Theories, India's top growth marketing agency. Our mission is to provide scalable, affordable, and results-driven strategies to help businesses achieve sustainable growth."
                        keywords={[
                          "about growth theories",
                          "growth marketing agency India",
                          "about us digital marketing agency",
                          "scalable marketing solutions India",
                          "digital growth agency",
                          "growth strategy experts India",
                          "marketing company values",
                          "data-driven growth agency",
                          "mission driven marketing agency",
                          "cost-effective marketing strategies"
                        ]}
                        canonicalPath="/about"
                        ogImage={GrowthTheoriesHomepage}
                        jsonLd={{
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "name": "Growth Theories",
                          "url": siteUrl + "/about",
                          "logo": {
                            "@type": "ImageObject",
                            "url": siteUrl + "/images/logo.png"
                          },
                          "description": "Growth Theories is a premier growth marketing agency helping businesses scale through budget-friendly and impactful marketing strategies. Our core values are innovation, empathy, and collaboration.",
                          "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IN"
                          },
                          "sameAs": [
                            "https://www.linkedin.com/company/growththeories",
                            "https://www.instagram.com/growththeories",
                            "https://www.twitter.com/growththeories"
                          ],
                          "foundingDate": "2020",
                          "founders": [
                            {
                              "@type": "Person",
                              "name": "Aryan Kushwaha"
                            }
                          ],
                          "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": siteUrl + "/about"
                          }
                        }}
                      />

                      <AboutUs />
                      <About2 />
                      <AboutSection />
                      {/* <TeamSection /> */}
                      {/* <FAQValid /> */}
                      {/* <BusinessGrowth /> */}
                      <GrowthSection />
                     
                    </>
                  }
                />

                <Route path="/contact"
                  element={
                    <>
                      <ContactForm />
                     
                    </>
                  } />
                <Route path="/blog"
                  element={
                    <>
                      <BlogSection />
                      {/* <AuditBusinessGrowth /> */}
                      <GrowthSection />
                     
                    </>
                  } />
                <Route path="/terms-service"
                  element={
                    <>
                      <TermsOfService />
                     
                    </>
                  } />
                <Route path="/privacy-policy"
                  element={
                    <>
                      <PrivacyPolicy />
                     
                    </>
                  } />
                <Route path="/case-studies"
                  element={
                    <>
                      <CaseStudiesHero />
                      <CaseStudiesCard />
                      <BannerBottom />
                     
                    </>
                  } />
                  <Route path="*" element={<NotFoundPage />} />

                <Route path="/blog-detail"
                  element={
                    <>
                      <CaseStudyDetail />
                      <GrowthSection />
                     
                    </>
                  } />
                <Route path="/careers"
                  element={
                    <>
                      <Careers />
                      <CareersTeamSection />
                      <PerksBenefits />
                      <JobOpenings />
                    
                    </>
                  } />
                <Route path="/application-form"
                  element={
                    <>
                      <ApplicationForm />

                    </>
                  } />
                  <Route path="/customer-support"
                  element={
                    <>
                      <SupportSection />

                    </>
                  } />
              </Routes>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
              <Footer />
          </Router>
        )}
      </>
    </HelmetProvider>
  );
}

export default App;
