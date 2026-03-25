export interface Project {
  title: string
  description: string
  highlights: string[]
  stack: string[]
  image: string
  codeUrl: string
  liveUrl?: string
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface Certification {
  title: string
  issuer: string
  logoUrl: string
  credentialUrl: string
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Language {
  name: string
  level: string
}
