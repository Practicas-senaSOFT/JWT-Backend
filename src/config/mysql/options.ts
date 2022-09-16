import { DataSourceOptions } from 'typeorm';
import { getSqlEntities } from './getEntities';
//Options mysql
export default {
    type:  process.env.MYSQL_TYPE||'mysql',
    host: process.env.MYSQL_HOST||'localhost',
    port: process.env.MYSQL_PORT||3306,
    username: process.env.MYSQL_USERNAME||'root',
    password: process.env.MYSQL_PASS||'0606',
    database: process.env.MYSQL_DB||'JwtProject',
    logging: 'true',
    synchronize: 'true',
    entities: getSqlEntities().split(',')
} as unknown as DataSourceOptions;