import type { Translation } from "./types";
import {
  buildContactInfo,
  buildCourses,
  buildEducation,
  buildExperience,
  buildLanguages,
  buildPersonalInfo,
  buildProjects,
  buildSkillCategories,
} from "./builders";

export const es: Translation = {
  locale: "es",
  meta: {
    title: "Luis Sagnay | Ingeniería de Software",
    description:
      "Portafolio de Luis Sagnay: estudiante de ingeniería de software que construye software útil a través de pasantías, proyectos y trabajo práctico de ingeniería.",
    ogTitle: "Luis Sagnay | Ingeniería de Software",
    ogDescription:
      "Portafolio de Luis Sagnay: pasantías, proyectos y trabajo práctico de ingeniería de software.",
    siteName: "Portafolio de Luis Sagnay",
    ogImageAlt: "Vista previa del portafolio de Luis Sagnay",
  },
  navbar: {
    brand: "Luis Sagnay",
    toggleNavigation: "Cambiar navegación",
    items: [
      { name: "Experiencia", href: "#experience" },
      { name: "Proyectos", href: "#projects" },
      { name: "Stack", href: "#stack" },
      { name: "Contacto", href: "#contact" },
    ],
  },
  theme: {
    toggle: "Cambiar tema",
  },
  hero: {
    headline:
      "Soy estudiante de Ingeniería de Software en la Universidad de las Fuerzas Armadas ESPE y desarrollo productos web, automatizaciones y entornos técnicos confiables.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Descargar CV",
    imageAlt: "Luis Sagnay - estudiante de Ingeniería de Software",
  },
  experienceSection: {
    title: "Experiencia",
    sub: "Experiencia reciente en pasantías, desarrollo web y automatización.",
  },
  projectsSection: {
    title: "Proyectos",
    sub: "Proyectos seleccionados de desarrollo web, automatización y software aplicado.",
    viewCode: "Ver código",
    openProject: "Abrir",
    screenshotAlt: "captura",
  },
  stackSection: {
    title: "Stack tecnológico",
    sub: "",
  },
  aboutSection: {
    title: "Sobre mí",
    education: "Educación",
    languages: "Idiomas",
    beyondCode: "Más allá del código",
    beyondItems: ["Fútbol", "Ejercicio", "Lectura", "Familia"],
  },
  certificationsSection: {
    title: "Certificaciones",
    sub: "",
    showMore: "Mostrar más",
    showLess: "Mostrar menos",
  },
  contactSection: {
    title: "Contacto",
    sub: "Disponible para roles junior y proyectos interesantes.",
    sendEmail: "Enviar un correo",
  },
  footer: {
    blurb:
      "Estudiante de Ingeniería de Software enfocado en desarrollo web, automatización y DevOps.",
    rights: "Todos los derechos reservados.",
    languageLabel: "Idioma",
    languageOptions: {
      en: "English",
      es: "Español",
    },
  },
  data: {
    personalInfo: buildPersonalInfo({
      profession: "Estudiante de Ingeniería de Software",
      status: "Disponible para roles junior",
      proofLine:
        "Construyo sitios web, herramientas internas y automatizaciones que resuelven problemas reales de negocio trabajando dentro de equipos reales.",
      bio: [
        "Estudiando en",
        "Universidad de las Fuerzas Armadas ESPE.",
        "Me importa el software útil: interfaces claras, flujos confiables y código que siga siendo fácil de mejorar.",
      ],
    }),
    contactInfo: buildContactInfo({
      linkedin: { ariaLabel: "Perfil de LinkedIn de Luis Sagnay" },
      github: { ariaLabel: "Perfil de GitHub de Luis Sagnay" },
    }),
    experience: buildExperience({
      "pinprexat-intern": {
        role: "Pasante de Desarrollo de Software",
        period: "Jun 2026 - Oct 2026",
        summary:
          "Contribuí al desarrollo de una herramienta para agilizar la preparación de compras públicas y a la mejora del sistema interno del laboratorio.",
        bullets: [
          "Automaticé la recopilación de información de procesos de compra pública y añadí un asistente para resolver dudas a partir de la documentación de cada proceso.",
          "Mejoré los portales de administración y clientes, el backend y la app móvil de la plataforma interna del laboratorio.",
        ],
      },
      "software-evolutivo": {
        role: "Practicante de Desarrollo de Software",
        period: "Abr 2026 - Jun 2026",
        summary:
          "Trabajé en desarrollo y mantenimiento de soluciones web, aplicando buenas prácticas de ingeniería y despliegue.",
        bullets: [
          "Participé en mejoras de programación web con foco en rendimiento, orden y mantenibilidad.",
          "Apliqué buenas prácticas de desarrollo y apoyé tareas relacionadas con integración y DevOps.",
        ],
      },
    }),
    projects: buildProjects({
      sureno: {
        description:
          "E-commerce para una licorería que permite comprar al por menor o al por mayor, con cajas de 12 unidades.",
        highlights: [
          "Catálogo y carrito para compras de bebidas",
          "Precios y pedidos mayoristas por caja de 12 unidades",
        ],
      },
      chiroless: {
        description:
          "App móvil para registrar ingresos y gastos personales rápidamente, incluso desde un widget.",
        highlights: [
          "La IA de Firebase interpreta texto o voz para detectar el valor y la categoría",
          "Resumen de movimientos y control de finanzas personales",
        ],
      },
      parrashub: {
        description:
          "Chat en tiempo real con salas privadas: un administrador las crea con un PIN y los demás se unen con el PIN y un nickname.",
        highlights: [
          "Mensajería en vivo mediante WebSockets",
          "Salas privadas creadas y administradas por PIN",
        ],
      },
      lotengo: {
        description:
          "App móvil para aprender vocabulario en inglés, desde nivel básico hasta avanzado, con tarjetas, preguntas y repetición espaciada inspirada en Anki.",
        highlights: [
          "Práctica de vocabulario con tarjetas y preguntas",
          "Repaso espaciado para ayudar a retener lo aprendido",
        ],
      },
      pockly: {
        description:
          "Kit online de herramientas para tareas diarias de desarrollo y productividad.",
        highlights: [
          "Herramientas de texto, JSON, imagen, desarrollo y cálculo",
          "Aplicaciones Angular modulares y rápidas",
        ],
      },
    }),
    skillCategories: buildSkillCategories({
      languages: { title: "Lenguajes de programación" },
      frontend: { title: "Frontend" },
      backend: { title: "Backend" },
      databases: { title: "Bases de datos" },
      tools: { title: "Herramientas y DevOps" },
    }),
    education: buildEducation({
      espe: { period: "2022 - actualidad", degree: "Ingeniería de Software" },
    }),
    courses: buildCourses({
      "cryptography-course": { title: "Curso de Criptografía" },
      "education-ai-era": {
        title: "Educación en la Era de la Inteligencia Artificial",
      },
      "cybersecurity-comptia-security": {
        title: "Ciberseguridad - CompTIA Security",
      },
      "ai-fundamentals": { title: "Fundamentos de Inteligencia Artificial" },
      "python-fundamentals-1-2": { title: "Fundamentos de Python 1 y 2" },
      "intro-cybersecurity": { title: "Introducción a la Ciberseguridad" },
      "react-typescript": { title: "React y TypeScript" },
      "linux-course": { title: "Curso completo de Linux" },
      "foundational-csharp": { title: "Fundamentos de C# con Microsoft" },
      "intermediate-docker": { title: "Docker intermedio" },
      "aws-concepts": { title: "Conceptos de AWS" },
      "rag-langchain": {
        title: "Retrieval Augmented Generation (RAG) con LangChain",
      },
    }),
    languages: buildLanguages({
      spanish: { name: "Español", proficiency: "Nativo" },
      english: { name: "Inglés", proficiency: "B1 - Intermedio" },
    }),
  },
};
