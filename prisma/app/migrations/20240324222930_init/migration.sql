/*
  Warnings:

  - You are about to drop the `DharmaBeing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DharmaBeing";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "DharmaBeings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attributes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "permissions" TEXT NOT NULL
);
