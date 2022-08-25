import { DataSource } from 'typeorm';
import options from './options';

const MySQLDataSource = new DataSource(options);
export { MySQLDataSource };