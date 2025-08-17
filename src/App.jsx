import React from 'react'
import AppLayout from './layout/app.layout'
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
