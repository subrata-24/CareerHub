import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
      <main>
          <Header/>
      <Outlet/>
    </main>
  )
}

export default AppLayout
