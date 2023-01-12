import express, { Request, Response } from "express";
import sequelize from "./database.js";
import { User } from "./models.js";

const app = express();

const port = process.env.PORT ?? 3000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello world");
  await User?.create({ username: "physphile", password: "1234" });
});

const start = async () => {
  try {
    await sequelize?.authenticate();
    await sequelize?.sync();

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
