
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIDiagnostic from './components/AIDiagnostic';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <AIDiagnostic />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-50">
        <a
          href="#contact"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-xl shadow-blue-500/20"
        >
          <i className="fas fa-phone-alt"></i>
          <span>Call for Emergency Fix</span>
        </a>
      </div>
    </div>
  );
};

export default App;
