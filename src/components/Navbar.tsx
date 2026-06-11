import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href?: string
  to?: string
  children?: { label: string; to: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'About the School', to: '/about' },
      { label: 'Our Vision & Mission', to: '/about#vision' },
      { label: 'Our Team', to: '/about#team' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Early Childhood (PP1–PP2)', to: '/admissions#early' },
      { label: 'Primary (Grade 1–6)', to: '/admissions#primary' },
      { label: 'Junior Secondary (Grade 7–9)', to: '/admissions#secondary' },
    ],
  },
  { label: 'Academics', to: '/academics' },
  {
    label: 'Publications',
    children: [
      { label: 'Fee Structure', to: '/about#fees' },
      { label: 'Events Calendar', to: '/about#events' },
      { label: 'FAQs', to: '/about#faq' },
      { label: 'Newsletter', to: '/about#newsletter' },
    ],
  },
  {
    label: 'Media',
    children: [
      { label: 'Photo Gallery', to: '/gallery' },
      { label: 'Video Gallery', to: '/gallery#video' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src="/images/logo.png" alt="Mount Moriah International Christian School Logo" className="w-14 h-14 object-contain bg-white rounded-full p-1"/>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-primary-500 text-base leading-tight">Mount Moriah</div>
            <div className="text-xs text-secondary-500 font-semibold tracking-wide leading-tight">INTERNATIONAL CHRISTIAN SCHOOL</div>
            <div className="text-[10px] text-gray-500 italic">Learning Today for a Better Tomorrow</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors rounded">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="dropdown-menu absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-48 border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive ? 'text-primary-500 font-semibold' : 'text-gray-700 hover:text-primary-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link
            to="/admissions"
            className="ml-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-primary-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-screen overflow-y-auto">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 border-b border-gray-50"
                  onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === item.label && (
                  <div className="bg-primary-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-8 py-2 text-sm text-primary-500 border-b border-primary-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to!}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm font-medium border-b border-gray-50 transition-colors ${
                    isActive ? 'text-primary-500 bg-primary-50' : 'text-gray-700'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}
          <div className="p-4">
            <Link
              to="/admissions"
              className="block text-center bg-accent-500 text-white font-semibold py-3 rounded"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
