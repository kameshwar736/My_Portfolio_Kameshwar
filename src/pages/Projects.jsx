import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import streakifyLogo from '../assets/streakify.png'

const projects = [
  {
    title: "Streakify",
    description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
    image: streakifyLogo,
    github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
    live: "https://streakify-consistency-tracker.vercel.app/"
  },
  // {
  //   title: "Streakify",
  //   description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
  //   image: streakifyLogo,
  //   github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
  //   live: "https://streakify-consistency-tracker.vercel.app/"
  // }
]

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  }



  return (
      <motion.div
        ref={sectionRef}
        className='bg-[rgb(18,18,18)] min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12'
        id='project'
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className='mb-8 sm:mb-10 md:mb-12 px-4 sm:px-5'
          variants={itemVariants}
        >
          <motion.div 
            className='relative inline-block'
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className='absolute -inset-1 bg-[#F96D00]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[rgb(239,135,55)] via-orange-400 to-[rgb(239,135,55)] bg-clip-text text-transparent bg-[length:200%] animate-[shineText_4s_linear_infinite] p-3 sm:p-4 md:p-5'>
              Projects
            </h1>
            <style>{`
              @keyframes shineText {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
            `}</style>
          </motion.div>
          
          <motion.div 
            className='h-1 w-20 bg-gradient-to-r from-[rgb(239,135,55)] to-orange-400 rounded-full mt-2 sm:mt-3'
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.p 
            className='text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg'
            variants={itemVariants}
          >
            A collection of things I've built.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-5'
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className='group relative'
            >
              {/* Glow Effect */}
              <div className='absolute -inset-0.5 bg-gradient-to-r from-[rgb(239,135,55)]/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              
              {/* Card */}
              <div className="group relative rounded-2xl w-100 h-120 overflow-hidden border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 aspect-[4/5] sm:aspect-[3/4]">

                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 gap-2">
                  <h2 className="text-white text-lg sm:text-xl font-medium">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-5 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      GitHub repo
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#F96D00] hover:text-[#ff8a2e] transition-colors duration-200"
                    >
                      Live demo
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
  )
}

export default Projects