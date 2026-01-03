/** @format */

import { Link, useParams } from 'react-router';
import { getAllBlogs } from '../blogs/blogService.js';
import MarkdownRender from '../blogs/MarkdownRender.jsx';
import { getPrevNext } from '../utils/index.js';

const BlogPost = () => {
  const blogs = getAllBlogs();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.slug == id);
  const { prev, next } = getPrevNext(blogs, blog);
  const { title, slug, date, readingTime, tags, description, content } = blog;

  return (
    <section id='blog' className='container py-6 flex gap-5 '>
      <div id='blog-layout' className='flex-3/4'>
        <nav className='mb-6'>
          <a href='' className='underline decoration-dotted'>
            Home
          </a>
          <span> / </span>
          <a href=''>{slug}</a>
        </nav>
        <article>
          <div>
            <h1 className='font-heading text-4xl mb-2 pr-30 tracking-wide object-fill'>
              <a href='/pages/blog.html'>{title}</a>
            </h1>
            <div className='blog-post__meta opacity-50 font-black mb-6 tracking-wider'>
              <time dateTime='2018-11-03'>{date}</time>
              <span> • </span>
              <span className='blog-post-reading__time'>{readingTime}</span>
            </div>
          </div>
          <h3 className='text-l mb-4'>{description}</h3>
          <figure>
            <img
              src='../sample-blog.png'
              alt='Raspberry Pi Home Automation'
              className='w-full h-500px'
            />
            <figcaption className='opacity-50'>{slug}</figcaption>
          </figure>

          <MarkdownRender>{content}</MarkdownRender>

          <footer className='mt-5 px-4'>
            <span className='font-black mr-1.5 '>Tags : </span>
            {tags.map((tag) => {
              return (
                <span key={tag}>
                  <a
                    href='/tags/raspberry-pi'
                    className='underline decoration-dotted mr-2 '
                  >
                    {tag}
                  </a>
                </span>
              );
            })}

            {/* Navigation  */}
            <nav className='flex justify-between mt-6'>
              <button className='text-start text-sm font-medium bg-primary px-2 py-1 text-amber-50 hover:bg-[#d94b2c]'>
                <div>
                  Previous:
                  <div>
                    {!prev ? (
                      <Link to={`/blogs`}>Blogs</Link>
                    ) : (
                      <Link to={`/blog/${prev.slug}`}>{prev.slug}</Link>
                    )}
                  </div>
                </div>
              </button>
              <button className='text-end text-sm font-medium bg-primary px-2 py-1 text-amber-50 hover:bg-[#d94b2c]'>
                <div>
                  Next:
                  <div>
                    {!next ? (
                      <Link to={`/blogs`}>Blogs</Link>
                    ) : (
                      <Link to={`/blog/${next.slug}`}>{next.slug}</Link>
                    )}
                  </div>
                </div>
              </button>
            </nav>
          </footer>
        </article>
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
export default BlogPost;
