/** @format */

import home from '../assets/img/hero-1.png';
import resume from '../assets/pdf/Resume_Yogesh_Dhuri.pdf';

const Home = () => {
  return (
    <section id='home' className='container flex items-center py-2.5 mb-20'>
      <div className='w-[60vw]'>
        <h4 className='tracking-[7px] opacity-50 font-bold mb-2.5'>
          FULL STACK DEVELOPER
        </h4>
        <h1 className='text-5xl font-black mb-6'>
          Hello, I&#39;m Yogesh Dhuri !
        </h1>
        <p className='font-medium mb-9 pr-24 text-[17px]'>
          I want transitioning into Junior Web Developer with hands-on
          experience in JavaScript, Node.js, and React. Seeking an entry-level
          software development role to apply my problem-solving skills and
          real-world business understanding in building scalable applications.
        </p>
        <a
          href='/#contact-me'
          className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:opacity-90'
        >
          Notify Me
        </a>
        <a
          href={resume}
          className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:opacity-90'
          target='_blank'
        >
          Resume
        </a>
      </div>
      <div className='w-[40vw]'>
        <img src={home} className='m-9 h-90 w-96' alt='home-image' />
      </div>
    </section>
  );
};
export default Home;
