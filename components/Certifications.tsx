import React, { useState } from 'react';
import { Certification } from '../types';
import AddCertificateModal from './AddCertificateModal';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover flex flex-col items-center text-center p-6">
    <img src={cert.imageUrl} alt={`${cert.issuer} logo`} className="w-24 h-24 object-contain mb-4 rounded-full" />
    <div className="flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
      <p className="text-gray-600 text-sm mb-1 font-semibold">{cert.issuer}</p>
      <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
    </div>
    {cert.credentialUrl && (
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
      >
        View Credential
      </a>
    )}
  </div>
);

interface CertificationsProps {
  certifications: Certification[];
  onAddCertificate: (cert: Omit<Certification, 'id'>) => void;
  onBack: () => void;
}

const Certifications: React.FC<CertificationsProps> = ({ certifications, onAddCertificate, onBack }) => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedCerts = showAll ? certifications : certifications.slice(0, 4);

  const handleAddNewCertificate = (newCert: Omit<Certification, 'id'>) => {
    onAddCertificate(newCert);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">My Certifications</div>
          <button
            onClick={onBack}
            className="text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            &larr; Back to Home
          </button>
        </div>
      </header>
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedCerts.map(cert => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
          <div className="text-center mt-12 flex justify-center items-center space-x-4">
            {certifications.length > 4 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                {showAll ? 'Show Less' : 'View More'}
              </button>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Add Certificate
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400">&copy; 2024 Hartton Malau. All rights reserved.</p>
        </div>
      </footer>

      {isModalOpen && (
        <AddCertificateModal 
          onAdd={handleAddNewCertificate}
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Certifications;