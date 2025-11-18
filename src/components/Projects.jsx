import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Cloud Automation Platform',
    desc: 'IaC-driven deployments with Terraform and GitHub Actions for zero-downtime releases.',
    tags: ['AWS', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Interactive dashboards with streaming data, role-based access, and audit logs.',
    tags: ['React', 'FastAPI', 'WebSockets'],
  },
  {
    title: 'E-commerce Modernization',
    desc: 'Headless storefront, payment integration, and observability pipeline migration.',
    tags: ['Next.js', 'Stripe', 'Datadog'],
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0b]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }} className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-red-500/40 to-orange-500/40">
              <div className="h-full rounded-2xl bg-black/70 border border-white/10 p-6">
                <div className="h-36 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 mb-5"></div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
