export type ProficiencyLevel = 'Development Priority' | 'Intermediate' | 'Proficient' | 'Advanced';

export interface Competency {
  name: string;
  score: number;
  level: ProficiencyLevel;
  category: string;
}

export const heroCompetencies: Competency[] = [
  { name: 'Statistical Methodology', score: 82, level: 'Advanced', category: 'Methodology' },
  { name: 'Data Visualization', score: 64, level: 'Intermediate', category: 'Technology' },
  { name: 'Python for Statistics', score: 48, level: 'Development Priority', category: 'Technology' },
  { name: 'Survey Methodology', score: 76, level: 'Proficient', category: 'Methodology' },
  { name: 'Data Governance', score: 57, level: 'Development Priority', category: 'Governance' },
];

export const dashboardCompetencies: Competency[] = [
  { name: 'Statistical Methodology', score: 82, level: 'Advanced', category: 'Methodology' },
  { name: 'Data Visualization', score: 64, level: 'Intermediate', category: 'Technology' },
  { name: 'Python for Statistics', score: 48, level: 'Development Priority', category: 'Technology' },
  { name: 'Survey Methodology', score: 76, level: 'Proficient', category: 'Methodology' },
  { name: 'Data Governance', score: 57, level: 'Development Priority', category: 'Governance' },
  { name: 'Data Quality', score: 71, level: 'Proficient', category: 'Governance' },
];

export function proficiencyColor(level: ProficiencyLevel): {
  bar: string;
  badge: string;
  text: string;
} {
  switch (level) {
    case 'Advanced':
      return { bar: 'bg-success-500', badge: 'bg-success-50 text-success-500 border border-success-100', text: 'text-success-500' };
    case 'Proficient':
      return { bar: 'bg-brand-500', badge: 'bg-brand-50 text-brand-300 border border-brand-100', text: 'text-brand-300' };
    case 'Intermediate':
      return { bar: 'bg-ai-500', badge: 'bg-ai-50 text-ai-300 border border-ai-200', text: 'text-ai-300' };
    case 'Development Priority':
      return { bar: 'bg-saffron-500', badge: 'bg-saffron-50 text-saffron-500 border border-saffron-100', text: 'text-saffron-500' };
  }
}
