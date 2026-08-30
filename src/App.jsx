import { useState, useEffect } from 'react';
import { Outlet } from 'react-router'; 
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Spinner from './Components/Spinner.jsx';

function App() {
  const [loading, setLoading] = useState(true); // Control your spinner state

  // Example: Turn off spinner after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 text-white">
      {/* 1. Full-screen Spinner Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
              <Spinner className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm" />

        </div>
      )}

      {/* 2. Navbar stays at the top */}
      <Navbar />
      
      {/* 3. Main layout container wrapper */}
      <div className='flex items-center justify-center min-h-[calc(100vh-64px)] from-purple-500 to-indigo-500'>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
