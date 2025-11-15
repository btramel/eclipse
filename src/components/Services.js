import Image from 'next/image'
import Card from './Card'
import CardContainer from './CardContainer'
import Reveal from './Reveal'
import roofing from '/public/roofing.jpg'
import siding from '/public/siding.jpg'
import gutters from '/public/gutters.jpg'
import windows from '/public/windows.jpg'

const Services = () => {
  const CTA = () => {
    return (
      <a
        href='tel:5073694988'
        className='hover:no-underline whitespace-nowrap my-5 text-xs p-3  text-center w-min text-[--dark] hover:text-[--accent] md:sp-5 bg-[--accent] hover:bg-[--dark] hover:border-[--accent] border-[--accent] border-2'
      >
        Free Inspection
      </a>
    )
  }

  return (
    <section
      id='services'
      className='relative py-20 sm:py-40  flex flex-col min-h-screen justify-center bg-[--light] text-[--dark] w-full p-5 sm:p-10'
    >
      <div className='p-2 sm:p-8 w-full'>
        <CardContainer>
          <Reveal>
            <h1 className='text-[10vw] sm:text-7xl leading-[10vw]'>Services</h1>
          </Reveal>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-2 sm:p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl underline decoration-[--accent] underline-offset-2'>
                  Roofing
                </h1>
              </Reveal>
              <ul className='text-xs md:text-base list-disc pl-4'>
                <li>Replacements</li>
                <li>Repairs</li>
                <li>Residential</li>
                <li>Commercial - including flat roofing</li>
              </ul>
              <CTA />
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={roofing}
                style={{ objectFit: 'cover', height: '100%' }}
                alt='home from front yard'
              />
            </div>
          </Card>
          <Card>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={siding}
                style={{ objectFit: 'cover', height: '100%' }}
                alt='side shot of home, including siding and windows'
              />
            </div>
            <div className='w-1/2 flex flex-col gap-2 p-2 sm:p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl underline decoration-[--accent] underline-offset-2'>
                  Siding
                </h1>
              </Reveal>
              <ul className='text-xs md:text-base list-disc pl-4'>
                <li>Replacements</li>
                <li>Repairs</li>
                <li>Residential and Commercial</li>
                <li>Vinyl, metal, wood, and more!</li>
              </ul>
              <CTA />
            </div>
          </Card>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-2 sm:p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl underline decoration-[--accent] underline-offset-2'>
                  Windows
                </h1>
              </Reveal>
              <p className='text-xs md:text-base'>
                We specialize at installing windows that weather-proof your home
                no matter the season.
              </p>
              <CTA />
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={windows}
                style={{ objectFit: 'cover', height: '100%' }}
                alt='side shot of home, including siding and windows'
              />
            </div>
          </Card>
          <Card>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={gutters}
                style={{ objectFit: 'cover', height: '100%' }}
                alt='side shot of home, including gutters'
              />
            </div>
            <div className='w-1/2 flex flex-col gap-2 p-2 sm:p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl underline decoration-[--accent] underline-offset-2'>
                  Gutters
                </h1>
              </Reveal>
              <p className='text-xs md:text-base'>
                Our team repairs and replaces gutters for maximum efficiency,
                durability, and longevity.
              </p>
              <CTA />
            </div>
          </Card>
        </CardContainer>
      </div>
    </section>
  )
}

export default Services
