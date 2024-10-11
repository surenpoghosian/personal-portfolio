import React from 'react';

import ProjectsScreen from '../components/screens/ProjectsScreen';
import { projects } from '../data/newprojects';

const Projects = (): React.ReactElement => {
  return (
    <ProjectsScreen projects={projects} />
  );
};

export default Projects;
