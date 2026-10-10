/**
 * Portfolio Data Models
 *
 * Every portfolio entity is split in two halves:
 *  - `*Metadata`: locale-invariant facts (urls, images, icons, technologies).
 *    Lives once in `src/data/constants`.
 *  - `*Content`: translatable strings. Lives per locale in `src/i18n/{en,es}.ts`.
 *
 * The public type consumed by components is the merge of both halves, produced
 * by the builders in `src/i18n/builders.ts`.
 */

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export type SkillCategoryId =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools'

export interface Skill {
  name: string
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

export interface SkillCategoryMetadata {
  id: SkillCategoryId
  icon: string
  skills: Skill[]
}

export interface SkillCategoryContent {
  title: string
}

export type SkillCategory = SkillCategoryMetadata & SkillCategoryContent

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectId =
  | 'sureno'
  | 'chiroless'
  | 'parrashub'
  | 'lotengo'
  | 'pockly'

export interface ProjectMetadata {
  id: ProjectId
  /** Product name, identical across locales. */
  title: string
  images: string[]
  technologies: string[]
  link: string
  githubUrl?: string
  liveUrl?: string
}

export interface ProjectContent {
  description: string
  highlights?: string[]
}

export type Project = ProjectMetadata & ProjectContent

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export type ExperienceId =
  | 'pinprexat-intern'
  | 'software-evolutivo'

export interface ExperienceMetadata {
  id: ExperienceId
  company: string
  companyUrl?: string
  technologies: string[]
}

export interface ExperienceContent {
  role: string
  period: string
  status?: string
  summary: string
  bullets: string[]
}

export type Experience = ExperienceMetadata & ExperienceContent

/* -------------------------------------------------------------------------- */
/* Education                                                                  */
/* -------------------------------------------------------------------------- */

export type EducationId = 'espe'

export interface EducationMetadata {
  id: EducationId
  level: 'primary' | 'secondary' | 'higher' | 'certification'
  institution: string
}

export interface EducationContent {
  period: string
  degree?: string
}

export type Education = EducationMetadata & EducationContent

/* -------------------------------------------------------------------------- */
/* Courses                                                                    */
/* -------------------------------------------------------------------------- */

export type CourseId =
  | 'cryptography-course'
  | 'education-ai-era'
  | 'cybersecurity-comptia-security'
  | 'ai-fundamentals'
  | 'python-fundamentals-1-2'
  | 'intro-cybersecurity'
  | 'react-typescript'
  | 'linux-course'
  | 'foundational-csharp'
  | 'intermediate-docker'
  | 'aws-concepts'
  | 'rag-langchain'

export interface CourseMetadata {
  id: CourseId
  provider: string
  date?: string
  certificateUrl?: string
  icon?: string
}

export interface CourseContent {
  title: string
}

export type Course = CourseMetadata & CourseContent

/* -------------------------------------------------------------------------- */
/* Languages                                                                  */
/* -------------------------------------------------------------------------- */

export type LanguageId = 'spanish' | 'english'

export interface LanguageMetadata {
  id: LanguageId
}

export interface LanguageContent {
  name: string
  proficiency: string
}

export type Language = LanguageMetadata & LanguageContent

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export type SocialLinkId = 'linkedin' | 'github'

export interface SocialLinkMetadata {
  id: SocialLinkId
  platform: string
  url: string
  icon: string
}

export interface SocialLinkContent {
  ariaLabel: string
}

export type SocialLink = SocialLinkMetadata & SocialLinkContent

export interface ContactInfoMetadata {
  email: string
  phone: string
  location: string
}

export interface ContactInfo extends ContactInfoMetadata {
  socialLinks: SocialLink[]
}

/* -------------------------------------------------------------------------- */
/* Personal info                                                              */
/* -------------------------------------------------------------------------- */

export interface PersonalInfoMetadata {
  firstname: string
  lastname: string
  /** Tech keywords rendered as-is in every locale. */
  interests: string[]
  imageUrl: string
  resumeUrl?: string
}

export interface PersonalInfoContent {
  profession: string
  status: string
  proofLine: string
  bio: string[]
}

export type PersonalInfo = PersonalInfoMetadata & PersonalInfoContent
