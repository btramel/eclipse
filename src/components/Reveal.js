import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion'
import { useEffect, useRef } from 'react'
const Reveal = ({ children, width = 'w-fit' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      // Fire the animation
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])
  return (
    <div ref={ref} className={`${width} relative overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className='absolute top-[4px] bottom-[4px] left-0 right-0 bg-[--accent] z-20'
      />
    </div>
  )
}

export default Reveal
