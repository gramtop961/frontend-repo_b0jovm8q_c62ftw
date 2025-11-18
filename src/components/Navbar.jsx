import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30"></div>
          <span className="text-white font-semibold tracking-tight group-hover:text-red-200 transition-colors">Hengki Kurniawan</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" className="text-white/70 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" className="text-white/70 hover:text-white"><Mail size={18} /></a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/60 backdrop-blur">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90 py-2">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
