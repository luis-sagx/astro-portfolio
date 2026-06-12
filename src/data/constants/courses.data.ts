import type { Course } from '../models/portfolio.model'

// To add a certificate: insert at the TOP of COURSES (newest first):
// {
//   title: '…',
//   provider: '…',
//   year: 2026,
//   certificateUrl: 'https://…',
//   icon: 'provider-slug', // must match a file in src/assets/icons/providers/
// },
export const COURSES: Course[] = [
  {
    title: 'Curso completo de Linux',
    provider: 'Udemy',
    certificateUrl:
      'https://www.udemy.com/certificate/UC-8edd265d-f9a0-44f3-998d-dbbb910498f8/',
    icon: 'udemy',
  },
  {
    title: 'Introduction to Cybersecurity',
    provider: 'Cisco Networking Academy',
    certificateUrl:
      'https://www.credly.com/badges/c7ca2164-f09b-4998-a049-390d36a8a7d5/public_url',
    icon: 'cisco',
  },
  {
    title: 'React y TypeScript',
    provider: 'Udemy',
    certificateUrl:
      'https://www.udemy.com/certificate/UC-6a0ef27e-5215-4287-9bf7-3634f09c1a0e/',
    icon: 'udemy',
  },
  {
    title: 'Foundational C# with Microsoft',
    provider: 'freecodecamp',
    certificateUrl:
      'https://freecodecamp.org/certification/luis-sagx/foundational-c-sharp-with-microsoft',
    icon: 'freecodecamp',
  },
  {
    title: 'Python Fundamentals 1 & 2',
    provider: 'Cisco Networking Academy',
    certificateUrl:
      'https://www.credly.com/badges/c627c2f0-6a1c-44af-a1fa-de4fc49d1e6f/public_url',
    icon: 'cisco',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    provider: 'IBM SkillsBuild',
    certificateUrl:
      'https://www.credly.com/badges/6967e5d5-ea63-4457-b535-4171a2f37db4/public_url',
    icon: 'ibm',
  },
  {
    title: 'Concientización de Ciberseguridad para Líderes Corporativos',
    provider: 'Udemy',
    certificateUrl:
      'https://www.udemy.com/certificate/UC-3e4503bc-460e-4fcb-b3df-e890f45474ba/',
    icon: 'udemy',
  },
  {
    title: 'Ciberseguridad - CompTIA Security',
    provider: 'Udemy',
    certificateUrl:
      'https://www.udemy.com/certificate/UC-d8f0a4d7-c2d6-4045-9ade-147dcc33dab7/',
    icon: 'udemy',
  },
]
