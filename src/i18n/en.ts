import type { Translation } from './types'
import { buildCourses } from './utils'

export const en: Translation = {
  locale: 'en',
  meta: {
    title: 'Luis Sagnay | Software Engineering',
    description:
      'Luis Sagnay portfolio: software engineering student building useful software through internships, projects, and practical engineering work.',
    ogTitle: 'Luis Sagnay | Software Engineering',
    ogDescription:
      'Portfolio of Luis Sagnay: internships, projects, and practical software engineering work.',
    siteName: 'Luis Sagnay Portfolio',
    ogImageAlt: 'Luis Sagnay portfolio preview',
  },
  navbar: {
    brand: 'Luis Sagnay',
    toggleNavigation: 'Toggle navigation',
    items: [
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Stack', href: '#stack' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  theme: {
    toggle: 'Toggle theme',
  },
  hero: {
    headline:
      'I am a Software Engineering student at Universidad de las Fuerzas Armadas ESPE and I build web products, automations, and reliable technical environments.',
    ctaPrimary: 'View projects',
    ctaSecondary: 'Download CV',
    imageAlt: 'Luis Sagnay - Software Engineering student',
  },
  experienceSection: {
    title: 'Experience',
    sub: 'Recent experience across internships, web development, and automation.',
    currentLabel: 'Current',
  },
  projectsSection: {
    title: 'Projects',
    sub: 'Selected projects across web development, automation, and applied software.',
    viewCode: 'View code',
    openProject: 'Open',
    screenshotAlt: 'screenshot',
  },
  stackSection: {
    title: 'Tech stack',
    sub: '',
  },
  aboutSection: {
    title: 'About',
    education: 'Education',
    languages: 'Languages',
    beyondCode: 'Beyond code',
    beyondItems: ['Soccer', 'Exercise', 'Reading', 'Family'],
  },
  certificationsSection: {
    title: 'Certifications',
    sub: '',
    showMore: 'Show more',
    showLess: 'Show less',
  },
  contactSection: {
    title: 'Get in touch',
    sub: 'Open to internships, junior roles, and interesting projects.',
    sendEmail: 'Send an email',
  },
  footer: {
    blurb:
      'Software Engineering student focused on web development, automation, and DevOps.',
    rights: 'All rights reserved.',
    languageLabel: 'Language',
    languageOptions: {
      en: 'English',
      es: 'Español',
    },
  },
  data: {
    personalInfo: {
      firstname: 'Luis',
      lastname: 'Sagnay',
      profession: 'Software Engineering student',
      status: 'Available for junior roles and internships',
      proofLine:
        'I build websites, internal tools, and automations that solve real business problems by shipping inside real teams.',
      interests: ['Development', 'AI', 'Cybersecurity', 'DevOps'],
      bio: [
        'Studying at',
        'Universidad de las Fuerzas Armadas ESPE.',
        'I care about useful software: clear interfaces, reliable workflows, and code that stays easy to improve.',
      ],
      imageUrl: '/img/LuisS.webp',
      resumeUrl: '/cv/Luis_Sagnay_CV.pdf',
    },
    contactInfo: {
      email: 'sagxluis@gmail.com',
      phone: '+593 983172773',
      location: 'Quito, Ecuador',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/luis-sagnay-030b8b361/',
          icon: 'linkedin',
          ariaLabel: 'LinkedIn profile of Luis Sagnay',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/luis-sagx',
          icon: 'github',
          ariaLabel: 'GitHub profile of Luis Sagnay',
        },
      ],
    },
    experience: [
      // {
      //   company: 'Pinprexat',
      //   role: 'Software Automation Intern',
      //   period: 'Jun 2026 - Present',
      //   status: 'Current',
      //   companyUrl: 'https://pinprexat.com/',
      //   summary:
      //     'I work on process automation and customer service workflow improvements for an industrial services company.',
      //   bullets: [
      //     'I design solutions that automate repetitive tasks and improve customer communication processes.',
      //     'I apply integration, traceability, and continuous improvement so workflows stay clear and reliable.',
      //   ],
      //   technologies: ['n8n', 'Meta', 'PostgreSQL'],
      // },
      {
        company: 'Software Evolutivo',
        role: 'Software Development Intern',
        period: 'Apr 2026 - Jun 2026',
        companyUrl: 'https://softwareevolutivo.com.ec/',
        summary:
          'I worked on web development and software maintenance, applying engineering best practices and deployment workflows.',
        bullets: [
          'I contributed to web programming improvements with a focus on performance, structure, and maintainability.',
          'I applied development best practices and supported integration and DevOps-related work.',
        ],
        technologies: ['Astro', 'Spring Boot', 'React', 'GitLab'],
      },
    ],
    projects: [
      {
        image: '/img/pockly.webp',
        title: 'Pockly',
        description:
          'Online toolkit for everyday development and productivity tasks.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
        link: 'https://github.com/luis-sagx/pockly',
        githubUrl: 'https://github.com/luis-sagx/pockly',
        liveUrl: 'https://pockly.vercel.app',
        highlights: [
          'Text, JSON, image, developer, and calculator tools',
          'Fast modular Angular applications',
        ],
      },
      {
        image: '/img/parrashub.webp',
        title: 'ParrasHub',
        description:
          'Real-time multi-room chat platform with PIN access and multimedia support.',
        technologies: ['React', 'NestJS', 'Socket.IO', 'PostgreSQL', 'MongoDB'],
        link: 'https://github.com/luis-sagx/parrahub',
        githubUrl: 'https://github.com/luis-sagx/parrahub',
        highlights: [
          'JWT admin authentication and protected rooms',
          'Async file uploads with Redis, BullMQ, and MinIO',
        ],
      },
      {
        image: '/img/cinema.webp',
        title: 'Cinema System',
        description:
          'Web application for managing movie theater operations, including showtimes.',
        technologies: [
          'Angular',
          'Node JS',
          'Express',
          'MongoDB',
          'Tailwind CSS',
        ],
        link: 'https://github.com/luis-sagx/cinema-tests',
        githubUrl: 'https://github.com/luis-sagx/cinema-tests',
        highlights: [
          'Comprehensive unit and integration testing',
          'Stress testing for performance optimization',
        ],
      },
      {
        image: '/img/sagxup.webp',
        title: 'Sagx UP - Financial Control',
        description:
          'Mobile application for personal financial management, including an AI assistant.',
        technologies: ['Flutter', 'Firebase', 'Material Design 3'],
        link: 'https://github.com/luis-sagx/sagx-up',
        githubUrl: 'https://github.com/luis-sagx/sagx-up',
        highlights: [
          'AI-driven financial insights',
          'User-friendly mobile interface',
        ],
      },
      {
        image: '/img/sureno.webp',
        title: 'Ecommerce "Sureño"',
        description:
          'Website designed to sell and manage products from the "Sureño" brand.',
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
        image: '/img/carta.webp',
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
        image: '/img/hospital.webp',
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
        highlights: ['Complete CRUD operations', 'Use of stored procedures'],
      },
    ],
    skillCategories: [
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
          { name: 'Astro' },
        ],
      },
      {
        title: 'Backend',
        icon: 'server',
        skills: [
          { name: 'Node.js' },
          { name: 'Express' },
          { name: 'n8n' },
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
    ],
    education: [
      {
        level: 'higher',
        institution: 'Universidad de las Fuerzas Armadas ESPE',
        period: '2022 - present',
        degree: 'Software Engineering',
      },
    ],
    courses: buildCourses({
      'cryptography-course': 'Cryptography Course',
      'education-ai-era': 'Education in the Age of Artificial Intelligence',
      'cybersecurity-awareness-leaders': 'Cybersecurity Awareness for Corporate Leaders',
      'cybersecurity-comptia-security': 'Cybersecurity - CompTIA Security',
      'ai-fundamentals': 'Artificial Intelligence Fundamentals',
      'python-fundamentals-1-2': 'Python Fundamentals 1 & 2',
      'intro-cybersecurity': 'Introduction to Cybersecurity',
      'react-typescript': 'React and TypeScript',
      'linux-course': 'Complete Linux Course',
      'foundational-csharp': 'Foundational C# with Microsoft',
    }),
    languages: [
      { name: 'Spanish', proficiency: 'Native' },
      { name: 'English', proficiency: 'B1 - Intermediate' },
    ],
  },
}
