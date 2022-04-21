import express, { Application } from "express";
import router from "../routes";
import cors from "cors";
import * as dotenv from 'dotenv';

import sequelize from "../../db/connections";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 8000;

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      // await sequelize.sync();
      // await sequelize.sync({ force: true });

      console.log("Database online");

      //   console.log("All models were synchronized successfully.");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/", router);
    this.app.use("/", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
