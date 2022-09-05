import { ResponseLogin } from '../interface/token';
import { Auth } from '../interface/user';
import { User } from '../models/sql/entities/User';
import { getFindEmial } from '../models/sql/User/read';
import { createToken } from './token.service';


export const authService = async (data:Auth):Promise<boolean|ResponseLogin|null> => {
    //Obtenemos usuario
    const foundUser:User|null = await getFindEmial(data.email);
    console.log('USER:: ',foundUser);
    if(!foundUser) return null; //usuario no existe
    //Validamos password
    if(!(foundUser.password === data.password)) return false; //Pass no coinciden
    //Data
    const id:number = foundUser.id;
    const email:string = foundUser.email;
    //generamos token
    const token:string = await createToken({id,email});
    //*Creamos respuesta
    const response:ResponseLogin = {
        name:foundUser.name,
        token:token
    };
    return response;
};