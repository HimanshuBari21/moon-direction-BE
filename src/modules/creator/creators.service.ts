import { type creators, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCreatorByID = async (cId: string) => {
  const creator = await prisma.creators.findFirst({ where: { id_: cId } });
  return creator;
};

export const getContentCreators = async () => {
  const creators = await prisma.creators.findMany({});
  console.log(creators);

  return creators.map((c) => {
    const creatorCopy = { ...c };
    delete creatorCopy.password;
    return creatorCopy;
  });
};

export const addCreator = async (data: creators) => {
  try {
    const updatedUser = await prisma.creators.create({
      data: data,
    });
    return { status: 'success', message: updatedUser?.id + ': Created' };
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
    return {
      status: 'deletion success',
      message: cId + ': Deleted',
    };
  } catch (error) {
    return error;
  }
};
