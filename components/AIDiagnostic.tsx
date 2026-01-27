
import React, { useState, useRef } from 'react';
import { analyzePlumbingIssue } from '../services/geminiService';
import { AIResult } from '../types';

const AIDiagnostic: React.FC = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!description) {
      setError('Please describe your issue first.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const analysis = await analyzePlumbingIssue(description, image || undefined);
      setResult(analysis);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setDescription('');
    setImage(null);
    setError(null);
  };

  return (
    <section id="ai-diagnostic" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <i className="fas fa-bolt"></i>
            <span>Smart Estimator</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4">What's the Trouble?</h2>
          <p className="text-gray-400 text-lg">
            Use our AI expert to get an instant diagnosis and estimated repair cost.
            Upload a photo for a more accurate result!
          </p>
        </div>

        {!result ? (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Describe the Problem</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Example: My kitchen sink is leaking from the P-trap whenever I run the dishwasher..."
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-white/5 transition-all"
                >
                  {image ? (
                    <img src={image} alt="Preview" className="h-32 rounded-lg object-cover" />
                  ) : (
                    <>
                      <i className="fas fa-camera text-3xl text-blue-500 mb-3"></i>
                      <span className="text-sm text-gray-400">Add a photo of the issue</span>
                    </>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="flex items-center justify-center p-6 bg-blue-600/5 rounded-2xl border border-blue-500/10">
                  <div className="text-center">
                    <p className="text-sm text-blue-400 font-bold mb-1 italic">"Saves me an hour of driving!"</p>
                    <p className="text-xs text-gray-500">- Lead Technician, Mike R.</p>
                  </div>
                </div>
              </div>

              {error && <p className="text-red-400 text-sm font-medium"><i className="fas fa-circle-exclamation mr-2"></i>{error}</p>}

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 text-lg shadow-xl shadow-blue-600/20"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Expert Analysis in Progress...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-wand-magic-sparkles"></i>
                    <span>Generate Instant Diagnosis</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${result.severity === 'Emergency' ? 'bg-red-100 text-red-600' :
                  result.severity === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                  }`}>
                  {result.severity} Priority
                </span>
                <h3 className="text-3xl font-black">{result.problem}</h3>
              </div>
              <button onClick={reset} className="text-gray-400 hover:text-gray-600 p-2">
                <i className="fas fa-rotate-left"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase">Estimated Repair Cost</h4>
                  <p className="text-4xl font-black text-blue-600">{result.estimatedCost}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase">Expert Advice</h4>
                  <p className="text-gray-700 leading-relaxed">{result.recommendation}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Safety & DIY Status</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${result.canDIY ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    <i className={`fas ${result.canDIY ? 'fa-check' : 'fa-triangle-exclamation'} text-xl`}></i>
                  </div>
                  <span className="font-bold text-lg">{result.canDIY ? 'Safe for DIY' : 'Professional Required'}</span>
                </div>
                <p className="text-sm text-gray-500 italic">
                  *Disclaimer: This AI assessment is an estimate based on your input. Actual on-site inspection is required for a binding quote.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                Schedule Professional Fix
              </a>
              <button onClick={reset} className="flex-1 border-2 border-gray-200 font-bold py-4 rounded-xl text-center hover:bg-gray-50 transition-all">
                Try Another Issue
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIDiagnostic;
