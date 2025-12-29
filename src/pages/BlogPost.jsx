/** @format */

import image from '../assets/img/sample-blog.png';

const BlogPost = () => {
  return (
    <section id='blog' className='container py-6 flex gap-5 '>
      <div id='blog-layout' className='flex-3/4'>
        <nav className='mb-6'>
          <a href='' className='underline'>
            Home
          </a>
          <span> / </span>
          <a href=''>Raspberry-pi-home-automation</a>
        </nav>
        <article>
          <div>
            <h1 className='text-4xl mb-2 pr-30 tracking-wide object-fill'>
              <a href='/pages/blog.html'>
                Raspberry Pi Home Automation with Google Assistant
                integration — Part 3 (Assistant integration)
              </a>
            </h1>
            <div
              class='blog-post__meta'
              className='opacity-50 font-black mb-6 tracking-wider'
            >
              <time datetime='2018-11-03'>November 3, 2018</time>
              <span> • </span>
              <span class='blog-post-reading__time'>6 min read</span>
            </div>
          </div>

          <figure>
            <img
              src={image}
              alt='Raspberry Pi Home Automation'
              className='w-full h-500px'
            />
            <figcaption className='opacity-50'>
              Raspberry Pi based smart home setup
            </figcaption>
          </figure>

          <div class='blog-post__description' className='my-7'>
            <p>
              So up till now you have been able to control the switches with the
              React based frontend. Time to take things up a little notch. In
              this part, we’ll be integrating Google Assistant with our
              Raspberry Pi setup.
            </p>
            <h3>Prerequisites</h3>
            <ul>
              <li>Raspberry Pi with Raspbian OS</li>
              <li>Node.js installed</li>
              <li>Google Cloud account</li>
            </ul>
            <h3>Step 1: Google Assistant Setup</h3>
            <p>
              First, we need to create a project in Google Cloud and enable the
              Google Assistant API.
            </p>
            <pre>
              <code>npm install actions-on-google</code>
            </pre>
            <blockquote>
              Voice control makes home automation truly powerful.
            </blockquote>
          </div>

          <footer>
            <div>
              <span className='font-black mr-1.5'>Tags : </span>
              <a href='/tags/raspberry-pi' className='underline mr-2'>
                Raspberry Pi
              </a>
              <a href='/tags/iot' className='underline mr-2'>
                IoT
              </a>
              <a href='/tags/google-assistant' className='underline mr-2'>
                Google Assistant
              </a>
            </div>
            {/* Navigation  */}
            <nav className='flex justify-between mt-6'>
              <a href='#' class='prev-post'>
                ← Previous Post
              </a>
              <a href='#' class='next-post'>
                Next Post →
              </a>
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
              <a href='#prerequisites'>Prerequisites</a>
            </li>
            <li>
              <a href='#assistant-setup'>Google Assistant Setup</a>
            </li>
          </ul>
        </section>
        {/* Related Posts  */}
        <section class='blogs-aside__related'>
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
export default BlogPost;
