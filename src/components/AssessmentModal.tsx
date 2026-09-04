import { useEffect, useState } from 'react';
import {
  User,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
  Gauge,
  Target,
  BookOpen,
  Route,
} from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';
import { assessmentQuestions } from '@/data/assessment';
import { proficiencyColor } from '@/data/competencies';

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function DetailsStep() {
  const { details, setDetails, startQuiz } = useAssessment();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (!details.name.trim()) e.name = 'Name is required';
    if (!details.phone.trim()) {
      e.phone = 'Phone number is required';
    } else if (!validatePhone(details.phone)) {
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!details.email.trim()) {
      e.email = 'Email is required';
    } else if (!validateEmail(details.email)) {
      e.email = 'Enter a valid email address';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    if (validate()) startQuiz();
  };

  const handleBlur = (field: keyof FieldErrors) => {
    setTouched((t) => ({ ...t, [field]: true }));
    validate();
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-navy mb-1.5">Start Your Competency Assessment</h2>
        <p className="text-sm text-ink-muted">Enter your details to begin. Your information is saved automatically.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="asmt-name" className="block text-xs font-semibold text-navy mb-1.5">
            Name <span className="text-error-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted pointer-events-none" />
            <input
              id="asmt-name"
              type="text"
              placeholder="Enter your full name"
              value={details.name}
              onChange={(e) => setDetails({ name: e.target.value })}
              onBlur={() => handleBlur('name')}
              className={`input-field pl-11 ${touched.name && errors.name ? 'input-error' : ''}`}
              autoComplete="name"
              required
            />
          </div>
          {touched.name && errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="asmt-phone" className="block text-xs font-semibold text-navy mb-1.5">
            Phone Number <span className="text-error-500">*</span>
          </label>
          <div className="relative flex">
            <div className="flex items-center gap-1 rounded-l-xl border border-r-0 border-border bg-bg px-3.5 text-sm font-semibold text-navy">
              <span className="text-base">🇮🇳</span>
              +91
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted pointer-events-none" />
              <input
                id="asmt-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={details.phone}
                onChange={(e) => setDetails({ phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                onBlur={() => handleBlur('phone')}
                className={`input-field rounded-l-none pl-11 ${touched.phone && errors.phone ? 'input-error' : ''}`}
                autoComplete="tel-national"
                inputMode="numeric"
                required
              />
            </div>
          </div>
          {touched.phone && errors.phone && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="asmt-email" className="block text-xs font-semibold text-navy mb-1.5">
            Email <span className="text-error-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted pointer-events-none" />
            <input
              id="asmt-email"
              type="email"
              placeholder="Enter your email address"
              value={details.email}
              onChange={(e) => setDetails({ email: e.target.value })}
              onBlur={() => handleBlur('email')}
              className={`input-field pl-11 ${touched.email && errors.email ? 'input-error' : ''}`}
              autoComplete="email"
              required
            />
          </div>
          {touched.email && errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-error-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        {/* What to Study — read-only AI field */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">What to Study</label>
          <div className="relative rounded-xl border border-ai-200 bg-ai-50/50 px-4 py-3.5 min-h-[48px]">
            <div className="flex items-start gap-2.5">
              <Sparkles className="h-4 w-4 text-ai-600 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                {details.whatToStudy ? (
                  <>
                    <p className="text-sm font-semibold text-navy">{details.whatToStudy}</p>
                    <p className="text-[11px] text-ink-muted mt-0.5">Recommended based on your competency assessment.</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-ink-muted italic">Will be generated automatically after your competency assessment.</p>
                    <p className="text-[11px] text-ink-muted mt-0.5">Complete the assessment to generate your personalized study recommendation.</p>
                  </>
                )}
              </div>
              <span className="badge-ai text-[10px] px-2 py-0.5 shrink-0">
                <Sparkles className="h-2.5 w-2.5" />
                AI Generated
              </span>
            </div>
          </div>
        </div>

        <button type="submit" className="btn-brand w-full mt-2">
          Start Assessment
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

function QuizStep() {
  const { currentQuestion, goToQuestion, setAnswer, answers, finishQuiz, closeAssessment } = useAssessment();
  const total = assessmentQuestions.length;
  const q = assessmentQuestions[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / total) * 100);
  const selected = answers[currentQuestion];

  const isLast = currentQuestion === total - 1;
  const allAnswered = answers.filter((a) => a !== -1 && a !== undefined).length === total;

  return (
    <div>
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-ink-muted">
            Question {currentQuestion + 1} of {total}
          </span>
          <span className="text-xs font-bold text-navy">{progress}% Complete</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-bg overflow-hidden">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-5">
        <span className="badge-navy mb-3">{q.topic}</span>
        <h3 className="text-base sm:text-lg font-bold text-navy leading-snug">{q.question}</h3>
      </div>

      {/* Options */}
      <div className="space-y-2.5 mb-6">
        {q.options.map((opt, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => setAnswer(currentQuestion, idx)}
              className={`w-full text-left rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 flex items-center gap-3 ${
                isSelected
                  ? 'border-brand-500 bg-brand-50 text-navy ring-1 ring-brand-500/20'
                  : 'border-border bg-white text-navy hover:border-brand-300 hover:bg-bg'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors ${
                  isSelected ? 'border-brand-500 bg-brand-500 text-white' : 'border-border text-ink-muted'
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{opt}</span>
              {isSelected && <CheckCircle className="h-4 w-4 text-brand-600 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Nav buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => (currentQuestion > 0 ? goToQuestion(currentQuestion - 1) : closeAssessment())}
          className="btn-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          {currentQuestion > 0 ? 'Previous' : 'Close'}
        </button>

        {isLast ? (
          <button
            onClick={finishQuiz}
            disabled={!allAnswered && selected === -1}
            className="btn-brand"
          >
            View Results
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => goToQuestion(currentQuestion + 1)}
            disabled={selected === -1 || selected === undefined}
            className="btn-brand"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Question dots */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
        {assessmentQuestions.map((_, idx) => {
          const answered = answers[idx] !== -1 && answers[idx] !== undefined;
          const isCurrent = idx === currentQuestion;
          return (
            <button
              key={idx}
              onClick={() => goToQuestion(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                isCurrent
                  ? 'bg-brand-600 w-6'
                  : answered
                    ? 'bg-brand-300'
                    : 'bg-border'
              }`}
              aria-label={`Go to question ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProcessingStep() {
  const messages = [
    'Analyzing your competency profile…',
    'Identifying key skill gaps…',
    'Generating your personalized study recommendation…',
  ];
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx((i) => Math.min(i + 1, messages.length - 1));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-ai-50 border border-ai-200">
          <Sparkles className="h-9 w-9 text-ai-600 animate-pulse-soft" />
        </div>
        <Loader2 className="absolute -bottom-1 -right-1 h-7 w-7 text-brand-600 animate-spin" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">Analyzing your competency profile…</h3>
      <div className="space-y-1.5">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm transition-all duration-300 ${
              i <= msgIdx ? 'text-navy font-medium' : 'text-ink-muted/40'
            }`}
          >
            {i <= msgIdx && '✓ '}
            {m}
          </p>
        ))}
      </div>
    </div>
  );
}

function ResultsStep() {
  const { result, resetAssessment, closeAssessment } = useAssessment();

  if (!result) return null;

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-success-50 border border-success-100 mb-3">
          <CheckCircle className="h-8 w-8 text-success-600" />
        </div>
        <h2 className="text-xl font-bold text-navy mb-1">Assessment Complete</h2>
        <p className="text-sm text-ink-muted">Here's your personalized competency analysis.</p>
      </div>

      {/* Score */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="rounded-xl border border-border bg-bg p-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 mx-auto mb-2">
            <Gauge className="h-5 w-5" />
          </div>
          <p className="text-2xl font-extrabold text-navy tabular-nums">{result.overallScore}%</p>
          <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wide">Competency Score</p>
        </div>
        <div className="rounded-xl border border-border bg-bg p-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron-50 text-saffron-600 mx-auto mb-2">
            <Target className="h-5 w-5" />
          </div>
          <p className="text-sm font-bold text-navy leading-tight">{result.priorityGap}</p>
          <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wide mt-1">Priority Gap</p>
        </div>
        <div className="rounded-xl border border-border bg-ai-50/50 p-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ai-100 text-ai-700 mx-auto mb-2">
            <BookOpen className="h-5 w-5" />
          </div>
          <p className="text-xs font-bold text-navy leading-tight">{result.whatToStudyShort}</p>
          <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wide mt-1">What to Study</p>
        </div>
      </div>

      {/* Topic breakdown */}
      <div className="rounded-xl border border-border bg-white p-4 mb-5">
        <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-3">Topic Breakdown</p>
        <div className="space-y-2.5">
          {result.topicScores.map((ts) => {
            const level =
              ts.percentage >= 75 ? 'Advanced' : ts.percentage >= 60 ? 'Proficient' : ts.percentage >= 45 ? 'Intermediate' : 'Development Priority';
            const color = proficiencyColor(level as any);
            return (
              <div key={ts.topic} className="flex items-center gap-3">
                <span className="text-xs font-medium text-navy w-32 sm:w-40 truncate">{ts.topic}</span>
                <div className="flex-1 h-1.5 rounded-full bg-bg overflow-hidden">
                  <div className={`h-full rounded-full ${color.bar} transition-all duration-700`} style={{ width: `${ts.percentage}%` }} />
                </div>
                <span className="text-xs font-bold text-navy w-9 text-right tabular-nums">{ts.percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl bg-gradient-to-br from-navy to-navy-700 p-5 text-white mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Route className="h-4 w-4 text-ai-300" />
          <span className="text-xs font-semibold text-ai-200 uppercase tracking-wide">Recommended Next Step</span>
        </div>
        <p className="text-sm font-medium mb-4">Explore your personalized learning pathway.</p>
        <a
          href="#learning-paths"
          onClick={closeAssessment}
          className="btn bg-white text-navy px-5 py-2.5 text-sm font-semibold hover:bg-bg active:scale-[0.98] transition-all"
        >
          View My Learning Path
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="flex gap-3">
        <button onClick={resetAssessment} className="btn-secondary flex-1">
          Retake Assessment
        </button>
        <button onClick={closeAssessment} className="btn-ghost flex-1">
          Close
        </button>
      </div>
    </div>
  );
}

export default function AssessmentModal() {
  const { isOpen, step, closeAssessment } = useAssessment();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAssessment();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeAssessment]);

  if (!isOpen) return null;

  const stepLabels: Record<string, string> = {
    details: 'Step 1 — Your Details',
    quiz: 'Step 2 — Competency Assessment',
    processing: 'Processing',
    results: 'Step 3 — Your Results',
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm animate-fade-in" onClick={closeAssessment} />

      <div className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-elevated animate-slide-up sm:animate-scale-in no-scrollbar">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/95 backdrop-blur-sm px-5 py-3.5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-600">{stepLabels[step]}</p>
            <p className="text-sm font-bold text-navy">StatSaksham AI Assessment</p>
          </div>
          <button
            onClick={closeAssessment}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-navy hover:bg-bg transition-colors"
            aria-label="Close assessment"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {step === 'details' && <DetailsStep />}
          {step === 'quiz' && <QuizStep />}
          {step === 'processing' && <ProcessingStep />}
          {step === 'results' && <ResultsStep />}
        </div>
      </div>
    </div>
  );
}
