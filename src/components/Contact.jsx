import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s collaborate</h3>
              <p className="mt-2 text-blue-200/80">Have a project in mind? I’d love to hear about it. Send a quick note and I’ll get back to you.</p>
            </div>
            <form onSubmit={(e)=> e.preventDefault()} className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <input type="email" placeholder="Email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <textarea rows="4" placeholder="Tell me about your project" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <button className="justify-self-start px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
