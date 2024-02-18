import Image from 'next/image'
import Card from './Card'
import CardContainer from './CardContainer'
import Reveal from './Reveal'
import roofing from '/public/roofing.jpg'
import siding from '/public/siding.jpg'
import gutters from '/public/gutters.jpg'
import windows from '/public/windows.jpg'

const Services = () => {
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
                <h1 className='text-lg sm:text-2xl'>Roofing</h1>
              </Reveal>
              <ul className='text-xs list-disc pl-4'>
                <li>Replacements</li>
                <li>Repairs</li>
                <li>Residential</li>
                <li>Commercial - including flat roofing</li>
              </ul>
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
                <h1 className='text-lg sm:text-2xl'>Siding</h1>
              </Reveal>
              <ul className='text-xs list-disc pl-4'>
                <li>Replacements</li>
                <li>Repairs</li>
                <li>Residential and Commercial</li>
                <li>Vinyl, metal, wood, and more!</li>
              </ul>
            </div>
          </Card>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-2 sm:p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl'>Windows</h1>
              </Reveal>
              <p className='text-xs lg:text-sm'>
                We specialize at installing windows that weather-proof your home
                no matter the season.
              </p>
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
                <h1 className='text-lg sm:text-2xl'>Gutters</h1>
              </Reveal>
              <p className='text-xs lg:text-sm'>
                Our team repairs and replaces gutters for maximum efficiency,
                durability, and longevity.
              </p>
            </div>
          </Card>
        </CardContainer>
      </div>
    </section>
  )
}

export default Services
