import React from 'react'

const Card = ({ children, position }) => {
  return (
    <div
      className={` ${
        position === 'right' ? 'ml-auto' : ''
      } bg-[--dark] w-full md:w-2/3 text-[--light] flex items-center justify-center border-[1px] border-[--dark] shadow-lg shadow-[--dark] aspect-[5/4] sm:aspect-video rounded-lg overflow-hidden`}
    >
      {children}
    </div>
  )
}

export default Card
