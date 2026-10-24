import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: 'Customer record management',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    text: 'Sales tracking & analytics',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Customer interaction history',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    text: 'Automated data reporting',
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <div className="relative min-h-screen page-wrapper">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/8 blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-[#00d4ff]/6 blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3 block">Portfolio</span>
              <h1 className="section-heading gradient-text mb-4">Projects</h1>
              <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
              <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                Academic and personal projects that demonstrate my programming skills and problem-solving ability.
              </p>
            </motion.div>

            {/* Featured Project */}
            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
                <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase px-4">Featured Project</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
              </div>

              <motion.div
                whileHover={{ y: -6 }}
                className="glass rounded-3xl overflow-hidden group transition-all duration-500"
                style={{
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                }}
              >
                {/* Project header gradient */}
                <div
                  className="h-48 relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(0,212,255,0.2) 50%, rgba(236,72,153,0.2) 100%)',
                  }}
                >
                  {/* Animated decorations */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-[#7c3aed]/20 blur-2xl" />
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-[#00d4ff]/20 blur-2xl" />
                  </div>

                  {/* CRM Icon */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center border border-white/10"
                      style={{ boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}>
                      <svg className="w-10 h-10 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/30">
                        Java
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gray-300 border border-white/10">
                        Academic Project
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#7c3aed] transition-colors duration-300">
                        Customer Relationship Management (CRM) System
                      </h2>
                      <p className="text-[#7c3aed] font-semibold">for Small Business</p>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    A comprehensive CRM system designed for small businesses to manage customer interactions, track sales,
                    and maintain customer records. Built as an academic project using Java, demonstrating object-oriented
                    programming principles and software design patterns.
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-center gap-3 p-3 rounded-xl"
                          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}
                        >
                          <span className="text-[#7c3aed] flex-shrink-0">{feature.icon}</span>
                          <span className="text-gray-300 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gray-500 text-sm">Built with:</span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm border"
                      style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82" />
                      </svg>
                      Java
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm border"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', borderColor: 'rgba(255,255,255,0.1)' }}>
                      OOP Design
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm border"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', borderColor: 'rgba(255,255,255,0.1)' }}>
                      MVC Pattern
                    </span>
                  </div>
                </div>

                {/* Bottom glow border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.1)' }} />
              </motion.div>
            </motion.div>

            {/* More projects coming */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <div className="glass rounded-2xl p-8 border border-dashed border-white/10">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-400 mb-2">More Projects Coming Soon</h3>
                <p className="text-gray-600 text-sm">
                  Currently working on new projects. Check back for updates!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
