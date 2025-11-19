import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Ntshuxeko Chabalala
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-lg text-slate-300/90 max-w-xl">
              Software Developer crafting modern, interactive web experiences with React, HTML5, CSS3 and Tailwind CSS.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)] transition-colors">
                See my work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-100 font-medium border border-white/10 transition-colors">
                Get in touch
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Frontend', value: 'React, Tailwind' },
                { label: 'Backend', value: 'Node.js, PHP, Java' },
                { label: 'Focus', value: 'Performance & UX' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="mt-1 font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -z-10 top-20 left-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-20 right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
    </section>
  )
}
