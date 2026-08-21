import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="flex flex-row justify-end items-center gap-6  h-auto  text-white p-4">
      <Link to="/" className='rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40'>Home</Link>
      <Link to="/project" className='rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40'>Project</Link>
      <Link to="/internship" className='rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40'>Internship</Link>
      <Link to="/education" className='rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40'>Education</Link>
      <Link to="/contact" className='rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40'>Contact</Link>

    </div>
  )
}

export default Header