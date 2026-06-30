import React from 'react'

const Contact = () => {
  return (
   <>
   <div className='p-20 bg-[rgb(18_18_18)] h-full' id='connect'>
    <div className=' text-center flex flex-col gap-5' >
        <p className='text-4xl text-white font-semibold'>Contact</p>
        <p className='text-2xl text-gray-400'>Cultivating Connection : Reach out and connect with me</p>
    </div>
    <div className='flex justify-center pt-20'>
        <form action="" className='flex flex-col gap-10'>

                      <div  className='grid grid-cols-2 gap-5'>
                          <div className='flex flex-col gap-5'>
                              <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="text" placeholder='Enter your Name' />
                              <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="tel" placeholder='Phone Number' />
                              <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="email" placeholder='Email' />
                          </div>
                          <div className='flex flex-col gap-5'>
                              <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="text" placeholder='what' />
                              <textarea className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' name="" id="" cols="30" rows='10' placeholder='Enter the message'></textarea>
                          </div>
                      </div>

            <div className='flex justify-center '>
                <button className='bg-orange-400 p-5 rounded-2xl w-40 h-10 flex items-center justify-center'>Send</button>
            </div>
        </form>
    </div>
    <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
    </div>
   </div>
   </>
  )
}

export default Contact