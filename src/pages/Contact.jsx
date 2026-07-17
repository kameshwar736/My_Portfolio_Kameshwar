import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion'
import emailjs from '@emailjs/browser'

/* ── Inline SVG Icon Components ── */
const WhatsAppIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

const LinkedInIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const GmailIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
)

const EmailSvgIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
)

const PhoneSvgIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

const LocationSvgIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

const ClockSvgIcon = ({ className = '', style = {} }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
)

const contactInfo = [
    {
        IconComponent: EmailSvgIcon,
        label: 'Email',
        value: 'kameshwart736@gmail.com',
        href: 'mailto:kameshwart736@gmail.com',
    },
    {
        IconComponent: PhoneSvgIcon,
        label: 'Phone',
        value: '+91 8807469642',
        href: 'tel:+918807469642',
    },
    {
        IconComponent: LocationSvgIcon,
        label: 'Location',
        value: 'Chennai, India',
        href: null,
    },
    {
        IconComponent: ClockSvgIcon,
        label: 'Response time',
        value: 'Within 24 hours',
        href: null,
    },
]

const socialLinks = [
    {
        href: 'https://wa.me/+918807469642',
        IconComponent: WhatsAppIcon,
        name: 'WhatsApp',
        tooltip: 'Chat directly',
    },
    {
        href: 'https://www.linkedin.com/in/kameshwar-t-147aab377/',
        IconComponent: LinkedInIcon,
        name: 'LinkedIn',
        tooltip: 'Professional profile',
    },
    {
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kameshwart736@gmail.com',
        IconComponent: GmailIcon,
        name: 'Gmail',
        tooltip: 'Send an email',
    },
]

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
    const [send, setSend] = useState(false)
    const [status, setStatus] = useState(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start('visible')
    }, [isInView, controls])

    useEffect(() => {
        if (!status) return
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [status])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSend = (e) => {
        e.preventDefault()
        setSend(true)
        setStatus(null)

        emailjs
            .send('service_xfayiuj', 'template_tiidvfp', formData, 'exvPTl9fE3eHtOugk')
            .then(() => {
                setSend(false)
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '' })
            })
            .catch(() => {
                setSend(false)
                setStatus('error')
            })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    }

    const inputClass =
        'w-full bg-[rgb(24,24,24)] text-gray-200 px-4 py-3 text-[15px] rounded-lg border border-[rgba(255,255,255,0.08)] focus:border-[#F96D00]/60 transition-colors duration-200 outline-none placeholder-gray-600'

    return (
        <motion.div
            ref={sectionRef}
            className="min-h-screen bg-[rgb(18,18,18)] text-gray-300 py-16 sm:py-28 px-4 sm:px-8"
            id="connect"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Status Popup */}
            <AnimatePresence>
                {status && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/70"
                            onClick={() => setStatus(null)}
                        />

                        <motion.div
                            role="alertdialog"
                            aria-live="polite"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-sm bg-[rgb(24,24,24)] rounded-2xl border border-[rgba(255,255,255,0.08)] p-7 sm:p-8 text-center"
                        >
                            <div
                                className={`mx-auto mb-5 w-12 h-12 rounded-full flex items-center justify-center border ${
                                    status === 'success'
                                        ? 'border-[#25D366]/30 text-[#25D366]'
                                        : 'border-red-500/30 text-red-400'
                                }`}
                            >
                                {status === 'success' ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </div>

                            <h3 className="text-base font-medium text-white mb-1.5">
                                {status === 'success' ? 'Message sent' : "Something didn't work"}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {status === 'success'
                                    ? "I'll get back to you within 24 hours."
                                    : 'Try again, or email me directly instead.'}
                            </p>

                            <div className="flex flex-col gap-2">
                                <button
                                    type="button"
                                    onClick={() => setStatus(null)}
                                    className="w-full py-2.5 rounded-lg font-medium text-sm bg-[#F96D00] text-gray-900 hover:bg-[#e06300] transition-colors duration-200"
                                >
                                    {status === 'success' ? 'Done' : 'Try again'}
                                </button>

                                {status === 'error' && (
                                    <a
                                        href="mailto:kameshwart736@gmail.com"
                                        className="w-full py-2.5 rounded-lg font-medium text-sm border border-[rgba(255,255,255,0.1)] text-gray-300 hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200"
                                        onClick={() => setStatus(null)}
                                    >
                                        Email instead
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#F96D00] font-medium mb-3">
                        Get in touch
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                        Let's work together
                    </h1>
                    <p className="text-gray-500 text-base max-w-md">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact info (left) + Form (right) */}
                <motion.div
                    variants={itemVariants}
                    className="mb-10 sm:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14"
                >
                    {/* Left — contact details */}
                    <div className="border-t border-[rgba(255,255,255,0.08)]">
                        {contactInfo.map((info) => {
                            const Wrapper = info.href ? 'a' : 'div'
                            const wrapperProps = info.href
                                ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' }
                                : {}

                            return (
                                <Wrapper
                                    key={info.label}
                                    {...wrapperProps}
                                    className={`flex items-center gap-3 sm:gap-4 py-4 border-b border-[rgba(255,255,255,0.08)] ${
                                        info.href ? 'group hover:opacity-70 transition-opacity duration-200' : ''
                                    }`}
                                >
                                    <info.IconComponent className="w-[18px] h-[18px] text-gray-600 shrink-0" />
                                    <span className="text-sm text-gray-500 w-24 sm:w-32 shrink-0">{info.label}</span>
                                    <span className="text-sm text-gray-200 break-words">{info.value}</span>
                                </Wrapper>
                            )
                        })}
                    </div>

                    {/* Right — form */}
                    <form onSubmit={handleSend} className="flex flex-col gap-5">
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="Your name"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            required
                        />
                        <input
                            className={inputClass}
                            type="email"
                            placeholder="Your email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            required
                        />
                        <input
                            className={inputClass}
                            type="tel"
                            placeholder="Phone number (optional)"
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                        />
                        <textarea
                            className={`${inputClass} min-h-[120px] resize-y`}
                            placeholder="Tell me about your project..."
                            onChange={handleChange}
                            name="message"
                            value={formData.message}
                            required
                        />

                        <div className="flex justify-start pt-1">
                            <button
                                className="px-7 py-3 rounded-lg bg-[#F96D00] text-gray-900 font-medium text-sm hover:bg-[#e06300] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={send}
                            >
                                {send ? 'Sending…' : 'Send message'}
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Social links */}
                <motion.div variants={itemVariants}>
                    <p className="text-sm text-gray-500 mb-4">Or reach out directly</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200"
                            >
                                <social.IconComponent className="w-[18px] h-[18px] text-gray-400 shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-200 leading-tight">{social.name}</p>
                                    <p className="text-xs text-gray-600 mt-0.5 truncate">{social.tooltip}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Availability */}
                <motion.div variants={itemVariants} className="mt-14 sm:mt-16 flex items-center gap-2.5">
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                    </span>
                    <p className="text-sm text-gray-500">
                        Open to freelance projects and full-time roles · Chennai, IST
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact