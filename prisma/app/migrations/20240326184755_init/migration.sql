/*
  Warnings:

  - You are about to drop the `DAOs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DharmaBeings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DAOs";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DharmaBeings";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Dharmabeing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attributes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "permissions" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dao" (
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
    CONSTRAINT "Dao_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Dao" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Portal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "daoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Portal_daoId_fkey" FOREIGN KEY ("daoId") REFERENCES "Dao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
