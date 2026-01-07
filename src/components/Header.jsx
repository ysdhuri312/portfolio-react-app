/** @format */

import { Link } from 'react-router';
import { close, hamburger } from '../assets';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <header className='container py-2.5 flex justify-between items-center sticky top-0 z-10 border-b border-[rgba(0,0,0,0.1)] backdrop-blur-3xl shadow-lg'>
      <h1>
        <a
          href='#home'
          className='lg:text-2xl font-black font-logo lg:tracking-wider'
        >
          &#60; Yogesh.Dev <span className='text-2xl text-primary'>&#47; </span>
          &#62;
        </a>
      </h1>
      <nav className='hidden sm:flex sm:items-center'>
        <ul className='flex'>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#home'>Home</a>
          </li>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#about-me'>About</a>
          </li>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#skills'>Skills</a>
          </li>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <a href='/#projects'>Projects</a>
          </li>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='sm:px-1.5 lg:px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <Link to='/photos'>Photos</Link>
          </li>
        </ul>
        <a
          href='/#contact'
          className='text-sm mx-3 bg-primary px-3.5 py-2 text-amber-50 hover:hover:bg-[#d94b2c]'
        >
          Let's Talk
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`absolute flex flex-col top-full w-full text-center transition-all duration-200 bg-white-900  ${
          open ? '-left-full' : 'left-0'
        } sm:hidden`}
      >
        <ul className='flex flex-col gap-3'>
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
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li className='px-3 hover:bg-primary hover:text-amber-50 ease-in-out duration-300'>
            <Link to='/photos'>Photos</Link>
          </li>
        </ul>
        <a
          href='/#contact'
          className='text-sm my-3 bg-primary px-3 py-2 text-amber-50 hover:hover:bg-[#d94b2c]'
        >
          Let's Talk
        </a>
      </nav>
      <button
        className='inline-block sm:hidden'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label='Menu toggle'
      >
        {open ? (
          <img src={hamburger} alt='menu' height='20' width='20' />
        ) : (
          <img src={close} alt='menu' height='20' width='20' />
        )}
      </button>
    </header>
  );
};
export default Header;
