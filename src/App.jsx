
import './App.scss'
import Features from './components/Features'
import Header from './components/Header'
import Navbar from './components/Navbar'
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
      </div>
    </>
  )
}

export default App
