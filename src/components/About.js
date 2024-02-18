import Reveal from './Reveal'
import Image from 'next/image'
import crew from '/public/crew.jpg'
const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col py-20 sm:py-40 min-h-screen justify-center gap-4 bg-[--light] text-[--dark] w-full p-10'
    >
      <h1 className='text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
        <Reveal>Our Story</Reveal>
      </h1>
      <div className='relative flex flex-col lg:flex-row w-full justify-around items-center'>
        <div className='flex flex-col gap-4'>
          <p className='max-w-[600px]'>
            Over the past decade, we developed expertise and trust within the
            industry, and came together under Eclipse Construction to reinforce
            our core values: honesty, integrity, and customer service. We pride
            ourselves on being a team property owners can whole-heartedly trust.
          </p>
          <p className='max-w-[600px]'>
            Our crew is committed to the highest standards of fairness,
            efficiency, and quality workmanship – both individually and as a
            team. From our office personnel to our project managers, you can
            trust that every Eclipse Construction employee is actively
            contributing to the vision you have for your post-storm home.
          </p>
        </div>
        <Image
          src={crew}
          height={400}
          style={{ objectFit: 'contain' }}
          alt='roofing crew at work'
        />
      </div>
    </section>
  )
}

export default About
