import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";
import { AppDataSource } from "../typeorm";
import { createServer } from "http";

import "../../container";
import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import upload from "../../../config/upload";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

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

app.use((request: Request, response: Response, next: NextFunction) => {
  request.io = io;

  return next();
});

app.use("/eventoImg", express.static(`${upload.tmpFolder}/images`));

app.use(router);

app.get("/runMigrations", (request: Request, response: Response) => {

  AppDataSource.runMigrations();
  return response.status(200).send("Migration done!");

  // AppDataSource.undoLastMigration(); // revert migration
  // return response.status(200).send("Migration reverted!");
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

server.listen(3333, () => console.log("Server is running"));
// app.listen(3333, () => console.log("Server is running"));