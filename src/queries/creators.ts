import { type creators, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCreatorByID = async (cId: string) => {
  const creator = await prisma.creators.findFirst({ where: { id_: cId } });
  return creator;
};

export const getContentCreators = async () => {
  const creators = await prisma.creators.findMany();

  return creators;
};

export const addCreator = async (data: creators) => {
  try {
    await prisma.creators.create({
      data: data,
    });
    return true;
  } catch (error) {
    return error;
  }
};

export const deleteCreator = async (cId: string) => {
  try {
    await prisma.creators.delete({
      where: {
        id: cId,
      },
    });
  } catch (error) {
    return error;
  }
};
