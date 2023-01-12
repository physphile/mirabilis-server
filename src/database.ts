import * as SequilizeAll from "sequelize";
const { Sequelize } = SequilizeAll;

import * as dotenv from "dotenv";
dotenv.config();

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

const sequelize =
  DATABASE_NAME && DATABASE_USERNAME && DATABASE_PASSWORD
    ? new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
        host: "localhost",
        port: 5432,
        dialect: "postgres",
      })
    : null;

export default sequelize;
