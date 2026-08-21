import React, { useEffect, useState } from 'react';
import SpinnerImg from '../assets/loader.svg';

export default function Spinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Fixed: Call as a function
    }, 3000);

    return () => clearTimeout(timeoutId); // Added: Clean up timeout to prevent memory leaks
  }, []);

  // Return null or empty when loading is finished
  if (!isLoading) return null; 

  return (
    <div className="spinner-container">
      <img src={SpinnerImg} alt="Loading..." />
    </div>
  );
}
