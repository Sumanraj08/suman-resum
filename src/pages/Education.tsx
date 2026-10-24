import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

const GraduationIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
)

const UniversityIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const educationData = [
  {
    id: 1,
    icon: <GraduationIcon />,
    institution: 'Swathanthara Higher Secondary School',
    location: 'Athipalayam / Vaiyampalayam',
    type: 'Higher Secondary Education',
    status: 'Completed',
    statusColor: '#00d4ff',
    statusBg: 'rgba(0,212,255,0.1)',
    accentColor: '#00d4ff',
    side: 'left' as const,
    description: 'Completed higher secondary education with a focus on computer science and mathematics, building a strong foundation for university studies.',
    tags: ['Computer Science', 'Mathematics', 'Physics'],
  },
  {
    id: 2,
    icon: <UniversityIcon />,
    institution: 'KG College of Arts and Science',
    location: 'Coimbatore, Tamil Nadu',
    type: 'B.Sc Computer Science',
    course: '2nd Year, Currently Pursuing',
    status: 'Currently Pursuing',
    statusColor: '#22c55e',
    statusBg: 'rgba(34,197,94,0.1)',
    accentColor: '#7c3aed',
    side: 'right' as const,
    description: 'Pursuing Bachelor of Science in Computer Science, covering core subjects including programming, data structures, algorithms, and software development.',
    tags: ['Java', 'Python', 'Data Structures', 'Algorithms'],
  },
]

export default function Education() {
  return (
    <PageTransition>
      <div className="relative min-h-screen page-wrapper">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#00d4ff]/6 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/6 blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center mb-20">
              <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3 block">Academic Journey</span>
              <h1 className="section-heading gradient-text mb-4">Education</h1>
              <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden md:block">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'top', height: '100%' }}
                  className="w-full timeline-line opacity-40"
                />
              </div>

              <div className="flex flex-col gap-16">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: edu.side === 'left' ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`relative flex items-start ${edu.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    {/* Card */}
                    <div className="flex-1 md:max-w-[calc(50%-3rem)]">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="glass rounded-3xl p-8 group hover:border-white/20 transition-all duration-300"
                        style={{
                          borderColor: `${edu.accentColor}20`,
                          boxShadow: `0 0 0 1px ${edu.accentColor}10`,
                        }}
                      >
                        {/* Icon + Status */}
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{
                              background: `${edu.accentColor}15`,
                              color: edu.accentColor,
                            }}
                          >
                            {edu.icon}
                          </div>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                            style={{ background: edu.statusBg, color: edu.statusColor }}
                          >
                            {edu.status === 'Currently Pursuing' && (
                              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            )}
                            {edu.status === 'Completed' && (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                            {edu.status}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </div>
                        <p className="font-semibold mb-1" style={{ color: edu.accentColor }}>{edu.type}</p>
                        {edu.course && <p className="text-gray-400 text-sm mb-4">{edu.course}</p>}

                        <p className="text-gray-400 text-sm leading-relaxed mb-5">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                background: `${edu.accentColor}10`,
                                color: edu.accentColor,
                                border: `1px solid ${edu.accentColor}25`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="w-5 h-5 rounded-full border-2"
                        style={{
                          background: edu.accentColor,
                          borderColor: edu.accentColor,
                          boxShadow: `0 0 12px ${edu.accentColor}80`,
                        }}
                      />
                    </div>

                    {/* Empty spacer for other side */}
                    <div className="hidden md:block flex-1 md:max-w-[calc(50%-3rem)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
