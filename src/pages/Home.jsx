import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import linkedinLogo from '../assets/linkinLogo.png'
import gitLogo from '../assets/gitLogo.png'
import leetcodeLogo from '../assets/leetcodeLogo.png'
import devlogo from '../assets/images.png'
import resume from '../assets/Kameshwar_Resume.pdf'
import { label } from 'framer-motion/client'

export const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (rect) {
                const x = (e.clientX - rect.left) / rect.width - 0.5
                const y = (e.clientY - rect.top) / rect.height - 0.5
                setMousePosition({ x, y })
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const handleClick = () => {
        document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })
    }

    const socialLinks = [
        { href: 'https://www.linkedin.com/in/kameshwar-t-147aab377/', src: linkedinLogo },
        { href: 'https://github.com/kameshwar736', src: gitLogo },
        { href: 'https://leetcode.com/u/R1Iw0PD33k/', src: leetcodeLogo },
    ]

    const stats = [
        { value: '200+', label: 'experience hour' },
        { value: '8+', label: 'Git repo' },
        { value: '7.5+' ,label: 'CGPA'}
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
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

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
            }
        }
    }

    return (
            <motion.div
                ref={containerRef}
                className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[rgb(18,18,18)] text-gray-300'
                id='home'
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                style={{
                    perspective: '1000px',
                }}
            >
                {/* 3D Perspective Container */}
                <div 
                    className='w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
                    style={{
                        transform: `rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
                        transition: 'transform 0.2s ease-out',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Left Content */}
                    <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10 order-2 lg:order-1'>
                        <motion.div 
                            className='flex flex-col gap-2 sm:gap-3'
                            variants={itemVariants}
                        >
                            <div>
                                <p className='text-xl sm:text-2xl text-[rgb(112_112_112)] font-medium tracking-wide'>
                                    Hi I am
                                </p>
                            </div>
                            <div>
                                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent'>
                                    Kameshwar
                                </h1>
                            </div>
                        </motion.div>

                        <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10'>
                            <div className='flex flex-col gap-4 sm:gap-6'>
                                <motion.div 
                                    className='relative'
                                    variants={itemVariants}
                                >
                                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F96D00] via-orange-400 to-[#F96D00] bg-clip-text text-transparent bg-[length:200%] animate-[shineText_4s_linear_infinite]'>
                                        MERN Stack Developer
                                    </h1>
                                    <style>{`
                                        @keyframes shineText {
                                            0% { background-position: 0% 50%; }
                                            100% { background-position: 200% 50%; }
                                        }
                                    `}</style>
                                </motion.div>
                                
                                <motion.div 
                                    className='flex gap-4 sm:gap-6 flex-wrap'
                                    variants={itemVariants}
                                >
                                    {socialLinks.map((link, index) => (
                                        <motion.div 
                                            key={link.href}
                                            whileHover={{ 
                                                scale: 1.15,
                                                y: -6,
                                                rotate: [0, -3, 3, -2, 0],
                                                transition: { type: 'spring', stiffness: 400 }
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <a
                                                href={link.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='block relative group'
                                            >
                                                <div className='absolute inset-0 rounded-2xl bg-[#F96D00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                                <div className='relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-2xl p-3 border border-[rgba(255,255,255,0.06)] group-hover:border-[#F96D00]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(249,109,0,0.15)]'>
                                                    <img
                                                        src={link.src}
                                                        alt="logo"
                                                        className='w-10 h-10 object-contain transition-all duration-300'
                                                    />
                                                </div>
                                                {/* Tooltip */}
                                                <div className='absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-[#F96D00] text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-[#F96D00]/20 shadow-lg'>
                                                    {link.href.includes('linkedin') ? 'LinkedIn' : 
                                                     link.href.includes('github') ? 'GitHub' : 'LeetCode'}
                                                </div>
                                            </a>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            <motion.div 
                                className='flex gap-4 sm:gap-6 flex-wrap'
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -3,
                                        transition: { type: 'spring', stiffness: 400 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className='relative group'
                                >
                                    <button
                                        className='relative overflow-hidden bg-gradient-to-r from-[#F96D00] to-orange-500 p-3 sm:p-3.5 rounded-xl text-gray-900 font-semibold w-36 sm:w-40 h-12 sm:h-13 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(249,109,0,0.4)] cursor-pointer'
                                        onClick={handleClick}
                                    >
                                        <span className='relative z-10'>Hire Me</span>
                                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000' />
                                        <div className='absolute inset-0 bg-gradient-to-r from-[#F96D00] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                    </button>
                                    <div className='absolute -inset-1 bg-[#F96D00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl' />
                                </motion.div>

                                <motion.div
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -3,
                                        transition: { type: 'spring', stiffness: 400 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a href={resume} download target='_blank' className='relative p-3 top-4 sm:p-3.5 rounded-xl text-gray-200 border-2 border-[#F96D00]/30 w-30 sm:w-40 h-12 sm:h-13 transition-all duration-300 hover:border-[#F96D00] hover:text-[#F96D00] hover:shadow-[0_0_30px_rgba(249,109,0,0.15)] hover:bg-[#F96D00]/5 backdrop-blur-sm cursor-pointer'>
                                        Download CV
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Statistics Cards */}
                        <motion.div 
                            className='flex gap-3 sm:gap-4 flex-wrap'
                            variants={itemVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className={`relative group px-4 sm:px-5 py-3 sm:py-4 rounded-2xl bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] transition-all duration-500 hover:border-[#F96D00]/50 hover:shadow-[0_0_30px_rgba(249,109,0,0.1)] hover:-translate-y-2 ${index > 0 ? 'border-l border-gray-600/30' : ''}`}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { type: 'spring', stiffness: 300 }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F96D00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                    <p className='relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#F96D00] to-orange-400 bg-clip-text text-transparent'>
                                        {stat.value}
                                    </p>
                                    <p className='relative text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1'>
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Image with 3D Effects */}
                    <motion.div 
                        className='flex justify-center items-center order-1 lg:order-2'
                        variants={itemVariants}
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(50px) rotateY(${-mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        <motion.div
                            className='relative'
                            variants={floatingVariants}
                            animate="animate"
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 10,
                                rotateX: 5,
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                        >
                            {/* Glow behind image */}
                            <div className='absolute inset-0 rounded-full bg-[#F96D00]/20 blur-3xl animate-pulse' />
                            
                            {/* Glass container */}
                            <div className='relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-4 sm:p-6'>
                                <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-[#F96D00]/10 to-transparent' />
                                <div className='absolute -inset-1 rounded-full border border-[#F96D00]/20 blur-sm animate-pulse' />
                                <img
                                    src={devlogo}
                                    alt="Developer illustration"
                                    className='w-full h-full object-contain relative z-10'
                                />
                            </div>

                            {/* Floating particles */}
                            <motion.div 
                                className='absolute -top-4 -right-4 w-3 h-3 rounded-full bg-[#F96D00]/40 blur-sm'
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div 
                                className='absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-orange-400/30 blur-sm'
                                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            />
                            <motion.div 
                                className='absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-[#F96D00]/50 blur-sm'
                                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                            />
                            <motion.div 
                                className='absolute bottom-1/3 -left-6 w-2.5 h-2.5 rounded-full bg-orange-300/40 blur-sm'
                                animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
    )
}