import {
  ClipboardCheck,
  Search,
  Lightbulb,
  BookOpen,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { journeySteps } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck,
  Search,
  Lightbulb,
  BookOpen,
  CheckCircle,
  TrendingUp,
};

export default function LearningJourney() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="section-py bg-navy relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-ai-500/15 blur-3xl" />

      <div className="container-mw container-px">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-12 sm:mb-16 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3 text-brand-400">How It Works</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            One Intelligent Platform. A Continuous Learning Journey.
          </h2>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block">
          <div className="flex items-stretch justify-between gap-2">
            {journeySteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? ClipboardCheck;
              return (
                <div key={step.step} className="flex items-stretch gap-2 flex-1">
                  <div className="flex-1 group">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-white/10 hover:border-brand-400/40 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-bold text-white/40 tabular-nums">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mb-1.5">{step.step}</h3>
                      <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-brand-400/60 shrink-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-white/15" />
            {journeySteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? ClipboardCheck;
              return (
                <div key={step.step} className="relative mb-6 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                  {/* Dot */}
                  <div className="absolute -left-[1.4rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 ring-4 ring-navy">
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-brand-300 tabular-nums">0{i + 1}</span>
                      <h3 className="text-sm font-bold text-white">{step.step}</h3>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
