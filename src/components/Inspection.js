import Reveal from './Reveal'

const Inspection = () => {
  const CTA = ({ label, link }) => {
    return (
      <a
        href={link}
        className='hover:no-underline whitespace-nowrap my-5 text-sm  text-center w-min text-[--dark] hover:text-[--accent] p-5 bg-[--accent] hover:bg-[--dark] hover:border-[--accent] border-[--accent] border-2'
      >
        {label}
      </a>
    )
  }

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
        Get in touch and tell us your story. We&apos;ll make a plan and get to
        work.
      </p>
      <div className='flex gap-5'>
        <CTA label='Call Us' link='tel:5073694988' />
        <CTA label='Email Us' link='mailto:office@eclipseconstructionmn.com' />
      </div>
    </section>
  )
}

export default Inspection
