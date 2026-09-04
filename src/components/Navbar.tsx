import { useEffect, useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { navLinks } from '@/data/content';
import { useAssessment } from '@/context/AssessmentContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openAssessment } = useAssessment();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-md shadow-soft border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-mw container-px flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="StatSaksham AI home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy shadow-soft">
              <BarChart3 className="h-5 w-5 text-brand-400" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-extrabold text-ink tracking-tight">StatSaksham AI</span>
              <span className="text-[10px] font-medium text-ink-muted hidden sm:block">Capacity Building Platform</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button className="btn-ghost">Login</button>
            <button onClick={openAssessment} className="btn-brand">
              Assess My Skills
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={openAssessment}
              className="btn-brand btn-sm"
              aria-label="Assess my skills"
            >
              Assess
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-ink transition-colors hover:bg-surface-2"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fade-in"
            onClick={handleNavClick}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-surface shadow-elevated animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between border-b border-border px-5 h-16 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
                  <BarChart3 className="h-4 w-4 text-brand-400" />
                </div>
                <span className="text-sm font-extrabold text-ink">StatSaksham AI</span>
              </div>
              <button
                onClick={handleNavClick}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink hover:bg-surface-2"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-2 active:bg-surface-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border p-4 space-y-2 shrink-0">
              <button
                onClick={() => {
                  handleNavClick();
                  openAssessment();
                }}
                className="btn-brand w-full"
              >
                Assess My Skills
              </button>
              <button onClick={handleNavClick} className="btn-secondary w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
