export const getDashboardData = () => {
  return {
    id: "1",
    name: "David Kim",
    initials: "DK",
    subject: "Organic Chemistry & Biology",
    rating: 4.8,
    experienceYears: 5,
    totalStudents: 118,

    overallScore: 84,
    performanceLabel: "Great",
    rankText: "Top 15% among all tutors this term",
    trendDelta: "+6",

    metrics: {
      subjectKnowledge: 90,
      communication: 86,
      engagement: 88,
      confidence: 82
    },

    trend: [
      { month: "Sep", score: 67 },
      { month: "Oct", score: 70 },
      { month: "Nov", score: 74 },
      { month: "Dec", score: 76 },
      { month: "Jan", score: 78 },
      { month: "Feb", score: 80 },
      { month: "Mar", score: 81 },
      { month: "Apr", score: 84 }
    ],

    evaluations: [
      {
        id: "1",
        studentName: "Chloe D.",
        studentInitials: "CD",
        date: "Apr 15",
        subject: "Physics",
        score: 92,
        feedback: "Excellent explanation",
        category: "Physics"
      },
      {
        id: "2",
        studentName: "Ethan W.",
        studentInitials: "EW",
        date: "Apr 12",
        subject: "Calculus",
        score: 85,
        feedback: "Good engagement",
        category: "Calculus"
      }
    ],

    aiInsights: {
      mainQuote:
        "David excels at student engagement and interactive problem solving during live lab reviews.",
      retentionStat:
        "Active engagement rate of 91% is 12 pts above science department median."
    },

    strengths: [
      {
        title: "Interactive Demonstrations",
        description:
          "Frequently uses digital whiteboarding to sketch molecular pathways."
      },
      {
        title: "Exam Preparation",
        description:
          "Students report 22% higher mock exam scores after 4 sessions."
      }
    ],

    improvements: [
      {
        title: "Session Summary Notes",
        description:
          "Some students request PDF cheat sheets post-meeting."
      },
      {
        title: "Time Allocation",
        description:
          "Occasionally runs 5-10 minutes over scheduled time slots."
      }
    ],

    email: "david.kim@tutormetrics.com",
    bio: "Senior chemistry and biology tutor."
  };
};