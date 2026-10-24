import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: 'Email',
    value: 'Sumansumann79@gmail.com',
    href: 'mailto:Sumansumann79@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 7339139961',
    href: 'tel:+917339139961',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/suman-raj-j',
    href: 'https://linkedin.com/in/suman-raj-j',
    color: '#ec4899',
  },
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputClasses = (name: string) =>
    `w-full form-input rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
      focused === name ? 'border-[#00d4ff] shadow-[0_0_0_2px_rgba(0,212,255,0.15),0_0_20px_rgba(0,212,255,0.08)]' : ''
    }`

  return (
    <PageTransition>
      <div className="relative min-h-screen page-wrapper">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#00d4ff]/6 blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[#ec4899]/6 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#7c3aed]/5 blur-[80px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3 block">Let's Connect</span>
              <h1 className="section-heading gradient-text mb-4">Get In Touch</h1>
              <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
              <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just a friendly chat about technology.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info - Left column */}
              <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
                <div className="glass rounded-3xl p-6 mb-2">
                  <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Feel free to reach out through any of the channels below. I typically respond within 24 hours.
                  </p>
                </div>

                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="glass rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:border-white/20"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${info.color}15`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-white text-sm font-medium truncate group-hover:text-opacity-90"
                        style={{ color: info.color }}>
                        {info.value}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </motion.a>
                ))}

                {/* Availability badge */}
                <div className="glass rounded-2xl p-5 mt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 font-semibold text-sm">Available for Opportunities</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Open to internships, part-time roles, and collaborative academic projects.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form - Right column */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          placeholder="John Doe"
                          required
                          className={inputClasses('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          placeholder="john@example.com"
                          required
                          className={inputClasses('email')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        placeholder="Project Collaboration / Internship / Just Saying Hi!"
                        required
                        className={inputClasses('subject')}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        required
                        rows={5}
                        className={`${inputClasses('message')} resize-none`}
                      />
                    </div>

                    {/* Status messages */}
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                      >
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-green-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
                      >
                        <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="text-red-400 text-sm font-medium">Failed to send. Please email me directly at Sumansumann79@gmail.com</p>
                      </motion.div>
                    )}

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                      className="relative w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 disabled:opacity-60"
                      style={{
                        background: status === 'loading'
                          ? 'rgba(124,58,237,0.5)'
                          : 'linear-gradient(135deg, #7c3aed, #00d4ff)',
                        boxShadow: status === 'loading' ? 'none' : '0 0 20px rgba(124,58,237,0.3)',
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === 'loading' ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
