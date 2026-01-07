/** @format */

import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants/index';

const Project = () => {
  return (
    <section
      id='projects'
      className='container flex flex-col items-center py-2.5 mb-10 gap-7'
    >
      {' '}
      <h3 className='xs:text-3xl sm:text-4xl font-heading text-center'>
        Featured My Works
      </h3>
      <ProjectCard projects={projects} />
    </section>
  );
};
export default Project;
