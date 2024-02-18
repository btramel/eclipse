import Reveal from './Reveal'
import roof from '/public/roof-dark.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <section
      id='hero'
      className='relative flex flex-col min-h-screen justify-center w-full overflow-clip'
    >
      <div className='w-3/4'>
        <Image
          src='/eclipse-logo-only.jpg'
          style={{ objectFit: 'cover' }}
          width={500}
          height={500}
          className='absolute z-0 opacity-5 object-cover w-3/5 right-0 top-0'
          alt='Eclipse Construction'
        />
      </div>
      <div className='px-5 sm:pl-10 pt-48 pb-2 flex flex-col gap-2 max-w-[850px]'>
        <h1 className='font-black text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
          <Reveal>Eclipse</Reveal>
          <Reveal>Construction</Reveal>
        </h1>
        <Reveal>
          <p>Trusted, timely, exceptional exterior remodeling services.</p>
        </Reveal>
      </div>
      <Image
        src={roof}
        className='w-full h-[75vh] object-cover z-10 bottom-0'
        placeholder='blur'
        alt='photo of gable roof'
      />
    </section>
  )
}

export default Hero
