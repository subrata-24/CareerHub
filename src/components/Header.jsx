import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="font-extrabold text-3xl md:text-4xl text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors">
            CareerHub
          </h1>
        </Link>

        <div className="flex space-x-4">
          <Link
            to="/jobs"
            className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-md"
          >
            Job Seeker
          </Link>
          <Link
            to="/employer"
            className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors font-medium shadow-md"
          >
            Employers
          </Link>
          <Link
            to="/admin"
            className="px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors font-medium shadow-md"
          >
            Admin
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
