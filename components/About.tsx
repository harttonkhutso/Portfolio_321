import React from 'react';
import Section from './Section';

interface AboutProps {
  onViewCertifications: () => void;
  onViewTechStack: () => void;
}

const About: React.FC<AboutProps> = ({ onViewCertifications, onViewTechStack }) => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="about" className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 via-blue-500 to-purple-600 rounded-3xl p-2 shadow-2xl floating">
              <img src="https://capeitinitiative-my.sharepoint.com/personal/hartton_malau_capaciti_org_za/Documents/Profile%20Pic.PNG" alt="Hartton Malau" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Passionate AI Researcher, ML Engineer, and Problem Solver</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am an aspiring IT professional with hands-on experience in AI/ML, cybersecurity, and Cisco networking. I have built and deployed AI solutions during the CAPACITI AI Bootcamp, earning certifications from IBM, Google, Microsoft, AWS, and DeepLearning.AI. Skilled in network security, configuration, and troubleshooting, I am passionate about developing secure and scalable technology solutions that drive real-world impact.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <a
            href="https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/ERDu1RW0BMZImXWgLO22iggBF7rYiQuLfO3hFi42-7DMWA?e=Jk1NdU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 shadow-lg text-center card-hover cursor-pointer flex flex-col items-center justify-center h-full floating"
          >
            <div className="text-5xl mb-4">📄</div>
            <h4 className="font-bold text-gray-800">View Resume</h4>
          </a>
          <div 
            onClick={() => scrollToSection('projects')}
            className="bg-white rounded-xl p-6 shadow-lg text-center card-hover cursor-pointer flex flex-col items-center justify-center h-full floating"
          >
            <div className="text-5xl mb-4">📂</div>
            <h4 className="font-bold text-gray-800">View Projects</h4>
          </div>
          <div 
            onClick={onViewCertifications}
            className="bg-white rounded-xl p-6 shadow-lg text-center card-hover cursor-pointer flex flex-col items-center justify-center h-full floating"
          >
            <div className="text-5xl mb-4">📜</div>
            <h4 className="font-bold text-gray-800">View Certifications</h4>
          </div>
          <div 
            onClick={onViewTechStack}
            className="bg-white rounded-xl p-6 shadow-lg text-center card-hover cursor-pointer flex flex-col items-center justify-center h-full floating"
          >
            <div className="text-5xl mb-4">⚙️</div>
            <h4 className="font-bold text-gray-800">View Tech Stack</h4>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;