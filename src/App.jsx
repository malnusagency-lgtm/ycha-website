import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import Events from './pages/Events';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Award-winning Grain Overlay component
const GrainOverlay = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9997,
    opacity: 0.05,
    backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
  }} />
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <GrainOverlay />
      <div className="app-wrapper">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/join" element={<Join />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
