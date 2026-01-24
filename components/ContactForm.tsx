
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Emergency Leak',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Import dynamically to avoid circular dependency issues if any, though likely not needed here.
      const { sendContactCheck } = await import('../services/contactService');
      await sendContactCheck(formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', serviceType: 'Emergency Leak', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Contact Us</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Let's Get Your Plumbing Fixed Today</h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Fill out the form below or call us directly. We guarantee a response within 15 minutes for emergency requests.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call 24/7</h4>
                  <p className="text-gray-600 text-xl font-medium">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Service Area</h4>
                  <p className="text-gray-600">Greater Toronto Area & Surrounding Cities</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8am - 6pm (Emergencies: Always Open)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                  <i className="fas fa-check"></i>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Request Sent!</h4>
                <p className="text-gray-400">Our dispatcher will call you in approximately 10-15 minutes.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-blue-400 hover:underline">Send another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Service Needed</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                  >
                    <option className="bg-gray-900" value="Emergency Leak">Emergency Leak</option>
                    <option className="bg-gray-900" value="Drain Clog">Drain Clog</option>
                    <option className="bg-gray-900" value="Water Heater">Water Heater</option>
                    <option className="bg-gray-900" value="Repiping">Repiping</option>
                    <option className="bg-gray-900" value="Fixture Install">Fixture Install</option>
                    <option className="bg-gray-900" value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">How can we help?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Tell us about your issue..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send request. Please try calling us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 text-lg flex items-center justify-center space-x-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Request Dispatch</span>
                  )}
                </button>

                <p className="text-center text-xs text-gray-500">
                  By clicking "Request Dispatch", you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
