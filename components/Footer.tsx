import React from 'react';
import { Car, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-offwhite/80 py-16 border-t border-brand-darkgray">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-brand-white font-bold text-2xl mb-4">
              <img src="/logo.png" alt="Auto File Claim" className="h-8 w-auto" />
              <span>Auto File Claim</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6 text-brand-offwhite/70">
              Disclaimer: As an independent service, we have no ties to any insurance companies. We are a lead generation marketing company which generate MVA leads for a panel of Third Party companies
            </p>
            <div className="space-y-3">
              <div className="font-bold text-brand-white mb-2">Reach Us</div>
              <a href="mailto:Info@autofileclaim.com" className="flex items-center gap-3 hover:text-brand-white transition text-sm">
                <Mail className="w-4 h-4 text-brand-blue" />
                Info@autofileclaim.com
              </a>
              <a href="tel:8886263214" className="flex items-center gap-3 hover:text-brand-white transition text-sm">
                <Phone className="w-4 h-4 text-brand-blue" />
                888 626 3214
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-brand-blue transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition">About Us</Link></li>
              <li><Link to="/start-claim" className="hover:text-brand-blue transition">Start Your Claim</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-brand-white font-bold mb-6">Legal & Privacy</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-brand-blue transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-blue transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-choices" className="hover:text-brand-blue transition">Your Privacy Choices</Link></li>
              <li><Link to="/wa-health-policy" className="hover:text-brand-blue transition">WA Health Policy</Link></li>
              <li><Link to="/sponsors" className="hover:text-brand-blue transition">Our Partners & Sponsors</Link></li>
            </ul>
          </div>
        </div>

        {/* Ad Disclosures */}
        <div className="border-t border-brand-darkgray/50 pt-10 pb-8 space-y-6">
          <div className="bg-brand-darkgray/30 p-6 rounded-lg text-xs leading-relaxed text-brand-medgray">
            <p className="mb-4 font-bold text-brand-offwhite/90">ADVERTISEMENT</p>
            <p className="mb-4">
              This website is a paid advertisement for a joint marketing program. Auto File Claim is not a law firm, a lawyer referral service, or an insurance provider. We do not provide legal advice, medical advice, or insurance adjusting services. This advertisement is not a guarantee, warranty, or prediction regarding the outcome of your legal matter. Every case is different; the outcome depends on the unique laws, facts, and circumstances of each case. Hiring an attorney is an important decision that should not be based solely on advertising. You may request free information about an attorney’s background and experience. Individuals appearing on this website may be paid actors or spokespersons and not actual lawyers or clients. Any depictions of accidents or consultations are dramatizations. Use of this site, our forms, or our phone lines does not create an attorney-client relationship.
            </p>
            <p>
              <strong className="text-brand-offwhite/90">FOR NORTH CAROLINA RESIDENTS:</strong> Auto File Claim is a legal advertising service. We do not offer legal services or representation. Legal services are available only through independent attorneys licensed in North Carolina. Contacting us does not create an attorney-client relationship.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-medgray">
            <p>Copyright © 2025 Auto File Claim All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-brand-white transition">Privacy Policy</Link>
              <span className="text-brand-darkgray">|</span>
              <Link to="/terms" className="hover:text-brand-white transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;