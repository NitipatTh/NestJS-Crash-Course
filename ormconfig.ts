import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

// const ormConfig: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database: 'db',
//   entities: ['dist/src/**/entities/*.entity.js'],
//   synchronize: true,
//   migrations: ['dist/src/db/migrations/*.js'],
//   cli: {
//     migrationsDir: 'src/db/migrations',
//   }
// };

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  port: 5432,
  database: 'Customer_Data',
  entities: ['dist/src/**/entities/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  }
};

export default ormConfig;
