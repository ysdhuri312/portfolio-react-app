/** @format */
import BlogCard from '../components/BlogCard';
import { getAllBlogs } from '../blogs/blogService.js';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const blogs = getAllBlogs();

  return (
    <section id='blogs' className='container py-6 flex gap-5'>
      <div className='flex-3/4'>
        <h1 className='font-heading text-3xl'>Blogs</h1>
        <nav className='breadcrumb my-3.5'>
          <a href='' className='underline decoration-dotted'>
            Home
          </a>{' '}
          <span>/</span>{' '}
          <a href='' className='underline decoration-dotted'>
            Tags
          </a>
        </nav>

        {blogs.map((blog) => {
          const { title, description, date, readingTime, image, slug, tags } =
            blog;
          return (
            <BlogCard
              title={title}
              description={description}
              date={date}
              readingTime={readingTime}
              image={image}
              slug={slug}
              tags={tags}
              key={slug}
            />
          );
        })}

        <nav>
          <ul className='flex justify-between'>
            <li>
              <a href='' rel='prev' aria-label='Previous page'>
                <button className='text-sm font-medium bg-primary px-2 py-1 text-amber-50 hover:bg-[#d94b2c]'>
                  <span className=''>&larr; </span>
                  Previous
                </button>
              </a>
            </li>
            <li className='pagination__item pagination_item--status'>
              <span aria-current='page'>1 of 6</span>
            </li>
            <li>
              <a href='' rel='next' aria-label='Next page'>
                <button className='text-sm font-medium bg-primary px-2 py-1 text-amber-50 hover:bg-[#d94b2c]'>
                  Next
                  <span> &rarr;</span>
                </button>
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
              <a
                href='#prerequisites'
                className='hover:underline hover:decoration-dotted'
              >
                Prerequisites
              </a>
            </li>
            <li>
              <a
                href='#assistant-setup'
                className='hover:underline hover:decoration-dotted'
              >
                Google Assistant Setup
              </a>
            </li>
          </ul>
        </section>
        {/* Related Posts  */}
        <section className='blogs-aside__related'>
          <h3 className='font-bold mt-2'>Related Posts</h3>
          <ul>
            <li>
              <a href='#' className='hover:underline hover:decoration-dotted'>
                Raspberry Pi Home Automation — Part 1
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline hover:decoration-dotted'>
                Raspberry Pi Home Automation — Part 2
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </section>
  );
};
export default BlogList;
