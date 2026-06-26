import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (children first because of foreign keys)
  await prisma.aISummary.deleteMany();
  await prisma.studentFeedback.deleteMany();
  await prisma.performanceHistory.deleteMany();
  await prisma.evaluation.deleteMany();
  await prisma.tutor.deleteMany();

  // Seed tutors
  await prisma.tutor.createMany({
    data: [
      {
        name: "Sarah Mitchell",
        initials: "SM",
        subject: "Advanced Mathematics",
        rating: 4.9,
        experienceYears: 8,
        totalStudents: 245,
        overallScore: 94,
        email: "sarah.mitchell@tutormetrics.com",
        bio: "Experienced mathematics tutor specializing in algebra, calculus, and statistics."
      },
      {
        name: "David Kim",
        initials: "DK",
        subject: "Organic Chemistry & Biology",
        rating: 4.8,
        experienceYears: 5,
        totalStudents: 118,
        overallScore: 84,
        email: "david.kim@tutormetrics.com",
        bio: "Senior chemistry and biology tutor."
      },
      {
        name: "Emma Wilson",
        initials: "EW",
        subject: "Computer Science",
        rating: 4.9,
        experienceYears: 6,
        totalStudents: 210,
        overallScore: 91,
        email: "emma.wilson@tutormetrics.com",
        bio: "Passionate software engineering and AI instructor."
      },
      {
        name: "Michael Brown",
        initials: "MB",
        subject: "Physics",
        rating: 4.7,
        experienceYears: 7,
        totalStudents: 176,
        overallScore: 89,
        email: "michael.brown@tutormetrics.com",
        bio: "Expert in mechanics, thermodynamics, and electromagnetism."
      },
      {
        name: "Olivia Johnson",
        initials: "OJ",
        subject: "English Literature",
        rating: 4.8,
        experienceYears: 9,
        totalStudents: 260,
        overallScore: 93,
        email: "olivia.johnson@tutormetrics.com",
        bio: "Specialist in academic writing and English literature."
      }
    ]
  });

  console.log("✅ Tutors seeded successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });