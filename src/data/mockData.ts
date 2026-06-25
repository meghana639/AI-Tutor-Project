import { TutorProfile } from '../types';

export const MOCK_TUTORS: TutorProfile[] = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    initials: 'SM',
    subject: 'Advanced Mathematics',
    rating: 4.9,
    experienceYears: 8,
    totalStudents: 142,
    overallScore: 87,
    performanceLabel: 'Excellent',
    rankText: 'Top 8% among all tutors this term',
    trendDelta: '↑ 4 pts',
    metrics: {
      subjectKnowledge: 92,
      communication: 88,
      engagement: 85,
      confidence: 90
    },
    trend: [
      { month: 'Sep', score: 72 },
      { month: 'Oct', score: 74 },
      { month: 'Nov', score: 76 },
      { month: 'Dec', score: 75 },
      { month: 'Jan', score: 78 },
      { month: 'Feb', score: 82 },
      { month: 'Mar', score: 84 },
      { month: 'Apr', score: 87 }
    ],
    evaluations: [
      {
        id: 'ev-1',
        studentName: 'Arjun K.',
        studentInitials: 'AK',
        date: 'Apr 14',
        subject: 'Calculus',
        score: 94,
        feedback: 'Sarah made multi-variable chain rule completely intuitive. Best tutoring session I have ever had!',
        category: 'Calculus'
      },
      {
        id: 'ev-2',
        studentName: 'Maya L.',
        studentInitials: 'ML',
        date: 'Apr 11',
        subject: 'Algebra II',
        score: 88,
        feedback: 'Great patience explaining conic sections and logarithms. Very encouraging atmosphere.',
        category: 'Algebra II'
      },
      {
        id: 'ev-3',
        studentName: 'Liam Chen',
        studentInitials: 'LC',
        date: 'Apr 08',
        subject: 'Statistics',
        score: 82,
        feedback: 'Very solid review of hypothesis testing. Would love a few more visual charts for p-value distributions.',
        category: 'Statistics'
      },
      {
        id: 'ev-4',
        studentName: 'Sophia R.',
        studentInitials: 'SR',
        date: 'Apr 02',
        subject: 'Linear Algebra',
        score: 96,
        feedback: 'Eigenvalues and eigenvectors clicked immediately thanks to her geometric explanations.',
        category: 'Linear Algebra'
      },
      {
        id: 'ev-5',
        studentName: 'Marcus T.',
        studentInitials: 'MT',
        date: 'Mar 28',
        subject: 'Calculus',
        score: 91,
        feedback: 'Taylor series approximations were explained clearly. Very well-paced lesson.',
        category: 'Calculus'
      }
    ],
    aiInsights: {
      mainQuote: '"Sarah\'s scores show consistent upward momentum over 8 months — steepest improvement in cohort."',
      retentionStat: 'Student retention rate of 94% is 17 pts above platform average.'
    },
    strengths: [
      {
        title: 'Subject Mastery',
        description: 'Deep knowledge of advanced math topics. High student confidence levels.'
      },
      {
        title: 'Confidence Building',
        description: 'Consistently high ratings for session atmosphere and motivation.'
      }
    ],
    improvements: [
      {
        title: 'Concept Clarity',
        description: 'Statistics topics score below average. Recommendation: use more visuals.'
      },
      {
        title: 'Adaptive Pacing',
        description: 'A few students flag speed. Suggestion: add mid-session check-ins.'
      }
    ],
    email: 's.mitchell@tutormetrics.edu',
    bio: 'Senior Mathematics educator specializing in higher-level university calculus, linear algebra, and mathematical statistics.'
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    initials: 'DK',
    subject: 'Organic Chemistry & Biology',
    rating: 4.8,
    experienceYears: 5,
    totalStudents: 118,
    overallScore: 84,
    performanceLabel: 'Great',
    rankText: 'Top 15% among all tutors this term',
    trendDelta: '↑ 6 pts',
    metrics: {
      subjectKnowledge: 90,
      communication: 86,
      engagement: 88,
      confidence: 82
    },
    trend: [
      { month: 'Sep', score: 68 },
      { month: 'Oct', score: 71 },
      { month: 'Nov', score: 75 },
      { month: 'Dec', score: 77 },
      { month: 'Jan', score: 79 },
      { month: 'Feb', score: 81 },
      { month: 'Mar', score: 82 },
      { month: 'Apr', score: 84 }
    ],
    evaluations: [
      {
        id: 'ev-6',
        studentName: 'Chloe D.',
        studentInitials: 'CD',
        date: 'Apr 15',
        subject: 'Physics',
        score: 92,
        feedback: 'Helped me finally understand reaction mechanisms and stereochemistry.',
        category: 'Physics'
      },
      {
        id: 'ev-7',
        studentName: 'Ethan W.',
        studentInitials: 'EW',
        date: 'Apr 12',
        subject: 'Calculus',
        score: 85,
        feedback: 'Good use of 3D molecular drawings.',
        category: 'Calculus'
      }
    ],
    aiInsights: {
      mainQuote: '"David excels at student engagement and interactive problem solving during live lab reviews."',
      retentionStat: 'Active engagement rate of 91% is 12 pts above science department median.'
    },
    strengths: [
      {
        title: 'Interactive Demonstrations',
        description: 'Frequently uses digital whiteboarding to sketch molecular pathways.'
      },
      {
        title: 'Exam Preparation',
        description: 'Students report 22% higher mock exam scores after 4 sessions.'
      }
    ],
    improvements: [
      {
        title: 'Session Summary Notes',
        description: 'Some students request PDF cheat sheets post-meeting.'
      },
      {
        title: 'Time Allocation',
        description: 'Occasionally runs 5-10 minutes over scheduled time slots.'
      }
    ],
    email: 'd.kim@tutormetrics.edu',
    bio: 'Former biochemistry research assistant passionate about making complex organic mechanisms accessible.'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    initials: 'ER',
    subject: 'Computer Science & AI',
    rating: 5.0,
    experienceYears: 6,
    totalStudents: 165,
    overallScore: 94,
    performanceLabel: 'Outstanding',
    rankText: 'Top 2% among all tutors this term',
    trendDelta: '↑ 3 pts',
    metrics: {
      subjectKnowledge: 98,
      communication: 93,
      engagement: 92,
      confidence: 94
    },
    trend: [
      { month: 'Sep', score: 88 },
      { month: 'Oct', score: 89 },
      { month: 'Nov', score: 90 },
      { month: 'Dec', score: 91 },
      { month: 'Jan', score: 92 },
      { month: 'Feb', score: 93 },
      { month: 'Mar', score: 93 },
      { month: 'Apr', score: 94 }
    ],
    evaluations: [
      {
        id: 'ev-8',
        studentName: 'Lucas M.',
        studentInitials: 'LM',
        date: 'Apr 16',
        subject: 'Statistics',
        score: 98,
        feedback: 'Incredible breakdown of dynamic programming and graph algorithms.',
        category: 'Statistics'
      }
    ],
    aiInsights: {
      mainQuote: '"Elena maintains the highest peer-reviewed accuracy rating on algorithm optimization modules."',
      retentionStat: 'Student satisfaction index sits at a pristine 99.4%.'
    },
    strengths: [
      {
        title: 'Code Debugging Speed',
        description: 'Identifies logical bottlenecks and memory leaks almost instantly.'
      },
      {
        title: 'Clear Architecture Diagrams',
        description: 'Breaks down system design interviews into manageable step-by-step components.'
      }
    ],
    improvements: [
      {
        title: 'Advanced Theory Intro',
        description: 'Can jump into abstract time complexity notation quickly for beginners.'
      },
      {
        title: 'Availability',
        description: 'Calendar is frequently booked 3 weeks in advance.'
      }
    ],
    email: 'e.rostova@tutormetrics.edu',
    bio: 'Software architect and competitive programmer mentoring students in algorithms, data structures, and machine learning.'
  }
];

