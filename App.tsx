
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import { CERTIFICATIONS, PROJECTS } from './constants';
import { Certification, Project } from './types';
import Experience from './components/Experience';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);
  const [certifications, setCertifications] = useState<Certification[]>(CERTIFICATIONS);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  const handleAddCertificate = (newCert: Omit<Certification, 'id'>) => {
    const newCertificateWithId: Certification = {
      ...newCert,
      id: Date.now(),
    };
    setCertifications(prevCerts => [...prevCerts, newCertificateWithId]);
  };

  const handleAddProject = (newProj: Omit<Project, 'id'>) => {
    const newProjectWithId: Project = {
      ...newProj,
      id: Date.now(),
    };
    setProjects(prevProjs => [...prevProjs, newProjectWithId]);
  };

  const GlobalStyles = () => (
    <style>{`
      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      .card-hover {
        transition: all 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }
      .fade-in-start {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      .fade-in-finish {
        opacity: 1;
        transform: translateY(0);
      }
      .typing-animation::after {
        content: '|';
        border-right: 2px solid #667eea;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: #667eea; }
      }
      .skill-bar {
        height: 8px;
        background: #e5e7eb;
        border-radius: 4px;
        overflow: hidden;
      }
      .skill-progress {
        height: 100%;
        background: linear-gradient(90deg, #667eea, #764ba2);
        border-radius: 4px;
        transition: width 2s ease;
        width: 0%;
      }
      .floating {
        animation: float 6s ease-in-out infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      .pulse-glow {
        animation: pulseGlow 2s ease-in-out infinite alternate;
      }
      @keyframes pulseGlow {
        from { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }
        to { box-shadow: 0 0 40px rgba(102, 126, 234, 0.8); }
      }
    `}</style>
  );

  if (showCertifications) {
    return (
      <Certifications
        certifications={certifications}
        onAddCertificate={handleAddCertificate}
        onBack={() => setShowCertifications(false)}
      />
    );
  }

  if (showTechStack) {
    return <TechStack onBack={() => setShowTechStack(false)} />;
  }

  return (
    <div className="bg-gray-50">
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About 
          onViewCertifications={() => setShowCertifications(true)} 
          onViewTechStack={() => setShowTechStack(true)}
        />
        <Experience />
        <Skills />
        <Projects 
          projects={projects}
          onAddProject={handleAddProject}
        />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
