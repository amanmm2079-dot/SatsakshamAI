import { Send, Sparkles, FileText, MessageSquare } from 'lucide-react';
import { assistantPrompts, assistantConversation } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function LearningAssistant() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-py bg-surface border-y border-border">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">AI Learning Assistant</p>
          <h2 className="section-title mb-4">An Intelligent Learning Companion.</h2>
          <p className="section-desc">
            Receive contextual assistance grounded in approved learning material — ask questions, request summaries,
            generate practice questions and understand your mistakes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Chat preview */}
          <div className="card p-5 flex flex-col min-h-[420px]">
            <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ai-50 border border-ai-200">
                <Sparkles className="h-5 w-5 text-ai-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">StatSaksham Learning Assistant</p>
                <p className="text-[11px] text-ink-muted flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
                  Grounded in your learning material
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {assistantConversation.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ai-50 text-ai-400 shrink-0 mr-2">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-navy text-white rounded-tr-sm'
                        : 'bg-surface-2 text-ink rounded-tl-sm border border-border'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                    {msg.source && (
                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-ink-muted border-t border-border pt-2">
                        <FileText className="h-3 w-3" />
                        {msg.source}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-surface-2 p-1.5">
              <input
                type="text"
                placeholder="Ask about your learning material…"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
              />
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white hover:bg-brand-500 transition-colors" aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Suggested prompts */}
          <div className="flex flex-col gap-4">
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-4 w-4 text-brand-400" />
                <p className="text-xs font-bold text-ink uppercase tracking-wide">Try These Prompts</p>
              </div>
              <div className="space-y-2.5">
                {assistantPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    className="w-full text-left rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-ink font-medium transition-all hover:border-brand-300 hover:bg-brand-50/20 hover:translate-x-0.5"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5 bg-gradient-to-br from-ai-50/30 to-surface-2 border-ai-100">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ai-100 text-ai-300 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink mb-1">Source-Grounded Responses</p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Receive contextual assistance grounded in approved learning material. Every response includes a
                    reference to the source document and section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
