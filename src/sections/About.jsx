/** @format */

import about from '../assets/img/hero-2.png';

const About = () => {
  return (
    <section
      id='about-me'
      className='container flex items-center gap-12 py-2.5 mb-20'
    >
      <div className='w-[40vw]'>
        <img src={about} alt='hero-image' />
      </div>
      <div className='w-[60vw]'>
        <h4 className='tracking-[7px] opacity-50 font-black mb-2.5'>
          ABOUT ME
        </h4>
        <h1 className='text-5xl mb-6 font-heading'>
          I&#39;m here to help your next project !
        </h1>
        <p className='text-[17px] font-medium mb-9 pr-24'>
          Hi there, My name is Yogesh Dhuri and I&#39;m Full stack web developer
          having specialization in backend & Front web development. I have
          backend skills in Node.js, Expess.js. I also have frontend skills in
          JavaScript, react.js, Web components like css, Bootstraps.
        </p>
        <a
          href='/#contact-me'
          className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:bg-[#d94b2c]'
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};
export default About;
