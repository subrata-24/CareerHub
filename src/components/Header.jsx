import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login';

const Header = () => {

  const [isOpen, setIsopen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="font-extrabold text-3xl md:text-4xl text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors">
            CareerHub
          </h1>
        </Link>

        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-md"
            onClick={()=>{setIsopen(true)}}
          >
            Job Seeker
          </button>
          <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-md"
            onClick={()=>{setIsopen(true)}}
          >
            Employers
          </button>
          <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-md"
            onClick={()=>{setIsopen(true)}}
          >
            Admin
          </button>
        </div>
      </nav>
      {isOpen && <Login isClose={()=> setIsopen(false)} />}
    </header>
  )
}

export default Header
