import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import logo from '@/assets/logo/logo.png';
import logoWhite from '@/assets/logo/logo-white.png';

const navLinks = [
  { label: 'About', href: '#welcome' },
  { label: 'Conference', href: '#conference' },
  { label: 'Jesse Falodun', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Events', href: '#events' },
  { label: 'Connect', href: '#connect' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = '';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) {
          cur = s.id;
        }
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[999] backdrop-blur-[20px] border-b border-border transition-all duration-300 ${
          scrolled ? 'shadow-[var(--shadow-base)]' : ''
        }`}
        style={{ background: `hsl(var(--nav-bg))` }}
      >
        <div className="flex items-center justify-between h-[70px] max-w-[1160px] mx-auto px-8">
          <a href="#hero" className="flex items-center gap-3.5">
            <img
              src={isDark ? logoWhite : logo}
              alt="Cherubs Cove Ministry Logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-[1.5px] uppercase text-foreground">
                Cherubs Cove
              </div>
              <div className="text-[9.5px] font-normal tracking-[3.5px] uppercase text-gold">
                The Making Place
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link-underline px-3 py-2 rounded text-[11.5px] font-bold tracking-[1.2px] uppercase transition-colors duration-250 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary bg-orange-soft'
                      : 'text-muted-foreground hover:text-primary hover:bg-orange-soft'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors duration-250 hover:border-primary hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#events"
              className="hidden lg:inline-block btn-solid-custom text-[10.5px] tracking-[2px]"
            >
              Register
            </a>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-1 w-9 h-9 justify-center items-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 right-0 z-[998] border-b border-border bg-background transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-4 border-b border-border text-xs font-bold tracking-[2px] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#events"
            onClick={closeMenu}
            className="py-4 text-xs font-bold tracking-[2px] uppercase text-primary"
          >
            Register Now →
          </a>
        </div>
      </div>
    </>
  );
}
