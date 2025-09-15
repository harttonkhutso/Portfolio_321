import React, { useState } from 'react';
import { Certification } from '../types';

type NewCertification = Omit<Certification, 'id'>;

interface AddCertificateModalProps {
  onAdd: (cert: NewCertification) => void;
  onClose: () => void;
}

const AddCertificateModal: React.FC<AddCertificateModalProps> = ({ onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !issuer || !date || !imageUrl) {
      setError('All fields except Credential URL are required.');
      return;
    }
    onAdd({ name, issuer, date, imageUrl, credentialUrl: credentialUrl || undefined });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md m-4 relative max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Certificate</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Certificate Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="issuer" className="block text-sm font-medium text-gray-700">Issuer</label>
            <input 
              type="text" 
              id="issuer" 
              value={issuer}
              onChange={e => setIssuer(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date Issued</label>
            <input 
              type="text" 
              id="date"
              placeholder="e.g., Issued Jun 2024"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Issuer Logo URL</label>
            <input 
              type="url" 
              id="imageUrl"
              placeholder="https://example.com/logo.png"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="credentialUrl" className="block text-sm font-medium text-gray-700">Credential URL (Optional)</label>
            <input 
              type="url" 
              id="credentialUrl"
              placeholder="https://example.com/credential"
              value={credentialUrl}
              onChange={e => setCredentialUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
             <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-gray-700 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Save Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCertificateModal;