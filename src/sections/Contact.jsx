/** @format */

const Contact = () => {
  return (
    <section id='contact' className='container py-2.5'>
      <h2 className='text-4xl font-black text-center mb-2.5 font-heading '>
        Get In Touch
      </h2>
      <div className='flex flex-col md:flex-row md:justify-center justify-center gap-7 p-5'>
        <div className='p-5 border rounded-xs border-[#f5bcbc] xs:w-full sm:w-125'>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            id='form'
          >
            <input
              type='hidden'
              name='access_key'
              value='cb2bd1ab-4a2a-4b30-ad1f-d1da81802f89'
            />

            <label htmlFor='name' className='block font-medium mt-2.5 mb-2'>
              Name
              <input
                type='text'
                id='name'
                name='name'
                placeholder=''
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm'
              />
            </label>
            <label htmlFor='email' className='block font-medium mt-2.5 mb-2'>
              Email
              <input
                type='email'
                id='email'
                name='email'
                placeholder=''
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm'
              />
            </label>

            {/* <label for="subject">Subject</label>
                  <input type="text" id="subject" placeholder="" /> */}

            <label htmlFor='message' className='block font-medium mt-2.5 mb-2'>
              Message
              <textarea
                id='message'
                name='message'
                placeholder=''
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm h-24 resize-none'
              ></textarea>
            </label>
            <button
              type='submit'
              className='text-sm bg-primary px-3.5 py-2 text-amber-50 hover:bg-[#d94b2c]'
            >
              Send Message
            </button>

            <div id='result'></div>
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
              https://github.com/yogesh-dhuri
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
              http://linkedin.com/in/dhuriyogesh0312
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
