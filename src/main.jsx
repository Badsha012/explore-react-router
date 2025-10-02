import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
//import { Connect } from 'vite'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'

const router=createBrowserRouter([
{
  index:true,
  element:<Home></Home>
},
{
  path:'/contact',
  element:<Contact></Contact>
},
{
  path:'/about',
  element:<About></About>
},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
