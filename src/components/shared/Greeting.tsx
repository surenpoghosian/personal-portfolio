import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">
        projects
      </HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">
        articles
      </HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there! I’m Suren. I’m a software enthusiast deeply involved in systems design and development. I spend most of
      my time working with Node.js, TypeScript, and Python, creating systems that emphasize scalability and efficiency.
      I enjoy exploring software architecture patterns like Creational, Structural, and Behavioral, and implementing
      them to solve real-world problems. In my spare time, I contribute to open-source projects, helping others learn
      about algorithms, clean code, and backend development. I also write {blogLinkElement} about software engineering,
      sharing my insights on design patterns, coding practices, and personal development in tech.
    </p>
  );
};

export default Greeting;
