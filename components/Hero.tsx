
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Bathroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span>Available 24/7 for Emergencies</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Expert Plumbing <br />
            <span className="text-blue-500">Solved Fast.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            From emergency leaks to full renovations, FlowState provides licensed, reliable, and modern plumbing solutions for your home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-2xl shadow-blue-500/20"
            >
              <span>Schedule Service</span>
              <i className="fas fa-calendar-alt"></i>
            </a>
            <a 
              href="#ai-diagnostic" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Free AI Estimate</span>
              <i className="fas fa-robot text-blue-400"></i>
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-gray-400 text-sm">Google Reviews</span>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">15+</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">10k+</span>
              <span className="text-gray-400 text-sm">Jobs Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
