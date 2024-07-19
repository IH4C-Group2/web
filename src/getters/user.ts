import { cache } from 'react';

import { verifyToken } from '@/util/jwt';
import { prisma } from '@/utils/prisma';

export const getAdmin = cache(async () => {
  const result = await verifyToken();
  if (!result.success) return null;

  const admin = await prisma.admin.findUnique({ where: { hitachiId: result.payload.id } });
  if (!admin) return null;

  return admin;
});

export const getFactoryUser = cache(async () => {
  const result = await verifyToken();
  if (!result.success) return null;

  const factoryUser = await prisma.factoryUser.findUnique({ where: { factoryUserId: result.payload.id } });
  if (!factoryUser) return null;

  return factoryUser;
});

export const getTransportationUser = cache(async () => {
  const result = await verifyToken();
  if (!result.success) return null;

  const transportationUser = await prisma.transportationUser.findUnique({ where: { transportationUserId: result.payload.id } });
  if (!transportationUser) return null;

  return transportationUser;
});

export const getTransportationDriver = cache(async () => {
  const result = await verifyToken();
  if (!result.success) return null;

  const transportationDriver = await prisma.transportationDriver.findUnique({ where: { driverId: result.payload.id } });
  if (!transportationDriver) return null;

  return transportationDriver;
});

