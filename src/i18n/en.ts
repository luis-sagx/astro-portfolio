import type { Translation } from './types'
import {
  buildContactInfo,
  buildCourses,
  buildEducation,
  buildExperience,
  buildLanguages,
  buildPersonalInfo,
  buildProjects,
  buildSkillCategories,
} from './builders'

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
    sub: 'Open to junior roles, and interesting projects.',
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
    personalInfo: buildPersonalInfo({
      profession: 'Software Engineering student',
      status: 'Available for junior roles',
      proofLine:
        'I build websites, internal tools, and automations that solve real business problems by shipping inside real teams.',
      bio: [
        'Studying at',
        'Universidad de las Fuerzas Armadas ESPE.',
        'I care about useful software: clear interfaces, reliable workflows, and code that stays easy to improve.',
      ],
    }),
    contactInfo: buildContactInfo({
      linkedin: { ariaLabel: 'LinkedIn profile of Luis Sagnay' },
      github: { ariaLabel: 'GitHub profile of Luis Sagnay' },
    }),
    experience: buildExperience({
      'pinprexat-intern': {
        role: 'Software Development Intern',
        period: 'Jun 2026 - Oct 2026',
        summary:
          'I contributed to tools for searching public information and to the continued development of an internal platform for managing technical services.',
        bullets: [
          'I developed a solution that gathers public information and supports questions through a conversational assistant grounded in available documentation.',
          'I improved the web portals, backend, and mobile app supporting internal service management.',
          'I joined daily team coordination meetings.',
        ],
      },
      'software-evolutivo': {
        role: 'Software Development Intern',
        period: 'Apr 2026 - Jun 2026',
        summary:
          'I worked on web development and software maintenance, applying engineering best practices and deployment workflows.',
        bullets: [
          'I contributed to web programming improvements with a focus on performance, structure, and maintainability.',
          'I applied development best practices and supported integration and DevOps-related work.',
        ],
      },
    }),
    projects: buildProjects({
      pockly: {
        description:
          'Online toolkit for everyday development and productivity tasks.',
        highlights: [
          'Text, JSON, image, developer, and calculator tools',
          'Fast modular Angular applications',
        ],
      },
      parrashub: {
        description:
          'Real-time multi-room chat platform with PIN access and multimedia support.',
        highlights: [
          'JWT admin authentication and protected rooms',
          'Async file uploads with Redis, BullMQ, and MinIO',
        ],
      },
      cinema: {
        description:
          'Web application for managing movie theater operations, including showtimes.',
        highlights: [
          'Comprehensive unit and integration testing',
          'Stress testing for performance optimization',
        ],
      },
      sagxup: {
        description:
          'Mobile application for personal financial management, including an AI assistant.',
        highlights: [
          'AI-driven financial insights',
          'User-friendly mobile interface',
        ],
      },
      sureno: {
        description:
          'Website designed to sell and manage products from the "Sureño" brand.',
        highlights: [
          'Full-stack e-commerce solution',
          'Administrative dashboard for order tracking',
        ],
      },
      carta: {
        description:
          'Interactive platform for children to create, customize, and send digital letters.',
        highlights: ['Interactive UI for children', 'Email automation'],
      },
      hospital: {
        description:
          'Web application for managing medical appointments and treatments.',
        highlights: ['Complete CRUD operations', 'Use of stored procedures'],
      },
    }),
    skillCategories: buildSkillCategories({
      languages: { title: 'Programming Languages' },
      frontend: { title: 'Frontend' },
      backend: { title: 'Backend' },
      databases: { title: 'Databases' },
      tools: { title: 'Tools & DevOps' },
    }),
    education: buildEducation({
      espe: { period: '2022 - present', degree: 'Software Engineering' },
    }),
    courses: buildCourses({
      'cryptography-course': { title: 'Cryptography Course' },
      'education-ai-era': {
        title: 'Education in the Age of Artificial Intelligence',
      },
      'cybersecurity-awareness-leaders': {
        title: 'Cybersecurity Awareness for Corporate Leaders',
      },
      'cybersecurity-comptia-security': {
        title: 'Cybersecurity - CompTIA Security',
      },
      'ai-fundamentals': { title: 'Artificial Intelligence Fundamentals' },
      'python-fundamentals-1-2': { title: 'Python Fundamentals 1 & 2' },
      'intro-cybersecurity': { title: 'Introduction to Cybersecurity' },
      'react-typescript': { title: 'React and TypeScript' },
      'linux-course': { title: 'Complete Linux Course' },
      'foundational-csharp': { title: 'Foundational C# with Microsoft' },
    }),
    languages: buildLanguages({
      spanish: { name: 'Spanish', proficiency: 'Native' },
      english: { name: 'English', proficiency: 'B1 - Intermediate' },
    }),
  },
}
