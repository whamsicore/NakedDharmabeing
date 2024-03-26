-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DharmaBeings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "attributes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "permissions" TEXT NOT NULL
);
INSERT INTO "new_DharmaBeings" ("attributes", "createdAt", "id", "name", "permissions", "type", "updatedAt") SELECT "attributes", "createdAt", "id", "name", "permissions", "type", "updatedAt" FROM "DharmaBeings";
DROP TABLE "DharmaBeings";
ALTER TABLE "new_DharmaBeings" RENAME TO "DharmaBeings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
