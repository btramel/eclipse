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
      className='relative flex flex-col min-h-screen justify-center bg-[--light] text-[--dark] w-full p-5 sm:p-10'
    >
      <Reveal>
        <h1 className='pt-20 text-[10vw] sm:text-7xl leading-[10vw]'>
          Services
        </h1>
      </Reveal>
      <div className='p-4 sm:p-8'>
        <CardContainer>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl'>Roofing</h1>
              </Reveal>
              <p className='text-xs sm:text-sm'>
                From urgent repairs and replacements to restorations – our local
                experts provide top-notch service at competitive rates. We boast
                a long list of satisfied customers and a portfolio of successful
                projects with our fast turnarounds and quality craftsmanship.
              </p>
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={roofing}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Card>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl'>Siding</h1>
              </Reveal>
              <p className='text-xs sm:text-sm'>
                With roots in the Midwest, we understand the unique needs of
                this region’s weather patterns. Our team stays ahead of building
                codes, industry standards, and safety protocols. From product
                selection to installation, we provide solutions that address
                your specific challenges.
              </p>
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={siding}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Card>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl'>Windows</h1>
              </Reveal>
              <p className='text-xs sm:text-sm'>
                We specialize at installing windows that weather-proof your home
                no matter the season.
              </p>
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={windows}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Card>
          <Card>
            <div className='w-1/2 flex flex-col gap-2 p-6'>
              <Reveal>
                <h1 className='text-lg sm:text-2xl'>Gutters</h1>
              </Reveal>
              <p className='text-xs sm:text-sm'>
                Our team repairs and replaces gutters for maximum efficiency,
                durability, and longevity.
              </p>
            </div>
            <div className={`w-1/2 h-full overflow-hidden`}>
              <Image
                src={gutters}
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Card>
        </CardContainer>
      </div>
    </section>
  )
}

export default Services
