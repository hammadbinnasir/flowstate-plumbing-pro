
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <i className="fas fa-faucet text-white text-xl"></i>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Flow<span className="text-blue-500">State</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About', 'AI Diagnostic', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-100 hover:text-blue-400'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden">
             <button className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>
               <i className="fas fa-bars text-2xl"></i>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
