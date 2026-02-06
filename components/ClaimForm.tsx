import React, { useState, useEffect } from 'react';
import { UploadCloud, Loader2, Info } from 'lucide-react';
import { StateGroup } from '../types';
import { Link } from 'react-router-dom';

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const ClaimForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedState, setSelectedState] = useState<string>('');

  // Consent checkboxes
  const [mainConsent, setMainConsent] = useState(false);
  const [secondaryConsent, setSecondaryConsent] = useState(false);

  // Determine State Group
  const getStateGroup = (state: string): StateGroup => {
    if (['GA', 'SC', 'NC', 'MO', 'PA', 'AZ'].includes(state)) return 'A';
    if (['CA', 'TX', 'CO'].includes(state)) return 'B';
    if (state === 'WA') return 'C';
    return 'A'; // Default to Group A
  };

  const currentGroup = getStateGroup(selectedState);

  // Reset secondary consent when group changes
  useEffect(() => {
    setSecondaryConsent(false);
  }, [selectedState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!mainConsent) {
      alert("Please accept the terms and privacy policy to continue.");
      return;
    }

    if ((currentGroup === 'B' || currentGroup === 'C') && !secondaryConsent) {
      alert("Please provide the additional consent required for your state.");
      return;
    }

    // Capture Audit Trail Data
    const auditTrail = {
      timestamp: new Date().toISOString(),
      ipAddress: 'Simulated IP (Client Side)', // In real app, capture server side
      userAgent: navigator.userAgent,
      consents: {
        tcpaBox: mainConsent,
        sensitiveDataBox: currentGroup === 'B' ? secondaryConsent : null,
        healthDataBox: currentGroup === 'C' ? secondaryConsent : null
      },
      state: selectedState,
      version: 'v2025.1'
    };

    console.log("Submitting Lead with Audit Trail:", auditTrail);

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="claim" className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-brand-white p-12 rounded-2xl shadow-medium text-center border border-brand-lightgray">
            <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-brand-darkgray mb-4">Claim Submitted!</h3>
            <p className="text-brand-medgray text-lg mb-8">
              Thank you for providing your details. A dedicated claims handler will review your information and call you within the next 15 minutes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setMainConsent(false);
                setSecondaryConsent(false);
              }}
              className="text-brand-blue font-semibold hover:text-brand-deep"
            >
              Submit another claim
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="claim" className="py-24 bg-gradient-to-br from-brand-white to-brand-lightgray/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Start Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkgray mt-2">Need to Claim? - Talk to Us</h2>
            <p className="mt-4 text-brand-medgray">Fill out the form below for a free claim assessment.</p>
          </div>

          <div className="bg-brand-white rounded-2xl shadow-medium overflow-hidden border border-brand-lightgray">
            <div className="bg-gradient-to-r from-brand-charcoal to-brand-darkgray px-8 py-4">
              <h3 className="text-brand-white font-medium text-lg flex items-center">
                <span className="w-2 h-2 bg-brand-green rounded-full mr-3 animate-pulse"></span>
                Online Claim Form
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h4 className="font-bold text-brand-darkgray border-b border-brand-lightgray pb-2 mb-4">Personal Details</h4>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Full Name</label>
                    <input required type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Phone Number</label>
                    <input required type="tel" placeholder="+1 xxx xxx xxxx" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Email Address</label>
                    <input required type="email" placeholder="abc@example.com" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-darkgray mb-1">State</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray"
                        value={selectedState}
                        onChange={(e) => {
                          setSelectedState(e.target.value);
                          setMainConsent(false);
                        }}
                      >
                        <option value="">Select</option>
                        {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-darkgray mb-1">Injured?</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray">
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Accident Details */}
                <div className="space-y-4">
                  <h4 className="font-bold text-brand-darkgray border-b border-brand-lightgray pb-2 mb-4">Accident Details</h4>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Date of Accident</label>
                    <input required type="date" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Third Party Name</label>
                    <input type="text" placeholder="Enter third party name" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Third Party Insurer</label>
                    <input type="text" placeholder="Enter third party insurer" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Accident Location</label>
                    <input required type="text" placeholder="Enter Accident Location" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-darkgray mb-1">Vehicle Registration Number</label>
                    <input required type="text" placeholder="xxxxxxxxxxx" className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray" />
                  </div>
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-brand-darkgray mb-1">Brief Description</label>
                  <textarea rows={3} placeholder="Describe what happened..." className="w-full px-4 py-3 rounded-lg bg-brand-white border border-brand-lightgray focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition outline-none text-brand-darkgray"></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-darkgray mb-1">Upload Photos / Report (Optional)</label>
                  <div className="border-2 border-dashed border-brand-lightgray rounded-lg p-6 text-center hover:bg-brand-offwhite hover:border-brand-blue/50 transition cursor-pointer relative group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <UploadCloud className="w-10 h-10 text-brand-medgray group-hover:text-brand-blue mx-auto mb-2 transition-colors" />
                    <p className="text-sm text-brand-medgray">Click to upload or drag and drop</p>
                  </div>
                </div>
              </div>

              {/* Legal Consents Area */}
              <div className="bg-brand-offwhite p-6 rounded-lg mb-8 border border-brand-lightgray">
                <div className="space-y-4">
                  {/* Mandatory Main Consent - All Groups */}
                  <div className="flex items-start">
                    <input
                      id="consent-main"
                      type="checkbox"
                      required
                      checked={mainConsent}
                      onChange={(e) => setMainConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 text-brand-blue border-brand-lightgray rounded focus:ring-brand-blue"
                    />
                    <label htmlFor="consent-main" className="ml-3 block text-xs text-brand-medgray leading-relaxed">
                      By clicking [Submit], I agree to the <Link to="/terms" className="text-brand-blue underline hover:text-brand-deep">Terms of Service</Link> and <Link to="/privacy-policy" className="text-brand-blue underline hover:text-brand-deep">Privacy Policy</Link>.
                      I provide my express written consent for Auto File Claim and its <Link to="/sponsors" className="text-brand-blue underline hover:text-brand-deep">Marketing Partners</Link> to contact me via live calls,
                      automated dialing systems, and text messages at the number provided. I understand that my consent is not a condition of purchase and that calling or
                      submitting this form does not create an attorney-client relationship.
                    </label>
                  </div>

                  {/* Group B: CA, TX, CO - Sensitive Data */}
                  {currentGroup === 'B' && (
                    <div className="flex items-start">
                      <input
                        id="consent-sensitive"
                        type="checkbox"
                        checked={secondaryConsent}
                        onChange={(e) => setSecondaryConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 text-brand-blue border-brand-lightgray rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="consent-sensitive" className="ml-3 block text-xs text-brand-medgray leading-relaxed">
                        <strong>Sensitive Data Consent:</strong> I expressly consent to the collection and sharing of my sensitive personal information, including details of my injuries and medical status,
                        with Auto File Claim’s marketing partners as described in the <Link to="/privacy-policy" className="text-brand-blue underline hover:text-brand-deep">Privacy Policy</Link>.
                        I understand I can withdraw this consent at any time.
                      </label>
                    </div>
                  )}

                  {/* Group C: WA - Health Data */}
                  {currentGroup === 'C' && (
                    <div className="flex items-start">
                      <input
                        id="consent-health"
                        type="checkbox"
                        checked={secondaryConsent}
                        onChange={(e) => setSecondaryConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 text-brand-blue border-brand-lightgray rounded focus:ring-brand-blue"
                      />
                      <label htmlFor="consent-health" className="ml-3 block text-xs text-brand-medgray leading-relaxed">
                        <strong>Washington Health Data Consent:</strong> I provide my authorization for the collection and sharing of my consumer health data as defined by the <Link to="/wa-health-policy" className="text-brand-blue underline hover:text-brand-deep">WA Health Policy</Link>.
                        I acknowledge that my health data will be shared with marketing partners to facilitate my request for legal assistance.
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-deep hover:from-brand-deep hover:to-brand-blue text-brand-white font-bold py-4 rounded-lg shadow-medium hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    Processing...
                  </>
                ) : (
                  "Submit Claim"
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimForm;