import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-200 mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>

          <div className="space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">1. Introduction</h2>
              <p>
                These Terms and Conditions govern your access to and use of the Auto File Claim website and services.
              </p>
              <p className="mt-2">
                By using our Site and services, you agree to these Terms. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">2. Services Offered</h2>
              <p>
                Auto File Claim assists individuals in filing and managing car accident claims. We are not an insurance company. Our platform helps facilitate the claims process by collecting relevant information and submitting it to insurers or legal partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">3. Eligibility</h2>
              <p>
                You must be at least 18 years old and capable of entering a legally binding agreement to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">4. User Responsibilities</h2>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Not misuse our platform for unlawful purposes</li>
                <li>Maintain confidentiality of any login credentials (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">5. Intellectual Property</h2>
              <p>
                All content on our Site, including text, logos, images, and software, is the property of Auto File Claim or its licensors and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">6. Disclaimer</h2>
              <p>
                We do not guarantee the outcome of any claim. Results may vary based on the information provided, the nature of the incident, and third-party decisions (e.g., insurance companies).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">7. Limitation of Liability</h2>
              <p>
                Auto File Claim shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Site if you violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of USA, without regard to conflict of law principles.
              </p>
            </section>

          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Call us for a free consultation</h2>
          <a href="tel:8886263214" className="inline-flex items-center text-3xl font-bold mb-4 hover:text-blue-200 transition">
            <Phone className="w-8 h-8 mr-3" />
            888 626 3214
          </a>
          <p className="text-blue-100 mb-6">Need help after a car accident? We're here for you 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#claim"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-md"
            >
              Start Claim
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:8886263214"
              className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition shadow-md border border-blue-400"
            >
              Request a Callback
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Terms;