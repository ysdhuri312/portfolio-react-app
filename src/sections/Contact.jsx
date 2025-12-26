/** @format */

const Contact = () => {
  return (
    <section id='contact' className='container py-2.5'>
      <h2 className='text-4xl font-black text-center mb-2.5'>Get In Touch</h2>
      <div className='flex justify-center gap-7 p-5'>
        <div className='p-5 border rounded-xs border-[#f5bcbc] flex-1 m-w-[500px]'>
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

            <label for='name' className='block font-medium mt-2.5 mb-2'>
              Name
              <input
                type='text'
                id='name'
                name='name'
                placeholder=''
                className='w-full p-2.5 rounded-xs border border-[#f5bcbc] outline-none mb-2.5 text-sm'
              />
            </label>
            <label for='email' className='block font-medium mt-2.5 mb-2'>
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

            <label for='message' className='block font-medium mt-2.5 mb-2'>
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
        <div className='p-5 border rounded-xs border-[#f5bcbc] flex-1 m-w-[500px] text-amber-50'>
          <div className='p-3.5 rounded-xs mb-3.5 text-xl bg-primary'>
            <strong className='bg-primary'>GitHub</strong>
            <br />
            <a
              href='https://github.com/yogesh-dhuri'
              target='_blank'
              className='bg-primary'
            >
              https://github.com/yogesh-dhuri
            </a>
          </div>
          <div className='p-3.5 rounded-xs mb-3.5 text-xl bg-primary'>
            <strong className='bg-primary'>LinkedIn</strong>
            <br />
            <a href='#' target='_blank' className='bg-primary'>
              https://linkedin.com/yogesh-dhuri
            </a>
          </div>
          <div class='placeholder'></div>
          <div class='placeholder'></div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
