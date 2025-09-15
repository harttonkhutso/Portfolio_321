
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="w-12 h-12 rounded-full shadow-lg pulse-glow">
            <img src="https://capeitinitiative-my.sharepoint.com/personal/hartton_malau_capaciti_org_za/Documents/Profile%20Pic.PNG" alt="Hartton Malau" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.toLowerCase());
                }}
                className={`${scrolled ? 'text-gray-600 hover:text-purple-600' : 'text-white hover:text-white/70'} transition-colors font-medium cursor-pointer`}
              >
                {link}
              </a>
            ))}
          </div>
          <button 
            className={`md:hidden ${scrolled || isMenuOpen ? 'text-gray-600' : 'text-white'} hover:text-purple-600 transition-colors z-50`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
           <div className="flex flex-col items-center space-y-4 pt-2 pb-6">
             {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.toLowerCase());
                    setIsMenuOpen(false); // Close menu on click
                  }}
                  className="text-lg text-gray-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
                >
                  {link}
                </a>
              ))}
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
