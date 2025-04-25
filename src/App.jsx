import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <>
    <RouterProvider router={router} />

    <Toaster
      toastOptions={{
        className: '',
        style: {
          fontSize: '13px'
        }
      }}
    />
   </>
  )
}

export default App
