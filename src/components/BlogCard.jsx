/** @format */

const BlogCard = ({ title, description, date, readingTime, image, index }) => {
  return (
    <article
      className='border border-[#E1B6B6] bg-[#D9D9D93a] my-4 flex'
      key={index}
    >
      <figure>
        <img
          src={image}
          alt='Raspberry Pi Home Automation'
          className='block w-80 h-45 object-cover'
        />
      </figure>
      <div className='p-2.5'>
        <h4 className='font-bold hover:underline tracking-wide'>
          <a href='/pages/blog.html'>{title}</a>
        </h4>
        <div className='blog__meta opacity-50'>
          <time dateTime='2018-11-03'>{date}</time>
          <span> • </span>
          <span className='blog-reading__time'>{readingTime}</span>
        </div>
        <p className='font-light'>{description}</p>
      </div>
    </article>
  );
};
export default BlogCard;
