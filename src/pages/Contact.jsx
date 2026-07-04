import React, { useState } from 'react'

import whatsappLogo from '../assets/whatsappnew.png'
import mailLogo from '../assets/mail.png'
import linkedinLogo from '../assets/linkedin.png'
import emailjs from '@emailjs/browser'


const Contact = () => {


    const [fromData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
    const [send, setSend] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...fromData, [e.target.name]: e.target.value })
    }

    const handleSend = (e) => {

        e.preventDefault()

        setSend(true)

        emailjs.send(
            'service_xfayiuj',
            'template_tiidvfp',
            fromData,
            'exvPTl9fE3eHtOugk'
        ).then((res) => {
            console.log("email send");
            setSend(false)
            alert("Message sent successfully")
            setFormData({ name: "", email: "", phone: "", message: "" })

        }).catch((res) => {
            console.log("not send");
            console.log(res);
            setSend(false)
            setFormData({ name: "", email: "", phone: "", message: "" })
             alert("failed to sent message")

        })



    }













    return (
        <>  
            {/* <div className='bg-gray-500 text-2xl border-amber-50 p-10 flex justify-center w-100 rounded-2xl  '>
                Message sent succesfuuly !
            </div> */}
            <div className='p-20 bg-[rgb(18_18_18)] h-full' id='connect'>
                <div className=' text-center flex flex-col gap-5' >
                    <p className='text-4xl text-white font-semibold'>Contact</p>
                    <p className='text-2xl text-gray-400'>Cultivating Connection : Reach out and connect with me</p>
                </div>
                <div className='flex flex-col gap-5'>

                    <div className='flex justify-center pt-20'>
                        <form action="" className='flex flex-col gap-10'>

                            <div className='grid grid-cols-2 gap-5'>
                                <div className='flex flex-col gap-5'>
                                    <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="text" placeholder='Enter your Name' onChange={handleChange} name='name' value={fromData.name} />
                                    <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="tel" placeholder='Phone Number' onChange={handleChange} name='phone' value={fromData.phone} />
                                    <input className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' type="email" placeholder='Email' onChange={handleChange} name='email' value={fromData.email} />
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <textarea className='bg-[rgb(27,27,27)] text-gray-300 flex w-100 p-3 rounded-xl text-lg' id="" cols="30" rows='10' placeholder='Enter the message' onChange={handleChange} name="message" value={fromData.message}></textarea>
                                </div>
                            </div>

                            <div className='flex justify-center '>
                                <button className='bg-orange-400 p-5 rounded-2xl w-40 h-10 flex items-center justify-center' onClick={handleSend}>{send ? "Sending..." : "Send"}</button>
                            </div>
                        </form>
                    </div>
                    <div className='text-2xl text-gray-700 flex justify-center items-center p-5 '>
                        or
                    </div>
                  <div className='flex  justify-center '>
                    
                        <div className='flex justify-evenly items-center justify-center w-150 gap-10 h-10'>

                            <a href="https://wa.me/+918807469642 " target='_blank' className='flex justify-center items-center pr-5'><span className='text-white text-3xl font-sans'>Whatsapp</span><img src={whatsappLogo} alt="" className='w-15' /></a>
                            <a href="https://www.linkedin.com/in/kameshwar-t-147aab377/" target='_blank' ><img src={linkedinLogo} alt="" className='w-100 ' /></a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kameshwart736@gmail.com" target='_blank'><img src={mailLogo} alt="" className='w-85' /></a>


                        </div>
                  </div>
                    

                </div>
            </div>
        </>
    )
}

export default Contact