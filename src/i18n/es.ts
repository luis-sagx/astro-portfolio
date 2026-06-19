import type { Translation } from './types'
import { buildCourses } from './utils'

export const es: Translation = {
  locale: 'es',
  meta: {
    title: 'Luis Sagnay | Ingeniería de Software',
    description:
      'Portafolio de Luis Sagnay: estudiante de ingeniería de software que construye software útil a través de pasantías, proyectos y trabajo práctico de ingeniería.',
    ogTitle: 'Luis Sagnay | Ingeniería de Software',
    ogDescription:
      'Portafolio de Luis Sagnay: pasantías, proyectos y trabajo práctico de ingeniería de software.',
    siteName: 'Portafolio de Luis Sagnay',
    ogImageAlt: 'Vista previa del portafolio de Luis Sagnay',
  },
  navbar: {
    brand: 'Luis Sagnay',
    toggleNavigation: 'Cambiar navegación',
    items: [
      { name: 'Experiencia', href: '#experience' },
      { name: 'Proyectos', href: '#projects' },
      { name: 'Stack', href: '#stack' },
      { name: 'Contacto', href: '#contact' },
    ],
  },
  theme: {
    toggle: 'Cambiar tema',
  },
  hero: {
    headline:
      'Soy estudiante de Ingeniería de Software en la Universidad de las Fuerzas Armadas ESPE y desarrollo productos web, automatizaciones y entornos técnicos confiables.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Descargar CV',
    imageAlt: 'Luis Sagnay - estudiante de Ingeniería de Software',
  },
  experienceSection: {
    title: 'Experiencia',
    sub: 'Experiencia reciente en pasantías, desarrollo web y automatización.',
    currentLabel: 'Actual',
  },
  projectsSection: {
    title: 'Proyectos',
    sub: 'Proyectos seleccionados de desarrollo web, automatización y software aplicado.',
    viewCode: 'Ver código',
    openProject: 'Abrir',
    screenshotAlt: 'captura',
  },
  stackSection: {
    title: 'Stack tecnológico',
    sub: '',
  },
  aboutSection: {
    title: 'Sobre mí',
    education: 'Educación',
    languages: 'Idiomas',
    beyondCode: 'Más allá del código',
    beyondItems: ['Fútbol', 'Ejercicio', 'Lectura', 'Familia'],
  },
  certificationsSection: {
    title: 'Certificaciones',
    sub: '',
    showMore: 'Mostrar más',
    showLess: 'Mostrar menos',
  },
  contactSection: {
    title: 'Contacto',
    sub: 'Disponible para pasantías, roles junior y proyectos interesantes.',
    sendEmail: 'Enviar un correo',
  },
  footer: {
    blurb:
      'Estudiante de Ingeniería de Software enfocado en desarrollo web, automatización y DevOps.',
    rights: 'Todos los derechos reservados.',
    languageLabel: 'Idioma',
    languageOptions: {
      en: 'English',
      es: 'Español',
    },
  },
  data: {
    personalInfo: {
      firstname: 'Luis',
      lastname: 'Sagnay',
      profession: 'Estudiante de Ingeniería de Software',
      status: 'Disponible para roles junior y pasantías',
      proofLine:
        'Construyo sitios web, herramientas internas y automatizaciones que resuelven problemas reales de negocio trabajando dentro de equipos reales.',
      interests: ['Development', 'AI', 'Cybersecurity', 'DevOps'],
      bio: [
        'Estudiando en',
        'Universidad de las Fuerzas Armadas ESPE.',
        'Me importa el software útil: interfaces claras, flujos confiables y código que siga siendo fácil de mejorar.',
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
          ariaLabel: 'Perfil de LinkedIn de Luis Sagnay',
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/luis-sagx',
          icon: 'github',
          ariaLabel: 'Perfil de GitHub de Luis Sagnay',
        },
      ],
    },
    experience: [
      // {
      //   company: 'Pinprexat',
      //   role: 'Practicante de Automatización de Software',
      //   period: 'Jun 2026 - Actualidad',
      //   status: 'Actual',
      //   companyUrl: 'https://pinprexat.com/',
      //   summary:
      //     'Trabajo en automatización de procesos y mejora de flujos de atención al cliente para una empresa de servicios industriales.',
      //   bullets: [
      //     'Diseño soluciones para automatizar tareas repetitivas y ordenar procesos de comunicación con clientes.',
      //     'Aplico integración, trazabilidad y mejora continua para que los flujos sean más claros y confiables.',
      //   ],
      //   technologies: ['n8n', 'Meta', 'PostgreSQL'],
      // },
      {
        company: 'Software Evolutivo',
        role: 'Practicante de Desarrollo de Software',
        period: 'Abr 2026 - Jun 2026',
        companyUrl: 'https://softwareevolutivo.com.ec/',
        summary:
          'Trabajé en desarrollo y mantenimiento de soluciones web, aplicando buenas prácticas de ingeniería y despliegue.',
        bullets: [
          'Participé en mejoras de programación web con foco en rendimiento, orden y mantenibilidad.',
          'Apliqué buenas prácticas de desarrollo y apoyé tareas relacionadas con integración y DevOps.',
        ],
        technologies: ['Astro', 'Spring Boot', 'React', 'GitLab'],
      },
    ],
    projects: [
      {
        image: '/img/pockly.webp',
        title: 'Pockly',
        description:
          'Kit online de herramientas para tareas diarias de desarrollo y productividad.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
        link: 'https://github.com/luis-sagx/pockly',
        githubUrl: 'https://github.com/luis-sagx/pockly',
        liveUrl: 'https://pockly.vercel.app',
        highlights: [
          'Herramientas de texto, JSON, imagen, desarrollo y cálculo',
          'Aplicaciones Angular modulares y rápidas',
        ],
      },
      {
        image: '/img/parrashub.webp',
        title: 'ParrasHub',
        description:
          'Plataforma de chat multi-sala en tiempo real con acceso por PIN y soporte multimedia.',
        technologies: ['React', 'NestJS', 'Socket.IO', 'PostgreSQL', 'MongoDB'],
        link: 'https://github.com/luis-sagx/parrahub',
        githubUrl: 'https://github.com/luis-sagx/parrahub',
        highlights: [
          'Autenticación de administrador con JWT y salas protegidas',
          'Subida asíncrona de archivos con Redis, BullMQ y MinIO',
        ],
      },
      {
        image: '/img/cinema.webp',
        title: 'Cinema System',
        description:
          'Aplicación web para gestionar operaciones de una sala de cine, incluyendo funciones y horarios.',
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
          'Pruebas unitarias y de integración completas',
          'Pruebas de estrés para optimización de rendimiento',
        ],
      },
      {
        image: '/img/sagxup.webp',
        title: 'Sagx UP - Financial Control',
        description:
          'Aplicación móvil para gestión financiera personal, incluyendo un asistente con IA.',
        technologies: ['Flutter', 'Firebase', 'Material Design 3'],
        link: 'https://github.com/luis-sagx/sagx-up',
        githubUrl: 'https://github.com/luis-sagx/sagx-up',
        highlights: [
          'Insights financieros impulsados por IA',
          'Interfaz móvil fácil de usar',
        ],
      },
      {
        image: '/img/sureno.webp',
        title: 'Ecommerce "Sureño"',
        description:
          'Sitio web diseñado para vender y gestionar productos de la marca "Sureño".',
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
          'Solución e-commerce full stack',
          'Panel administrativo para seguimiento de pedidos',
        ],
      },
      {
        image: '/img/carta.webp',
        title: 'Letter Sending "Simply Lovely"',
        description:
          'Plataforma interactiva para que niños creen, personalicen y envíen cartas digitales.',
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
        highlights: [
          'Interfaz interactiva para niños',
          'Automatización de correos',
        ],
      },
      {
        image: '/img/hospital.webp',
        title: 'Hospital Management System',
        description:
          'Aplicación web para gestionar citas médicas y tratamientos.',
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
          'Operaciones CRUD completas',
          'Aplicación de procedimientos almacenados',
        ],
      },
    ],
    skillCategories: [
      {
        title: 'Lenguajes de programación',
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
        title: 'Bases de datos',
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
        title: 'Herramientas y DevOps',
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
        period: '2022 - actualidad',
        degree: 'Ingeniería de Software',
      },
    ],
    courses: buildCourses({
      'cryptography-course': 'Curso de Criptografía',
      'education-ai-era': 'Educación en la Era de la Inteligencia Artificial',
      'cybersecurity-awareness-leaders': 'Concientización de Ciberseguridad para Líderes Corporativos',
      'cybersecurity-comptia-security': 'Ciberseguridad - CompTIA Security',
      'ai-fundamentals': 'Fundamentos de Inteligencia Artificial',
      'python-fundamentals-1-2': 'Fundamentos de Python 1 y 2',
      'intro-cybersecurity': 'Introducción a la Ciberseguridad',
      'react-typescript': 'React y TypeScript',
      'linux-course': 'Curso completo de Linux',
      'foundational-csharp': 'Fundamentos de C# con Microsoft',
    }),
    languages: [
      { name: 'Español', proficiency: 'Nativo' },
      { name: 'Inglés', proficiency: 'B1 - Intermedio' },
    ],
  },
}
