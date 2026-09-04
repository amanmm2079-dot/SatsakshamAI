import { ArrowRight, ArrowDown, Sparkles, Zap, Target, CheckCircle } from 'lucide-react';
import { learningPathSteps } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function LearningPath() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="learning-paths" className="section-py bg-surface border-y border-border">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Personalized Learning</p>
          <h2 className="section-title mb-4">Every Learner Gets a Path Built Around Their Needs.</h2>
          <p className="section-desc">
            StatSaksham AI uses competency gaps, role requirements, assessment performance and learning history to
            create focused development pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Pathway visualization */}
          <div className="lg:col-span-2">
            <div className="card p-5 sm:p-6">
              {/* Desktop horizontal path */}
              <div className="hidden lg:flex items-stretch gap-1">
                {learningPathSteps.map((step, i) => (
                  <div key={i} className="flex items-stretch gap-1 flex-1">
                    <div
                      className={`flex-1 rounded-xl border p-4 transition-all duration-300 animate-fade-in-up ${
                        step.type === 'gap'
                          ? 'border-saffron-200 bg-saffron-50/30'
                          : 'border-border bg-surface-2 hover:border-brand-300 hover:bg-brand-50/20'
                      }`}
                      style={{ animationDelay: `${i * 120}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {step.type === 'gap' ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-saffron-100 text-saffron-500">
                            <Target className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-400">
                            <CheckCircle className="h-3.5 w-3.5" />
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wide text-ink-muted">
                          {step.type === 'gap' ? 'Gap' : `Module ${i}`}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-ink leading-tight mb-1">{step.title}</p>
                      <p className="text-[10px] text-ink-muted">{step.subtitle}</p>
                    </div>
                    {i < learningPathSteps.length - 1 && (
                      <div className="flex items-center">
                        <ArrowRight className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile vertical path */}
              <div className="lg:hidden">
                <div className="relative pl-7">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
                  {learningPathSteps.map((step, i) => (
                    <div key={i} className="relative mb-4 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                      <div
                        className={`absolute -left-[1.6rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-surface ${
                          step.type === 'gap' ? 'bg-saffron-500' : 'bg-brand-500'
                        }`}
                      >
                        {step.type === 'gap' ? (
                          <Target className="h-3 w-3 text-white" />
                        ) : (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-xl border p-3.5 ${
                          step.type === 'gap' ? 'border-saffron-200 bg-saffron-50/30' : 'border-border bg-surface-2'
                        }`}
                      >
                        <p className="text-xs font-bold text-ink leading-tight">{step.title}</p>
                        <p className="text-[11px] text-ink-muted mt-0.5">{step.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-ai-400" />
                <p className="text-xs font-bold text-ink uppercase tracking-wide">Path Details</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge bg-saffron-50 text-saffron-500 border border-saffron-100">
                  <Zap className="h-3 w-3" />
                  High Priority
                </span>
                <span className="badge bg-brand-50 text-brand-300 border border-brand-100">92% Skill Match</span>
                <span className="badge bg-ai-50 text-ai-300 border border-ai-200">Based on Assessment</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-ink-muted">Estimated Duration</span>
                  <span className="font-semibold text-ink">6–8 weeks</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-ink-muted">Modules</span>
                  <span className="font-semibold text-ink">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">Assessments</span>
                  <span className="font-semibold text-ink">3</span>
                </div>
              </div>
            </div>

            <button className="btn-brand w-full">
              Explore Learning Path
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
