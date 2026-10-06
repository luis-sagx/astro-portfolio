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
    sub: 'Disponible para roles junior y proyectos interesantes.',
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
    personalInfo: buildPersonalInfo({
      profession: 'Estudiante de Ingeniería de Software',
      status: 'Disponible para roles junior',
      proofLine:
        'Construyo sitios web, herramientas internas y automatizaciones que resuelven problemas reales de negocio trabajando dentro de equipos reales.',
      bio: [
        'Estudiando en',
        'Universidad de las Fuerzas Armadas ESPE.',
        'Me importa el software útil: interfaces claras, flujos confiables y código que siga siendo fácil de mejorar.',
      ],
    }),
    contactInfo: buildContactInfo({
      linkedin: { ariaLabel: 'Perfil de LinkedIn de Luis Sagnay' },
      github: { ariaLabel: 'Perfil de GitHub de Luis Sagnay' },
    }),
    experience: buildExperience({
      'pinprexat-intern': {
        role: 'Pasante de Desarrollo de Software',
        period: 'Jun 2026 - Oct 2026',
        summary:
          'Colaboré en herramientas para consultar información pública y en la evolución de una plataforma interna para gestionar servicios técnicos.',
        bullets: [
          'Desarrollé una solución que recopila información pública y permite consultarla con apoyo de un asistente conversacional basado en documentación disponible.',
          'Mejoré los portales web, el backend y la aplicación móvil que apoyan la gestión interna de servicios.',
          'Participé en reuniones diarias de coordinación con el equipo.',
        ],
      },
      'software-evolutivo': {
        role: 'Practicante de Desarrollo de Software',
        period: 'Abr 2026 - Jun 2026',
        summary:
          'Trabajé en desarrollo y mantenimiento de soluciones web, aplicando buenas prácticas de ingeniería y despliegue.',
        bullets: [
          'Participé en mejoras de programación web con foco en rendimiento, orden y mantenibilidad.',
          'Apliqué buenas prácticas de desarrollo y apoyé tareas relacionadas con integración y DevOps.',
        ],
      },
    }),
    projects: buildProjects({
      pockly: {
        description:
          'Kit online de herramientas para tareas diarias de desarrollo y productividad.',
        highlights: [
          'Herramientas de texto, JSON, imagen, desarrollo y cálculo',
          'Aplicaciones Angular modulares y rápidas',
        ],
      },
      parrashub: {
        description:
          'Plataforma de chat multi-sala en tiempo real con acceso por PIN y soporte multimedia.',
        highlights: [
          'Autenticación de administrador con JWT y salas protegidas',
          'Subida asíncrona de archivos con Redis, BullMQ y MinIO',
        ],
      },
      cinema: {
        description:
          'Aplicación web para gestionar operaciones de una sala de cine, incluyendo funciones y horarios.',
        highlights: [
          'Pruebas unitarias y de integración completas',
          'Pruebas de estrés para optimización de rendimiento',
        ],
      },
      sagxup: {
        description:
          'Aplicación móvil para gestión financiera personal, incluyendo un asistente con IA.',
        highlights: [
          'Insights financieros impulsados por IA',
          'Interfaz móvil fácil de usar',
        ],
      },
      sureno: {
        description:
          'Sitio web diseñado para vender y gestionar productos de la marca "Sureño".',
        highlights: [
          'Solución e-commerce full stack',
          'Panel administrativo para seguimiento de pedidos',
        ],
      },
      carta: {
        description:
          'Plataforma interactiva para que niños creen, personalicen y envíen cartas digitales.',
        highlights: [
          'Interfaz interactiva para niños',
          'Automatización de correos',
        ],
      },
      hospital: {
        description:
          'Aplicación web para gestionar citas médicas y tratamientos.',
        highlights: [
          'Operaciones CRUD completas',
          'Aplicación de procedimientos almacenados',
        ],
      },
    }),
    skillCategories: buildSkillCategories({
      languages: { title: 'Lenguajes de programación' },
      frontend: { title: 'Frontend' },
      backend: { title: 'Backend' },
      databases: { title: 'Bases de datos' },
      tools: { title: 'Herramientas y DevOps' },
    }),
    education: buildEducation({
      espe: { period: '2022 - actualidad', degree: 'Ingeniería de Software' },
    }),
    courses: buildCourses({
      'cryptography-course': { title: 'Curso de Criptografía' },
      'education-ai-era': {
        title: 'Educación en la Era de la Inteligencia Artificial',
      },
      'cybersecurity-awareness-leaders': {
        title: 'Concientización de Ciberseguridad para Líderes Corporativos',
      },
      'cybersecurity-comptia-security': {
        title: 'Ciberseguridad - CompTIA Security',
      },
      'ai-fundamentals': { title: 'Fundamentos de Inteligencia Artificial' },
      'python-fundamentals-1-2': { title: 'Fundamentos de Python 1 y 2' },
      'intro-cybersecurity': { title: 'Introducción a la Ciberseguridad' },
      'react-typescript': { title: 'React y TypeScript' },
      'linux-course': { title: 'Curso completo de Linux' },
      'foundational-csharp': { title: 'Fundamentos de C# con Microsoft' },
    }),
    languages: buildLanguages({
      spanish: { name: 'Español', proficiency: 'Nativo' },
      english: { name: 'Inglés', proficiency: 'B1 - Intermedio' },
    }),
  },
}
