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

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
  </svg>
)

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.413z" />
  </svg>
)

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.543 1.644-2.469 6.197-3.665 5.19-7.623M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
  </svg>
)

const skills = [
  {
    name: 'HTML',
    icon: <HTMLIcon />,
    description: 'Markup language for structuring web content and building the foundation of web pages.',
    accentColor: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    tags: ['Semantic HTML5', 'Accessibility', 'Web Structure'],
  },
  {
    name: 'CSS',
    icon: <CSSIcon />,
    description: 'Stylesheet language for designing beautiful, responsive, and modern web interfaces.',
    accentColor: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    tags: ['Flexbox', 'Grid', 'Responsive Design'],
  },
  {
    name: 'Java',
    icon: <JavaIcon />,
    description: 'Object-oriented programming language used for building robust backend applications.',
    accentColor: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    tags: ['OOP', 'Data Structures', 'Applications'],
  },
  {
    name: 'Python',
    icon: <PythonIcon />,
    description: 'Versatile scripting language for automation, data processing, and general programming.',
    accentColor: '#eab308',
    bgColor: 'rgba(234, 179, 8, 0.1)',
    tags: ['Scripting', 'Automation', 'Problem Solving'],
  },
]

export default function Skills() {
  return (
    <PageTransition>
      <div className="relative min-h-screen page-wrapper">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#ec4899]/6 blur-[100px]" />
          <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-[#7c3aed]/6 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00d4ff]/4 blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-3 block">Technical Arsenal</span>
              <h1 className="section-heading gradient-text mb-4">Skills & Technologies</h1>
              <div className="w-20 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }} />
              <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                Technologies I've worked with and am continuously improving in my computer science journey.
              </p>
            </motion.div>

            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateX: 2,
                  }}
                  className="group glass rounded-3xl p-8 flex flex-col items-center text-center cursor-default transition-all duration-300 skill-card"
                  style={{
                    transformPerspective: 1000,
                  }}
                >
                  {/* Icon container */}
                  <motion.div
                    className="mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.accentColor }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto"
                      style={{
                        background: skill.bgColor,
                        boxShadow: `0 0 0 0 ${skill.accentColor}00`,
                        transition: 'box-shadow 0.3s ease',
                      }}
                    >
                      {skill.icon}
                    </div>
                  </motion.div>

                  {/* Name */}
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: skill.accentColor }}
                  >
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: skill.bgColor,
                          color: skill.accentColor,
                          border: `1px solid ${skill.accentColor}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Glow border on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1px ${skill.accentColor}40, 0 0 30px ${skill.accentColor}20`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.div variants={itemVariants} className="text-center mt-16">
              <p className="text-gray-500 text-sm">
                Always learning and expanding my skill set ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
