import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const getDashboardData = async (tutorId: string) => {
  // Fetch tutor
  const tutor = await prisma.tutor.findUnique({
    where: {
      id: tutorId,
    },
  });

  if (!tutor) {
    return null;
  }

  // Fetch latest evaluation
  const latestEvaluation = await prisma.evaluation.findFirst({
    where: {
      tutorId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Fetch recent evaluations
  const recentEvaluations = await prisma.evaluation.findMany({
    where: {
      tutorId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return {
    id: tutor.id,
    name: tutor.name,
    initials: tutor.initials,
    subject: tutor.subject,
    rating: tutor.rating,
    experienceYears: tutor.experienceYears,
    totalStudents: tutor.totalStudents,

    overallScore: latestEvaluation?.overallScore ?? tutor.overallScore,

    performanceLabel: "Great",
    rankText: "Top 15% among all tutors this term",
    trendDelta: "+6",

    metrics: {
      subjectKnowledge: latestEvaluation?.subjectKnowledge ?? 0,
      communication: latestEvaluation?.communication ?? 0,
      engagement: latestEvaluation?.studentEngagement ?? 0,
      confidence: latestEvaluation?.confidence ?? 0,
      conceptClarity: latestEvaluation?.conceptClarity ?? 0,
    },

    trend: [],

    evaluations: recentEvaluations,

    aiInsights: {
      mainQuote: "",
      retentionStat: "",
    },

    strengths: [],

    improvements: [],

    email: tutor.email,
    bio: tutor.bio,
  };
};