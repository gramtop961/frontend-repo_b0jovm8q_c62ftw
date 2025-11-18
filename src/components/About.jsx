import { motion } from 'framer-motion'

function About() {
  const items = [
    { title: 'Web Development', desc: 'Building responsive, accessible web apps with React, TypeScript, and modern tooling.' },
    { title: 'Cloud & DevOps', desc: 'Designing scalable infrastructure on AWS with CI/CD, Docker, and Terraform.' },
    { title: 'Automation', desc: 'Scripting workflows and integrating services to save time and reduce errors.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-[#0b0b0c] to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white mb-10">
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-white/80">
            <p className="text-lg leading-relaxed">
              I’m an IT professional with a passion for crafting high-performance, user-friendly applications. I blend engineering rigor with product sense — from elegant interfaces to robust backend systems and cloud infrastructure.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-white mb-1">{it.title}</h3>
                  <p className="text-sm text-white/70">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 p-1">
              <div className="w-full h-full rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-white/70">
                <div className="text-center p-6">
                  <p className="text-sm uppercase tracking-wider text-white/60">Core Stack</p>
                  <p className="mt-2 text-2xl font-semibold">React • Node • FastAPI • MongoDB • AWS</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
