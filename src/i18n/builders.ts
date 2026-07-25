import {
  CONTACT_INFO,
  COURSES,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  SOCIAL_LINKS,
} from '../data/constants';
import type {
  ContactInfo,
  Course,
  CourseContent,
  Education,
  EducationContent,
  Experience,
  ExperienceContent,
  Language,
  LanguageContent,
  PersonalInfo,
  PersonalInfoContent,
  Project,
  ProjectContent,
  SkillCategory,
  SkillCategoryContent,
  SocialLinkContent,
  SocialLinkId,
} from '../data/models/portfolio.model';

/**
 * Merges locale-invariant metadata with the translated strings for the same id,
 * preserving the metadata order. The `Record` key type makes a missing or
 * misspelled translation a compile error.
 */
function mergeById<M extends { id: string }, C>(
  metadata: readonly M[],
  content: Record<M['id'], C>,
): Array<M & C> {
  return metadata.map((item) => ({
    ...item,
    ...content[item.id as M['id']],
  }));
}

export function buildProjects(
  content: Record<Project['id'], ProjectContent>,
): Project[] {
  return mergeById(PROJECTS, content);
}

export function buildExperience(
  content: Record<Experience['id'], ExperienceContent>,
): Experience[] {
  return mergeById(EXPERIENCE, content);
}

export function buildSkillCategories(
  content: Record<SkillCategory['id'], SkillCategoryContent>,
): SkillCategory[] {
  return mergeById(SKILL_CATEGORIES, content);
}

export function buildEducation(
  content: Record<Education['id'], EducationContent>,
): Education[] {
  return mergeById(EDUCATION, content);
}

export function buildCourses(
  content: Record<Course['id'], CourseContent>,
): Course[] {
  return mergeById(COURSES, content);
}

export function buildLanguages(
  content: Record<Language['id'], LanguageContent>,
): Language[] {
  return mergeById(LANGUAGES, content);
}

export function buildContactInfo(
  socialLinks: Record<SocialLinkId, SocialLinkContent>,
): ContactInfo {
  return {
    ...CONTACT_INFO,
    socialLinks: mergeById(SOCIAL_LINKS, socialLinks),
  };
}

export function buildPersonalInfo(content: PersonalInfoContent): PersonalInfo {
  return { ...PERSONAL_INFO, ...content };
}
