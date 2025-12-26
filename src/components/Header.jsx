/** @format */

import { Link } from 'react-router';

const Header = () => {
  return (
    <header className='container flex justify-between items-center sticky top-0 z-10 border-b border-[rgba(0,0,0,0.1)] backdrop-blur-3xl shadow-lg'>
      <h1>
        <a href='#home' className='text-xl font-black'>
          &#60; YOGESH.DEV <span className='text-2xl text-primary'>&#47; </span>
          &#62;
        </a>
      </h1>
      <nav className='flex items-center py-3'>
        <ul className='flex'>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#home'>Home</a>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#about-me'>About</a>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#skills'>Skills</a>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#projects'>Projects</a>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <Link to='/blog'>Blogs</Link>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <Link to='/photos'>Photos</Link>
          </li>
        </ul>
        <a
          href='/#contact'
          className='text-sm mx-3 bg-primary px-3.5 py-2 text-amber-50 hover:opacity-90'
        >
          Let's Talk
        </a>
      </nav>
      <div className='hidden' id='toggle-menu'>
        <img
          src='assets/icons/hamburger-menu.png'
          alt='menu'
          height='20'
          width='20'
        />
      </div>
      <div className='hidden'>
        <img src='assets/icons/close.png' alt='menu' height='20' width='20' />
      </div>
    </header>
  );
};
export default Header;
