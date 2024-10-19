import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
   <div className=' container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-2xl font-bold hidden md:inline'>Ankit's Portfolio</div>
      <div className='space-x-6'>
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#project">Projects</a>
      <a href="#contact">Contact</a>
      </div>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
      transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'></button>
   </div>
    </nav>
  )
}

export default Navbar
