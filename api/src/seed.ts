import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.tutor.create({
    data: {
      name: "David Kim",
      initials: "DK",
      subject: "Organic Chemistry & Biology",
      rating: 4.8,
      experienceYears: 5,
      totalStudents: 118,
      overallScore: 84,
      email: "david.kim@tutormetrics.com",
      bio: "Senior chemistry and biology tutor."
    }
  });

  console.log("Tutor added successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });