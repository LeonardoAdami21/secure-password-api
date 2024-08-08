import prisma from "../../config/prisma.config.js";

const create = async (data) => {
  return await prisma.password.create({
    data: {
      password: data,
    },
  });
};

const findAll = async () => {
  return await prisma.password.findMany();
};

export const passwordRepository = {
  create,
  findAll,
};
