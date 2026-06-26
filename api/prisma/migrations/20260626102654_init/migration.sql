-- CreateTable
CREATE TABLE "Tutor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "initials" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "experienceYears" INTEGER NOT NULL,
    "totalStudents" INTEGER NOT NULL,
    "overallScore" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_email_key" ON "Tutor"("email");
