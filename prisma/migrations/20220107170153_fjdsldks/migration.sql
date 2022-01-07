-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "commentId" TEXT,
    "questionId" TEXT
);
