/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `ScheduleList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[loginId]` on the table `TransportationDriver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginId` to the `TransportationDriver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `TransportationDriver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransportationDriver" ADD COLUMN     "loginId" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ScheduleList_orderId_key" ON "ScheduleList"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportationDriver_loginId_key" ON "TransportationDriver"("loginId");

-- AddForeignKey
ALTER TABLE "ScheduleList" ADD CONSTRAINT "ScheduleList_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "TransportationDriver"("drivertId") ON DELETE RESTRICT ON UPDATE CASCADE;
