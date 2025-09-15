import { Project, Certification, TechCategory, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI Study Buddy',
    description: 'An interactive learning assistant that helps users understand complex topics through conversational AI.',
    technologies: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400/764ba2/ffffff?text=AI+Study+Buddy',
    liveUrl: 'https://ai-study-buddy-bmwm.vercel.app/',
    repoUrl: 'https://github.com/MediLex-Tech-group/AIStudyBuddy',
  },
   {
    id: 4,
    title: 'Real-Time Sentiment Analysis Engine',
    description: 'An application that analyzes text in real-time to determine its emotional tone, using natural language processing.',
    technologies: ['Python', 'Flask', 'React', 'NLTK'],
    imageUrl: 'https://placehold.co/600x400/5e87ed/ffffff?text=Sentiment+AI',
    liveUrl: 'https://sentiment-analysis-two-puce.vercel.app/',
    repoUrl: 'https://github.com/MediLex-Tech-group/Sentiment-Analysis',
  },
  {
    id: 5,
    title: 'Tarh Chatbot',
    description: 'A conversational AI chatbot designed to assist users with inquiries, built using the Landbot no-code platform.',
    technologies: ['Landbot', 'No-Code', 'Conversational AI'],
    imageUrl: 'https://placehold.co/600x400/764ba2/ffffff?text=Tarh+Chatbot',
    liveUrl: 'https://landbot.online/v3/H-3059956-FLJB6IVPTRUTI8G9/index.html',
    repoUrl: 'https://capeitinitiative-my.sharepoint.com/:w:/g/personal/hartton_malau_capaciti_org_za/EVeOGE4Q3_pDpt527bNxsd0BMemzvGTNElJEo4IvIMUvWQ?e=B2r7Zz',
    repoLabel: 'View Doc',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: 'AI Essentials',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EdofShi31kVGnArzqQCdwRABxfQF7a3vr3g7b1CN10ojRA?e=C6DY9N',
  },
  {
    id: 2,
    name: 'AI For Everyone',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EcLA6n6YqGhFpYy7a6s-UQgB1x2-cRLwuMDN2a_UbGIZ6w?e=SDKPYl',
  },
  {
    id: 3,
    name: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EXT1VyhqjtNAtATdVi8fS5IBwUKesxZAYBeKNo_KSfNdhw?e=JTQmGU',
  },
  {
    id: 4,
    name: 'Artificial Intelligence on Microsoft Azure',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/Eb_AUn88PQRGtW7So2PTiQYBy_8o8EyeP8Ac9cldkWZOPg?e=rd0cHB',
  },
  {
    id: 5,
    name: 'Building AI Powered Chatbots Without programming',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/ETRD_aAbu1VNm62QQWTs_0YBW4ox9UE_tndbwdgHRU5ckQ?e=1lIeHd',
  },
  {
    id: 6,
    name: 'Generative AI with Large Language Models',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/Ebd0koccYxxMqQjtRMdTfAAB5TkBtQQtrLkA4J1cWBmj2g?e=5NuOwl',
  },
  {
    id: 7,
    name: 'Python Development and AI Foundations',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EVFKFPibzrdAqyH9kBA7WegBGOyqRa2mUFxy2ltQxAHL2w?e=VucTO6',
  },
  {
    id: 8,
    name: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    date: 'Issued Aug 2024',
    imageUrl: 'https://placehold.co/100x100/0056d2/ffffff?text=Coursera',
    credentialUrl: 'https://capeitinitiative.sharepoint.com/:b:/s/AdvancedDigitalSkills4/EQiqelMlLKlNkW8pNPGwuDoBkEh1MQDZO7QIthrLbWGzFw?e=WYQTse',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    title: 'Digital Associate',
    company: 'CAPACITI',
    dates: 'Jun 2025 - Present',
    description: [
      'AI Foundations: Acquired a strong understanding of fundamental AI concepts, the distinction between machine learning and deep learning, AI ethics, and techniques for auditing model bias.',
      'Practical Application: Developed hands-on experience by building functional AI tools, including chatbots, content generators, and an AI resume builder, mastering prompt engineering and various AI APIs.',
      'Technical and Soft Skills: Enhanced technical proficiency in Python for data science while practicing agile collaboration and creating professional technical documentation.',
      'Career Readiness: Prepared for the job market by building a professional portfolio, crafting an ATS-optimized resume, and delivering a compelling capstone presentation to showcase completed work.',
    ],
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'Self-Employed',
    dates: 'Jun 2025 - Present',
    description: [
      'Assisted in building and maintaining WordPress websites for various clients.',
      'Gained hands-on experience with HTML, CSS, JavaScript, and PHP.',
      'Participated in daily stand-ups and sprint planning as part of an Agile development team.',
    ],
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', iconUrl: 'https://placehold.co/100x100/61DAFB/000000?text=React' },
      { name: 'TypeScript', iconUrl: 'https://placehold.co/100x100/3178C6/FFFFFF?text=TS' },
      { name: 'Vue.js', iconUrl: 'https://placehold.co/100x100/4FC08D/FFFFFF?text=Vue' },
      { name: 'Next.js', iconUrl: 'https://placehold.co/100x100/000000/FFFFFF?text=Next' },
      { name: 'Tailwind CSS', iconUrl: 'https://placehold.co/100x100/06B6D4/FFFFFF?text=Tailwind' },
      { name: 'HTML5', iconUrl: 'https://placehold.co/100x100/E34F26/FFFFFF?text=HTML5' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', iconUrl: 'https://placehold.co/100x100/339933/FFFFFF?text=Node' },
      { name: 'Express', iconUrl: 'https://placehold.co/100x100/000000/FFFFFF?text=Express' },
      { name: 'Python', iconUrl: 'https://placehold.co/100x100/3776AB/FFFFFF?text=Python' },
      { name: 'GraphQL', iconUrl: 'https://placehold.co/100x100/E10098/FFFFFF?text=GraphQL' },
    ],
  },
  {
    name: 'Databases & DevOps',
    skills: [
      { name: 'MongoDB', iconUrl: 'https://placehold.co/100x100/47A248/FFFFFF?text=Mongo' },
      { name: 'Firebase', iconUrl: 'https://placehold.co/100x100/FFCA28/000000?text=Firebase' },
      { name: 'Docker', iconUrl: 'https://placehold.co/100x100/2496ED/FFFFFF?text=Docker' },
      { name: 'Git', iconUrl: 'https://placehold.co/100x100/F05032/FFFFFF?text=Git' },
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Packet Tracer', level: 70 },
      { name: 'Webpack & Vite', level: 80 },
      { name: 'CI/CD (GitHub Actions)', level: 70 },
    ],
  },
  {
    name: 'AI/ML Frameworks',
    skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Hugging Face Transformers', level: 80 },
    ],
  },
  {
    name: 'Cybersecurity & Networking',
    skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Endpoint & Cloud Security', level: 70 },
        { name: 'Network Switching and Routing', level: 75 },
        { name: 'Firewall Configuration', level: 80 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Agile Methodologies', level: 85 },
      { name: 'Communication', level: 90 },
    ],
  },
];