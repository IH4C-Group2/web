/*
  Warnings:

  - You are about to drop the column `officetTel` on the `FactoryInfo` table. All the data in the column will be lost.
  - Added the required column `officeTel` to the `FactoryInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FactoryInfo" DROP COLUMN "officetTel",
ADD COLUMN     "officeTel" TEXT NOT NULL;
