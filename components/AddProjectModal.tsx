
import React, { useState } from 'react';
import { Project } from '../types';

type NewProject = Omit<Project, 'id'>;

interface AddProjectModalProps {
  onAdd: (project: NewProject) => void;
  onClose: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !technologies || !imageUrl) {
      setError('Title, Description, Technologies, and Image URL are required.');
      return;
    }

    const techArray = technologies.split(',').map(tech => tech.trim()).filter(Boolean);
    if (techArray.length === 0) {
      setError('Please provide at least one technology, separated by commas.');
      return;
    }

    onAdd({
      title,
      description,
      technologies: techArray,
      imageUrl,
      liveUrl: liveUrl || undefined,
      repoUrl: repoUrl || undefined,
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg m-4 relative max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Project</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title</label>
            <input 
              type="text" 
              id="title" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
           <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">Technologies (comma-separated)</label>
            <input 
              type="text" 
              id="technologies" 
              placeholder="e.g., React, Node.js, Tailwind CSS"
              value={technologies}
              onChange={e => setTechnologies(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input 
              type="url" 
              id="imageUrl"
              placeholder="https://example.com/image.png"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700">Live Demo URL (Optional)</label>
            <input 
              type="url" 
              id="liveUrl"
              placeholder="https://myproject-live.com"
              value={liveUrl}
              onChange={e => setLiveUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-700">GitHub Repo URL (Optional)</label>
            <input 
              type="url" 
              id="repoUrl"
              placeholder="https://github.com/user/repo"
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)}
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
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
