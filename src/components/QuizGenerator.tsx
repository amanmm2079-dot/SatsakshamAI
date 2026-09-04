import { useCallback, useRef, useState } from 'react';
import {
  UploadCloud,
  FileText,
  X,
  Sparkles,
  Loader2,
  RefreshCw,
  Pencil,
  Save,
  CheckCircle,
  FileQuestion,
  Settings2,
} from 'lucide-react';
import { quizSampleQuestion } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'loading' | 'done';
type QType = 'MCQ' | 'Quiz';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type NumQ = '5' | '10' | '20' | 'Custom';
type Topic = 'Entire Document' | 'Selected Topic';

const acceptedTypes = '.pdf,.docx,.pptx,.txt';

export default function QuizGenerator() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [qType, setQType] = useState<QType>('MCQ');
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const [numQ, setNumQ] = useState<NumQ>('10');
  const [topic, setTopic] = useState<Topic>('Entire Document');
  const [status, setStatus] = useState<Status>('idle');
  const [loadingMsg, setLoadingMsg] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadingMessages = [
    'Analyzing learning material…',
    'Identifying key concepts…',
    'Generating assessment…',
  ];

  const handleFile = useCallback((file: File) => {
    const validExt = /\.(pdf|docx|pptx|txt)$/i;
    if (!validExt.test(file.name)) return;
    setFileName(file.name);
    const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
    setFileSize(`${sizeMB} MB`);
    setStatus('idle');
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleGenerate = () => {
    if (!fileName) return;
    setStatus('loading');
    setLoadingMsg(0);
    const interval = setInterval(() => {
      setLoadingMsg((i) => {
        if (i >= loadingMessages.length - 1) {
          clearInterval(interval);
          setTimeout(() => setStatus('done'), 500);
          return i;
        }
        return i + 1;
      });
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setFileName(null);
    setFileSize('');
  };

  return (
    <section id="quiz-generator" className="section-py">
      <div className="container-mw container-px">
        <div ref={ref} className={`max-w-2xl mb-10 sm:mb-14 animate-on-scroll ${visible ? 'is-visible' : ''}`}>
          <p className="section-eyebrow mb-3">AI Quiz Generator</p>
          <h2 className="section-title mb-4">Turn Learning Material into Assessments in Seconds.</h2>
          <p className="section-desc">
            Upload PDF, DOCX, PPTX or TXT files. Choose your format, difficulty and topic — StatSaksham AI generates
            targeted assessments from the content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left: Upload + Controls */}
          <div className="space-y-4">
            {/* Uploader */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition-all duration-200 ${
                isDragging
                  ? 'border-brand-500 bg-brand-50/50 scale-[1.01]'
                  : 'border-border bg-surface hover:border-brand-300'
              }`}
            >
              {fileName ? (
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-4 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-400 shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-ink truncate">{fileName}</p>
                    <p className="text-xs text-ink-muted">{fileSize} • Ready to generate</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-ink-muted hover:bg-surface hover:text-error-500 transition-colors shrink-0"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => inputRef.current?.click()}
                  className="flex flex-col items-center gap-3 w-full"
                  aria-label="Upload file"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-400">
                    <UploadCloud className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">Drag & drop or click to upload</p>
                    <p className="text-xs text-ink-muted mt-1">Supports PDF, DOCX, PPTX, TXT</p>
                  </div>
                </button>
              )}
              <input
                ref={inputRef}
                type="file"
                accept={acceptedTypes}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </div>

            {/* Controls */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Settings2 className="h-4 w-4 text-brand-400" />
                <p className="text-xs font-bold text-ink uppercase tracking-wide">Assessment Settings</p>
              </div>

              <div className="space-y-4">
                {/* Question type */}
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">Question Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['MCQ', 'Quiz'] as QType[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setQType(t)}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                          qType === t
                            ? 'border-brand-500 bg-brand-50 text-brand-300 ring-1 ring-brand-500/20'
                            : 'border-border bg-surface text-ink-muted hover:border-brand-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">Difficulty</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((d) => (
                      <button
                        key={d}
                        onClick={() => setDifficulty(d)}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                          difficulty === d
                            ? 'border-brand-500 bg-brand-50 text-brand-300 ring-1 ring-brand-500/20'
                            : 'border-border bg-surface text-ink-muted hover:border-brand-300'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of questions */}
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">Number of Questions</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['5', '10', '20', 'Custom'] as NumQ[]).map((n) => (
                      <button
                        key={n}
                        onClick={() => setNumQ(n)}
                        className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all ${
                          numQ === n
                            ? 'border-brand-500 bg-brand-50 text-brand-300 ring-1 ring-brand-500/20'
                            : 'border-border bg-surface text-ink-muted hover:border-brand-300'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1.5">Topic</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Entire Document', 'Selected Topic'] as Topic[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTopic(t)}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                          topic === t
                            ? 'border-brand-500 bg-brand-50 text-brand-300 ring-1 ring-brand-500/20'
                            : 'border-border bg-surface text-ink-muted hover:border-brand-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!fileName || status === 'loading'}
                className="btn-brand w-full mt-5"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating…
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Assessment
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Output */}
          <div className="card p-5 sm:p-6 min-h-[400px] flex flex-col">
            {status === 'idle' && !fileName && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 text-ink-muted mb-4">
                  <FileQuestion className="h-8 w-8" />
                </div>
                <p className="text-sm font-semibold text-ink mb-1">No assessment yet</p>
                <p className="text-xs text-ink-muted max-w-xs">
                  Upload a learning material file and configure your settings to generate an AI-powered assessment.
                </p>
              </div>
            )}

            {status === 'idle' && fileName && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <p className="text-sm font-semibold text-ink mb-1">Ready to generate</p>
                <p className="text-xs text-ink-muted max-w-xs">
                  Click "Generate Assessment" to create an AI-powered assessment from your uploaded material.
                </p>
              </div>
            )}

            {status === 'loading' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ai-50 border border-ai-200">
                    <Sparkles className="h-8 w-8 text-ai-400 animate-pulse-soft" />
                  </div>
                  <Loader2 className="absolute -bottom-1 -right-1 h-6 w-6 text-brand-400 animate-spin" />
                </div>
                <div className="space-y-2">
                  {loadingMessages.map((m, i) => (
                    <p
                      key={i}
                      className={`text-sm transition-all duration-300 ${
                        i <= loadingMsg ? 'text-ink font-medium' : 'text-ink-muted/40'
                      }`}
                    >
                      {i <= loadingMsg && '✓ '}
                      {m}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {status === 'done' && (
              <div className="flex-1 flex flex-col animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="badge-ai">
                      <Sparkles className="h-3 w-3" />
                      AI Generated
                    </span>
                    <span className="badge-navy">{qType}</span>
                    <span className="badge bg-surface-2 text-ink-muted border border-border">{difficulty}</span>
                  </div>
                </div>

                {/* Question card */}
                <div className="rounded-xl border border-border bg-surface-2 p-4 mb-4">
                  <p className="text-xs font-bold text-ink-muted uppercase tracking-wide mb-2">Question 1</p>
                  <p className="text-sm font-bold text-ink mb-3 leading-snug">{quizSampleQuestion.question}</p>
                  <div className="space-y-2">
                    {quizSampleQuestion.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-xs transition-all ${
                          idx === quizSampleQuestion.correctIndex
                            ? 'border-success-200 bg-success-50 text-ink'
                            : 'border-border bg-surface text-ink-muted'
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                            idx === quizSampleQuestion.correctIndex
                              ? 'bg-success-500 text-white'
                              : 'bg-surface-2 text-ink-muted'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {idx === quizSampleQuestion.correctIndex && (
                          <CheckCircle className="h-4 w-4 text-success-500 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-lg bg-navy/10 border border-navy-100 p-3">
                    <p className="text-[10px] font-bold text-ink uppercase tracking-wide mb-1">Explanation</p>
                    <p className="text-xs text-ink-muted leading-relaxed">{quizSampleQuestion.explanation}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <button onClick={handleGenerate} className="btn-secondary btn-sm">
                    <RefreshCw className="h-3.5 w-3.5" />
                    Regenerate
                  </button>
                  <button className="btn-secondary btn-sm">
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </button>
                  <button className="btn-brand btn-sm">
                    <Save className="h-3.5 w-3.5" />
                    Save to Question Bank
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
