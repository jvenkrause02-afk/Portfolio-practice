import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const Support = () => {
  return (
    <section id='support' className='scroll-mt-17'>
      <div className='mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0'>
        <div className='bg-dark relative z-999 overflow-hidden rounded-[30px] px-4 pt-20 sm:px-12 lg:px-16'>
          {/* <!-- grid row --> */}
          <div className='absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40'>
            <div className='pricing-grid pricing-grid-border relative bottom-12 h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative bottom-7 h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative bottom-3 h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative bottom-2 h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative bottom-5 h-[250px] w-full max-w-[50px]'></div>
            <div className='pricing-grid pricing-grid-border relative bottom-8 h-[250px] w-full max-w-[50px]'></div>
          </div>

          {/* <!-- stars --> */}
          <div className='absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden'>
            <div className='stars'></div>
            <div className='stars2'></div>
          </div>

          {/* <!-- bg shapes --> */}
          <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
            {/* GIF Background with blur */}
            <span className='absolute inset-0 -z-1'>
              <Image
                src='/images/gif.gif'
                alt='background'
                fill
                className='object-cover opacity-30 blur-sm'
              />
            </span>
          </div>

          <SectionTitle
            subTitle='Need Any Help?'
            title='Contact With Us'
            paragraph='I am available for freelance projects or full-time opportunities. With expertise in modern web development including HTML, Java, and MySQL, I can help bring your ideas to life. Let's discuss how my skills can contribute to your next project.'
          />

          {/* <!-- support form --> */}
          <div className='form-box-gradient relative overflow-hidden rounded-[25px] p-6 sm:p-8 xl:p-10'>
            <form
              action='https://formbold.com/s/unique_form_id'
              method='POST'
              className='relative z-10'
            >
              <div className='-mx-4 flex flex-wrap xl:-mx-10'>
                <div className='w-full px-4 md:w-1/2 xl:px-5'>
                  <div className='mb-6'>
                    <label
                      htmlFor='name'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      placeholder='Enter your Name'
                      required
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-hidden focus:border-blue-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 xl:px-5'>
                  <div className='mb-6'>
                    <label
                      htmlFor='email'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='Enter your Email'
                      required
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-hidden focus:border-blue-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 xl:px-5'>
                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      placeholder='Type your message'
                      rows={6}
                      required
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-5 outline-hidden focus:border-blue-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 xl:px-5'>
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
