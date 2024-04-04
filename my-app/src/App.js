import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Footer from './Footer';
import Head from './Head';
import Questions from './Questions';
import Confirmation from './Confirmation';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <Head />

        {/* Route Configuration */}
        <Routes>
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/questionnare" element={<Questions />} />
          <Route path="/businessplan01" element={<Confirmation />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        {/* <LoginPage /> */}
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;