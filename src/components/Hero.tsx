import {
  Sparkles,
  ArrowRight,
  Play,
  Brain,
  Route,
  GraduationCap,
  FileQuestion,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';
import { heroCompetencies, proficiencyColor } from '@/data/competencies';
import { useCountUp, useScrollReveal } from '@/hooks/useScrollReveal';

const trustChips = [
  { icon: Brain, label: 'AI-Powered Assessment' },
  { icon: Route, label: 'Personalized Learning' },
  { icon: GraduationCap, label: 'iGOT Integration-Ready' },
  { icon: FileQuestion, label: 'AI Quiz Generation' },
];

export default function Hero() {
  const { openAssessment } = useAssessment();
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const score = useCountUp(74, 1500, visible);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-ai-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="container-mw container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-ai-50 border border-ai-200 px-3.5 py-1.5 text-xs font-semibold text-ai-300">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Capacity Building
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-ink leading-[1.15] tracking-tight">
              Build Skills. Bridge Competency Gaps.{' '}
              <span className="text-brand-400">Strengthen India's Statistical System.</span>
            </h1>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
              StatSaksham AI identifies competency gaps, builds personalized learning pathways and uses AI to
              transform learning materials into intelligent assessments—helping create a continuously evolving
              statistical workforce.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openAssessment} className="btn-brand">
                Assess My Competencies
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#how-it-works" className="btn-secondary">
                <Play className="h-4 w-4" />
                Explore How It Works
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink/80 shadow-soft"
                >
                  <chip.icon className="h-3.5 w-3.5 text-brand-400" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Dashboard preview */}
          <div ref={ref} className="relative animate-scale-in">
            <div className="card shadow-elevated p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-medium text-ink-muted">Your Competency Profile</p>
                  <p className="text-sm font-bold text-ink">Live Dashboard Preview</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-success-500" />
                  <span className="text-xs font-medium text-success-500">Active</span>
                </div>
              </div>

              {/* Score ring */}
              <div className="flex items-center gap-5 mb-5 pb-5 border-b border-border">
                <div className="relative h-24 w-24 shrink-0">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#1E2A42" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(score / 100) * 264} 264`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-extrabold text-ink">{score}%</span>
                    <span className="text-[10px] font-medium text-ink-muted">Score</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-1">Competency Score</p>
                  <p className="text-sm text-ink font-medium leading-snug">
                    You're on track. 2 priority areas need focused development.
                  </p>
                </div>
              </div>

              {/* Skill gaps list */}
              <div className="space-y-3 mb-5">
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide">Skill Gaps</p>
                {heroCompetencies.slice(2, 5).map((c, i) => {
                  const color = proficiencyColor(c.level);
                  return (
                    <div
                      key={c.name}
                      className="flex items-center gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-semibold text-ink truncate">{c.name}</span>
                          <span className={`badge ${color.badge} text-[10px] px-2 py-0.5 shrink-0`}>{c.level}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-bg overflow-hidden">
                          <div
                            className={`h-full rounded-full ${color.bar} transition-all duration-1000 ease-out`}
                            style={{ width: visible ? `${c.score}%` : '0%', transitionDelay: `${300 + i * 150}ms` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-ink w-9 text-right tabular-nums">{c.score}%</span>
                    </div>
                  );
                })}
              </div>

              {/* Recommendation card */}
              <div className="rounded-xl bg-gradient-to-br from-navy to-navy-700 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-ai-300" />
                  <span className="text-xs font-semibold text-ai-200">Recommended Next</span>
                </div>
                <p className="text-sm font-bold mb-1">Python for Data Analysis</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full rounded-full bg-ai-400 transition-all duration-1000" style={{ width: visible ? '92%' : '0%', transitionDelay: '800ms' }} />
                  </div>
                  <span className="text-xs font-semibold text-ai-200">92% match</span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/70">
                  <CheckCircle className="h-3 w-3 text-success-500" />
                  Based on your assessment results
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2 rounded-xl bg-surface border border-border shadow-card px-4 py-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-50">
                <TrendingUp className="h-4 w-4 text-success-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-ink">+12% Improvement</p>
                <p className="text-[10px] text-ink-muted">Since last assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
