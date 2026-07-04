import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className='bg-[rgb(18_18_18)] flex p-8 justify-between items-center px-15 fixed w-full z-50' >
        <div >
          <p className='text-[rgb(237_36_25)] text-3xl font-sans'>Logo</p>
        </div>
        <div className='text-gray-400 text-xl  w-180 flex justify-evenly'>
          <a href='#home'>Home</a>
          <a href='#about'>About me</a>
          <a href='#project'>Project</a>
         
          <a href='#connect'>Connect</a>
         
        </div>
        <div>
          <a href='#connect' className='bg-[rgb(249_109_0)] p-2 rounded-lg text-gray-200 w-25'>Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar