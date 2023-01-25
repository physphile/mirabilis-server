import express from "express";
import sequelize from "./database/database.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import router from "./router/router.js";
import bodyParser from "body-parser";

const port = process.env.PORT ?? 3000;

const app = express();
app.use(bodyParser.json());
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

start();
