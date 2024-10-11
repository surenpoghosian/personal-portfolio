import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';

export const profile: Profile = {
  firstName: 'Suren',
  lastName: 'Poghosyan',
  position: 'Software Engineer 1 @ Picsart',
  summary: [
    'Computer Science Enthusiast',
  ],
  avatar: {
    srcPath: 'profile/avatar_500x500_v2.jpg',
    caption: 'Suren Poghosyan',
  },
  location: {
    name: 'Yerevan, Armenia • from 🇦🇲',
  },
  tags: [
    { name: 'Typescript' },
    { name: 'React' },
  ],
  socialLinks,
};
