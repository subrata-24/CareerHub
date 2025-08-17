import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
          <nav className='py-4 flex justify-between items-center'>
              <Link>
                  <h1 className='font-bold text-5xl text-yellow-500'>CareerHub</h1>
              </Link>
              <button>JobSeeker</button>
              <button>Employers</button>
              <button>Admin</button>
      </nav>
    </div>
  )
}

export default Header
