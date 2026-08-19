import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import myimage from '../assets/account.svg'
import mylogo from '../assets/AakankshaStudiologo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'SERVICES', path: '/service' },
    { name: 'GALLARY', path: '/galary' },
    { name: 'ABOUT US', path: '/aboutus' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'CONTACT US', path: '/contactus' },
  ]

  const desktopLinkClass = ({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive ? 'after:w-[calc(100%-2rem)]' : 'after:w-0 hover:after:w-[calc(100%-2rem)]'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block px-6 py-3 font-bold text-base transition-colors duration-200 border-l-4 ${
      isActive
        ? 'text-amber-400 border-amber-400 bg-amber-400/10'
        : 'text-amber-50 border-transparent hover:text-amber-300 hover:bg-neutral-900'
    }`

  return (
    <div className='bg-black text-amber-50 md:bg-black w-full sticky top-0 z-50'>
      {/* Top Bar */}
      <ul className='flex items-center space-x-2 list-none p-0 m-0 z-50 h-20'>
        {/* Logo Section */}
        <li className='ml-2 flex items-center z-50'>
          <Link to="/">
            <img src={mylogo} alt='Logo' className='h-20 w-auto' draggable='false' />
          </Link>
        </li>

        {/* Desktop Navigation Links (Unchanged) */}
        {navLinks.map((link) => (
          <li key={link.path} className='hidden md:block'>
            <NavLink to={link.path} className={desktopLinkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}

        {/* Account Link (Always visible on far right) */}
        <li className='ml-auto flex items-center px-4 mr-2 md:mr-4'>
          <Link to='/login' className='flex flex-col items-center group'>
            <img
              src={myimage}
              alt='Account Icon'
              className='h-7 w-auto md:h-8 transition-transform duration-200 group-hover:scale-105'
            />
            <span className='text-center font-bold text-xs md:text-sm mt-0.5 md:mt-1'>Account</span>
          </Link>
        </li>

        {/* Mobile Hamburger Toggle Button */}
        <li className='flex md:hidden items-center pr-4'>
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 text-amber-400 hover:text-amber-300 focus:outline-none'
            aria-label='Toggle navigation menu'
          >
            {isOpen ? (
              <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden bg-black/95 border-t border-neutral-800 backdrop-blur-md transition-all duration-300 pb-3'>
          <ul className='flex flex-col list-none p-0 m-0'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar