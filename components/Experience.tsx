
import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Experience as ExperienceType } from '../types';

const ExperienceItem: React.FC<{ item: ExperienceType; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8">
    {/* Timeline Line */}
    {!isLast && <div className="absolute top-4 left-[1px] w-0.5 h-full bg-purple-200"></div>}
    
    {/* Timeline Dot */}
    <div className="absolute top-4 left-[-7px] w-4 h-4 bg-white border-2 border-purple-500 rounded-full"></div>

    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
      <p className="text-purple-600 font-semibold mb-1">{item.company}</p>
      <p className="text-sm text-gray-500 mb-3">{item.dates}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A timeline of my professional journey and accomplishments.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {EXPERIENCE.map((item, index) => (
            <ExperienceItem 
              key={item.id} 
              item={item} 
              isLast={index === EXPERIENCE.length - 1} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
