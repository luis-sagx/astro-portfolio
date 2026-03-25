import type { Project } from '../types/index'

export const projects: Project[] = [
  {
    title: 'Cinema System',
    description:
      'Web application for managing movie theater operations, including showtimes.',
    highlights: [
      'Comprehensive unit and integration testing',
      'Stress testing for performance optimization',
      'Security testing to ensure data protection',
    ],
    stack: ['Angular', 'Node JS', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/assets/img/cinema.png',
    codeUrl: 'https://github.com/luis-sagx/cinema-tests',
  },
  {
    title: 'Sagx UP — Financial Control',
    description:
      'Mobile application for personal financial management, including AI Assistant.',
    highlights: [
      'AI-driven financial insights',
      'Real-time expense tracking',
      'User-friendly mobile interface',
    ],
    stack: ['Flutter', 'Firebase', 'AI Google Studio', 'Material Design 3'],
    image: '/assets/img/sagxup.png',
    codeUrl: 'https://github.com/luis-sagx/sagx-up',
  },
  {
    title: 'Ecommerce "Sureño"',
    description:
      'Website designed for selling and managing products from the "Sureño" brand.',
    highlights: [
      'Full-stack e-commerce solution',
      'Real-time inventory management',
      'Administrative dashboard for order tracking',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB', 'Bootstrap'],
    image: '/assets/img/sureno.png',
    codeUrl: 'https://github.com/luis-sagx/Sureno.git',
  },
  {
    title: 'Letter Sending "Simply Lovely"',
    description:
      'Interactive platform for children to create, customize, and send digital letters.',
    highlights: [
      'Interactive UI for children',
      'Voice message integration',
      'Email automation',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node JS', 'Express', 'MongoDB'],
    image: '/assets/img/carta.png',
    codeUrl: 'https://github.com/MateoJa54/carta.git',
  },
  {
    title: 'Hospital Management System',
    description:
      'Web application for managing medical appointments and treatments.',
    highlights: [
      'Complete CRUD operations',
      'Appointment scheduling system',
      'Stored procedures for data integrity',
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'ASP.NET Core',
      'SQL Server',
      'Bootstrap',
    ],
    image: '/assets/img/hospital.png',
    codeUrl: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git',
  },
  {
    title: 'Expense Control',
    description:
      'Web application for managing and tracking personal expenses effectively.',
    highlights: [
      'Intuitive user interface',
      'Real-time expense tracking',
      'Data visualization with charts',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    image: '/assets/img/control.png',
    codeUrl: 'https://github.com/luis-sagx/expense-control.git',
  },
]
