import React, { useEffect, useState } from 'react';
import SpinnerImg from '../assets/loader.svg';

// 1. Accept the 'className' prop passed from App.jsx
export default function Spinner({ className = '' }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timeoutId); 
  }, []);

  if (!isLoading) return null; 

  return (
    // 2. Combine your custom layout classes with the passed-in Tailwind classes
    <div className={`flex items-center justify-center ${className}`}>
      {/* 3. Added 'animate-spin' if your loader.svg is a static graphic */}
      <img 
        src={SpinnerImg} 
        className="w-12 h-12 animate-spin text-white" 
        alt="Loading..." 
      />
    </div>
  );
}
