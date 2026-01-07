/** @format */

import portfolio from '../assets/thumbnails/portfolio.png';
import yelpCamp from '../assets/thumbnails/yelp-camp.png';

const ProjectCard = ({ projects }) => {
  return (
    <ul className='flex justify-center w-full gap-4 flex-wrap p-0'>
      {projects.map((project, index) => {
        return (
          <li key={index} className='sm:w-1/4 w-full flex flex-col shadow-lg'>
            <img
              src={project.image}
              className='w-full h-[50%] object-cover shadow-md'
            />
            <div className='m-2.5 h-auto flex flex-col justify-around'>
              <h4 className='mt-2.5 text-md font-heading'>{project.name}</h4>
              <p className='mt-2.5 text-sm'>{project.description}</p>
              <div className='mt-4'>
                <a
                  href={project.live_app_link}
                  alt='live-link'
                  className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:bg-[#d94b2c]'
                  target='_blank'
                >
                  Live
                </a>
                <a
                  href={project.source_code_link}
                  alt='github-link'
                  className='text-sm bg-primary px-3.5 py-1.5 text-amber-50 hover:bg-[#d94b2c]'
                  target='_blank'
                >
                  Github
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectCard;
