import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#0a0a0b] to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(239,68,68,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white/80">
            <p className="text-lg">Let’s build something great together. Reach out for collaborations, consulting, or just to say hello.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@hengki.dev" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
                hello@hengki.dev
              </a>
              <a href="https://linkedin.com" target="_blank" className="block text-white/80 hover:text-white">LinkedIn</a>
              <a href="https://github.com" target="_blank" className="block text-white/80 hover:text-white">GitHub</a>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="p-6 rounded-2xl bg-black/60 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea rows="5" required className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Tell me about your project" />
            </div>
            <button className="mt-5 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
