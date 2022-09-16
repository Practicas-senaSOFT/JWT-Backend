import jwt from 'jsonwebtoken';
import {readFileSync} from 'fs';
import {join} from 'path';
import { Payload } from '../interface/token';

//Creamos token
export const createToken = async (data:Payload):Promise<string> => {
    //Leemos la key - firma
    const key:Buffer = await readKey();
    //Opciones por defecto
    const defaultOptions:jwt.SignOptions = {algorithm:'RS256', expiresIn: 3600 };
    //creamos token
    return jwt.sign( data, key, defaultOptions);
};
//Separamos token
export const splitToken = (token:string):string => {
    return token.split(' ')[1];
};
//Vericamos token
export const isVelidToken = async (token:string):Promise<string|jwt.JwtPayload|boolean> => {
    //Leemos la firma
    const certify:Buffer = await readKey();
    let decoded:string|jwt.JwtPayload;
    try {
        //Decodificamos el token 
        decoded = await decode(token,certify);
    } catch (error) {
        console.error(`ERROR: decode token: ${error}`);
        return false;
    }
    return decode;
};
//leemos firma
const readKey = async ():Promise<Buffer> => {
    //@param: File path
    return readFileSync(join(process.cwd(), '.secret', 'sign.key'));
};
//Token Decode
const decode = async (token:string, key:Buffer):Promise<string|jwt.JwtPayload> => {
    return jwt.verify(token, key, {algorithms:['RS256']});
};