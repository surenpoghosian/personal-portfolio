import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';

import { socialLinkTypes } from '../../types/SocialLink';
import type { SocialLink as SocialLinkType } from '../../types/SocialLink';
import HyperLink from './HyperLink';
import Expander from './Expander';

type SocialLinksProps = {
  links: SocialLinkType[] | null | undefined,
  expandable?: boolean,
  iconClassName?: string,
  itemClassName?: string,
};

const linkToIcon = {
  [socialLinkTypes.gitHub]: FaGithub,
  [socialLinkTypes.stackOverflow]: FaStackOverflow,
  [socialLinkTypes.linkedIn]: FaLinkedin,
  [socialLinkTypes.medium]: FaMedium,
  [socialLinkTypes.youTube]: FaYoutube,
};

const SocialLinks = (props: SocialLinksProps): React.ReactElement | null => {
  // eslint-disable-next-line object-curly-newline
  const { links = [], expandable = true, iconClassName = 'w-6 h-6', itemClassName = 'mr-4 mb-2' } = props;

  if (!links) {
    return null;
  }

  // eslint-disable-next-line arrow-parens
  const filteredLinks = links.filter(link => !link?.hidden);

  const onRender = (socialLink: SocialLinkType): React.ReactElement => {
    let linkIcon = null;
    const linkType = socialLink?.type || '';
    if (linkType in linkToIcon) {
      const Icon = linkToIcon[linkType];
      linkIcon = <Icon className={iconClassName} />;
    }
    return <HyperLink link={socialLink}>{linkIcon || socialLink.url}</HyperLink>;
  };

  const toHide = (socialLink: SocialLinkType): boolean => {
    return typeof socialLink.secondary !== 'boolean' || socialLink.secondary;
  };

  return (
    <Expander
      items={filteredLinks}
      onRender={onRender}
      toHide={toHide}
      expandable={expandable}
      itemClassName={itemClassName}
    />
  );
};

export default SocialLinks;
