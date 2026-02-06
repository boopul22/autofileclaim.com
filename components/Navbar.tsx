import React, { useState } from 'react';
import { Menu, X, Phone, Car } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    // If we are not on home, go to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-brand-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo.png" alt="Auto File Claim" className="h-10 w-auto rounded-lg" />
            <span className="font-bold text-xl text-brand-deep">Auto File Claim</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNavClick('#home')} className="text-brand-darkgray hover:text-brand-blue font-medium transition">Home</button>
            <Link to="/about" className="text-brand-darkgray hover:text-brand-blue font-medium transition">About Us</Link>
            <Link to="/start-claim" className="bg-brand-blue text-brand-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-deep transition shadow-glow">
              Start Your Claim
            </Link>
            <a href="tel:8886263214" className="flex items-center gap-2 text-brand-darkgray font-bold hover:text-brand-blue transition">
              <Phone className="h-4 w-4" />
              Call : 888 626 3214
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-darkgray hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-white border-t border-brand-lightgray absolute w-full shadow-medium">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
            <button onClick={() => handleNavClick('#home')} className="block text-left px-3 py-2 text-brand-darkgray hover:bg-brand-offwhite rounded-md font-medium">Home</button>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-left px-3 py-2 text-brand-darkgray hover:bg-brand-offwhite rounded-md font-medium">About Us</Link>
            <Link to="/start-claim" onClick={() => setIsOpen(false)} className="block text-left px-3 py-2 text-brand-blue font-bold hover:bg-brand-offwhite rounded-md">Start Your Claim</Link>
            <a href="tel:8886263214" className="block px-3 py-3 mt-2 text-center text-brand-white bg-brand-deep rounded-md font-bold">Call : 888 626 3214</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;