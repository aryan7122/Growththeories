
import './App.scss'
import Features from './components/Features'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './pages/OurGrowthServices/Slider'
import OverApproach from './pages/OverApproach/OverApproach'
import Overview from './pages/Overview/Overview'
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
      </div>
    </>
  )
}

export default App
