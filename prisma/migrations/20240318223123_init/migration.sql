-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user'
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expiresAt" DATETIME NOT NULL,
    "hashedSessionToken" TEXT NOT NULL,
    "antiCSRFToken" TEXT NOT NULL,
    "publicData" TEXT,
    "privateData" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RainbowPilgrims" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sanghaBackground" TEXT NOT NULL,
    "geneticAttribute" TEXT NOT NULL,
    "cyberneticEnhancement" TEXT NOT NULL,
    "pranaCapacity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_hashedSessionToken_key" ON "Session"("hashedSessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Session_antiCSRFToken_key" ON "Session"("antiCSRFToken");

-- CreateIndex
CREATE UNIQUE INDEX "RainbowPilgrims_email_key" ON "RainbowPilgrims"("email");
