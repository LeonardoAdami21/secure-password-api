import PasswordValidator from "password-validator";
import { passwordService } from "./password.service.js";

const create = async (req, res) => {
  const validPassword = new PasswordValidator();
  validPassword.is().min(8);
  validPassword.is().max(200);
  validPassword.has().uppercase();
  validPassword.has().lowercase();
  try {
    if (!validPassword.validate(req.body.password)) {
      return res
        .status(400)
        .json({ message: "Password does not meet the requirements" });
    }
    const createdPassword = await passwordService.create(req.body.password);
    return res.status(201).json(createdPassword);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const passwordController = {
  create,
};
