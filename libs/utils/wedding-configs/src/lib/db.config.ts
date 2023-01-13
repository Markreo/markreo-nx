import { Inject } from "@nestjs/common";
import { ConfigType, registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

export const dbConfigs: TypeOrmModuleOptions = {
  type: "postgres",
  autoLoadEntities: true,
  synchronize: true,
  port: 5432,
  username: "root",
  password: "pass1wrd",
  database: "wedding_dev"
};

export const dbConfig = registerAs("db", (): TypeOrmModuleOptions => dbConfigs);

export type DbConfig = ConfigType<typeof dbConfig>;
export const InjectDbConfig = () => Inject(dbConfig.KEY);