export const STUDENT_ROSTER = [
  { id: 'st-1', name: 'Arjun K.', email: 'arjun.k@university.edu', subject: 'Calculus', grade: 'A', sessions: 14, lastActive: '2 days ago', status: 'Active' },
  { id: 'st-2', name: 'Maya L.', email: 'maya.l@university.edu', subject: 'Algebra II', grade: 'B+', sessions: 9, lastActive: '3 days ago', status: 'Active' },
  { id: 'st-3', name: 'Liam Chen', email: 'liam.chen@university.edu', subject: 'Statistics', grade: 'A-', sessions: 18, lastActive: '1 day ago', status: 'Active' },
  { id: 'st-4', name: 'Sophia R.', email: 'sophia.r@university.edu', subject: 'Linear Algebra', grade: 'A', sessions: 12, lastActive: '5 days ago', status: 'Active' },
  { id: 'st-5', name: 'Marcus T.', email: 'marcus.t@university.edu', subject: 'Calculus', grade: 'B', sessions: 7, lastActive: '1 week ago', status: 'On Leave' },
  { id: 'st-6', name: 'Chloe D.', email: 'chloe.d@university.edu', subject: 'Physics', grade: 'A-', sessions: 11, lastActive: '3 days ago', status: 'Active' },
  { id: 'st-7', name: 'Ethan W.', email: 'ethan.w@university.edu', subject: 'Calculus', grade: 'C+', sessions: 4, lastActive: '2 weeks ago', status: 'Needs Followup' },
  { id: 'st-8', name: 'Lucas M.', email: 'lucas.m@university.edu', subject: 'Algorithms', grade: 'A+', sessions: 22, lastActive: 'Today', status: 'Active' },
];

export const RESOURCE_ITEMS = [
  { id: 'res-1', title: 'Multi-Variable Chain Rule Visualizer', type: 'Interactive Canvas', category: 'Calculus', downloads: 342, updated: 'Apr 10, 2025' },
  { id: 'res-2', title: 'Conic Sections Reference Guide', type: 'PDF Cheat Sheet', category: 'Algebra II', downloads: 819, updated: 'Mar 24, 2025' },
  { id: 'res-3', title: 'Hypothesis Testing & p-Value Distribution Calculator', type: 'Excel Spreadsheet', category: 'Statistics', downloads: 512, updated: 'Apr 02, 2025' },
  { id: 'res-4', title: 'Eigenvector Transformation Sandbox', type: 'Web Tool', category: 'Linear Algebra', downloads: 1240, updated: 'Apr 14, 2025' },
  { id: 'res-5', title: 'Taylor Series Error Bounds Practice Set', type: 'Problem Bank', category: 'Calculus', downloads: 290, updated: 'Feb 18, 2025' },
];
