// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/surenpoghosyan/',
    secondary: false,
    caption: 'Suren Poghosyan on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/surenpoghosian',
    secondary: false,
    caption: 'Suren Poghosyan on GitHub',
  },
  {
    type: socialLinkTypes.medium,
    url: 'https://medium.com/@surenpoghosian',
    secondary: true,
    caption: 'Suren Poghosyan on Medium',
  },
  {
    type: socialLinkTypes.stackOverflow,
    url: 'https://stackoverflow.com/users/20792752/suren-poghosyan',
    secondary: true,
    hidden: true,
    caption: 'Suren Poghosyan on StackOverflow',
  },
  {
    type: socialLinkTypes.youTube,
    url: 'https://www.youtube.com/playlist?list=PLEZ7f3tfPoOC-y912Ja8B6sIQjEQSNHgp',
    secondary: true,
    caption: 'Suren Poghosyan on YouTube',
  },
];
