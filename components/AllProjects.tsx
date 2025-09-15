
import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './Projects';

interface AllProjectsProps {
  projects: Project[];
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ projects, onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">All Projects</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400">&copy; 2024 Hartton Malau. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AllProjects;
