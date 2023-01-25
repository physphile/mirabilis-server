import * as SequilizeAll from "sequelize";
const { Sequelize } = SequilizeAll;

import * as dotenv from "dotenv";
dotenv.config();

const { DATABASE_CA, DATABASE_PASSWORD } = process.env;

const sequelize = (() => {
  if (DATABASE_CA && DATABASE_PASSWORD)
    return new Sequelize(
      `postgres://client:${DATABASE_PASSWORD}@rc1b-enafwjj4keirjcav.mdb.yandexcloud.net:6432/api`,
      {
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            rejectUnauthorized: true,
            ca: DATABASE_CA
          },
        },
      }
    );
  throw new Error("Check environment variables");
})();

export default sequelize;
