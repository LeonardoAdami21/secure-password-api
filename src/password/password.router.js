import express from "express";
import { passwordController } from "./password.controller.js";
const passwordRouter = express.Router();

passwordRouter.post("/", passwordController.create);

export default passwordRouter;
