import { motion } from 'framer-motion'
import { Code2, Server, Palette } from 'lucide-react'

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'PHP', 'Java (Spring Boot)'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Design',
    icon: Palette,
    items: ['UI/UX', 'Responsive Design', 'Accessibility'],
    color: 'from-fuchsia-500/20 to-pink-500/20',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white">Skills</motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items, color }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-6`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-white"><Icon size={20} /></div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {items.map((s) => (
                  <li key={s} className="text-sm">• {s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
