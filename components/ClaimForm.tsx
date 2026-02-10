import React, { useState } from 'react';

const ClaimForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    optIn: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="claim" className="py-16 sm:py-24 bg-gradient-to-b from-brand-offwhite to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-strong p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-2">Thank You!</h3>
            <p className="text-gray-600">We've received your information. One of our advisors will be in touch shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="claim" className="py-16 sm:py-24 bg-gradient-to-b from-brand-offwhite to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue mb-3">
            Check Your Car Accident Claim
          </h2>
          <p className="text-gray-600 text-lg">
            Find out if you're owed money in just 2 minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-2xl shadow-strong p-6 sm:p-8 space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-gray-800 mb-1.5">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-1.5">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition text-gray-800"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="optIn"
              name="optIn"
              checked={formData.optIn}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 text-brand-blue border-gray-300 rounded focus:ring-brand-blue cursor-pointer"
            />
            <label htmlFor="optIn" className="text-sm text-gray-600 cursor-pointer leading-snug">
              I agree to be contacted regarding my claim and accept the{' '}
              <a href="/terms" className="text-brand-blue underline hover:text-brand-purple">Terms & Conditions</a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-brand-blue underline hover:text-brand-purple">Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brand-coral hover:bg-brand-coral/90 text-white font-bold text-lg rounded-xl transition shadow-medium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ClaimForm;
