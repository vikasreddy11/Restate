import { useState } from 'react'

type View = 'home' | 'services' | 'faq' | 'contact'

type HeaderProps = {
  currentView: View
  onNavigate: (view: View) => void
}

// These are page-switching links
const pageLinks: { label: string; view: View }[] = [
  { label: 'Services', view: 'services' },
  { label: 'FAQ', view: 'faq' },
  { label: 'Contact Us', view: 'contact' },
]

// These are informational links (no page switch yet)
const infoLinks = ['Buy', 'Rent', 'House Prices', 'Mortgages', 'Find Agent', 'Inspire']

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-neutral-100 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-[4.5rem] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <button
          onClick={() => { onNavigate('home'); setMenuOpen(false) }}
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer group"
        >
          {/* House icon */}
          <svg className="w-8 h-8 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span className="text-3xl font-extrabold text-neutral-900 tracking-tight group-hover:text-cyan-600 transition-colors duration-200">
            Restate
          </span>
        </button>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center flex-1 justify-center gap-0.5">
          {/* Informational links */}
          {infoLinks.map((label) => (
            <button
              key={label}
              className="px-3.5 py-2 text-base font-medium text-neutral-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              {label}
            </button>
          ))}

          {/* Divider */}
          <span className="h-5 w-px bg-neutral-200 mx-2 flex-shrink-0" />

          {/* Page-switching links */}
          {pageLinks.map(({ label, view }) => (
            <button
              key={view}
              onClick={() => onNavigate(view)}
              className={`px-3.5 py-2 text-base font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                currentView === view
                  ? 'text-cyan-600 bg-cyan-50 font-semibold'
                  : 'text-neutral-600 hover:text-cyan-600 hover:bg-cyan-50'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* ── Right: Sign In ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <button className="flex items-center gap-2 px-5 py-2.5 text-base font-semibold text-neutral-700 border border-neutral-300 rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all duration-200 cursor-pointer group">
            <svg className="w-4 h-4 text-neutral-500 group-hover:text-cyan-500 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sign in
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-neutral-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-neutral-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-neutral-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 pb-5 pt-3 flex flex-col gap-1 border-t border-neutral-100 bg-white">
          {[...infoLinks].map((label) => (
            <button
              key={label}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-cyan-500 transition-all duration-200 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <div className="my-2 border-t border-neutral-100" />
          {pageLinks.map(({ label, view }) => (
            <button
              key={view}
              onClick={() => { onNavigate(view); setMenuOpen(false) }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentView === view
                  ? 'bg-cyan-50 text-cyan-600 font-semibold'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-cyan-500'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="my-2 border-t border-neutral-100" />
          <button className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-700 border border-neutral-300 rounded-xl hover:border-cyan-500 hover:text-cyan-600 transition-all duration-200 cursor-pointer w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sign in
          </button>
        </nav>
      </div>
    </header>
  )
}
