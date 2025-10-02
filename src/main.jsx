import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
//import { Connect } from 'vite'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router=createBrowserRouter([
{
  path:'/',
  element:<App></App>
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
