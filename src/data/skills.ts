import type {
  SkillCategory,
  Certification,
  Education,
  Language,
} from '../types/index'

export const skillCategories: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C#'],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'React', 'Tailwind CSS', 'Flutter'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Spring Boot', 'Flask', 'ASP.NET Core'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'SQL Server', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    label: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Linux', 'Postman'],
  },
]

export const certifications: Certification[] = [
  {
    title: 'Curso completo de Linux',
    issuer: 'Udemy',
    logoUrl:
      'https://cdn.brandfetch.io/idTqV2BNgX/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1741065928722',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-8edd265d-f9a0-44f3-998d-dbbb910498f8/',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    logoUrl:
      'https://cdn.brandfetch.io/ida_xaMYlM/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747137515647',
    credentialUrl:
      'https://www.credly.com/badges/c7ca2164-f09b-4998-a049-390d36a8a7d5/public_url',
  },
  {
    title: 'React y TypeScript',
    issuer: 'Udemy',
    logoUrl:
      'https://cdn.brandfetch.io/idTqV2BNgX/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1741065928722',
    credentialUrl:
      'https://www.udemy.com/certificate/UC-6a0ef27e-5215-4287-9bf7-3634f09c1a0e/',
  },
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'FreeCodeCamp',
    logoUrl:
      'https://cdn.brandfetch.io/idXgCW-Dlx/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1765498130166',
    credentialUrl:
      'https://freecodecamp.org/certification/luis-sagx/foundational-c-sharp-with-microsoft',
  },
  {
    title: 'Python Fundamentals 1 & 2',
    issuer: 'Cisco Networking Academy',
    logoUrl:
      'https://cdn.brandfetch.io/ida_xaMYlM/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747137515647',
    credentialUrl:
      'https://www.credly.com/badges/c627c2f0-6a1c-44af-a1fa-de4fc49d1e6f/public_url',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
    credentialUrl:
      'https://www.credly.com/badges/6967e5d5-ea63-4457-b535-4171a2f37db4/public_url',
  },
]

export const education: Education[] = [
  {
    degree: 'Software Engineering',
    institution: 'Universidad de las Fuerzas Armadas ESPE',
    period: '2022 – present',
  },
]

export const languages: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B1 – Intermediate' },
]

export const interests: string[] = ['Soccer', 'Exercise', 'Reading']
