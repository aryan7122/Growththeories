
import './App.scss'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import FAQAccordion from './pages/FAQAccordion/FAQAccordion'
import ImpactsBenefits from './pages/Impactsandbenefits/ImpactsBenefits'
import Industry from './pages/Industry/Industry'
import Slider from './pages/OurGrowthServices/Slider'
import OverApproach from './pages/OverApproach/OverApproach'
import Overview from './pages/Overview/Overview'
import Suitability from './pages/SUTABILLITY/Suitability'
// import { useIntersectionObserver } from './hooks/useIntersectionObserver.jsx';

function App() {

  return (
    <>
      <Navbar />
      <div className="app">
        <Header />
        <Overview />
        <Slider/>
        <OverApproach />
        <Suitability />
        <Industry />
        <ImpactsBenefits />
        <CaseStudies />
        <FAQAccordion/>
      <Footer/>
      </div>
    </>
  )
}

export default App
