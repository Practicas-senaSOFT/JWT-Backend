import { MySQLDataSource as dsource } from '../../../config/mysql/dataSource';
import { User } from '../entities/User';

//Find users by Email
export const getFindEmial = async (email:string) => {
    return await dsource.getRepository(User).findOne({where: {email}});
};