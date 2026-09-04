import {
  Target,
  Route,
  Sparkles,
  BarChart3,
  EyeOff,
  Unlink,
  Copy,
  FileEdit,
  TrendingDown,
} from 'lucide-react';
import { impactCards, problemCards } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Route,
  Sparkles,
  BarChart3,
  EyeOff,
  Unlink,
  Copy,
  FileEdit,
  TrendingDown,
};

export function ImpactStrip() {
  return (
    <section className="py-12 sm:py-14 bg-surface border-y border-border">
      <div className="container-mw container-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {impactCards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Target;
            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-border bg-surface-2 p-5 transition-all duration-300 hover:shadow-card hover:border-brand-200 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400 mb-4 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-ink mb-1.5">{card.title}</h3>
                <p className="text-xs text-ink-muted leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-3xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">The Challenge</p>
          <h2 className="section-title mb-4">
            Capacity Building Needs More Than One-Size-Fits-All Training
          </h2>
          <p className="section-desc">
            India's Official Statistical System spans diverse roles, domains and competency requirements. Traditional
            training models can make it difficult to understand individual skill gaps, find relevant learning and
            measure whether capabilities actually improve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {problemCards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? EyeOff;
            return (
              <div
                key={card.title}
                className="card-hover p-5 sm:p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-500 mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">{card.description}</p>
              </div>
            );
          })}

          {/* Filler card to balance grid on lg */}
          <div className="hidden lg:flex items-center justify-center rounded-2xl border border-dashed border-border bg-surface-2/50 p-6">
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-400 mx-auto mb-3">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-ink">StatSaksham AI addresses all of these challenges</p>
              <p className="text-[11px] text-ink-muted mt-1">One intelligent platform, continuous improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
