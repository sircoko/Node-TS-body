import { Sequelize } from "sequelize";

const database: string  = process.env.DATABASE || "test";
const dbUser: string    = process.env.USER || "postgres";
const password: string  = process.env.PASSWORD || "647855aassdd";

const db = new Sequelize(database, dbUser, password, {
  host: "localhost",
  dialect: "postgres",
  // logging: false
});

export default db;
