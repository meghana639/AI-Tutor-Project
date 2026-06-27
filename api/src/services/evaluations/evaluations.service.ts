import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const getAllEvaluations = async () => {
  return await prisma.evaluation.findMany({
    include: {
      tutor: true,
    },
    orderBy: {
      overallScore: "desc",
    },
  });
};

export const getEvaluationById = async (id: string) => {
  return await prisma.evaluation.findUnique({
    where: {
      id,
    },
    include: {
      tutor: true,
    },
  });
};

export const createEvaluation = async (data: any) => {
  return await prisma.evaluation.create({
    data,
  });
};