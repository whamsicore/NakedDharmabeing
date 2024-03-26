/*
  Warnings:

  - You are about to drop the column `Accounts` on the `DAOs` table. All the data in the column will be lost.
  - You are about to drop the column `Canvas` on the `DAOs` table. All the data in the column will be lost.
  - You are about to drop the column `Energy` on the `DAOs` table. All the data in the column will be lost.
  - You are about to drop the column `Treasury` on the `DAOs` table. All the data in the column will be lost.
  - Added the required column `energy` to the `DAOs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treasury` to the `DAOs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DAOs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "energy" INTEGER NOT NULL,
    "treasury" INTEGER NOT NULL,
    "accounts" TEXT,
    "canvas" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "parentId" INTEGER,
    CONSTRAINT "DAOs_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "DAOs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_DAOs" ("createdAt", "description", "id", "name", "parentId", "updatedAt") SELECT "createdAt", "description", "id", "name", "parentId", "updatedAt" FROM "DAOs";
DROP TABLE "DAOs";
ALTER TABLE "new_DAOs" RENAME TO "DAOs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
