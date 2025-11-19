import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent border border-white/10 p-8"
        >
          <h3 className="text-2xl font-semibold text-white">About</h3>
          <p className="mt-3 text-blue-200/80 leading-relaxed">
            I’m a software developer focused on building fast, accessible, and delightful interfaces. I work primarily with React, HTML5, CSS3, and Tailwind CSS. On the back end, I collaborate comfortably across Java, Node.js, and PHP to ship robust systems.
          </p>
          <p className="mt-3 text-blue-200/80 leading-relaxed">
            Beyond the stack, I value clean architecture, testing, and thoughtful UX. I enjoy translating product ideas into polished experiences.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'React', level: 'Expert' },
            { label: 'Tailwind CSS', level: 'Advanced' },
            { label: 'Node.js', level: 'Advanced' },
            { label: 'PHP', level: 'Intermediate' },
            { label: 'Java', level: 'Intermediate' },
            { label: 'Accessibility', level: 'Advanced' },
          ].map((s) => (
            <motion.li key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white font-medium">{s.label}</p>
              <p className="text-xs text-blue-200/70">{s.level}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
