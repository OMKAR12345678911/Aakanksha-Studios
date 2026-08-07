import React from 'react'
import { Link } from 'react-router' // 1. IMPORT LINK FROM REACT ROUTER
import myimage from '../assets/account.svg'
const Navbar = () => {
  return (
    // FIX: Changed 'mb:bg-white' to 'md:bg-white' (Tailwind uses md for medium screens, not mb)
     <div className='bg-black text-amber-50 md:bg-black'> {/* Fixed 'mb:bg-white' typo to 'md:bg-white' */}
  <ul className='flex items-center space-x-4 list-none p-0 m-0 cursor-pointer'>
      
    <li className='gap-2 list-none p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>
      <a href='/' className='gap-2 list-none p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>Home</a>
    </li>
    <li className='p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>
      <a href='/service' className='gap-2 list-none p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>Services</a>
    </li>
    <li className='p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>
       <a href='/aboutus' className='gap-2 list-none p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>About Us</a>
    </li>
    <li className='p-2 backdrop-brightness-150 hover:bg-white hover:text-black hover:font-bold font-bold'>
       <a href='/contactus' className='gap-2 list-none p-2 hover:bg-white hover:text-black hover:font-bold font-bold'>Contact</a>
    </li>

    {/* This item now pushes itself and the image to the far right side */}
    <li className="ml-auto flex items-center p-2">
<figure className="flex flex-col items-center">
  <img src={myimage} alt="Logo" className="h-8 w-auto" />
  <figcaption>
    <h1 className="text-center">Account</h1>
  </figcaption>
</figure>
      
    </li>
  </ul>
</div>



  )
}

export default Navbar
