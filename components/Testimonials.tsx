
import React from 'react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Oakville, ON',
    text: "FlowState saved my basement! Had a pipe burst at 3 AM and they were here within 45 minutes. Professional, clean, and reasonably priced.",
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    name: 'Marcus Thorne',
    location: 'Mississauga, ON',
    text: "The AI tool gave me a spot-on estimate before the plumber even arrived. No surprises on the bill. Highly recommend their modern approach.",
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    name: 'David Wilson',
    location: 'Toronto, ON',
    text: "Full house repiping is a massive job, but these guys handled it with minimal disruption. The team was incredibly respectful of my home.",
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Reviews</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">What Our Clients Say</h3>
          </div>
          <div className="mt-4 md:mt-0">
             <div className="flex items-center space-x-1 text-yellow-400 text-2xl mb-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
             </div>
             <p className="text-gray-500 font-medium">4.9/5 Average based on 1,240 reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, idx) => <i key={idx} className="fas fa-star text-sm"></i>)}
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
