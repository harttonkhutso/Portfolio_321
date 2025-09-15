
import React from 'react';
import { TECH_STACK } from '../constants';
import { TechSkill } from '../types';

const TechSkillCard: React.FC<{ skill: TechSkill }> = ({ skill }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-center card-hover">
    <img src={skill.iconUrl} alt={`${skill.name} logo`} className="w-16 h-16 object-contain mb-3" />
    <h4 className="font-semibold text-gray-700">{skill.name}</h4>
  </div>
);

interface TechStackProps {
  onBack: () => void;
}

const TechStack: React.FC<TechStackProps> = ({ onBack }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">My Tech Stack</div>
          <button
            onClick={onBack}
            className="text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            &larr; Back to Home
          </button>
        </div>
      </header>
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {TECH_STACK.map(category => (
            <div key={category.name}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-purple-500 pl-4">{category.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map(skill => (
                  <TechSkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
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

export default TechStack;
