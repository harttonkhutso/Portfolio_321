
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  
  const texts = [
    'AI Engineer & Machine Learning Specialist',
    'Data Scientist',
    'Cybersecurity & Network Engineer',
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const typeWriter = () => {
      const currentText = texts[textIndex];
      let newText = '';

      if (isDeleting) {
        newText = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        newText = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      setTypedText(newText);

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(typeWriter, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        timeoutId = window.setTimeout(typeWriter, 500);
      } else {
        timeoutId = window.setTimeout(typeWriter, isDeleting ? 50 : 100);
      }
    };
    
    timeoutId = window.setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="text-center px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-y-4 mb-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full floating pulse-glow flex-shrink-0 overflow-hidden shadow-2xl border-4 border-white/30">
            <img src="https://capeitinitiative-my.sharepoint.com/personal/hartton_malau_capaciti_org_za/Documents/Profile%20Pic.PNG" alt="Hartton Malau" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent text-center">
            Hartton Malau
          </h1>
        </div>
        <p className="text-2xl md:text-3xl mb-6 typing-animation h-10">{typedText}</p>
        <p className="text-base text-purple-200 max-w-3xl mx-auto mb-10">
          Bridging the gap between complex data and intelligent solutions. I architect and deploy robust AI/ML systems that drive innovation and deliver tangible business value.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => scrollToSection('about')} className="bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Learn More About Me
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full floating" style={{ animationDelay: '-1s' }}></div>
    </section>
  );
};

export default Hero;
