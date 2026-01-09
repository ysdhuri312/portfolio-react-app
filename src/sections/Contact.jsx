/** @format */

import { useState } from 'react';
const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);
    formData.append('access_key', 'cb2bd1ab-4a2a-4b30-ad1f-d1da81802f89');
    console.log(formData);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully...');
      event.target.reset();
    } else {
      setResult('Error!!!');
    }
  };

  return (
    <section id='contact' className='container py-2.5'>
      <h2 className='text-4xl font-black text-center mb-2.5 font-heading '>
        Get In Touch
      </h2>
      <div className='flex flex-col md:flex-row md:justify-center justify-center gap-7 p-5'>
        <div className='p-4 border rounded-xs border-[#f5bcbc] xs:w-full sm:w-125'>
          <form onSubmit={onSubmit}>
            <label htmlFor='name' className='block font-medium mt-2.5 mb-2'>
              Name
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm'
              />
            </label>
            <label htmlFor='email' className='block font-medium mt-2.5 mb-2'>
              Email
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm'
              />
            </label>

            <label htmlFor='message' className='block font-medium mt-2.5 mb-2'>
              Message
              <textarea
                id='message'
                name='message'
                required
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm h-24 resize-none'
              ></textarea>
            </label>
            <button
              type='submit'
              className='text-sm bg-primary px-3.5 py-2 text-amber-50 hover:bg-[#d94b2c]'
            >
              Send Message
            </button>

            <p className='mt-2'>{result}</p>
          </form>
        </div>
        <div className='p-5 border rounded-xs border-[#f5bcbc]  text-amber-50'>
          <div className='p-3.5 rounded-xs mb-3.5 text-md bg-primary'>
            <strong className='bg-primary font-heading'>GitHub</strong>
            <br />
            <a
              href='https://github.com/ysdhuri312'
              target='_blank'
              className='bg-primary'
            >
              /yogesh-dhuri
            </a>
          </div>
          <div className='p-3.5 rounded-xs mb-3.5 text-md bg-primary'>
            <strong className='bg-primary font-heading'>LinkedIn</strong>
            <br />
            <a
              href='http://www.linkedin.com/in/dhuriyogesh0312'
              target='_blank'
              className='bg-primary'
            >
              /in/dhuriyogesh0312
            </a>
          </div>
          <div className='p-3.5 rounded-xs mb-3.5 text-md bg-primary'>
            <strong className='bg-primary font-heading'>
              Personal Website
            </strong>
            <br />
            <a
              href='https://ysdhuri312.github.io/dhuriyogesh.github.io/'
              target='_blank'
              className='bg-primary'
            >
              https://ysdhuri312.github.io/
            </a>
          </div>
          <div className='placeholder'></div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
