import { motion } from 'framer-motion';

const techs = [
  'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Java', 'Node.js', 'PHP', 'FastAPI', 'MongoDB'
];

export default function TechMarquee() {
  return (
    <div className="relative py-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...techs, ...techs].map((t, i) => (
          <span key={i} className="text-blue-200/80 text-sm tracking-wider uppercase">{t}</span>
        ))}
      </motion.div>
    </div>
  );
}
