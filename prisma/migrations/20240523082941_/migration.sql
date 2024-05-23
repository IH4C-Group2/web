-- CreateTable
CREATE TABLE "HitachiUser" (
    "hitachiId" SERIAL NOT NULL,
    "loginId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "HitachiUser_pkey" PRIMARY KEY ("hitachiId")
);

-- CreateTable
CREATE TABLE "FactoryUser" (
    "factoryUserId" SERIAL NOT NULL,
    "loginId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "factoryName" TEXT NOT NULL,
    "companyId" TEXT,

    CONSTRAINT "FactoryUser_pkey" PRIMARY KEY ("factoryUserId")
);

-- CreateTable
CREATE TABLE "FactoryInfo" (
    "factoryInfoId" SERIAL NOT NULL,
    "factoryUserId" INTEGER NOT NULL,
    "factoryDetailName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "responsibleTel" TEXT NOT NULL,
    "officetTel" TEXT NOT NULL,

    CONSTRAINT "FactoryInfo_pkey" PRIMARY KEY ("factoryInfoId")
);

-- CreateTable
CREATE TABLE "TransportationUser" (
    "transportationUserId" SERIAL NOT NULL,
    "loginId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "companyId" TEXT,

    CONSTRAINT "TransportationUser_pkey" PRIMARY KEY ("transportationUserId")
);

-- CreateTable
CREATE TABLE "TransportationDriver" (
    "drivertId" SERIAL NOT NULL,
    "transportationUserId" INTEGER NOT NULL,
    "employeeNum" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "driverTel" TEXT NOT NULL,
    "driverLicense" TEXT NOT NULL,

    CONSTRAINT "TransportationDriver_pkey" PRIMARY KEY ("drivertId")
);

-- CreateTable
CREATE TABLE "Company" (
    "companyId" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "responsibleTel" TEXT NOT NULL,
    "officeTel" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "ScheduleList" (
    "scheduleListId" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "driverId" INTEGER NOT NULL,
    "temperature" TEXT NOT NULL,
    "originFactoryId" INTEGER NOT NULL,
    "landingFactoryId" INTEGER NOT NULL,
    "startDatetime" TIMESTAMP(3) NOT NULL,
    "endDatetime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduleList_pkey" PRIMARY KEY ("scheduleListId")
);

-- CreateIndex
CREATE UNIQUE INDEX "HitachiUser_loginId_key" ON "HitachiUser"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "FactoryUser_loginId_key" ON "FactoryUser"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportationUser_loginId_key" ON "TransportationUser"("loginId");

-- AddForeignKey
ALTER TABLE "FactoryInfo" ADD CONSTRAINT "FactoryInfo_factoryUserId_fkey" FOREIGN KEY ("factoryUserId") REFERENCES "FactoryUser"("factoryUserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportationDriver" ADD CONSTRAINT "TransportationDriver_transportationUserId_fkey" FOREIGN KEY ("transportationUserId") REFERENCES "TransportationUser"("transportationUserId") ON DELETE RESTRICT ON UPDATE CASCADE;
