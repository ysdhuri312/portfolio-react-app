/** @format */

import { icons } from '../assets';

const Skills = () => {
  return (
    <section
      id='skills'
      className='container flex flex-col items-center gap-7 py-2.5 mb-20'
    >
      <h3 className='text-center text-4xl font-heading'>
        I&#39;m Specialized In
      </h3>
      <div className='flex justify-start flex-wrap w-4/5'>
        <img class='icon' src={icons.html5} alt='html5' />
        <img class='icon' src={icons.css3} alt='css3' />
        <img class='icon' src={icons.javascript} alt='javascript' />
        <img class='icon' src={icons.bootstrap} alt='bootstrap' />
        <img class='icon' src={icons.react} alt='react' />
        <img class='icon' src={icons.tailwind} alt='tailwindcss' />
        <img class='icon' src={icons.node} alt='node-js' />
        <img class='icon' src={icons.express} alt='express' />
        <img class='icon' src={icons.mongodb} alt='mongodb' />
        <img class='icon' src={icons.graphql} alt='graphql' />
        <img class='icon' src={icons.typescript} alt='typescript' />
        <img class='icon' src={icons.next} alt='nextjs' />
        <img class='icon' src={icons.postgresql} alt='postgresql' />
        <img class='icon' src={icons.docker} alt='docker' />
        <img class='icon' src={icons.python} alt='python' />
        <img class='icon' src={icons.cpp} alt='cpp' />
        <img class='icon' src={icons.tailwind} alt='tailwindcss' />
        <img class='icon' src={icons.node} alt='node-js' />
        <img class='icon' src={icons.express} alt='express' />
        <img class='icon' src={icons.mongodb} alt='mongodb' />
        <img class='icon' src={icons.graphql} alt='graphql' />
        <img class='icon' src={icons.typescript} alt='typescript' />
        <img class='icon' src={icons.next} alt='nextjs' />
        <img class='icon' src={icons.node} alt='node-js' />
        <img class='icon' src={icons.express} alt='express' />
      </div>
    </section>
  );
};
export default Skills;
