import React from 'react'
import '../index.css'
import PageTransition from '../Components/PageTransition';

const Dashboard = () => {
  return (
    <PageTransition>
      {/* Container: Added 'relative w-full min-h-screen' so absolute coordinates calculate from the real top of this viewport */}
      <div className='bg-black w-full min-h-screen text-center justify-items-start z-10 align-top relative md:static overflow-y-auto overflow-x-hidden'>
        
        {/* Tagline Badge */}
        <h3 className='px-6 py-2 font-bold text-amber-50 border-2 border-amber-200 rounded-2xl z-10 absolute left-1/2 -translate-x-1/2 top-10 md:top-auto md:left-auto md:translate-x-0 ml-0 mt-0 md:ml-5 md:mt-5 backdrop-blur-xl bg-black/50 whitespace-nowrap text-sm sm:text-base'>
          <i className="fa-solid fa-bolt mr-2 z-40">⚡</i>
          Passport Photo In 10 mins
        </h3>

        {/* Heading 1 */}
        <h1 className='text-2xl absolute top-[35%] md:top-99 left-1/2 md:left-60 -translate-x-2/4 -translate-y-2/4 text-center font-bold opacity-100 z-50 text-3xl sm:text-4xl md:text-4xl text-white whitespace-nowrap opacity-100'>
          CAPTURING MOMENTS,
        </h1>

        {/* Heading 2 */}
       
        <h1 className='absolute top-[45%] md:top-2/4 left-1/2 md:left-60 mt-0 -translate-x-2/4 -translate-y-2/4 text-center md:text-left pt-1 text-amber-400 text-3xl sm:text-4xl md:text-4xl whitespace-nowrap z-50 font-extralight '>
          CREATING MEMORIES,
        </h1>

        {/* Description Paragraph */}
        <p className='text-lg sm:text-xl md:text-2xl absolute text-center md:text-left top-[60%] md:top-150 opacity-100 left-1/2 md:left-10 -translate-x-2/4 md:translate-x-0 text-amber-100/75 z-50 md:truncate w-[90%] md:w-auto max-w-xs sm:max-w-xl md:max-w-5xl px-4 md:px-0'>
          Professional Indoor Studio Photography for every <br className="hidden md:inline" /> precious moments of your life
        </p>
        
       
        {/* Background Image */}
        <img 
          src='src/assets/bg.jpg' 
          className='opacity-55 w-screen h-screen md:h-1h object-cover md:object-fill' 
          draggable="false"
          alt="Background"
        />
      </div>
    </PageTransition>
  )
}

export default Dashboard
