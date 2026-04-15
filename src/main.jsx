import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Router'
import FreindContextProvider from './ContextShare/GobalContext'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>

      <FreindContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </FreindContextProvider>
      
     </StrictMode>,
)
