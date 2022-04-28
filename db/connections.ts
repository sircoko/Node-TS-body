//import { Sequelize } from "sequelize";

import { Sequelize } from "sequelize";

const database: string  = process.env.DATABASE || "test";
const dbUser: string    = process.env.USER || "root";
const password: string  = process.env.PASSWORD || "123456";

export const db = new Sequelize(database, dbUser, password, {
  host: "localhost",
  dialect: "mysql", //postgres
  // logging: false
});

export default db;
