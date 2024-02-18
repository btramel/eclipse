const CardContainer = ({ children }) => {
  return (
    <div className='rounded-lg border-[1px] border-[--dark] flex-col p-4 sm:p-10 flex items-center justify-center gap-12 w-full'>
      {children}
    </div>
  )
}

export default CardContainer
