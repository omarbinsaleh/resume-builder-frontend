import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import { Toaster } from 'react-hot-toast'
import UserProvider from './context/userContext'

const App = () => {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />

        <Toaster
          toastOptions={{
            className: '',
            style: {
              fontSize: '13px'
            }
          }}
        />
      </UserProvider>
    </>
  )
}

export default App
