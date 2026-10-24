import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ParticleBackground from '../components/ParticleBackground'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

function TypingText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setCurrentText(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        } else {
          setDeleting(false)
          setTextIndex((t) => (t + 1) % texts.length)
        }
      }
    }, deleting ? 50 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts])

  return (
    <span className="gradient-text">
      {currentText}
      <span className="inline-block w-0.5 h-8 bg-[#00d4ff] ml-1 animate-pulse" />
    </span>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />

        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00d4ff]/10 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#ec4899]/8 blur-[80px]" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#00d4ff]/20 text-sm text-[#00d4ff] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight"
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="gradient-text animate-glow">Suman Raj J</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="text-2xl sm:text-3xl font-semibold mb-6 h-10">
                <TypingText texts={['Computer Science Student', 'Java Developer', 'Web Enthusiast', 'Problem Solver']} />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              >
                2nd year B.Sc Computer Science student at KG College of Arts and Science, passionate
                about crafting software solutions that make a difference. I love turning ideas into reality through code.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Link
                  to="/projects"
                  className="group relative px-8 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #00d4ff)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-xl font-semibold text-white glass border border-white/10 hover:border-[#00d4ff]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:sumanrajj2006@gmail.com"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/suman-raj-j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-80 lg:h-[500px] relative flex items-center justify-center"
            >
              {/* Neon portrait ring to match the requested portfolio style */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-[#00d4ff]/90 shadow-[0_0_24px_rgba(0,212,255,0.65),inset_0_0_24px_rgba(124,58,237,0.22)]" />
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-transparent border-t-[#a855f7] border-r-[#7c3aed] rotate-45 shadow-[0_0_24px_rgba(124,58,237,0.45)]" />
              <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full bg-gradient-to-br from-[#7c3aed]/15 to-[#00d4ff]/15 blur-2xl" />
              <img
                src="/profile-photo.png"
                alt="Suman Raj J profile photo"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.28)]"
              />
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center mt-16 gap-2"
          >
            <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00d4ff]/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
