import type { Project } from '../models/portfolio.model'

export const PROJECTS: Project[] = [
  {
    image: 'img/cinema.webp',
    title: 'Cinema System',
    description:
      'Web application for managing movie theater operations, including showtimes.',
    technologies: ['Angular', 'Node JS', 'Express', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/luis-sagx/cinema-tests',
    githubUrl: 'https://github.com/luis-sagx/cinema-tests',
    highlights: [
      'Comprehensive unit and integration testing',
      'Stress testing for performance optimization',
    ],
  },
  {
    image: 'img/sagxup.webp',
    title: 'Sagx UP - Financial Control',
    description:
      'Mobile application for personal financial management, including AI Assistant.',
    technologies: ['Flutter', 'Firebase', 'Material Design 3'],
    link: 'https://github.com/luis-sagx/sagx-up',
    githubUrl: 'https://github.com/luis-sagx/sagx-up',
    highlights: [
      'AI-driven financial insights',
      'User-friendly mobile interface',
    ],
  },
  {
    image: 'img/sureno.webp',
    title: 'Ecommerce "Sureño"',
    description:
      'Website designed for selling and managing products from the "Sureño" brand.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Flask',
      'MongoDB',
      'Bootstrap',
    ],
    link: 'https://github.com/luis-sagx/Sureno.git',
    githubUrl: 'https://github.com/luis-sagx/Sureno.git',
    highlights: [
      'Full-stack e-commerce solution',
      'Administrative dashboard for order tracking',
    ],
  },
  {
    image: 'img/carta.webp',
    title: 'Letter Sending "Simply Lovely"',
    description:
      'Interactive platform for children to create, customize, and send digital letters.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node JS',
      'Express',
      'MongoDB',
    ],
    link: 'https://github.com/MateoJa54/carta.git',
    githubUrl: 'https://github.com/MateoJa54/carta.git',
    highlights: ['Interactive UI for children', 'Email automation'],
  },
  {
    image: 'img/hospital.webp',
    title: 'Hospital Management System',
    description:
      'Web application for managing medical appointments and treatments.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'ASP.NET Core',
      'SQL Server',
      'Bootstrap',
    ],
    link: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git',
    githubUrl: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git',
    highlights: [
      'Complete CRUD operations',
      'Application of stored procedures',
    ],
  },
  {
    image: 'img/control.webp',
    title: 'Expense Control',
    description:
      'Web application for managing and tracking personal expenses effectively.',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/luis-sagx/expense-control.git',
    githubUrl: 'https://github.com/luis-sagx/expense-control.git',
    highlights: [
      'Real-time expense tracking',
      'Data visualization with charts',
    ],
  },
]
