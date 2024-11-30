import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getContentCreators = async () => {
  const creators = await prisma.creators.findMany();

  return creators;
};
