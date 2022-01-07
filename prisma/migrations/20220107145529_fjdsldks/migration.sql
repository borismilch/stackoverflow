/*
  Warnings:

  - You are about to drop the column `questionIs` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `questionId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "body" TEXT NOT NULL,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "creatorId" TEXT,
    "questionId" TEXT NOT NULL
);
INSERT INTO "new_Comment" ("body", "createdAt", "creatorId", "id", "isClosed", "votes") SELECT "body", "createdAt", "creatorId", "id", "isClosed", "votes" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
