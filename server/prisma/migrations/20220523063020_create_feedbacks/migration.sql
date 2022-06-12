-- CreateTable
CREATE TABLE "feedbakcs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT
);
-- manter o versionamento do banco de dados = Migration