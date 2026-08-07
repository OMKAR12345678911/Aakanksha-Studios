import React from 'react';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted smoothly without page reload!");
  };

  return (
    // 1. Structural wrapper that works harmoniously with App.jsx's layout
    <div className='w-full max-w-sm p-4'>
      
      {/* 2. The form element inside the container */}
      <form 
        onSubmit={handleLogin} 
        className='w-full border-2 border-gray-500 bg-gray-400 rounded-2xl text-center p-6 shadow-xl'
      >
        {/* Title Header */}
        <h2 className='font-extrabold text-3xl text-black mb-6'>Welcome Back</h2>

        {/* Email Field Group */}
        <div className='mb-4 text-center'>
          <label className='block font-bold text-xl text-black mb-1'>Email</label>
          <input 
            type='email' 
            placeholder='Enter your email' 
            className='w-full bg-gray-600 border-2 border-amber-950 rounded-2xl p-2 text-center text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-black'    
          />
        </div>

        {/* Password Field Group */}
        <div className='mb-6 text-center'>
          <label className='block font-bold text-xl text-black mb-1'>Password</label>
          <input 
            type='password' 
            placeholder='Enter your password' 
            className='w-full bg-gray-600 border-2 border-amber-950 rounded-2xl p-2 text-center text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-black'   
          />
        </div>

        {/* Action Button */}
        <button 
          type="submit"
          className='w-full rounded-2xl bg-black font-bold text-2xl text-white text-center p-2 cursor-pointer border-2 border-transparent hover:border-white transition-colors duration-200'  
        >
          LOGIN
        </button>

        {/* Forgot Password Link */}
        <div className='mt-4'>
          <a href='#' className='text-sm text-black hover:underline font-medium'>
            Forgot Password?
          </a>
        </div>
      </form>

    </div>
  );
}

export default Login;
