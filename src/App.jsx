import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import WorkGallery from './components/WorkGallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(600px_circle_at_80%_0%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 0 40 L 40 0\' stroke=\'%23ffffff0f\' stroke-width=\'1\' /%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'transparent\'/%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23p)\'/%3E%3C/svg%3E")'}} />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <WorkGallery />
        <About />
        <Contact />
        <footer className="py-10 text-center text-blue-200/60 text-sm">© {new Date().getFullYear()} Ntshuxeko Chabalala — All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
