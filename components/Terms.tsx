import React from 'react';
import { Shield, Users, Clock, CheckCircle2, Target, Heart } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Hero Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Auto File Claim</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your trusted partner in navigating car accident claims with expertise, compassion, and dedication.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Who We Are
              </h2>
              <p className="mb-4">
                Auto File Claim is a leading marketing and technology platform dedicated to simplifying the car accident claims process for drivers across the United States. We understand that being involved in a car accident can be one of life's most stressful experiences, which is why we're here to help.
              </p>
              <p className="mb-4">
                As an independent service provider, we specialize in connecting accident victims with the right resources, partners, and support systems to ensure their claims are handled efficiently and professionally.
              </p>
              <p className="font-semibold text-slate-800">
                We are not an insurance company, law firm, or lawyer referral service. Instead, we serve as your advocate and guide through the complex claims process.
              </p>
            </section>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-600" />
                What We Do
              </h2>
              <p className="mb-4">
                Auto File Claim assists individuals in filing and managing car accident claims by:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Collecting and organizing relevant accident information",
                  "Connecting you with qualified legal partners and insurance professionals",
                  "Facilitating communication between all parties involved",
                  "Streamlining the claims submission process",
                  "Providing guidance and support throughout your claim journey"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-800 font-semibold">
                Our platform helps facilitate the claims process, making it easier for you to get the assistance and compensation you deserve.
              </p>
            </section>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 rounded-xl shadow-lg mb-8 text-white">
          <div className="space-y-4">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3" />
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                To take the stress out of car accident claims by providing accessible, professional, and compassionate support to accident victims nationwide. We believe that everyone deserves expert guidance during their recovery journey, regardless of fault or circumstance.
              </p>
            </section>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                Why Choose Auto File Claim?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Expert Guidance</h3>
                  <p>Our team understands the complexities of accident claims and insurance processes.</p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Fast Processing</h3>
                  <p>We expedite your claim submission to ensure quick response times.</p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">No Upfront Costs</h3>
                  <p>Our service is free to users. We're compensated by our marketing partners.</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Nationwide Coverage</h3>
                  <p>We assist drivers across all 50 states with their accident claims.</p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Minimal Disruption</h3>
                  <p>We handle the paperwork and coordination so you can focus on recovery.</p>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">Transparent Process</h3>
                  <p>Clear communication every step of the way with no hidden surprises.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                How It Works
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-1">Submit Your Information</h3>
                    <p>Fill out our simple online form with details about your accident.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-1">We Review Your Case</h3>
                    <p>Our team analyzes your information and connects you with appropriate partners.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-1">Get Connected</h3>
                    <p>We match you with qualified professionals who can assist with your claim.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 mb-1">Move Forward</h3>
                    <p>Your case is filed and processed while we provide ongoing support.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Important Disclaimer Section */}
        <div className="bg-amber-50 p-8 rounded-xl border-l-4 border-amber-500 mb-8">
          <h3 className="font-bold text-lg text-amber-900 mb-3">Important Disclosure</h3>
          <div className="space-y-2 text-amber-800 text-sm">
            <p>
              <strong>Independent Service:</strong> Auto File Claim is an independent lead generation marketing company with no ties to any insurance companies.
            </p>
            <p>
              <strong>Not Legal Advice:</strong> We do not provide legal advice or insurance adjusting services. We are not a law firm or lawyer referral service.
            </p>
            <p>
              <strong>Compensation Disclosure:</strong> We are compensated by third-party marketing partners (law firms and intake specialists) for marketing and administrative services. We generate MVA (Motor Vehicle Accident) leads for a panel of third-party companies.
            </p>
            <p>
              <strong>No Guarantees:</strong> We do not guarantee the outcome of any claim. Results may vary based on the information provided, the nature of the incident, and third-party decisions.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Get in Touch</h2>
            <p className="text-slate-700 mb-6">
              Have questions about our services? We're here to help. Contact us today for a free consultation.
            </p>

            <div className="space-y-3 text-slate-700">
              <div className="flex items-center">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:Info@autofileclaim.com" className="text-blue-600 hover:underline">
                  Info@autofileclaim.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Phone:</span>
                <a href="tel:8886263214" className="text-blue-600 hover:underline">
                  888 626 3214
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-24">Location:</span>
                <span>USA</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#claim"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Start Your Claim Today
              </a>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Terms;