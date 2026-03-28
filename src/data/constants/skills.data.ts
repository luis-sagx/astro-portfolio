import type { SkillCategory } from '../models/portfolio.model'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
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
    title: 'Frontend',
    icon: 'desktop',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Flutter' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js' },
      { name: 'Spring Boot' },
      { name: 'Flask' },
      { name: 'ASP.NET Core' },
    ],
  },

  {
    title: 'Databases',
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
    title: 'Tools & DevOps',
    icon: 'wrench',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Postman' },
    ],
  },
]
