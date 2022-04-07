import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  port: 3306,
  host: "192.168.57.117",
  username: "root",
  password: "root",
  database: "botecovip",
  synchronize: false,
  // logging: false,
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  entities: [
    "./src/modules/**/entities/*.ts"
  ]
});