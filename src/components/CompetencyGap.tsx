import { ArrowRight, BarChart3 } from 'lucide-react';
import { dashboardCompetencies, proficiencyColor } from '@/data/competencies';
import { useAssessment } from '@/context/AssessmentContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CompetencyGap() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { openAssessment } = useAssessment();

  return (
    <section id="assessment" className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Competency Dashboard</p>
          <h2 className="section-title mb-4">Know What to Learn Before Deciding What to Learn.</h2>
          <p className="section-desc">
            Visualize your competency profile across key statistical domains. Every score is backed by a structured
            assessment — not guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Competency bars */}
          <div className="lg:col-span-3 card p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 className="h-5 w-5 text-brand-400" />
              <h3 className="text-sm font-bold text-ink">Competency Breakdown</h3>
            </div>
            <div className="space-y-4">
              {dashboardCompetencies.map((c, i) => {
                const color = proficiencyColor(c.level);
                return (
                  <div key={c.name}>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm font-semibold text-ink truncate">{c.name}</span>
                        <span className={`badge ${color.badge} text-[10px] px-2 py-0.5 shrink-0 hidden sm:inline-flex`}>
                          {c.level}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-ink tabular-nums shrink-0">{c.score}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-surface-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${color.bar} transition-all duration-1000 ease-out`}
                          style={{ width: visible ? `${c.score}%` : '0%', transitionDelay: `${i * 100}ms` }}
                        />
                      </div>
                      <span className={`text-[10px] font-semibold ${color.text} sm:hidden shrink-0`}>{c.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-ink-muted">Legend:</span>
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-success-500" /><span className="text-[11px] text-ink-muted">Advanced</span></div>
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-brand-500" /><span className="text-[11px] text-ink-muted">Proficient</span></div>
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-ai-500" /><span className="text-[11px] text-ink-muted">Intermediate</span></div>
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-saffron-500" /><span className="text-[11px] text-ink-muted">Dev Priority</span></div>
            </div>
          </div>

          {/* Summary side */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="card p-5 bg-gradient-to-br from-navy to-navy-700 text-white border-0">
              <p className="text-xs font-semibold text-ai-200 uppercase tracking-wide mb-2">Overall Competency Score</p>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-extrabold tabular-nums">74%</span>
                <span className="text-sm text-white/60 mb-1.5">/ 100</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                2 priority development areas identified. Focus on Python for Statistics and Data Governance to improve
                your overall profile.
              </p>
              <button onClick={openAssessment} className="btn bg-white text-navy w-full text-sm font-semibold hover:bg-bg active:scale-[0.98]">
                View Competency Dashboard
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="card p-5">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-3">Priority Gaps</p>
              <div className="space-y-2">
                {dashboardCompetencies.filter((c) => c.level === 'Development Priority').map((c) => (
                  <div key={c.name} className="flex items-center gap-2.5 rounded-xl border border-saffron-100 bg-saffron-50/30 px-3.5 py-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-saffron-100 text-saffron-500 shrink-0">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-ink truncate">{c.name}</p>
                      <p className="text-[10px] text-ink-muted">Score: {c.score}% — Needs focused development</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
