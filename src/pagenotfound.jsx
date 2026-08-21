import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFileCircleExclamation, faUser } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

const pagenotfound = () => {
  return (
    <div>
      <div className='text-4xl md:text-7xl text-emerald-50 flex flex-col min-h-svh justify-center items-center'>
      <span  className='text-4xl md:text-7xl'>
        
        PAGE NOT FOUND
      </span><br />
      
      <FontAwesomeIcon icon={faFileCircleExclamation} Classname="block text-white md:size-5 size-2"/>
      </div>
    </div>
  )
}

export default pagenotfound