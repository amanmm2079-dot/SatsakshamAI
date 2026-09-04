export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Competency Assessment', href: '#assessment' },
  { label: 'Learning Paths', href: '#learning-paths' },
  { label: 'AI Quiz Generator', href: '#quiz-generator' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'About', href: '#about' },
];

export const impactCards = [
  {
    icon: 'Target',
    title: 'Competency-Driven',
    description: 'Discover development needs using structured assessments.',
  },
  {
    icon: 'Route',
    title: 'Personalized',
    description: 'Recommend learning based on role, proficiency and skill gaps.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Enabled',
    description: 'Generate assessments directly from learning resources.',
  },
  {
    icon: 'BarChart3',
    title: 'Data-Informed',
    description: 'Measure learning progress and competency improvement.',
  },
];

export const problemCards = [
  {
    icon: 'EyeOff',
    title: 'Hidden Competency Gaps',
    description: 'Without structured assessment, individual skill deficiencies remain invisible until they impact work quality.',
  },
  {
    icon: 'Unlink',
    title: 'Fragmented Learning Discovery',
    description: 'Finding relevant, role-appropriate learning resources across systems is time-consuming and inconsistent.',
  },
  {
    icon: 'Copy',
    title: 'Generic Learning Paths',
    description: 'One-size-fits-all training ignores individual competency levels, learning history and role-specific needs.',
  },
  {
    icon: 'FileEdit',
    title: 'Manual Assessment Creation',
    description: 'Building assessments by hand is slow, inconsistent and difficult to scale across large organizations.',
  },
  {
    icon: 'TrendingDown',
    title: 'Limited Progress Visibility',
    description: 'Organizations lack clear visibility into whether training actually improves workforce competencies over time.',
  },
];

export const journeySteps = [
  {
    step: 'Assess',
    icon: 'ClipboardCheck',
    description: 'Complete role-specific competency assessments.',
  },
  {
    step: 'Identify',
    icon: 'Search',
    description: 'AI highlights priority competency gaps.',
  },
  {
    step: 'Recommend',
    icon: 'Lightbulb',
    description: 'Receive personalized learning recommendations.',
  },
  {
    step: 'Learn',
    icon: 'BookOpen',
    description: 'Follow a learning pathway aligned with individual needs.',
  },
  {
    step: 'Evaluate',
    icon: 'CheckCircle',
    description: 'Measure understanding through targeted assessments.',
  },
  {
    step: 'Improve',
    icon: 'TrendingUp',
    description: 'Update the competency profile and continuously refine recommendations.',
  },
];

export const learningPathSteps = [
  {
    title: 'Priority Gap',
    subtitle: 'Advanced Data Analysis',
    type: 'gap',
  },
  {
    title: 'Python for Data Analysis',
    subtitle: '92% Skill Match',
    type: 'course',
  },
  {
    title: 'Statistical Computing',
    subtitle: 'Core Skill Module',
    type: 'course',
  },
  {
    title: 'Data Visualization',
    subtitle: 'Core Skill Module',
    type: 'course',
  },
  {
    title: 'Applied Statistical Analysis',
    subtitle: 'Capstone Module',
    type: 'course',
  },
];

export const igotFlow = [
  { label: 'Learner Profile', icon: 'User' },
  { label: 'Competency Gap', icon: 'AlertCircle' },
  { label: 'AI Recommendation Engine', icon: 'Cpu' },
  { label: 'Relevant iGOT Learning Opportunities', icon: 'GraduationCap' },
  { label: 'Assessment', icon: 'ClipboardCheck' },
  { label: 'Updated Competency Profile', icon: 'RefreshCw' },
];

export const igotCapabilities = [
  'Competency-to-course mapping',
  'Personalized course discovery',
  'Role-specific recommendations',
  'Learning progress synchronization where authorized APIs support it',
  'Continuous recommendation refinement',
];

export const quizSampleQuestion = {
  question: 'What is the primary purpose of stratified sampling?',
  options: [
    'Eliminate all sampling errors',
    'Divide a population into homogeneous subgroups before sampling',
    'Collect information from the entire population',
    'Select observations without a sampling framework',
  ],
  correctIndex: 1,
  explanation:
    'Stratified sampling divides a population into relatively homogeneous strata and samples observations from each stratum.',
};

export const assistantPrompts = [
  'Explain sampling error in simple terms.',
  'Summarize this chapter.',
  'Give me five questions about regression.',
  'Why was my previous answer incorrect?',
];

export const assistantConversation = [
  {
    role: 'user' as const,
    text: 'Explain sampling error in simple terms.',
  },
  {
    role: 'assistant' as const,
    text: 'Sampling error is the difference between a sample statistic and the true population value it estimates. It occurs because a sample is only a portion of the population. Larger, well-designed samples generally produce smaller sampling errors.',
    source: 'Source: Survey Methodology — Chapter 3, Section 3.2',
  },
];

