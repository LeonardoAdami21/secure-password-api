import express from "express";
import cors from "cors";
import { appPort } from "./env/envoriment.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import passwordRouter from "./password/password.router.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/password', passwordRouter);

app.listen(appPort, () => {
  console.log(`Server is running on port http://localhost:${appPort}/api-docs`);
});
