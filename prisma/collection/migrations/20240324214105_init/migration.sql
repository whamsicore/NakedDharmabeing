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
CREATE UNIQUE INDEX "RainbowPilgrims_email_key" ON "RainbowPilgrims"("email");
