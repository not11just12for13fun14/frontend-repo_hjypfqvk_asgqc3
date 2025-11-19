import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#home" className="relative inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_6px_rgba(59,130,246,0.5)]"></span>
              <span className="text-white font-semibold tracking-tight">Ntshuxeko Chabalala</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@example.com" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white transition-colors" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white transition-colors" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 hover:text-white p-2 rounded-lg hover:bg-white/5">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/5 px-4 pb-4">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="py-2 text-slate-200/90 hover:text-white">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
