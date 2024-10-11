import React from 'react';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart';
import { RiRoadMapLine } from '@react-icons/all-files/ri/RiRoadMapLine';
import { AiFillCode } from '@react-icons/all-files/ai/AiFillCode';
import { MdInsertLink } from '@react-icons/all-files/md/MdInsertLink';

import HyperLink from './HyperLink';
import { discussionsURL, rssPath, supportURL } from '../../constants/links';
import { Link } from '../../types/Link';
import Row from './Row';
import SocialLinks from './SocialLinks';
import { profile } from '../../data/profile';

type FooterProps = {
  className?: string,
  withFeedback?: boolean,
  withSupport?: boolean,
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '', withFeedback = false, withSupport = true } = props;

  const issuesLink: Link = {
    url: discussionsURL,
  };

  const careerLink: Link = {
    url: 'https://my-aua-app.vercel.app/about',
  };

  const roadmapLink: Link = {
    url: 'https://roadmap.sh/u/surenpoghosian',
  };

  const helpfulLink: Link = {
    url: 'https://linktr.ee/surenpoghosian',
  };

  const supportLink: Link = {
    url: supportURL,
  };

  return (
    <footer className={`${className}`}>
      <Row responsive>
        <Row style={{ flex: 1 }} className="mb-6 sm:mb-0">
          <HyperLink link={careerLink} className="text-xs mr-5" startEnhancer={<AiFillCode size={20} />}>
            Career
          </HyperLink>

          <HyperLink link={roadmapLink} className="text-xs" startEnhancer={<RiRoadMapLine size={20} />}>
            Roadmap
          </HyperLink>

          <HyperLink link={helpfulLink} className="text-xs ml-5" startEnhancer={<MdInsertLink size={20} />}>
            Helpful links
          </HyperLink>
        </Row>

        <div style={{ flex: 1 }} className="flex flex-row items-center justify-center">
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-5 h-5"
            itemClassName="mr-2 ml-2"
          />
        </div>

        <div style={{ flex: 1 }} className="hidden sm:flex">
          &nbsp;
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
