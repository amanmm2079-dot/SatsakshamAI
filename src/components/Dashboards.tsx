import {
  Gauge,
  BookOpen,
  Route,
  ClipboardCheck,
  AlertCircle,
  LayoutGrid,
  Sparkles,
  PlayCircle,
  FileBarChart,
  Award,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Building2,
  Users,
  Target,
} from 'lucide-react';
import { learnerDashboardStats, learnerDashboardSections, adminAnalyticsCards, adminDepartments, adminInsight } from '@/data/content';
import { dashboardCompetencies, proficiencyColor } from '@/data/competencies';
import { useCountUp, useScrollReveal } from '@/hooks/useScrollReveal';

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge,
  BookOpen,
  Route,
  ClipboardCheck,
  AlertCircle,
};

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Sparkles,
  PlayCircle,
  FileBarChart,
  Award,
};

const adminIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid3x3: LayoutGrid,
  Building2: Building2,
  Users: Users,
  FileBarChart: FileBarChart,
  TrendingUp: TrendingUp,
  Target: Target,
};

export function LearnerDashboard() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="analytics" className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">Learner Dashboard</p>
          <h2 className="section-title mb-4">Your Complete Learning Journey, in One View.</h2>
          <p className="section-desc">
            Track competency scores, learning progress, assessment performance and achievements — all in a single,
            responsive dashboard.
          </p>
        </div>

        <div className="card p-5 sm:p-6">
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
            {learnerDashboardStats.map((stat, i) => {
              const Icon = statIcons[stat.icon] ?? Gauge;
              const animatedValue = useCountUp(stat.value, 1200, visible);
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-bg p-4 text-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-400 mx-auto mb-2">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-2xl font-extrabold text-ink tabular-nums">
                    {animatedValue}
                    {stat.suffix}
                  </p>
                  <p className="text-[10px] font-semibold text-ink-muted uppercase tracking-wide mt-0.5 leading-tight">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Two column: competency map + sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Competency map */}
            <div className="rounded-xl border border-border bg-surface-2 p-4">
              <p className="text-xs font-bold text-ink uppercase tracking-wide mb-3">Competency Map</p>
              <div className="space-y-3">
                {dashboardCompetencies.slice(0, 5).map((c, i) => {
                  const color = proficiencyColor(c.level);
                  return (
                    <div key={c.name}>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-medium text-ink truncate">{c.name}</span>
                        <span className="text-xs font-bold text-ink tabular-nums">{c.score}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                        <div
                          className={`h-full rounded-full ${color.bar} transition-all duration-1000`}
                          style={{ width: visible ? `${c.score}%` : '0%', transitionDelay: `${i * 100}ms` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dashboard sections */}
            <div className="rounded-xl border border-border bg-surface-2 p-4">
              <p className="text-xs font-bold text-ink uppercase tracking-wide mb-3">Dashboard Modules</p>
              <div className="space-y-2">
                {learnerDashboardSections.map((section, i) => {
                  const Icon = sectionIcons[section.icon] ?? LayoutGrid;
                  return (
                    <div
                      key={section.label}
                      className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3.5 py-2.5 transition-all hover:border-brand-300 hover:shadow-soft animate-fade-in-up"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-400 shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold text-ink flex-1">{section.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-ink-muted" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Prototype label */}
          <p className="mt-5 text-center text-[11px] text-ink-muted">
            <span className="badge bg-surface-2 border border-border text-ink-muted">Prototype data</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function AdminAnalytics() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-navy relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dots opacity-20" />
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3 text-brand-400">Admin Analytics</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            From Individual Learning to Organization-Wide Insights.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed">
            Administrators gain aggregated visibility into competency patterns, learning participation and priority
            training areas across the organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Analytics cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {adminAnalyticsCards.map((card, i) => {
              const Icon = adminIcons[card.icon] ?? LayoutGrid;
              return (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all hover:bg-white/10 hover:border-brand-400/30 animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-xs font-semibold text-white/80">{card.label}</span>
                  </div>
                  {/* Mini bar chart mock */}
                  <div className="flex items-end gap-1 h-12">
                    {[40, 65, 50, 80, 60, 75, 55].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-t bg-brand-400/40 transition-all duration-700"
                        style={{ height: visible ? `${h}%` : '0%', transitionDelay: `${j * 60 + i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Department overview */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
            <p className="text-xs font-bold text-white/80 uppercase tracking-wide mb-4">Department Competency Overview</p>
            <div className="space-y-3">
              {adminDepartments.map((dept, i) => (
                <div key={dept.name}>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-white/80 truncate">{dept.name}</span>
                    <span className="text-xs font-bold text-white tabular-nums">{dept.avg}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brand-400 transition-all duration-1000"
                        style={{ width: visible ? `${dept.avg}%` : '0%', transitionDelay: `${i * 100}ms` }}
                      />
                    </div>
                    <span className="text-[10px] text-saffron-400 font-semibold flex items-center gap-0.5 shrink-0">
                      <TrendingDown className="h-2.5 w-2.5" />
                      {dept.gap} gaps
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight card */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-400/20 bg-brand-500/10 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-brand-300 uppercase tracking-wide mb-1">AI-Generated Insight</p>
            <p className="text-sm text-white font-medium leading-relaxed">{adminInsight}</p>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-white/40">
          <span className="badge bg-white/10 border border-white/10 text-white/60">Prototype data</span>
        </p>
      </div>
    </section>
  );
}
