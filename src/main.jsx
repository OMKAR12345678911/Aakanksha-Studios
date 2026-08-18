import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Login from './Components/Login.jsx' 
import Service from "./Components/Services.jsx"
import Gallary from './Components/Gallary.jsx'
import Aboutus from './Components/Aboutus.jsx'
import Contactus from './Components/Contactus.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Pricing from './Components/pricing.jsx'
import './index.css' 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/login", 
        element: <Login />,
        
      },
    
      {
        path: "/service", 
        element: <Service />,
        
      },
       {
        path: "/aboutus", 
        element: <Aboutus />,
        
      },

      {
        path:"/contactus",
        element:<Contactus />,
      },
         {
        path:"/",
        element:<Dashboard />,
      },

      {
        path:"/galary",
        element:<Gallary/>,
      },

      {
        path:"/pricing",
        element:<Pricing/>,
      },

    ],
  },
])

// CRUCIAL MISSING STEP: Tell React to mount your router configuration to the HTML root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)