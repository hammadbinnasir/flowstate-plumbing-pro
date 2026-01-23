
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <i className="fas fa-faucet text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Flow<span className="text-blue-500">State</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Providing modern, technology-driven plumbing solutions for residential and commercial clients since 2008.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Water Heaters</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Drain Cleaning</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sewer Repair</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Smart Diagnostics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">News & Media</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get maintenance tips and exclusive offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 FlowState Plumbing Pro Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
