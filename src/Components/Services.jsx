import React from 'react'
import PageTransition from './PageTransition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import passport from '../assets/passport.png'
import family from '../assets/family.png'
import baby from '../assets/baby.png'
import portrait from '../assets/portrait.png'
const Services = () => {
  return (
    <PageTransition>
    <div className="w-full py-8">
  <div className="flex flex-row flex-wrap items-stretch justify-center gap-6">
    
 
    <div className="group flex w-96 flex-col justify-between rounded-3xl border-2 border-amber-600 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">
      
    
      <div>
        <div className="mb-4 flex items-center justify-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/80 text-amber-300 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-black">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold tracking-wide text-amber-50">
          Passport Photos
        </h2>
      </div>

      
      <div className="my-6 flex items-center justify-between gap-4">
        <ul className="space-y-2 text-base font-light text-amber-100/90">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Passport
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Visa
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Pan Card
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Aadhaar Card
          </li>
        </ul>

        <img
          src={passport}
          alt="Passport illustration"
          className="h-28 w-28 object-contain -rotate-6 transition-transform duration-300 group-hover:rotate-0"
        />
      </div>

     
      <button className="flex w-full items-center justify-between border-t border-amber-500/20 pt-4 text-lg font-medium text-amber-300 transition-colors hover:text-amber-200">
        <span>BOOK NOW</span>
        <span className="transition-transform group-hover:translate-x-1">➔</span>
      </button>
    </div>

    
    <div className="group flex w-96 flex-col justify-between rounded-3xl border-2 border-amber-600 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">
      
      
      <div>
        <div className="mb-4 flex items-center justify-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/80 text-amber-300 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-black">
            <FontAwesomeIcon icon={faCamera} className="text-lg" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold tracking-wide text-amber-50">
          Portrait Photography.
        </h2>
      </div>

     
      <div className="my-6 flex items-center justify-between gap-4">
        <p className="text-base font-light leading-relaxed text-zinc-300">
          Professional indoor portrait sessions tailored for individuals, portfolios, and branding.
        </p>

        <img
          src={portrait}
          alt="Portrait illustration"
          className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Bottom Action */}
      <button className="flex w-full items-center justify-between border-t border-amber-500/20 pt-4 text-lg font-medium text-amber-300 transition-colors hover:text-amber-200">
        <span>BOOK NOW</span>
        <span className="transition-transform group-hover:translate-x-1">➔</span>
      </button>
    </div>

    <div className="group flex w-96 flex-col justify-between rounded-3xl border-2 border-amber-600 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">
      
      
      <div>
        <div className="mb-4 flex items-center justify-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/80 text-amber-300 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-black">
            <FontAwesomeIcon icon={faUserGroup} className="text-lg" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold tracking-wide text-amber-50">
          Family Photography
        </h2>
      </div>

     
      <div className="my-6 flex items-center justify-between gap-4">
        <p className="text-base font-light leading-relaxed text-zinc-300">
          Beautiful family portraitsin our comfortable studio.
        </p>

        <img
          src={family}
          alt="Portrait illustration"
          className="h-35 w-35 md:20 md:20 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      
      <button className="flex w-full items-center justify-between border-t border-amber-500/20 pt-4 text-lg font-medium text-amber-300 transition-colors hover:text-amber-200">
        <span>BOOK NOW</span>
        <span className="transition-transform group-hover:translate-x-1">➔</span>
      </button>
    </div>

    <div className="group flex w-96 flex-col justify-between rounded-3xl border-2 border-amber-600 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">
      
      
      <div>
        <div className="mb-4 flex items-center justify-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/80 text-amber-300 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-black">
            <FontAwesomeIcon icon={faUserGroup} className="text-lg" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold tracking-wide text-amber-50">
          Baby Photography
        </h2>
      </div>

     
      <div className="my-6 flex items-center justify-between gap-4">
        <p className="text-base font-light leading-relaxed text-zinc-300">
          Capture your baby's cutest moments with love.
        </p>

        <img
          src={baby}
          alt="Portrait illustration"
          className="h-35 w-50 md:20 md:20 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      
      <button className="flex w-full items-center justify-between border-t border-amber-500/20 pt-4 text-lg font-medium text-amber-300 transition-colors hover:text-amber-200">
        <span>BOOK NOW</span>
        <span className="transition-transform group-hover:translate-x-1">➔</span>
      </button>
    </div>

  </div>

</div>
  
    </PageTransition>
  )
}

export default Services