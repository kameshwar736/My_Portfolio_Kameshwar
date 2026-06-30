import React from 'react'
import streakifyLogo from '../assets/streakify.png'

const projects = [
  {
    title: "Streakify",
    description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
    image: streakifyLogo,
    github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
    live: "https://streakify-consistency-tracker.vercel.app/"
  },
  {
    title: "Streakify",
    description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
    image: streakifyLogo,
    github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
    live: "https://streakify-consistency-tracker.vercel.app/"
  },
  {
    title: "Streakify",
    description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
    image: streakifyLogo,
    github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
    live: "https://streakify-consistency-tracker.vercel.app/"
  },
  {
    title: "Streakify",
    description: "A productivity dashboard that tracks daily tasks and builds consistency through streak tracking with automatic daily reset.",
    image: streakifyLogo,
    github: "https://github.com/kameshwar736/Streakify_Consistency_tracker.git",
    live: "https://streakify-consistency-tracker.vercel.app/"
  },
]

const Projects = () => {
  return (
   <>
   
    <div className='bg-[rgb(18,18,18)] min-h-screen px-8 md:px-16 py-12' id='project'>

      {/* Header */}
      <div className='mb-12'>
       <h1 className='text-[rgb(239,135,55)] text-4xl p-5'>Projects</h1>

        {/* <div className='h-1 w-20 bg-[rgb(239,135,55)] rounded-full mt-3'></div> */}
        {/* <p className='text-gray-400 mt-4 text-lg'>A collection of things I've built.</p> */}
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='group bg-[rgb(27,27,27)] rounded-2xl overflow-hidden border border-[rgb(40,40,40)]
                       transition-all duration-300 hover:border-[rgb(239,135,55)]/40
                       hover:shadow-[0_0_30px_rgba(239,135,55,0.08)] flex flex-col'
          >
            {/* Image */}
            <div className='bg-[rgb(20,20,20)] p-6 flex justify-center'>
              <img
                src={project.image}
                alt={project.title}
                className='rounded-xl w-full max-h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]'
              />
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1 gap-4'>
              <h2 className='text-gray-100 text-xl font-semibold'>
                {project.title}
              </h2>
              <p className='text-gray-400 text-base leading-relaxed flex-1'>
                {project.description}
              </p>

              {/* Buttons */}
              <div className='flex gap-4 pt-2'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 text-center bg-black text-gray-200 py-2.5 rounded-xl text-sm font-medium
                             border border-[rgb(50,50,50)] transition-colors duration-200
                             hover:border-[rgb(239,135,55)] hover:text-[rgb(239,135,55)]'
                >
                  GitHub Repo
                </a>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 text-center bg-[rgb(239,135,55)] text-black font-semibold py-2.5 rounded-xl text-sm
                             transition-all duration-200 hover:bg-[rgb(255,150,70)] hover:shadow-[0_0_15px_rgba(239,135,55,0.3)]'
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
   </>
  )
}

export default Projects