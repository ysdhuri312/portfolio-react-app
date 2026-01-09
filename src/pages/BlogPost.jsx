/** @format */

import { Link, useParams } from 'react-router';
import { getAllBlogs } from '../blogs/blogService.js';
import MarkdownRender from '../blogs/MarkdownRender.jsx';
import { getPrevNext } from '../utils/getPrevNext.js';
import { useMetadata } from '../utils/hooks/useMetadata.js';
import Giscus from '@giscus/react';

const BlogPost = () => {
  const blogs = getAllBlogs();
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.slug == id);
  const { prev, next } = getPrevNext(blogs, blog);
  const { title, slug, date, readingTime, tags, description, content, image } =
    blog;

  useMetadata({
    title: blog.title,
    description: blog.description,
  });

  return (
    <section
      id='blog'
      className='container py-6 flex flex-col lg:flex-row gap-5 '
    >
      <div id='blog-layout' className='flex-3/4'>
        <nav className='mb-6'>
          <Link to='/blogs' className='underline decoration-dotted'>
            Home
          </Link>
          <span> / </span>
          <p className='inline-block'>{slug}</p>
        </nav>
        <article>
          <div>
            <h1 className='font-heading text-4xl mb-2 pr-30 tracking-wide object-fill'>
              {title}
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
              src={image}
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
              <button className='text-start text-sm font-medium bg-primary px-2 py-1 leading-none text-amber-50 hover:bg-[#d94b2c]'>
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
              <button className='text-end text-sm font-medium bg-primary px-2 py-1 leading-none text-amber-50 hover:bg-[#d94b2c] cu'>
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
          <div className='mt-10'>
            <Giscus
              id='comments'
              repo='ysdhuri312/portfolio-react-app'
              repoId={`${import.meta.env.VITE_GISCUS_REPO_ID}`}
              category='General'
              categoryId={`${import.meta.env.VITE_GISCUS_CATEGORY_ID}`}
              mapping='pathname'
              term='Welcome to @giscus/react component!'
              reactionsEnabled='1'
              emitMetadata='0'
              inputPosition='top'
              theme='light'
              lang='en'
              loading='lazy'
            />
          </div>
        </article>
      </div>

      <aside className='flex-1/4 mt-1 lg:mt-21 text-[15px]'>
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
