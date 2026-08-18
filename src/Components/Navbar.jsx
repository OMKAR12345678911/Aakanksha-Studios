import React from 'react'
import { Link } from 'react-router' // React Router navigation
import myimage from '../assets/account.svg'
import mylogo from '../assets/AakankshaStudiologo.png'
import { NavLink } from "react-router";

const Navbar = () => {
  // Shared Tailwind styles for consistency and cleaner code
  const linkStyles = "relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)] p-2 "
if(screen)
  return (
    <div className='bg-black text-amber-50 md:bg-black w-full sticky top-0 z-50'>
      <ul className='flex items-center space-x-2 list-none p-0 m-0 z-50'>
        {/* Logo Section */}
        <li className="ml-2 flex items-center z-50">
          <img src={mylogo} alt="Logo" className='h-20 w-auto'  draggable='false'/>
        </li>

        {/* Navigation Links */}
        <li>
          
      <NavLink
  to="/"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
 Home

</NavLink>

        </li>
        <li>
          <NavLink
  to="/service"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
  SERVICES 
</NavLink>

        </li>
        <li>
          <NavLink
  to="/galary"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
  GALLARY
</NavLink>

        </li>
        <li>
          <NavLink
  to="/aboutus"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
  ABOUT US
</NavLink>

        </li>
        <li>
          <NavLink
  to="/pricing"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
  PRICING
</NavLink>

        </li>
        <li>
          <NavLink
  to="/contactus"
  className={({ isActive }) =>
    `relative block px-4 py-2 font-bold text-amber-50 transition-colors duration-200 after:absolute after:bottom-0 after:left-4 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 mr-6 ml-4 ${
      isActive 
        ? "after:w-[calc(100%-2rem)]" 
        : "after:w-0 hover:after:w-[calc(100%-2rem)]"
    }`
  }
>
  CONTACT US
</NavLink>

        </li>

        {/* Profile / Account Section on Far Right */}
        <li className="ml-auto flex items-center px-4 mr-4">
          <Link to='/login' className="flex flex-col items-center group">
            <img src={myimage} alt="Account Icon" className="h-8 w-auto transition-transform duration-200 group-hover:scale-105" />
            <span className="text-center font-bold text-sm mt-1">Account</span>
          </Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar
