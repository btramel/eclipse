const CardContainer = ({ children }) => {
  return (
    <div className='rounded-lg border-[1px] border-[--dark] flex flex-col p-4 sm:p-10 sm:grid sm:grid-flow-row sm:grid-cols-2 gap-8 sm:gap-8'>
      {children}
    </div>
  )
}

export default CardContainer
