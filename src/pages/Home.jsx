import React from 'react'

export const Home = () => {
  return (
   <>
   <div className='pl-30 pt-20 bg-[rgb(18_18_18)] text-gray-300 h-screen '>
    <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3  '>
            <div><p className='text-2xl '>Hi I am</p></div>
            <div>
                <h1 className='text-5xl'>Kameshwar</h1>
            </div>
        </div>
        <div>
            <h1 className='text-[rgb(237_36_25)] text-6xl mask-linear-from-0.5 '>MERN Stack Developer</h1>
        </div>
        <div className='flex gap-7'>
            <div>
                <button className='bg-[rgb(237_36_25)] p-2 rounded-lg text-gray-200  w-40 h-13'>Hire Me</button>
            </div>
            <div>
                <button className=' p-2 rounded-lg text-gray-200 border w-40 h-13'>Download CV</button>
            </div>
        </div>
    </div>
   

   </div>
   </>
  )
}
