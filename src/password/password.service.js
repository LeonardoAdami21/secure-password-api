import { passwordRepository } from "./repositories/password.repository.js";

const create = async (data) => {
  try {
    const createdPassword = await passwordRepository.create(data);
    if (!createdPassword) {
      throw new Error("Password not created");
    }
    return createdPassword;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

const findAll = async () => {
  try {
    const passwords = await passwordRepository.findAll();
    return passwords;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export const passwordService = {
  create,
  findAll,
};
