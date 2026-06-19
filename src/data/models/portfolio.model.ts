/**
 * Portfolio Data Models
 * Centralized interfaces for type-safe portfolio content
 */

export interface Skill {
  name: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export interface Project {
  image: string
  title: string
  description: string
  technologies: string[]
  link: string
  githubUrl?: string
  liveUrl?: string
  highlights?: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  status?: string
  summary: string
  bullets: string[]
  technologies: string[]
  companyUrl?: string
}

export interface Education {
  level: 'primary' | 'secondary' | 'higher' | 'certification'
  institution: string
  period: string
  degree?: string
}

export type CourseId =
  | 'cryptography-course'
  | 'education-ai-era'
  | 'cybersecurity-awareness-leaders'
  | 'cybersecurity-comptia-security'
  | 'ai-fundamentals'
  | 'python-fundamentals-1-2'
  | 'intro-cybersecurity'
  | 'react-typescript'
  | 'linux-course'
  | 'foundational-csharp'

export interface CourseMetadata {
  id: CourseId
  provider: string
  date?: string
  certificateUrl?: string
  icon?: string
}

export interface Course {
  id: CourseId
  title: string
  provider: string
  date?: string
  certificateUrl?: string
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  ariaLabel: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
}

export interface PersonalInfo {
  firstname: string
  lastname: string
  profession: string
  status: string
  proofLine: string
  interests: string[]
  bio: string[]
  imageUrl: string
  resumeUrl?: string
}

export interface Language {
  name: string
  proficiency: string
}
