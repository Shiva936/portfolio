import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navSections = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Systems', href: '#systems' },
  { label: 'Explorations', href: '#explorations' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-black/30 backdrop-blur-md shadow-lg shadow-blue-500/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-slate-100 hover:text-indigo-200"
          aria-label={`Go to top – ${profile.name}`}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-indigo-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-indigo-500/40 bg-indigo-500/10 px-3 py-2 text-xs font-semibold tracking-wide text-indigo-100 transition hover:bg-indigo-500/20"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/30 px-3 py-2 text-slate-200 transition hover:bg-slate-800 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/85 pb-6 backdrop-blur-lg lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pt-4 sm:px-6">
            {navSections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-900/80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-indigo-500/10 px-3 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-500/20"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
