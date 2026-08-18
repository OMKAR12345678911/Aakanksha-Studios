import React, { useState, useEffect } from 'react';
// Import the variable and subscription tool from your Login file 
import Login, { isLoggedInValue, subscribeToLogin } from './Login';
import PageTransition from '../Components/PageTransition';

const Gallary = () => {
  // 1. Create a local state initialized with the current exported variable value
 const isLoggedIn = (subscribeToLogin, () => isLoggedInValue);

  // 2. Listen for changes to the exported variable
  useEffect(() => {
    const unsubscribe = subscribeToLogin((latestValue) => {
      setIsLoggedIn(latestValue); // Force React to re-render when the variable changes
    });

    return () => unsubscribe(); // Clean up listener when this component closes
  }, []);

  // 3. Conditional rendering using the local reactive state
  
  if (isLoggedIn === false) {
    return (
      <div>
       <script type="module" src="/src/main.js"></script>
      </div>
    );
  } else {
    return (
      <script type="module" src="/src/main.js"></script>
    );
  }
};

export default Gallary;
