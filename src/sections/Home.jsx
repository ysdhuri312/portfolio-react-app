/** @format */

import home from '../assets/img/hero-1.png';
import resume from '../assets/pdf/Resume_Yogesh_Dhuri.pdf';

const Home = () => {
  return (
    <section
      id='home'
      className='container flex flex-col sm:flex-row justify-between items-center py-2.5 mb-20'
    >
      <div className='items-center sm:w-[50vw] xs:my-9'>
        <h4 className='xs:text-center sm:text-left tracking-[7px] opacity-50 font-black mb-2.5'>
          FULL STACK DEVELOPER
        </h4>
        <h1 className='xs:text-center sm:text-left text-4xl mb-3 font-heading lg:text-5xl lg:mb-6'>
          Hello, I&#39;m Yogesh Dhuri !
        </h1>
        <p className='xs:text-center sm:text-left font-medium mb-9 text-[17px] lg:pr-15'>
          I want transitioning into Junior Web Developer with hands-on
          experience in JavaScript, Node.js, and React. Seeking an entry-level
          software development role to apply my problem-solving skills and
          real-world business understanding in building scalable applications.
        </p>
        <div className='xs:text-center sm:text-left'>
          <a
            href='/#contact-me'
            className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:bg-[#d94b2c]'
          >
            Notify Me
          </a>
          <a
            href={resume}
            className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:bg-[#d94b2c]'
            target='_blank'
          >
            Resume
          </a>
        </div>
      </div>
      <div className='items-center sm:w-[50vw] xs:mt-9'>
        <img
          src={home}
          className='my-9 ml-15 xs:size-65 sm:size-70 lg:size-90 xs:m-0'
          alt='home-image'
        />
      </div>
    </section>
  );
};
export default Home;
