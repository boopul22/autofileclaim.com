import React, { useState } from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';

const PrivacyChoices: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        reqDoNotSell: false,
        reqLimitUse: false,
        reqOptOutAds: false,
        reqDelete: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const US_STATES = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "Other"
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Handle checkbox vs text/select
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleOptOut = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock Backend Logic
        console.log("--- PRIVACY REQUEST SUBMITTED ---");
        console.log(formData);

        // Simulate actions specified in the prompt
        console.log("Action: Sent to Global Suppression List");
        console.log("Action: Webhook fired to Dialer to Move to global DNC");
        console.log("Action: Check against Export List -> ABORT EXPORT if match found");

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="bg-slate-50 min-h-screen py-20">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="bg-white p-12 rounded-xl shadow-lg text-center border border-green-200">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received</h2>
                        <p className="text-slate-600 mb-6">
                            We have received your privacy request. Your information has been added to our global suppression list, and we will no longer share your data with marketing partners.
                        </p>
                        <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 underline">Return to form</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                        <ShieldAlert className="w-8 h-8 text-blue-600" />
                        <h1 className="text-2xl font-bold text-slate-900">YOUR PRIVACY CHOICES</h1>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">Last Updated: January 26, 2026</p>

                    <div className="space-y-6 mb-8 text-slate-700">
                        <p>
                            If you are a resident of California, Colorado, Connecticut, Texas, Utah, or Virginia, you have specific rights regarding your personal data. This page allows you to exercise your Right to Opt-Out of the sale/sharing of your data and your Right to Limit the use of your sensitive personal information.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 text-sm">
                            <h3 className="font-bold text-blue-900 mb-2">1. NOTICE OF DATA PRACTICES</h3>
                            <p className="mb-2">
                                Auto File Claim is a marketing and technology platform. To provide our services, we “sell” or “share” your information (including identifiers and accident details) with our Marketing Partners (law firms and intake specialists). Because the information you provide often includes details about your physical injuries, it is classified as Sensitive Personal Information.
                            </p>
                            <p className="font-bold text-blue-900">
                                PLEASE NOTE: Our service is built on the transfer of this data. If you opt-out or limit the use of this data, we cannot match you with a law firm or process your inquiry.
                            </p>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 mb-4">2. EXERCISE YOUR RIGHTS</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        Please use the form below to submit your request. We will process your request within the timeframe required by your state’s law (typically 15–45 days).
                    </p>

                    <form onSubmit={handleOptOut} className="space-y-8">
                        {/* Step 1: Your Information */}
                        <div>
                            <h4 className="font-bold text-slate-800 border-b pb-2 mb-4">Step 1: Your Information</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="(Essential for scrubbing)"
                                        className="w-full px-4 py-2 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">State of Residence</label>
                                    <select
                                        required
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                    >
                                        <option value="">Select State</option>
                                        {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Select Your Request */}
                        <div>
                            <h4 className="font-bold text-slate-800 border-b pb-2 mb-4">Step 2: Select Your Request</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <input
                                        id="req-1"
                                        type="checkbox"
                                        name="reqDoNotSell"
                                        checked={formData.reqDoNotSell}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                                    />
                                    <label htmlFor="req-1" className="ml-3 text-sm text-slate-700">
                                        <span className="font-semibold">Do Not Sell or Share My Personal Information:</span> Stop the transfer of my data to third parties for marketing or administrative fees.
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="req-2"
                                        type="checkbox"
                                        name="reqLimitUse"
                                        checked={formData.reqLimitUse}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                                    />
                                    <label htmlFor="req-2" className="ml-3 text-sm text-slate-700">
                                        <span className="font-semibold">Limit the Use and Disclosure of My Sensitive Personal Information:</span> I request that you restrict the use of my health/injury data to only what is strictly necessary to provide the service. (Note: This will prevent us from sharing your injury details with law firms).
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="req-3"
                                        type="checkbox"
                                        name="reqOptOutAds"
                                        checked={formData.reqOptOutAds}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                                    />
                                    <label htmlFor="req-3" className="ml-3 text-sm text-slate-700">
                                        <span className="font-semibold">Opt-Out of Targeted Advertising:</span> Do not use my data for cross-context behavioral advertising.
                                    </label>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="req-4"
                                        type="checkbox"
                                        name="reqDelete"
                                        checked={formData.reqDelete}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                                    />
                                    <label htmlFor="req-4" className="ml-3 text-sm text-slate-700">
                                        <span className="font-semibold">Request to Delete:</span> Permanently remove my record from your database.
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-slate-900 text-white font-bold py-3 px-8 rounded hover:bg-slate-800 transition shadow-lg w-full md:w-auto"
                            >
                                {isSubmitting ? "Processing..." : "SUBMIT PRIVACY REQUEST"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 space-y-6 pt-8 border-t border-slate-200 text-sm text-slate-600">
                        <div>
                            <h3 className="font-bold text-slate-900 text-base mb-2">3. AUTOMATED OPT-OUT (GPC)</h3>
                            <p>
                                We honor Global Privacy Control (GPC) signals. If your browser or device sends a GPC signal, we will automatically opt you out of the “sale” and “sharing” of your personal information for that specific session without you needing to fill out the form above.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-base mb-2">4. OTHER CONTACT METHODS</h3>
                                <p>If you have difficulty using the form, you may also submit your request via:</p>
                                <p className="mt-2"><span className="font-semibold">Email:</span> privacy@autofileclaim.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-base mb-2">5. AUTHORIZED AGENTS</h3>
                                <p>
                                    If you are submitting this request on behalf of another person, you must provide written proof of your authority (such as a power of attorney) to privacy@autofileclaim.com before we can process the request.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyChoices;