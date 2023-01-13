import {dbConfigs} from "./db.config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default {
  ...dbConfigs,
  entities: ['libs/api/shared-data-access-entities/src/lib/*{.ts,.js}'],
  migrations: ["libs/utils/src/migrations/**/*.{ts,js}"],
} as PostgresConnectionOptions
