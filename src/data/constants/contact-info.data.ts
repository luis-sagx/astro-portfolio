import type { ContactInfo } from '../models/portfolio.model'

export const CONTACT_INFO: ContactInfo = {
  email: 'sagxluis@gmail.com',
  phone: '+593 983172773',
  location: 'Quito, Ecuador',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luis-sagnay-030b8b361/',
      icon: 'linkedin',
      ariaLabel: 'LinkedIn profile of Luis Sagnay',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/luis-sagx',
      icon: 'github',
      ariaLabel: 'GitHub profile of Luis Sagnay',
    },
  ],
}
