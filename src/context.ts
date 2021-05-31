import { PrismaClient } from '@prisma/client';

export type Context = {
  readonly prisma: PrismaClient;
};

const prisma = new PrismaClient();

export const context: Context = {
  prisma: prisma
};
