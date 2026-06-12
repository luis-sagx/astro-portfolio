import type { Experience } from '../models/portfolio.model'

export const EXPERIENCE: Experience[] = [
  {
    company: 'Pinprexat',
    role: 'Software Automation Intern',
    period: 'Jun 2026 - Present',
    status: 'Current',
    companyUrl: 'https://pinprexat.com/',
    summary:
      'Building an n8n automation for customer response, lead qualification and quotation flow support for an industrial services company.',
    bullets: [
      'Designing a client-facing bot workflow that separates qualified leads from general inquiries.',
      'Automating quotation handoff steps while keeping the customer communication path traceable.',
    ],
    technologies: ['n8n', 'JavaScript', 'Automation'],
  },
  {
    company: 'Software Evolutivo',
    role: 'Software Development Intern',
    period: 'Apr 2026 - Jun 2026',
    companyUrl: 'https://softwareevolutivo.com.ec/',
    summary:
      'Worked across web modernization, internal JHipster maintenance, CI/CD pipelines and a Backstage proof of concept.',
    bullets: [
      'Rebuilt the company website experience with Astro as part of a WordPress-to-static modernization effort.',
      'Fixed issues and applied improvements in an internal JHipster project.',
      'Worked with pipelines and deployed a Backstage proof of concept on an internal server.',
    ],
    technologies: ['Astro', 'JHipster', 'CI/CD', 'Backstage'],
  },
]
