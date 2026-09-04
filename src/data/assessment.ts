export interface AssessmentQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    topic: 'Statistical Methodology',
    question: 'Which measure of central tendency is most robust to outliers?',
    options: ['Mean', 'Median', 'Mode', 'Range'],
    correctIndex: 1,
    explanation: 'The median is resistant to outliers because it depends on the middle value(s) rather than the magnitude of all values.',
  },
  {
    id: 2,
    topic: 'Survey Methodology',
    question: 'What is the primary purpose of stratified sampling?',
    options: [
      'Eliminate all sampling errors',
      'Divide a population into homogeneous subgroups before sampling',
      'Collect information from the entire population',
      'Select observations without a sampling framework',
    ],
    correctIndex: 1,
    explanation: 'Stratified sampling divides a population into relatively homogeneous strata and samples observations from each stratum to improve precision.',
  },
  {
    id: 3,
    topic: 'Python / Statistical Computing',
    question: 'In Python, which library is most commonly used for data manipulation and analysis?',
    options: ['Matplotlib', 'Pandas', 'Requests', 'Flask'],
    correctIndex: 1,
    explanation: 'Pandas provides data structures like DataFrames that are fundamental for data manipulation and analysis in Python.',
  },
  {
    id: 4,
    topic: 'Data Visualization',
    question: 'Which chart type is best suited for showing the distribution of a single continuous variable?',
    options: ['Pie chart', 'Bar chart', 'Histogram', 'Treemap'],
    correctIndex: 2,
    explanation: 'A histogram groups continuous data into bins and shows frequency distribution, making it ideal for a single continuous variable.',
  },
  {
    id: 5,
    topic: 'Data Governance',
    question: 'Which principle ensures that personal data is collected only for specified, explicit purposes?',
    options: [
      'Data minimization',
      'Purpose limitation',
      'Storage limitation',
      'Accuracy',
    ],
    correctIndex: 1,
    explanation: 'Purpose limitation requires that personal data is collected for specified, explicit and legitimate purposes and not further processed incompatibly.',
  },
  {
    id: 6,
    topic: 'Data Quality',
    question: 'What does "completeness" refer to in the context of data quality?',
    options: [
      'Data is free from errors',
      'All required data values are present',
      'Data is up to date',
      'Data follows a standard format',
    ],
    correctIndex: 1,
    explanation: 'Completeness measures whether all required data values are present — no missing fields or records.',
  },
  {
    id: 7,
    topic: 'Official Statistics',
    question: 'Which organization coordinates the Indian Statistical System?',
    options: [
      'NITI Aayog',
      'Ministry of Statistics and Programme Implementation (MoSPI)',
      'Reserve Bank of India',
      'Election Commission',
    ],
    correctIndex: 1,
    explanation: 'MoSPI is the nodal agency for the Indian Statistical System, coordinating statistical activities across the government.',
  },
  {
    id: 8,
    topic: 'Statistical Methodology',
    question: 'A p-value less than 0.05 typically indicates:',
    options: [
      'The null hypothesis is definitely true',
      'The result is practically significant',
      'Strong evidence against the null hypothesis',
      'The sample size is too small',
    ],
    correctIndex: 2,
    explanation: 'A p-value below the chosen significance level (commonly 0.05) provides evidence to reject the null hypothesis, but does not guarantee practical significance.',
  },
  {
    id: 9,
    topic: 'Python / Statistical Computing',
    question: 'What does the NumPy function np.array() create?',
    options: [
      'A Python list',
      'A dictionary',
      'An n-dimensional array',
      'A Pandas DataFrame',
    ],
    correctIndex: 2,
    explanation: 'np.array() creates an n-dimensional array (ndarray), the core data structure in NumPy for efficient numerical computation.',
  },
  {
    id: 10,
    topic: 'Survey Methodology',
    question: 'What is "non-response bias" in survey research?',
    options: [
      'When respondents give incorrect answers',
      'When those who do not respond differ systematically from those who do',
      'When the sample size is too large',
      'When questions are worded neutrally',
    ],
    correctIndex: 1,
    explanation: 'Non-response bias occurs when individuals who do not participate in a survey differ meaningfully from those who do, potentially skewing results.',
  },
];

export interface TopicScore {
  topic: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface AssessmentResult {
  overallScore: number;
  topicScores: TopicScore[];
  priorityGap: string;
  whatToStudy: string;
  whatToStudyShort: string;
}

export function computeAssessmentResult(answers: number[]): AssessmentResult {
  const topicMap = new Map<string, { correct: number; total: number }>();

  answers.forEach((selectedIdx, qIdx) => {
    const q = assessmentQuestions[qIdx];
    if (!q) return;
    const entry = topicMap.get(q.topic) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (selectedIdx === q.correctIndex) entry.correct += 1;
    topicMap.set(q.topic, entry);
  });

  const topicScores: TopicScore[] = Array.from(topicMap.entries()).map(([topic, v]) => ({
    topic,
    correct: v.correct,
    total: v.total,
    percentage: Math.round((v.correct / v.total) * 100),
  }));

  const totalCorrect = topicScores.reduce((s, t) => s + t.correct, 0);
  const overallScore = Math.round((totalCorrect / assessmentQuestions.length) * 100);

  const sorted = [...topicScores].sort((a, b) => a.percentage - b.percentage);
  const lowest = sorted[0];
  const secondLowest = sorted[1];

  const priorityGap = lowest?.topic ?? 'Python for Statistics';

  let whatToStudy = '';
  let whatToStudyShort = '';

  const isLow = (t: TopicScore | undefined) => t && t.percentage <= 50;

  if (isLow(lowest) && lowest?.topic.includes('Python')) {
    if (secondLowest && secondLowest.topic.includes('Visualization')) {
      whatToStudy = 'Python for Statistical Analysis & Data Visualization';
      whatToStudyShort = 'Python for Statistical Analysis & Data Visualization';
    } else if (secondLowest && secondLowest.topic.includes('Governance')) {
      whatToStudy = 'Python for Data Analysis & Data Governance Fundamentals';
      whatToStudyShort = 'Python for Data Analysis & Data Governance';
    } else {
      whatToStudy = 'Python for Statistical Analysis & Data Visualization';
      whatToStudyShort = 'Python for Statistical Analysis & Data Visualization';
    }
  } else if (isLow(lowest) && lowest?.topic.includes('Governance')) {
    whatToStudy = 'Data Governance & Quality Management';
    whatToStudyShort = 'Data Governance & Quality Management';
  } else if (isLow(lowest) && lowest?.topic.includes('Survey')) {
    whatToStudy = 'Survey Design & Sampling Methodology';
    whatToStudyShort = 'Survey Design & Sampling Methodology';
  } else if (isLow(lowest) && lowest?.topic.includes('Visualization')) {
    whatToStudy = 'Data Visualization for Statistical Communication';
    whatToStudyShort = 'Data Visualization for Statistical Communication';
  } else if (isLow(lowest) && lowest?.topic.includes('Methodology')) {
    whatToStudy = 'Statistical Methodology & Inference Fundamentals';
    whatToStudyShort = 'Statistical Methodology & Inference';
  } else {
    whatToStudy = 'Python for Statistical Analysis & Data Visualization';
    whatToStudyShort = 'Python for Statistical Analysis & Data Visualization';
  }

  return {
    overallScore,
    topicScores,
    priorityGap,
    whatToStudy,
    whatToStudyShort,
  };
}
