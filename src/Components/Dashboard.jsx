import React from 'react';
import '../index.css';
import PageTransition from '../Components/PageTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faBolt, faImage } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import backgroundimg from '../assets/bg.jpg';

const Dashboard = () => {
  return (
    <PageTransition>
      {/* Container */}
      <div className='bg-black w-full min-h-[100svh] text-center justify-items-start z-10 align-top relative overflow-x-hidden md:h-[calc(100svh-5rem)] md:min-h-0 md:overflow-hidden'>
      
        {/* Tagline Badge */}
        <h3 className='px-6 py-2 font-bold text-amber-50 border-2 border-amber-200 rounded-2xl z-10 absolute left-1/2 -translate-x-1/2 top-10 md:top-auto md:left-auto md:translate-x-0 ml-0 mt-0 md:ml-5 md:mt-5 backdrop-blur-xl bg-black/50 whitespace-nowrap text-sm sm:text-base'>
          <span className='mr-2'>⚡</span>
          Passport Photo In 10 mins
        </h3>

        {/* Heading 1 */}
        <div className="absolute top-1/2 left-1/2 md:top-[32%] -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 md:gap-4 drop-shadow-lg w-full md:w-auto text-center px-4">
  {/* Heading 1 */}
  <h1 
    className="text-[clamp(1.55rem,5.5vw,3.75rem)] md:text-[clamp(2.55rem,5.5vw,2.75rem)] text-white whitespace-nowrap leading-none" 
    style={{ fontFamily: 'headstyle' }}
  > 
    CAPTURING MOMENTS, 
  </h1> 
  
  {/* Heading 2 */} 
  <h1 
    className="text-amber-400 text-[clamp(1.55rem,5.5vw,2.75rem)] whitespace-nowrap leading-none" 
    style={{ fontFamily: 'headstyle' }}
  > 
    CREATING MEMORIES, 
  </h1>
</div>

        
        {/* Description Paragraph */}
        <p className='text-lg sm:text-xl md:text-2xl absolute text-center top-[50%] md:top-[53%] opacity-100 left-1/2 -translate-x-2/4 text-amber-100/75 z-50 w-[90%] max-w-xs sm:max-w-xl md:max-w-5xl px-4'>
          <br/><br/>Professional Indoor Studio Photography for every <br className="hidden md:inline" /> precious moments of your life
        </p>

        {/* Action Buttons Container (Maintained Position) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[75%] md:top-[80%] z-50 w-11/12 max-w-2xl md:max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
          
          <button type="button" className="group flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/60 border border-amber-500 rounded-xl text-amber-50 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-[1.02] shadow-lg">
            <span>PROFESSIONAL QUALITY</span>
          </button>

          <button type="button" className="group flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/60 border border-amber-500 rounded-xl text-amber-50 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-[1.02] shadow-lg">
            <FontAwesomeIcon icon={faCamera} className="text-amber-400 group-hover:text-black text-xs sm:text-sm shrink-0" />
            <span>HIGH RESOLUTION</span>
          </button>

          <button type="button" className="group flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/60 border border-amber-500 rounded-xl text-amber-50 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-[1.02] shadow-lg">
            <FontAwesomeIcon icon={faBolt} className="text-amber-400 group-hover:text-black text-xs sm:text-sm shrink-0" />
            <span>FAST SERVICE</span>
          </button>

          <button type="button" className="group flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/60 border border-amber-500 rounded-xl text-amber-50 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-[1.02] shadow-lg">
            <FontAwesomeIcon icon={faCalendar} className="text-amber-400 group-hover:text-black text-xs sm:text-sm shrink-0" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <button type="button" className="group col-span-2 md:col-span-1 flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/60 border border-amber-500 rounded-xl text-amber-50 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-[1.02] shadow-lg">
            <FontAwesomeIcon icon={faImage} className="text-amber-400 group-hover:text-black text-xs sm:text-sm shrink-0" />
            <span>VIEW GALLERY</span>
          </button>

        </div>

        {/* Background Image */}
        <img 
          src={backgroundimg}
          className='absolute inset-0 z-0 h-full w-full object-cover opacity-55' 
          draggable="false"
          alt="Background"
        />
      </div>
    </PageTransition>
  );
};

export default Dashboard;
