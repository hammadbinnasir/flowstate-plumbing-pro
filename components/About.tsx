import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
                            alt="Professional plumbing tools"
                            className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <i className="fas fa-shield-alt text-green-600"></i>
                                </div>
                                <span className="font-bold text-gray-900">Licensed & Insured</span>
                            </div>
                            <p className="text-sm text-gray-600">Your property is safe in our expert hands.</p>
                        </div>
                    </div>

                    <div>
                        <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm mb-4">
                            Our Story
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Plumbing Excellence Since <span className="text-blue-600">1995</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At FlowState, we believe plumbing isn't just about fixing leaks—it's about restoring peace of mind. What started as a one-man van operation has grown into the region's most trusted plumbing service, combining traditional craftsmanship with modern technology.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team of master plumbers is dedicated to delivering swift, sustainable solutions. Whether it's a midnight emergency or a complex renovation, we bring the same level of precision and care to every job.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="text-2xl font-bold text-gray-900">24/7</h4>
                                <p className="text-gray-500">Emergency Support</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="text-2xl font-bold text-gray-900">5000+</h4>
                                <p className="text-gray-500">Happy Customers</p>
                            </div>
                        </div>

                        <a href="#services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center transition-colors">
                            Explore Our Services
                            <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
