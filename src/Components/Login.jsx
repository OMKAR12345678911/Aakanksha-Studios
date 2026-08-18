import React, { useSyncExternalStore } from 'react';
import PageTransition from './PageTransition';

// 1. Export the login status variable directly
export let isLoggedInValue = false; 

// 2. Setup an internal tracking array for external files to listen to updates
const listeners = new Set();

// 3. Export a function that updates the variable and alerts listeners
export const setLoginStatus = (status) => {
  isLoggedInValue = status;
  listeners.forEach((callback) => callback());
};

// 4. Export a function to allow other files to subscribe to state changes
export const subscribeToLogin = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback); // Cleanup function
};

const Login = () => {
  // 5. BRIDGE: Force React to listen to your external subscription
  const isLoggedIn = useSyncExternalStore(
    subscribeToLogin, 
    () => isLoggedInValue
  );

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Grab input text safely
    const emailInput = document.getElementById("Email");
    const emailValue = emailInput ? emailInput.value : "";
    
    // Update global state (This triggers the useSyncExternalStore hook to redraw the UI)
    setLoginStatus(true); 
    
    // Inject the text right after React finishes building the new screen
    setTimeout(() => {
      const displayTarget = document.getElementById("uremail");
      if (displayTarget) {
        displayTarget.textContent = emailValue;
      }
    }, 0);
  };

  if (!isLoggedIn) {
    return (
      <PageTransition>
      <div className='w-full max-w-sm p-4 mx-auto'>
        <form onSubmit={handleLogin} className='w-full border-2 border-gray-500 bg-gray-400 rounded-2xl text-center p-6 shadow-xl'>
          <h2 className='font-extrabold text-3xl text-black mb-6'>Welcome Back</h2>

          <div className='mb-4 text-center'>
            <label className='block font-bold text-xl text-black mb-1'>Email</label>
            <input type='email' placeholder='Enter your email' className='w-full bg-gray-600 border-2 border-amber-950 rounded-2xl p-2 text-center text-white focus:outline-none' id="Email" required/>
          </div>

          <div className='mb-6 text-center'>
            <label className='block font-bold text-xl text-black mb-1'>Password</label>
            <input type='password' placeholder='Enter your password' className='w-full bg-gray-600 border-2 border-amber-950 rounded-2xl p-2 text-center text-white focus:outline-none' id="Password" required/>
          </div>

          <button type="submit" className='w-full rounded-2xl bg-black font-bold text-2xl text-white text-center p-2 cursor-pointer'>
            LOGIN
          </button>
        </form>
      </div>
    </PageTransition>
    );
  } else {

    return (
      <PageTransition>
      <div className='w-full max-w-sm p-6 mx-auto bg-gray-800 rounded-2xl text-center shadow-xl'>
        <h1 className='font-extrabold text-4xl text-white mb-4'>Your Email:</h1>
        <h1 id="uremail" className='text-xl text-amber-400 font-semibold break-all'></h1>
      </div>
      </PageTransition>
    );
    
  }
  
};

export default Login;
