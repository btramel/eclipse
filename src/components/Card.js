import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='bg-[--dark] text-[--light] flex items-center justify-center border-[1px] border-[--dark] shadow-lg shadow-[--dark] aspect-video rounded-lg overflow-hidden'>
      {children}
    </div>
  )
}

export default Card
