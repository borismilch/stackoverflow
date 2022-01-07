/*
  Warnings:

  - You are about to drop the column `votes` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `Comment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "creatorId" TEXT NOT NULL,
    "watched" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Question" ("body", "createdAt", "creatorId", "id", "isClosed", "tags", "title", "watched") SELECT "body", "createdAt", "creatorId", "id", "isClosed", "tags", "title", "watched" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "body" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "creatorId" TEXT,
    "questionId" TEXT NOT NULL
);
INSERT INTO "new_Comment" ("body", "createdAt", "creatorId", "id", "isClosed", "questionId") SELECT "body", "createdAt", "creatorId", "id", "isClosed", "questionId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
