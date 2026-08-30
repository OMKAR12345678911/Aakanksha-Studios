import React from 'react'
import PageTransition from './PageTransition'

const galleryImages = [
  { 
    src: '/imgs/fami.jpg', 
    title: 'Portrait sessions', 
    className: 'sm:col-span-2 sm:row-span-5' // Main feature block (Takes up 2/3 width, full height)
  },
  { 
    src: '/imgs/family.png', 
    title: 'Family stories', 
    className: 'sm:col-span-1 sm:row-span-1' 
  },
  { 
    src: '/imgs/little.jpg', 
    title: 'Little moments', 
    className: 'sm:col-span-1 sm:row-span-1' 
  },
  { 
    src: '/imgs/Moment.jpeg', 
    title: 'Timeless frames', 
    className: 'sm:col-span-1 sm:row-span-1' 
  },
  { 
    src: '/imgs/Matter.jpeg', 
    title: 'Details that matter', 
    className: 'sm:col-span-1 sm:row-span-2' 
  },
  { 
    src: '/imgs/fami.jpg', 
    title: 'Studio portraits', 
    className: 'hidden' // Hidden on desktop because the 4-row layout is filled perfectly by 5 items.
  },
];



const Gallary = () => <PageTransition><section className="w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-16"><div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-3 text-sm font-semibold tracking-[0.24em] text-amber-400">OUR GALLERY</p><h1 className="text-4xl font-semibold text-amber-50 sm:text-5xl">Moments, beautifully preserved.</h1></div><p className="max-w-md text-base leading-7 text-zinc-400">A glimpse of the warm, natural, and polished photography we love to create in the studio.</p></div><div className="grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[170px]">{galleryImages.map((image) => <figure key={image.src} className={`group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-900 ${image.className}`}><img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-75" loading="lazy" /><figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent px-5 pb-4 pt-12 text-sm font-medium text-amber-100 transition duration-300 group-hover:translate-y-0">{image.title}</figcaption></figure>)}</div></section></PageTransition>





export default Gallary;

