import Reveal from './Reveal'

const Inspection = () => {
  return (
    <section
      id='inspection'
      className='flex flex-col py-20 sm:py-40 min-h-screen gap-4 justify-center text-[--light] w-full p-10 bg-[--dark] rounded-lg'
    >
      <h1 className='text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
        <Reveal>Contact Us</Reveal>
      </h1>
      <p className='max-w-[700px]'>
        Did your home suffer storm damage? Want us to handle the complicated
        inspection, insurance, and repairs process?
      </p>
      <p className='max-w-[700px]'>
        Submit your contact information below and one of our representatives
        will contact you shortly to discuss how we can best help you.
      </p>
      <form
        target='_blank'
        action='https://formsubmit.co/bradtramel@gmail.com'
        method='POST'
        className='flex flex-col gap-4 text-[--dark] sm:w-3/5 lg:w-2/5'
      >
        <div class='form-group flex flex-col gap-4'>
          <div class='form-row flex flex-row gap-4'>
            <div class='col'>
              <input
                type='text'
                name='name'
                class='form-control p-3 rounded-sm w-full sm:w-full'
                placeholder='Full Name'
                required
              />
            </div>
            <div class='col'>
              <input
                name='phone'
                class='form-control p-3 rounded-sm w-full sm:w-full'
                placeholder='Phone'
                required
              />
            </div>
          </div>
          <div class='form-row flex flex-col gap-4'>
            <div class='col'>
              <input
                type='email'
                name='email'
                class='form-control p-3 rounded-sm w-full'
                placeholder='Email Address'
                required
              />
            </div>
            <div class='col'>
              <input
                type='text'
                name='address'
                class='form-control p-3 rounded-sm w-full'
                placeholder='Home Address'
              />
            </div>
          </div>
        </div>
        <div class='form-group'>
          <textarea
            placeholder='Additional info'
            class='form-control p-3 rounded-sm w-full'
            name='additional info'
            rows='10'
          />
        </div>
        <button
          type='submit'
          class='p-3 rounded-lg w-full bg-[--accent] text-[--dark] hover:bg-[--dark] hover:text-[--accent] border border-[--accent]'
        >
          Submit Form
        </button>
      </form>
    </section>
  )
}

export default Inspection
