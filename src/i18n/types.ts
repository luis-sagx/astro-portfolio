import type {
  ContactInfo,
  Course,
  Education,
  Experience,
  Language,
  PersonalInfo,
  Project,
  SkillCategory,
} from '../data/models/portfolio.model'
import type { Locale } from './config'

export interface Translation {
  locale: Locale
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    siteName: string
    ogImageAlt: string
  }
  navbar: {
    brand: string
    toggleNavigation: string
    items: Array<{ name: string; href: string }>
  }
  theme: {
    toggle: string
  }
  hero: {
    headline: string
    ctaPrimary: string
    ctaSecondary: string
    imageAlt: string
  }
  experienceSection: {
    title: string
    sub: string
    currentLabel: string
  }
  projectsSection: {
    title: string
    sub: string
    viewCode: string
    openProject: string
    screenshotAlt: string
  }
  stackSection: {
    title: string
    sub: string
  }
  aboutSection: {
    title: string
    education: string
    languages: string
    beyondCode: string
    beyondTags: string
  }
  certificationsSection: {
    title: string
    sub: string
    showMore: string
    showLess: string
  }
  contactSection: {
    title: string
    sub: string
    sendEmail: string
  }
  footer: {
    blurb: string
    rights: string
    languageLabel: string
    languageOptions: Record<Locale, string>
  }
  data: {
    personalInfo: PersonalInfo
    contactInfo: ContactInfo
    experience: Experience[]
    projects: Project[]
    skillCategories: SkillCategory[]
    education: Education[]
    courses: Course[]
    languages: Language[]
  }
}
