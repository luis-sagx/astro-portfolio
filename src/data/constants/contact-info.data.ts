import type {
  ContactInfoMetadata,
  SocialLinkMetadata,
} from '../models/portfolio.model'

export const CONTACT_INFO: ContactInfoMetadata = {
  email: 'sagxluis@gmail.com',
  phone: '+593 983172773',
  location: 'Quito, Ecuador',
}

export const SOCIAL_LINKS: SocialLinkMetadata[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luis-sagnay-030b8b361/',
    icon: 'linkedin',
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/luis-sagx',
    icon: 'github',
  },
]
