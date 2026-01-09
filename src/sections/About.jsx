/** @format */

import { aboutHero } from '../assets';

const About = () => {
  return (
    <section
      id='about-me'
      className='container flex flex-col-reverse sm:flex-row items-center gap-12 py-2.5 mb-20'
    >
      <div className='items-center sm:w-[50vw]'>
        <img
          src={aboutHero}
          alt='hero-image'
          className='sm:size-70 lg:size-90'
        />
      </div>
      <div className='items-center sm:w-[50vw] xs:my-5'>
        <h4 className='xs:text-center sm:text-left tracking-[7px] opacity-50 font-black mb-2.5'>
          ABOUT ME
        </h4>
        <h1 className='xs:text-center sm:text-left text-4xl mb-6 font-heading lg:text-5xl'>
          I&#39;m here to help your next project !
        </h1>
        <p className='xs:text-center sm:text-left text-[17px] font-medium mb-9 lg:pr-24'>
          Hi there, My name is Yogesh Dhuri and I&#39;m Full stack web developer
          having specialization in backend & Front web development. I have
          backend skills in Node.js, Expess.js. I also have frontend skills in
          JavaScript, react.js, Web components like css, Bootstraps.
        </p>
        <div className='xs:text-center sm:text-left'>
          <a
            href='/#contact-me'
            className='text-sm font-medium mr-2 bg-primary px-5 py-3 text-amber-50 hover:bg-[#d94b2c] '
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