export const learnerDashboardStats = [
  { label: 'Competency Score', value: 74, suffix: '%', icon: 'Gauge' },
  { label: 'Courses Completed', value: 12, suffix: '', icon: 'BookOpen' },
  { label: 'Active Learning Paths', value: 3, suffix: '', icon: 'Route' },
  { label: 'Assessments Completed', value: 18, suffix: '', icon: 'ClipboardCheck' },
  { label: 'Priority Skill Gaps', value: 4, suffix: '', icon: 'AlertCircle' },
];

export const learnerDashboardSections = [
  { label: 'Competency Map', icon: 'LayoutGrid' },
  { label: 'Recommended for You', icon: 'Sparkles' },
  { label: 'Continue Learning', icon: 'PlayCircle' },
  { label: 'Recent Assessments', icon: 'FileBarChart' },
  { label: 'Achievements & Certifications', icon: 'Award' },
];

export const adminAnalyticsCards = [
  { label: 'Skill Gap Heatmap', icon: 'Grid3x3' },
  { label: 'Department Competency Overview', icon: 'Building2' },
  { label: 'Learning Participation', icon: 'Users' },
  { label: 'Assessment Performance', icon: 'FileBarChart' },
  { label: 'Competency Improvement', icon: 'TrendingUp' },
  { label: 'Priority Training Areas', icon: 'Target' },
];

export const adminDepartments = [
  { name: 'Sampling & Survey', avg: 72, gap: 3 },
  { name: 'Data Processing', avg: 65, gap: 5 },
  { name: 'National Accounts', avg: 78, gap: 2 },
  { name: 'Data Dissemination', avg: 59, gap: 6 },
  { name: 'IT & Systems', avg: 81, gap: 2 },
  { name: 'Quality Assurance', avg: 68, gap: 4 },
];

export const adminInsight =
  'Data Visualization is a priority development area for 37% of assessed personnel.';

export const userRoles = [
  {
    role: 'Learner',
    icon: 'GraduationCap',
    description:
      'Understand your competencies, discover relevant learning and track development.',
  },
  {
    role: 'Trainer / Subject Matter Expert',
    icon: 'Presentation',
    description:
      'Upload resources, review AI-generated assessments and manage question banks.',
  },
  {
    role: 'Department Administrator',
    icon: 'Building2',
    description:
      'Monitor competency patterns, learning progress and organizational development priorities.',
  },
  {
    role: 'Capacity-Building Leadership',
    icon: 'Crown',
    description:
      'Use aggregated insights to support evidence-based workforce development.',
  },
];

export const responsibleAiPillars = [
  { icon: 'UserCheck', title: 'Human review of AI-generated assessments', description: 'All AI-generated content is reviewed by authorized trainers before formal use.' },
  { icon: 'FileSearch', title: 'Source-grounded content generation', description: 'Assessments are generated from approved learning material, not fabricated.' },
  { icon: 'Lightbulb', title: 'Explainable learning recommendations', description: 'Every recommendation is tied to identified competency gaps and assessment results.' },
  { icon: 'ShieldCheck', title: 'Role-based access', description: 'Access to data and features is controlled by organizational role.' },
  { icon: 'Lock', title: 'Secure document processing', description: 'Uploaded learning materials are processed securely and not retained unnecessarily.' },
  { icon: 'Minimize2', title: 'Data minimization', description: 'Only data necessary for competency assessment and learning is collected.' },
  { icon: 'ClipboardList', title: 'Auditability', description: 'Assessment and recommendation actions are logged for review and accountability.' },
  { icon: 'Scale', title: 'Quality and bias monitoring', description: 'AI outputs are monitored for quality, fairness and potential bias.' },
];

export const comparisonTraditional = [
  'Generic Training',
  'Course Completion',
  'Limited Feedback',
];

export const comparisonStatSaksham = [
  'Competency Assessment',
  'Gap Detection',
  'Personalized Learning',
  'Targeted Assessment',
  'Progress Measurement',
  'Continuous Improvement',
];

export const impactCardsData = [
  {
    icon: 'User',
    title: 'For Learners',
    description: 'Relevant learning, clear priorities and measurable development.',
  },
  {
    icon: 'Presentation',
    title: 'For Trainers',
    description: 'Faster assessment creation and better visibility into learning performance.',
  },
  {
    icon: 'Building2',
    title: 'For Departments',
    description: 'Greater visibility into workforce competencies and training priorities.',
  },
  {
    icon: 'Landmark',
    title: 'For the Official Statistical System',
    description: 'A scalable approach to continuous, competency-driven capacity building.',
  },
];
