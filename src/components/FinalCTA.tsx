import { ArrowRight, BarChart3, Sparkles } from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function FinalCTA() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { openAssessment } = useAssessment();

  return (
    <section className="section-py">
      <div className="container-mw container-px">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center animate-on-scroll ${visible ? 'is-visible' : ''}`}
        >
          {/* Background accents */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-ai-500/20 blur-3xl" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white mb-5">
            <Sparkles className="h-3.5 w-3.5 text-ai-300" />
            Start Your Journey
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
            Transform Every Competency Gap into a Learning Opportunity.
          </h2>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
            Build personalized learning journeys, strengthen competencies and measure progress through one AI-enabled
            platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openAssessment}
              className="btn bg-white text-navy px-6 py-3 text-sm font-bold hover:bg-bg active:scale-[0.98] transition-all shadow-card"
            >
              Start Competency Assessment
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#home"
              className="btn bg-white/10 text-white border border-white/20 px-6 py-3 text-sm font-bold hover:bg-white/20 active:scale-[0.98] transition-all"
            >
              Explore Platform
            </a>
          </div>

          <p className="mt-8 text-sm font-semibold text-ai-300 tracking-wide">
            Assess Better. Learn Smarter. Build Capacity Continuously.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const platformLinks = ['Competency Assessment', 'Learning Recommendations', 'AI Quiz Generator', 'Analytics'];
  const resourceLinks = ['About', 'How It Works', 'Responsible AI', 'Help & Support'];
  const ecosystemLinks = ['iGOT Karmayogi', 'Capacity Building', 'Official Statistical System'];

  return (
    <footer className="bg-navy-900 text-white/70 pt-14 pb-8">
      <div className="container-mw container-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-extrabold text-white">StatSaksham AI</span>
            </div>
            <p className="text-xs leading-relaxed text-white/50 max-w-xs">
              AI-Powered Capacity Building for India's Official Statistical System
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wide mb-3">Platform</p>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wide mb-3">Resources</p>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wide mb-3">Ecosystem</p>
            <ul className="space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 mb-6">
          <p className="text-[11px] text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Disclaimer:</span> Developed as an SIH prototype. References
            to iGOT Karmayogi indicate proposed/integration-ready functionality and do not imply official affiliation
            or production integration unless separately authorized.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} StatSaksham AI. SIH Prototype.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
