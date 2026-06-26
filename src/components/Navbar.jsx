import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-[rgb(18_18_18)] flex p-8 justify-between items-center px-15'>
        <div >
          <p className='text-[rgb(237_36_25)] text-3xl font-sans'>Logo</p>
        </div>
        <div className='text-gray-400 text-xl  w-180 flex justify-evenly'>
          <Link>Home</Link>
          <Link>About me</Link>
          <Link>Project</Link>
          <Link>Lerning</Link>
          <Link>Connect</Link>
        </div>
        <div>
          <button className='bg-[rgb(237_36_25)] p-2 rounded-lg text-gray-200 w-25'>Contact</button>
        </div>
      </div>
    </>
  )
}

export default Navbar