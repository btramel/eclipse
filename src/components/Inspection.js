import Reveal from './Reveal'

const Inspection = () => {
  return (
    <section
      id='inspection'
      className='flex flex-col h-screen justify-center bg-[--light] text-[--dark] w-full p-10'
    >
      <h1 className='pt-20 text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
        <Reveal>Contact Us</Reveal>
      </h1>
    </section>
  )
}

export default Inspection
