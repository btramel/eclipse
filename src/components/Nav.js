import logo from '/public/eclipse-logo-only.jpg'
import Image from 'next/image'
const Nav = ({ navItems }) => {
  return (
    <nav className='sticky z-20 top-0 w-full min-h-20 h-20 flex justify-between outline outline-[1px] outline-[--accent] items-center bg-[--dark] text-[--light]'>
      <div>
        <a href='#top'>
          <Image
            src={logo}
            className='h-20 w-20 ml-4'
            alt='Eclipse Construction'
            title='Eclipse Construction'
          />
        </a>
      </div>
      <ul className='flex gap-8 h-20 items-center justify-center'>
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className={`border-l-[1px] p-5 border-l-[--accent] w-full sm:w-1/3 text-center flex items-center justify-center h-full hover:no-underline hover:text-[--accent] ${
              item.mobile === 'hidden' && 'hidden sm:flex'
            } ${
              item.title === '507-369-4988' &&
              'bg-[--accent] text-[--dark] hover:bg-[--dark] hover:text-[--accent]'
            }`}
          >
            <li className='capitalize whitespace-nowrap'>{item.title}</li>
          </a>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
