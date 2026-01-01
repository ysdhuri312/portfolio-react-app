/** @format */
import BlogCard from '../components/BlogCard';
import { getAllBlogs } from '../blogs/blogService.js';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const blogs = getAllBlogs();

  return (
    <section id='blogs' className='container py-6 flex gap-5'>
      <div className='flex-3/4'>
        <h1 className='font-black text-3xl'>Blogs</h1>
        <nav className='breadcrumb my-3.5'>
          <a href='' className='underline'>
            Home
          </a>{' '}
          <span>/</span>{' '}
          <a href='' className='underline'>
            Tags
          </a>
        </nav>

        {blogs.map((blog, index) => {
          const { title, description, date, readingTime, image } = blog;
          return (
            <BlogCard
              title={title}
              description={description}
              date={date}
              readingTime={readingTime}
              image={image}
              index={index}
            />
          );
        })}

        <nav>
          <ul className='flex justify-between'>
            <li className='hover:underline'>
              <a href='' rel='prev' aria-label='Previous page'>
                ← Previous
              </a>
            </li>
            <li className='pagination__item pagination_item--status'>
              <span aria-current='page'>1 of 6</span>
            </li>
            <li className='hover:underline'>
              <a href='' rel='next' aria-label='Next page'>
                Next →
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <aside className='flex-1/4 mt-21 text-[15px]'>
        {/* Table of Contents */}
        <section>
          <h3 className='font-bold'>On this page</h3>
          <ul>
            <li>
              <a href='#prerequisites'>Prerequisites</a>
            </li>
            <li>
              <a href='#assistant-setup'>Google Assistant Setup</a>
            </li>
          </ul>
        </section>
        {/* Related Posts  */}
        <section className='blogs-aside__related'>
          <h3 className='font-bold mt-2'>Related Posts</h3>
          <ul>
            <li>
              <a href='#'>Raspberry Pi Home Automation — Part 1</a>
            </li>
            <li>
              <a href='#'>Raspberry Pi Home Automation — Part 2</a>
            </li>
          </ul>
        </section>
      </aside>
    </section>
  );
};
export default BlogList;
