import React, { useState } from 'react';
import Section from './Section';
import { Project } from '../types';
import AddProjectModal from './AddProjectModal';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span key={tech} className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-700 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            {project.repoLabel || 'GitHub'}
          </a>
        )}
      </div>
    </div>
  </div>
);

interface ProjectsProps {
  projects: Project[];
  onAddProject: (project: Omit<Project, 'id'>) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onAddProject }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleAddNewProject = (newProj: Omit<Project, 'id'>) => {
    onAddProject(newProj);
    setIsModalOpen(false);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Here's a selection of my recent work. Feel free to explore!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12 flex justify-center items-center space-x-4">
          {projects.length > 4 && (
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
            Add Project
          </button>
        </div>
      </div>
      {isModalOpen && (
        <AddProjectModal 
          onAdd={handleAddNewProject}
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </Section>
  );
};

export default Projects;