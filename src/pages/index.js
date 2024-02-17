import SEO from '@/components/SEO'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import roof from '/public/roof-dark.jpg'
import Image from 'next/image'
import eclipse from '/public/eclipse-logo-only.jpg'

export default function Home() {
  return (
    <main
      id='top'
      className={`flex scroll-smooth min-h-screen flex-col items-center justify-between bg-[--dark] text-[--light] font-sans text-sm sm:text-base`}
    >
      <SEO site={{ title: 'Eclipse Construction' }} />

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
        className='flex flex-col min-h-screen justify-center w-full h-screen overflow-clip'
      >
        <Image src={eclipse} className='absolute top-0 left-0 z-0 opacity-5' />
        <div className='pl-5 sm:pl-10 pt-16 pb-2 flex flex-col gap-2 z-10'>
          <h1 className='font-black text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
            <Reveal>Eclipse</Reveal>
            <Reveal>Construction</Reveal>
          </h1>
          <Reveal>
            <p>Exceptional residential exterior remodeling services.</p>
          </Reveal>
        </div>
        <Image
          src={roof}
          className='w-full h-[50vh] object-cover z-10'
          placeholder='blur'
          alt='photo of gable roof'
        />
      </section>
      {/* SERVICES SECTION */}
      <section id='services' className='flex flex-col h-screen justify-center'>
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
      <footer>
        <p>MN #BC794989</p>
        <p>office@eclipseconstructionmn.com</p>
        <p>507-369-4988</p>
      </footer>
    </main>
  )
}
