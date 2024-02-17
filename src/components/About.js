import Reveal from './Reveal'
const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col h-screen justify-center gap-4 bg-[--light] text-[--dark] w-full p-10'
    >
      <h1 className='pt-20 text-[10vw] sm:text-7xl leading-[10vw] flex flex-col'>
        <Reveal>Our Story</Reveal>
      </h1>
      <p className='max-w-[700px]'>
        Over the past decade, we developed expertise and trust within the
        industry, and came together under Eclipse Construction to reinforce our
        core values: honesty, integrity, and customer service. We pride
        ourselves on being a team property owners can whole-heartedly trust.
      </p>
      <p className='max-w-[700px]'>
        Our crew is committed to the highest standards of fairness, efficiency,
        and quality workmanship – both individually and as a team. From our
        office personnel to our project managers, you can trust that every
        Eclipse Construction employee is actively contributing to the vision you
        have for your post-storm home.
      </p>
    </section>
  )
}

export default About
