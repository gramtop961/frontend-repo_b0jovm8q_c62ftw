import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      {/* Spline full-width background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (does not block interaction) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hengki Kurniawan
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            IT professional specializing in modern web development, cloud infrastructure, and automation. I build reliable, scalable, and beautiful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
