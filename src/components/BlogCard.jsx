/** @format */

import placeholder from '../assets/icons/placeholder-image.png';

const BlogCard = () => {
  return (
    <article className='border border-[#E1B6B6] bg-[#D9D9D93a] my-4 flex'>
      <figure>
        <img
          src={placeholder}
          alt='Raspberry Pi Home Automation'
          className='block w-80 h-45 object-cover'
        />
      </figure>
      <div className='p-2.5'>
        <h4 className='font-bold hover:underline tracking-wide'>
          <a href='/pages/blog.html'>
            Raspberry Pi Home Automation with Google Assistant
            integration — Part 3 (Assistant integration)
          </a>
        </h4>
        <div className='blog__meta opacity-50'>
          <time dateTime='2018-11-03'>Nov 3, 2018</time>
          <span> • </span>
          <span className='blog-reading__time'>6 min read</span>
        </div>
        <p className='font-light'>
          So up till now you have been able to control the switches with the
          React based frontend. Time to take things up a little notch. We’ll be
          integrating Google Assistant...
        </p>
      </div>
    </article>
  );
};
export default BlogCard;
