import {
  UserCheck,
  FileSearch,
  Lightbulb,
  ShieldCheck,
  Lock,
  Minimize2,
  ClipboardList,
  Scale,
  GraduationCap,
  Presentation,
  Building2,
  Crown,
  User,
  Landmark,
  Info,
  ArrowRight,
  CheckCircle,
  X,
  Sparkles,
} from 'lucide-react';
import { responsibleAiPillars, userRoles, comparisonTraditional, comparisonStatSaksham, impactCardsData } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  FileSearch,
  Lightbulb,
  ShieldCheck,
  Lock,
  Minimize2,
  ClipboardList,
  Scale,
  GraduationCap,
  Presentation,
  Building2,
  Crown,
  User,
  Landmark,
};

export function ResponsibleAI() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Responsible AI</p>
          <h2 className="section-title mb-4">Responsible AI for Trusted Learning.</h2>
          <p className="section-desc">
            Every AI capability in StatSaksham AI is designed with human oversight, transparency and accountability at
            its core.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {responsibleAiPillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] ?? ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="card-hover p-4 sm:p-5 animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-50 text-success-500 mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-ink mb-1.5 leading-tight">{pillar.title}</h3>
                <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Important note */}
        <div className="flex items-start gap-3 rounded-xl border border-warning-100 bg-warning-50/30 px-5 py-4 max-w-3xl">
          <Info className="h-5 w-5 text-warning-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            <span className="font-semibold text-ink">Important:</span> AI-generated assessment content should be
            reviewed by authorized trainers or subject-matter experts before being used in formal assessments.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-surface border-y border-border">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mx-auto text-center mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Why StatSaksham AI</p>
          <h2 className="section-title mb-4">From Training Completion to Competency Development.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Traditional */}
          <div className="card p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-ink-muted">
                <X className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-ink-muted">Traditional Approach</h3>
            </div>
            <div className="space-y-3">
              {comparisonTraditional.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-2 text-ink-muted text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink-muted font-medium">{step}</span>
                  {i < comparisonTraditional.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-border ml-auto" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-surface-2 p-3.5">
              <p className="text-xs text-ink-muted text-center">Limited feedback. No personalization. No measurable improvement.</p>
            </div>
          </div>

          {/* StatSaksham AI */}
          <div className="card p-5 sm:p-6 border-brand-200 ring-1 ring-brand-100 bg-gradient-to-br from-surface to-brand-50/20">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-ink">StatSaksham AI Approach</h3>
              <span className="badge-ai ml-auto">Recommended</span>
            </div>
            <div className="space-y-2.5">
              {comparisonStatSaksham.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink font-semibold">{step}</span>
                  {i < comparisonStatSaksham.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-brand-400 ml-auto" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-brand-50 p-3.5">
              <p className="text-xs text-brand-300 text-center font-medium">Continuous, competency-driven, measurable improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UsersRoles() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Who It's For</p>
          <h2 className="section-title mb-4">Designed for the Entire Capacity-Building Ecosystem.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {userRoles.map((role, i) => {
            const Icon = iconMap[role.icon] ?? User;
            return (
              <div
                key={role.role}
                className="card-hover p-5 sm:p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-400 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-ink mb-2 uppercase tracking-wide">{role.role}</h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-bg">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mx-auto text-center mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Impact</p>
          <h2 className="section-title mb-4">Creating a More Capable, Adaptive Statistical Workforce.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {impactCardsData.map((card, i) => {
            const Icon = iconMap[card.icon] ?? User;
            return (
              <div
                key={card.title}
                className="card-hover p-5 sm:p-6 flex items-start gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink mb-1.5">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
