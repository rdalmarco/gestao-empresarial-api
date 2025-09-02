import { DataSource } from "typeorm";
import { Empresa } from "../entities/Empresa.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "gestao-api",
    synchronize: true, 
    logging: false,
    entities: [ Empresa ],
    migrations: [],
    subscribers: [],
});
