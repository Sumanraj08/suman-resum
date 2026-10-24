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

const interests = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'Web Development',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    label: 'Java Programming',
    color: '#ec4899',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'Problem Solving',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    label: 'Open Source',
    color: '#00d4ff',
  },
]

export default function About() {
  return (
    <PageTransition>
      <div className="relative min-h-screen page-wrapper">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#7c3aed]/8 blur-[100px]" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-[#00d4ff]/8 blur-[80px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3 block">Personal</span>
              <h1 className="section-heading gradient-text mb-4">About Me</h1>
              <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
            </motion.div>

            {/* Main card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-3xl p-8 md:p-12 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-10 items-start">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="w-40 h-40 rounded-full flex items-center justify-center text-4xl font-black text-white"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #00d4ff, #ec4899)' }}>
                      SRJ
                    </div>
                    {/* Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#00d4ff]/20 scale-110 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-0 rounded-full border border-[#7c3aed]/30 scale-125" />
                  </motion.div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-white">Suman Raj J</h2>
                    <p className="text-[#00d4ff] text-sm font-medium">Computer Science Student</p>
                  </div>

                  {/* Quick stats */}
                  <div className="w-full grid grid-cols-2 gap-3 mt-2">
                    {[
                      { label: 'Year', value: '2nd' },
                      { label: 'Skills', value: '4+' },
                      { label: 'Projects', value: '1+' },
                      { label: 'GPA', value: 'Active' },
                    ].map((stat) => (
                      <div key={stat.label} className="glass rounded-xl p-3 text-center">
                        <p className="text-[#00d4ff] font-bold text-lg">{stat.value}</p>
                        <p className="text-gray-500 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Hello, World! <span className="wave">👋</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I'm <span className="text-[#00d4ff] font-semibold">Suman Raj J</span>, a 2nd year B.Sc Computer Science student at{' '}
                    <span className="text-[#7c3aed] font-semibold">KG College of Arts and Science</span>, passionate about technology and software development.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    I enjoy building projects that solve real-world problems. My journey in computer science has given me a strong foundation in programming languages like Java and Python, as well as web technologies like HTML and CSS. I'm always eager to learn new technologies and take on challenging projects.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    When I'm not coding, I enjoy exploring new technologies, participating in college tech events, and working on academic projects that have practical applications.
                  </p>

                  {/* Contact chips */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:sumanrajj2006@gmail.com"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      sumanrajj2006@gmail.com
                    </a>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Interests & Passions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest) => (
                  <motion.div
                    key={interest.label}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group hover:border-white/20"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `${interest.color}15`,
                        color: interest.color,
                        boxShadow: `0 0 0 0 ${interest.color}00`,
                      }}
                    >
                      {interest.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors">
                      {interest.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
