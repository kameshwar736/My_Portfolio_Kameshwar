import React, { useEffect, useState } from 'react'
import html from '../assets/HTML5.png'
import css from '../assets/CSS3.png'
import bootstrap from '../assets/Bootstrap.png'
import tailwind from '../assets/Tailwind CSS.png'
import js from '../assets/JavaScript.png'
import react from '../assets/React.png'
import nodejs from '../assets/Node.js.png'
import express from '../assets/expressWhite.png'
import mongodb from '../assets/MongoDB.png'
import mysql from '../assets/MySQL.png'
import git from '../assets/Git.png'
import github from '../assets/gitLogo.png'


const About = () => {

  const img =  [html, css, js, bootstrap, tailwind, react, nodejs, express, mongodb, mysql, git, github]

  const slideImages = [...img,...img,...img]
  
  




  return (
    <>
     
      <div className='pl-15 pt-10 bg-[rgb(18_18_18)] text-gray-300 h-screen flex flex-col gap-5'>

        <div className='flex px-10 pt-10 gap-10'>

          <div className='w-200 flex flex-col gap-3 border-r-2 border-[rgb(239,135,55)] '>
            <div>
              <div style={{ fontFamily: "sans-serif" }} className=' text-[rgb(239,135,55)] text-4xl '>
                About Me
              </div>
              <div className=' '>
                <p className=' text-xl text-gray-400 p-5 pr-10'>
                  Hi, I’m <strong>Kameshwar</strong>, a Frontend Developer skilled in <strong>React, JavaScript, and Tailwind CSS</strong>. I build responsive, user-friendly web applications and have working knowledge of <strong>Node.js, Express, and Git</strong>. Currently seeking an opportunity to contribute and grow as a developer.
                </p>

              </div>
            </div>

            <div >
              <div style={{ fontFamily: "sans-serif" }} className=' text-[rgb(239,135,55)] text-3xl '>
                Education
              </div>
              <div className='flex flex-col gap-2 p-5'>
                <div>
                  <p className='text-white font-sans text-2xl'>Bachelor of Computer Science</p>
                </div>
                <div>
                  <p className='text-white font-sans text-2xl '>University of Madras | 2023 - 2026</p>
                </div>
              </div>
            </div>

          </div>



          <div className='flex flex-col gap-1 '>
            <div style={{ fontFamily: "sans-serif" }} className=' text-[rgb(239,135,55)]  flex flex-col gap-3 text-3xl '>
              InternShip
            </div>

            <div className='flex flex-col gap-4 p-5'>
              <div className='flex flex-col gap-2'>
                <div>
                  <p className='text-white font-sans text-2xl'>Full Stack Developer Intern</p>
                </div>
                <div>
                  <p className='text-white font-sans text-2xl'>SLA Institute | Feb 2026 – Present</p>
                </div>
              </div>
              <div>
                <ul className="list-disc pl-5 text-xl text-gray-400">
                  <li>Developed responsive web applications using React, JavaScript, and Tailwind CSS</li>
                  <li>Built reusable and scalable UI components for real-world projects</li>
                  <li>Integrated frontend applications with backend APIs</li>
                  <li>Debugged and optimized code to improve performance and user experience</li>
                  <li>Collaborated on projects in a team-based development environment</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

         <div>
          <div className='text-4xl font-sans text-[rgb(239,135,55)] p-10'>
            Tech Stack
          </div>
          <div className="relative overflow-hidden mx-10 ">
            <div
              style={{ animation: 'scroll 30s linear infinite' }}
              className="flex gap-20"
            >
              {slideImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-25 flex-shrink-0 rounded-lg object-contain"
                />
              ))}
            </div>
          </div>
        </div>


      </div>



    </>
  )
}

export default About