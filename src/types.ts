export interface Evaluation {
  id: string;
  studentName: string;
  studentInitials: string;
  date: string;
  subject: string;
  score: number;
  feedback: string;
  category: 'Calculus' | 'Algebra II' | 'Statistics' | 'Linear Algebra' | 'Physics';
}

export interface MetricScore {
  label: string;
  score: number;
  colorClass?: string;
}

export interface TrendPoint {
  month: string;
  score: number;
}

export interface AIInsight {
  quote?: string;
  highlight?: string;
  type: 'primary' | 'secondary' | 'accent';
}

export interface StrengthOrArea {
  title: string;
  description: string;
}

export interface TutorProfile {
  id: string;
  name: string;
  initials: string;
  subject: string;
  rating: number;
  experienceYears: number;
  totalStudents: number;
  overallScore: number;
  performanceLabel: string;
  rankText: string;
  trendDelta: string;
  metrics: {
    subjectKnowledge: number;
    communication: number;
    engagement: number;
    confidence: number;
  };
  trend: TrendPoint[];
  evaluations: Evaluation[];
  aiInsights: {
    mainQuote: string;
    retentionStat: string;
  };
  strengths: StrengthOrArea[];
  improvements: StrengthOrArea[];
  email: string;
  bio: string;
}

export type NavTab = 'dashboard' | 'evaluations' | 'students' | 'resources' | 'settings';
export type TermOption = 'Spring 2025' | 'Fall 2024' | 'Summer 2024';
