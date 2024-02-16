import SEO from '@/components/SEO'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import roof from '/public/roof-dark.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <SEO site={{ title: 'Eclipse Construction' }} />
      <main
        id='top'
        className={`flex scroll-smooth min-h-screen flex-col items-center justify-between bg-[--dark] text-[--light] font-sans text-sm sm:text-base`}
      >
        <Nav
          navItems={[
            { title: 'services', link: '#services', mobile: 'hidden' },
            { title: 'our story', link: '#about', mobile: 'hidden' },
            { title: 'free inspection', link: '#inspection' },
          ]}
        />
        {/* HERO SECTION */}
        <section
          id='hero'
          className='flex flex-col min-h-screen justify-center w-full'
        >
          <div className='pl-5'>
            <h1 className='font-black text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
              <Reveal>Eclipse</Reveal>
              <Reveal>Construction</Reveal>
            </h1>
            <p>
              We provide exceptional residential and commercial exterior
              remodeling services.{' '}
            </p>
          </div>
          <Image
            src={roof}
            placeholder='blur'
            alt='photo of gable roof'
            className='ml-auto'
          />
        </section>
        {/* SERVICES SECTION */}
        <section
          id='services'
          className='flex flex-col h-screen justify-center'
        >
          <h1 className='text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
            <Reveal>Services</Reveal>
          </h1>
          <ul>
            <li>Roofing</li>
            <li>Siding</li>
            <li>Windows</li>
            <li>Gutters</li>
            <li>And More!</li>
          </ul>
        </section>
        {/* ABOUT SECTION */}
        <section id='about' className='flex flex-col h-screen justify-center'>
          <h1 className='text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
            <Reveal>Our Story</Reveal>
          </h1>
        </section>
        {/* INSPECTION SECTION */}
        <section
          id='inspection'
          className='flex flex-col h-screen justify-center'
        >
          <h1 className='text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
            <Reveal>Contact Us</Reveal>
          </h1>
        </section>
      </main>
    </>
  )
}
