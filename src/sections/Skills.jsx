/** @format */

import { technologies } from '../constants';

const Skills = () => {
  return (
    <section
      id='skills'
      className='container flex flex-col items-center gap-7 py-2.5 mb-15'
    >
      <h3 className='text-center xs:text-3xl sm:text-4xl font-heading'>
        I&#39;m Specialized In
      </h3>
      <div className='flex justify-start flex-wrap w-4/5'>
        {technologies.map((technologie, index) => {
          return (
            <img
              className='icon'
              src={technologie.icon}
              alt={technologie.name}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
