export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  repoLabel?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  dates: string;
  description: string[];
}

export interface TechSkill {
  name: string;
  iconUrl: string;
}

export interface TechCategory {
  name: string;
  skills: TechSkill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}