const { DataSource } = require('typeorm');
require('dotenv').config()
const dataSource = new DataSource({
  type: process.env.name,
  host: process.env.host,
  port: process.env.port_ad,
  username: process.env.username,
  password: process.env.password,
  database: process.env.databaseName,
  entities: ['./entity/*.js'],
  migrations: ['./migrations/*.js'],
  migrationsTableName: 'emp_migrations',
  cli: {
    entitiesDir: ['./entity/*.js'],
  },
  synchronize: true,
  //logging:true,
});
module.exports = { dataSource };

