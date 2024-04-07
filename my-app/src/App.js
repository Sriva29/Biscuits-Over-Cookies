import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessPlanPage from './pages/BusinessPlanPage';

// Import your page components
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
import Head from './Head';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <Head />

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/business-plan" element={<BusinessPlanPage />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
