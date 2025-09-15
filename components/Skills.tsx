
import React, { useRef, useEffect, useState } from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { Skill as SkillType } from '../types';

const SkillBar: React.FC<{ skill: SkillType }> = ({ skill }) => {
  const [inView, setInView] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = barRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm font-medium text-purple-700">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 skill-bar">
        <div 
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full skill-progress"
          style={{ width: inView ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">A look at the technologies and skills I'm proficient in.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {SKILLS.map(category => (
            <div key={category.name}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h3>
              <div>
                {category.skills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
