import { DataSource } from "typeorm";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

console.log('dirnam', __dirname + '../migrations/**/*.{ts,js}')
// todo: need import from dbConfigs
const weddingDatasource = new DataSource({
  type: "postgres",
  autoLoadEntities: true,
  synchronize: true,
  port: 5432,
  username: "root",
  password: "pass1wrd",
  database: "wedding_dev",


  migrations: ['../migrations/**/*.{ts,js}'],
  logging: 'all'
} as PostgresConnectionOptions);


export default weddingDatasource;
