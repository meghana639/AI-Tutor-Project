import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const getAllTutors = async () => {
  return await prisma.tutor.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

export const getTutorById = async (id: string) => {
  return await prisma.tutor.findUnique({
    where: {
      id,
    },
  });
};