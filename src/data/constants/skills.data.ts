import type { SkillCategoryMetadata } from '../models/portfolio.model'

export const SKILL_CATEGORIES: SkillCategoryMetadata[] = [
  {
    id: 'languages',
    icon: 'code',
    skills: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'C#' },
    ],
  },
  {
    id: 'frontend',
    icon: 'desktop',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Flutter' },
      { name: 'Expo Go' },
      { name: 'Astro' },
    ],
  },
  {
    id: 'backend',
    icon: 'server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'n8n' },
      { name: 'Spring Boot' },
      { name: 'Flask' },
      { name: 'ASP.NET Core' },
    ],
  },
  {
    id: 'databases',
    icon: 'database',
    skills: [
      { name: 'MongoDB' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Firebase' },
    ],
  },
  {
    id: 'tools',
    icon: 'wrench',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Postman' },
    ],
  },
]
