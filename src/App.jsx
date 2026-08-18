import { useState } from 'react';
import { Outlet } from 'react-router'; 
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Service from './Components/Services.jsx'

// NOTE: We removed the local Login import from here 
// because the router should control when Login appears.

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      {/* 1. Navbar stays here at the very top of your application */}
      <Navbar />
      
      {/* 2. Your centered layout container wrapper */}
      <div className='flex items-center justify-center min-h-screen bg-gray-950 from-purple-500 to-indigo-500'>
        <main>
          {/* 3. The Outlet is the ONLY thing that belongs here. */}
          {/* React Router will automatically inject <Login /> or <About /> right here. */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;