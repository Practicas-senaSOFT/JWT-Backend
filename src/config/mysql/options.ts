import { DataSourceOptions } from 'typeorm';
import { getSqlEntities } from './getEntities';
//Options mysql
export default {
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '0606',
    database: 'JWTProject',
    logging: 'true',
    synchronize: 'true',
    entities: getSqlEntities().split(',')
} as unknown as DataSourceOptions;