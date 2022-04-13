import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  port: 3306,
  host: "192.168.57.126",
  username: "root",
  password: "root",
  database: "botecovip",
  synchronize: false,
  // logging: false, // Auto create tables
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  entities: [
    "./src/modules/**/entities/*.ts"
  ]
});