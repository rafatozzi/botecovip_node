import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import { AppDataSource } from "../typeorm";
import "../../container";

import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import upload from "../../../config/upload";

const app = express();

AppDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

app.use(cors());

app.use(express.json());

app.use("/images", express.static(`${upload.tmpFolder}`));

app.use(router);

app.get("/runMigrations", (request: Request, response: Response) => {
  AppDataSource.runMigrations();

  // AppDataSource.undoLastMigration(); // revert migration

  return response.status(200).send("Migration done!");
});

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3333, () => console.log("Server is running"));