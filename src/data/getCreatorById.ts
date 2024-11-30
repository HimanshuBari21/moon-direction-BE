import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCreatorByID = async (cId: string) => {
  const creator = await prisma.creators.findFirst({ where: { id_: cId } });
  return creator;
};
