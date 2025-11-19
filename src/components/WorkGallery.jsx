import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full‑stack storefront with secure checkout and admin dashboard.',
    tags: ['React', 'Node.js', 'Tailwind'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Portfolio CMS',
    description: 'Custom content manager with role‑based access and analytics.',
    tags: ['React', 'PHP', 'MySQL'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Realtime Chat',
    description: 'Socket‑powered chat with presence, typing indicators, and themes.',
    tags: ['React', 'Node.js', 'WebSocket'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  }
];

export default function WorkGallery() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-blue-200/80 max-w-2xl">A snapshot of projects highlighting front‑end craft and back‑end versatility.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-blue-200/80 text-sm mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-200/90 text-xs border border-blue-400/20">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
