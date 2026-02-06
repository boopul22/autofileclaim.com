import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import WaHealthPolicy from './components/WaHealthPolicy';
import Sponsors from './components/Sponsors';
import PrivacyChoices from './components/PrivacyChoices';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import AboutPage from './components/About';
import ClaimForm from './components/ClaimForm';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/wa-health-policy" element={<WaHealthPolicy />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/privacy-choices" element={<PrivacyChoices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/start-claim" element={<ClaimForm />} />
            {/* Catch all other routes and redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;