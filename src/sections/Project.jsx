/** @format */
import portfolio from '../assets/thumbnails/portfolio.png';
import yelpCamp from '../assets/thumbnails/yelp-camp.png';

const Project = () => {
  return (
    <section
      id='projects'
      className='container flex flex-col items-center py-2.5 mb-20 gap-7'
    >
      {' '}
      <h3 className='text-4xl font-black text-center'>Featured My Works</h3>
      <ul className='flex justify-center w-full h-96 gap-2 flex-wrap p-0'>
        <li className='w-1/4 h-auto flex flex-col shadow-lg'>
          <img
            src={portfolio}
            className='w-full h-[50%] object-cover shadow-md'
          />
          <div className='m-2.5 h-auto flex flex-col justify-around'>
            <h4 className='mt-2.5 font-bold text-md'>Portfolio Website</h4>
            <p className='mt-2.5 text-md'>
              My personal website - built with HTML, CSS, javascript and Deploy
              on GitHub Pages.
            </p>
            <div className='mt-4'>
              <a
                href='https://ysdhuri312.github.io/dhuriyogesh.github.io/'
                alt='live-link'
                className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Live
              </a>
              <a
                href='https://github.com/ysdhuri312/portfolio-app'
                alt='github-link'
                className='text-sm bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </li>
        <li className='w-1/4 h-auto flex flex-col shadow-lg'>
          <img
            src={yelpCamp}
            className='w-full h-[50%] object-cover shadow-md'
          />
          <div className='m-2.5 h-auto flex flex-col justify-around'>
            <h4 className='mt-2 font-bold text-md'>Yelp Camp</h4>
            <p className='mt-2 text-md'>
              A full-stack CRUD application to find nearest campground and if
              you login then can add campground with images and description. It
              build with Bootstrap, EJS, Express.js, MongoDB and deploy on
              Render.
            </p>
            <div className='mt-4'>
              <a
                href='https://yelp-camp-i3wi.onrender.com/'
                alt='live-link'
                className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Live
              </a>
              <a
                href='https://github.com/ysdhuri312/yelp-camp.git'
                alt='github-link'
                className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </li>
        <li className='w-1/4 h-auto flex flex-col shadow-lg'>
          <img
            src={yelpCamp}
            className='w-full h-[50%] object-cover shadow-md'
          />
          <div className='m-2.5 h-auto flex flex-col justify-around'>
            <h4 className='mt-2 font-bold text-md'>Yelp Camp</h4>
            <p className='mt-2 text-md'>
              A full-stack CRUD application to find nearest campground and if
              you login then can add campground with images and description. It
              build with Bootstrap, EJS, Express.js, MongoDB and deploy on
              Render.
            </p>
            <div className='mt-4'>
              <a
                href='https://yelp-camp-i3wi.onrender.com/'
                alt='live-link'
                className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Live
              </a>
              <a
                href='https://github.com/ysdhuri312/yelp-camp.git'
                alt='github-link'
                className='text-sm mr-2 bg-primary px-3.5 py-1.5 text-amber-50 hover:opacity-90'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Project;
