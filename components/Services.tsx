
import React from 'react';

const services = [
  {
    title: 'Emergency Repairs',
    desc: 'Burst pipes, overflowing toilets, or massive leaks. We arrive in under 60 minutes.',
    icon: 'fa-truck-fast',
    color: 'bg-red-50 text-red-600'
  },
  {
    title: 'Water Heaters',
    desc: 'Installation, repair, and maintenance of tankless and traditional water systems.',
    icon: 'fa-hot-tub-person',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Drain Cleaning',
    desc: 'Advanced hydro-jetting and snake technology to clear the toughest clogs.',
    icon: 'fa-broom-ball',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Pipe Replacement',
    desc: 'Full house repiping and main line repairs using modern non-invasive tech.',
    icon: 'fa-screwdriver-wrench',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Fixture Install',
    desc: 'Upgrading sinks, faucets, showers, and toilets with precision installation.',
    icon: 'fa-sink',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Sewer Services',
    desc: 'Camera inspections and rooter services for your main sewer lines.',
    icon: 'fa-mountain-city',
    color: 'bg-yellow-50 text-yellow-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Professional Solutions for Every Need</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of plumbing services delivered by licensed master technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <i className={`fas ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#contact" className="text-blue-600 font-semibold flex items-center group-hover:underline">
                Learn More <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
