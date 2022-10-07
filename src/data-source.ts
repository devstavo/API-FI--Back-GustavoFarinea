import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserGF } from "./entity/UserGF"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "admin",
    password: "admin",
    database: "faculdade",
    synchronize: true,
    logging: true,
    entities: [UserGF],
    migrations: [],
    subscribers: [],
})
