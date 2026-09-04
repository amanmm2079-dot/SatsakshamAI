import {
  User,
  AlertCircle,
  Cpu,
  GraduationCap,
  ClipboardCheck,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Info,
} from 'lucide-react';
import { igotFlow, igotCapabilities } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  AlertCircle,
  Cpu,
  GraduationCap,
  ClipboardCheck,
  RefreshCw,
};

export default function IGOTIntegration() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-bg">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mx-auto text-center mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">iGOT Karmayogi Integration</p>
          <h2 className="section-title mb-4">
            Connecting Competency Gaps with the Right Learning Opportunities.
          </h2>
          <p className="section-desc">
            StatSaksham AI is designed to work alongside the iGOT Karmayogi ecosystem, mapping identified competency
            requirements to relevant learning opportunities.
          </p>
        </div>

        {/* Flow visualization */}
        <div className="card p-5 sm:p-8 mb-8">
          {/* Desktop horizontal flow */}
          <div className="hidden lg:flex items-center justify-between gap-1">
            {igotFlow.map((node, i) => {
              const Icon = iconMap[node.icon] ?? User;
              return (
                <div key={i} className="flex items-center gap-1 flex-1">
                  <div className="flex-1 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-400 mb-2 ring-2 ring-brand-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold text-ink leading-tight">{node.label}</p>
                  </div>
                  {i < igotFlow.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-brand-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile vertical flow */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
              {igotFlow.map((node, i) => {
                const Icon = iconMap[node.icon] ?? User;
                return (
                  <div key={i} className="relative mb-4 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="absolute -left-[1.7rem] top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-400 ring-4 ring-bg">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="rounded-xl border border-border bg-surface-2 px-3.5 py-2.5">
                      <p className="text-xs font-semibold text-ink">{node.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {igotCapabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <CheckCircle className="h-4 w-4 text-success-500 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">{cap}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 rounded-xl border border-warning-100 bg-warning-50/30 px-4 py-3.5 max-w-2xl mx-auto">
          <Info className="h-4 w-4 text-warning-500 shrink-0 mt-0.5" />
          <p className="text-xs text-ink-muted leading-relaxed">
            iGOT Karmayogi integration shown represents proposed/integration-ready functionality for this SIH prototype.
          </p>
        </div>
      </div>
    </section>
  );
}
