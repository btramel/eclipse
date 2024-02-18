import SEO from '@/components/SEO'
import Nav from '@/components/Nav'
import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Inspection from '@/components/Inspection'
export default function Home() {
  return (
    <main
      id='top'
      className={`flex min-h-screen flex-col items-center justify-between bg-[--dark] text-[--light] font-sans text-sm sm:text-base`}
    >
      <SEO site={{ title: 'Eclipse Construction' }} />

      <Nav
        navItems={[
          { title: 'services', link: '#services', mobile: 'hidden' },
          { title: 'our story', link: '#about', mobile: 'hidden' },
          { title: 'free inspection', link: '#inspection' },
        ]}
      />
      <Hero />
      <Services />
      <About />
      <Inspection />
      <footer className='flex justify-between items-center h-full w-full p-4 border-[1px] border-[--dark] border-t-[--accent]'>
        <p>MN #BC794989</p>
        <a href='#top'>
          <Image
            src='/eclipse-logo-only.jpg'
            width={80}
            height={80}
            className='ml-4'
            alt='Eclipse Construction'
            title='Eclipse Construction'
          />
        </a>
        <div className='flex flex-col gap-2 h-full'>
          <a href='mailto:office@eclipseconstructionmn.com'>
            office@eclipseconstructionmn.com
          </a>
          <p>507-369-4988</p>
        </div>
      </footer>
    </main>
  )
}
