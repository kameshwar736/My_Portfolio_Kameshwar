import React from 'react'
import linkedinLogo from '../assets/linkinLogo.png'
import gitLogo from '../assets/gitLogo.png'
import leetcodeLogo from '../assets/leetcodeLogo.png'
import devlogo from '../assets/images.png'

export const Home = () => {
    return (
        <>
            <div className='pl-30 pt-20 bg-[rgb(18_18_18)] text-gray-300 h-screen flex'>
                <div className='flex flex-col gap-8 mt-20 '>
                    <div className='flex flex-col gap-3  '>
                        <div><p className='text-2xl text-[rgb(112_112_112)] font-bold '>Hi I am</p></div>
                        <div>
                            <h1 className='text-4xl text-[rgb(149_149_149)] '>Kameshwar</h1>
                        </div>
                    </div>
                    
                 <div className='flex flex-col gap-20'>
                       <div className='flex flex-col gap-15'>
                        <div className='flex flex-col gap-10'>
                            <div> <h1 className='text-[rgb(247_108_0)] text-6xl mask-linear-from-0.5 '>MERN Stack Developer</h1></div>
                            <div className='flex gap-8'>
                                <div><img src={linkedinLogo} alt="logo" className='w-10 border p-1.5 rounded-4xl' /></div>
                                <div><img src={gitLogo} alt="logo" className='w-10 border p-1.5 rounded-4xl' /></div>
                                <div><img src={leetcodeLogo} alt="logo" className='w-10 border p-1.5 rounded-4xl' /></div>
                            </div>
                        </div>
                        <div className='flex gap-7'>
                            <div>
                                <button className='bg-[rgb(249_109_0)] p-2 rounded-lg text-gray-200  w-40 h-13'>Hire Me</button>
                            </div>
                            <div>
                                <button className=' p-2 rounded-lg text-gray-200 border w-40 h-13'>Download CV</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 bg-[rgb(27_27_27)] w-150 justify-center py-6 rounded-2xl  '>
                        <div className="px-6  ">
                            <p className='text-[rgb(237_36_25)] text-2xl font-bold'>200+</p>
                            <p className=' text-2xl'> experience hour</p>
                        </div>

                        <div className="px-6  border-l border-gray-600">
                            <p className='text-[rgb(237_36_25)] text-2xl font-bold'>3+</p>
                            <p className=' text-2xl'>project</p>
                        </div>
                        <div className="px-6  border-l border-gray-600 ">
                            <p className='text-[rgb(237_36_25)] text-2xl font-bold'>100+</p>
                            <p className='text-2xl'>Happy clients</p>
                        </div>
    
                    </div>
                 </div>
                </div>

                <div className='p-15 pt-20 pl-40'> 
                    <img src={devlogo} alt="" />
                </div>


            </div>
        </>
    )
}
