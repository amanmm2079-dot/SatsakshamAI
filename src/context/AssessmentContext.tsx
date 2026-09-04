import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { assessmentQuestions, computeAssessmentResult } from '@/data/assessment';
import type { AssessmentResult } from '@/data/assessment';

export interface LearnerDetails {
  name: string;
  phone: string;
  email: string;
  whatToStudy: string;
}

export interface AssessmentState {
  isOpen: boolean;
  step: 'details' | 'quiz' | 'processing' | 'results';
  details: LearnerDetails;
  answers: number[];
  currentQuestion: number;
  result: AssessmentResult | null;
}

interface AssessmentContextValue {
  isOpen: boolean;
  step: AssessmentState['step'];
  details: LearnerDetails;
  answers: number[];
  currentQuestion: number;
  result: AssessmentResult | null;
  openAssessment: () => void;
  closeAssessment: () => void;
  setDetails: (d: Partial<LearnerDetails>) => void;
  setAnswer: (qIndex: number, optionIndex: number) => void;
  goToQuestion: (idx: number) => void;
  startQuiz: () => void;
  finishQuiz: () => void;
  resetAssessment: () => void;
}

const STORAGE_KEY = 'statsaksham-assessment-v1';

const defaultDetails: LearnerDetails = {
  name: '',
  phone: '',
  email: '',
  whatToStudy: '',
};

const defaultState: Omit<AssessmentState, 'isOpen'> = {
  step: 'details',
  details: defaultDetails,
  answers: [],
  currentQuestion: 0,
  result: null,
};

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AssessmentState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AssessmentState>;
        return { ...defaultState, ...parsed, isOpen: false };
      }
    } catch {
      // ignore
    }
    return { ...defaultState, isOpen: false };
  });

  useEffect(() => {
    try {
      const { isOpen, ...persistable } = state;
      void isOpen;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
    } catch {
      // ignore
    }
  }, [state]);

  const openAssessment = useCallback(() => {
    setState((s) => ({ ...s, isOpen: true }));
  }, []);

  const closeAssessment = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const setDetails = useCallback((d: Partial<LearnerDetails>) => {
    setState((s) => ({ ...s, details: { ...s.details, ...d } }));
  }, []);

  const setAnswer = useCallback((qIndex: number, optionIndex: number) => {
    setState((s) => {
      const answers = [...s.answers];
      answers[qIndex] = optionIndex;
      return { ...s, answers };
    });
  }, []);

  const goToQuestion = useCallback((idx: number) => {
    setState((s) => ({ ...s, currentQuestion: idx }));
  }, []);

  const startQuiz = useCallback(() => {
    setState((s) => ({
      ...s,
      step: 'quiz',
      currentQuestion: 0,
      answers: s.answers.length === assessmentQuestions.length ? s.answers : new Array(assessmentQuestions.length).fill(-1),
    }));
  }, []);

  const finishQuiz = useCallback(() => {
    setState((s) => {
      const validAnswers = s.answers.map((a) => (a === -1 ? 0 : a));
      const result = computeAssessmentResult(validAnswers);
      return {
        ...s,
        step: 'processing',
        answers: validAnswers,
        result,
        details: { ...s.details, whatToStudy: result.whatToStudy },
      };
    });

    setTimeout(() => {
      setState((s) => ({ ...s, step: 'results' }));
    }, 2800);
  }, []);

  const resetAssessment = useCallback(() => {
    setState({ ...defaultState, isOpen: false });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<AssessmentContextValue>(
    () => ({
      isOpen: state.isOpen,
      step: state.step,
      details: state.details,
      answers: state.answers,
      currentQuestion: state.currentQuestion,
      result: state.result,
      openAssessment,
      closeAssessment,
      setDetails,
      setAnswer,
      goToQuestion,
      startQuiz,
      finishQuiz,
      resetAssessment,
    }),
    [state, openAssessment, closeAssessment, setDetails, setAnswer, goToQuestion, startQuiz, finishQuiz, resetAssessment],
  );

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error('useAssessment must be used within AssessmentProvider');
  return ctx;
}
