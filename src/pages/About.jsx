import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const slideImages = [html, css, js, bootstrap, tailwind, react, nodejs, express, mongodb, mysql, git, github]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
      <motion.div
        ref={sectionRef}
        className='min-h-screen bg-[rgb(18,18,18)] text-gray-300 flex flex-col gap-5 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-5 sm:py-8 md:py-10'
        id='about'
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div 
          className='flex flex-col xl:flex-row px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 gap-6 sm:gap-8 lg:gap-10'
          variants={itemVariants}
        >
          {/* Left Section */}
          <motion.div 
            className='w-full xl:w-[60%] flex flex-col gap-4 sm:gap-5 border-r-0 xl:border-r-2 border-[rgb(239,135,55)] pr-0 xl:pr-8'
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className='relative inline-block'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className='absolute -inset-1 bg-[#F96D00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <h2 
                  style={{ fontFamily: "sans-serif" }} 
                  className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[rgb(239,135,55)] via-orange-400 to-[rgb(239,135,55)] bg-clip-text text-transparent bg-[length:200%] animate-[shineText_4s_linear_infinite]'
                >
                  About Me
                </h2>
                <style>{`
                  @keyframes shineText {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                  }
                `}</style>
              </motion.div>
              
              <motion.div 
                className='mt-3 sm:mt-4'
                variants={itemVariants}
              >
                <p className='text-sm sm:text-base lg:text-lg text-gray-400 p-3 sm:p-4 lg:p-5 leading-relaxed'>
                  Hi, I’m <strong className='text-white'>Kameshwar</strong>, a Frontend Developer skilled in <strong className='text-[#F96D00]'>React, JavaScript, and Tailwind CSS</strong>. I build responsive, user-friendly web applications and have working knowledge of <strong className='text-[#F96D00]'>Node.js, Express, and Git</strong>. Currently seeking an opportunity to contribute and grow as a developer.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div 
                className='relative inline-block mt-2'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h2 
                  style={{ fontFamily: "sans-serif" }} 
                  className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[rgb(239,135,55)] to-orange-400 bg-clip-text text-transparent'
                >
                  Education
                </h2>
              </motion.div>
              
              <motion.div 
                className='flex flex-col gap-2 p-3 sm:p-4 lg:p-5'
                variants={itemVariants}
              >
                <motion.div 
                  className='glass-card p-4 sm:p-5 rounded-xl border border-[rgba(255,255,255,0.06)] hover:border-[#F96D00]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,109,0,0.1)] hover:-translate-y-1'
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className='text-white font-sans text-xl sm:text-2xl font-semibold'>Bachelor of Computer Science</p>
                  <p className='text-gray-400 font-sans text-lg sm:text-xl mt-1'>University of Madras | 2023 - 2026</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className='w-full xl:w-[40%] flex flex-col gap-3 sm:gap-4'
            variants={itemVariants}
          >
            <motion.div 
              className='relative inline-block'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h2 
                style={{ fontFamily: "sans-serif" }} 
                className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[rgb(239,135,55)] to-orange-400 bg-clip-text text-transparent'
              >
                Course Work
              </h2>
            </motion.div>

            <motion.div 
              className='flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5'
              variants={itemVariants}
            >
              <motion.div 
                className='glass-card p-4 sm:p-5 rounded-xl border border-[rgba(255,255,255,0.06)] hover:border-[#F96D00]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,109,0,0.1)] hover:-translate-y-1'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className='text-white font-sans text-xl sm:text-2xl font-semibold'>Full Stack Development</p>
                <p className='text-gray-400 font-sans text-lg sm:text-xl mt-1'>SLA Institute | Feb 2026 – Present</p>
              </motion.div>
              
              <motion.ul 
                className='list-disc pl-4 sm:pl-5 text-base sm:text-lg lg:text-xl text-gray-400 space-y-2 sm:space-y-3'
                variants={itemVariants}
              >
                {[
                  'Developed responsive web applications using React, JavaScript, and Tailwind CSS',
                  'Built reusable and scalable UI components for real-world projects',
                  'Integrated frontend applications with backend APIs',
                  'Debugged and optimized code to improve performance and user experience',
                  'Collaborated on projects in a team-based development environment'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className='hover:text-gray-200 transition-colors duration-300'
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div variants={itemVariants}>
          <motion.div 
            className='relative inline-block px-4 sm:px-6 md:px-8 lg:px-10'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className='absolute -inset-1 bg-[#F96D00]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            <h2 className='text-3xl sm:text-4xl font-sans font-bold bg-gradient-to-r from-[rgb(239,135,55)] via-orange-400 to-[rgb(239,135,55)] bg-clip-text text-transparent bg-[length:200%] animate-[shineText_4s_linear_infinite]'>
              Tech Stack
            </h2>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden mx-2 sm:mx-6 md:mx-8 lg:mx-10 mt-4 sm:mt-6"
            variants={itemVariants}
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[rgb(18_18_18)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[rgb(18_18_18)] to-transparent z-10" />
            
            <motion.div
              style={{ animation: 'scroll 30s linear infinite' }}
              className="flex gap-8 sm:gap-12 lg:gap-16 xl:gap-20 py-4 sm:py-6"
              whileHover={{ animationPlayState: 'paused' }}
            >
              {slideImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 group"
                  whileHover={{ 
                    scale: 1.15,
                    y: -6,
                    rotate: [0, -2, 2, -1, 0],
                    transition: { type: 'spring', stiffness: 400 }
                  }}
                >
                  <div className='relative'>
                    <div className='absolute inset-0 rounded-xl bg-[#F96D00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <img
                      src={img}
                      className="w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex-shrink-0 rounded-lg object-contain relative z-10 filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                      alt={`Tech ${i}`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
        `}</style>
      </motion.div>
  )
}

export default About