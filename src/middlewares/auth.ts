import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { splitToken, isVelidToken } from '../service/token.service';

//Validamos token - JWT
export const isAuth = async (req:Request, res:Response, next:NextFunction):Promise<Response|undefined> => {
    //Obtenemos JWT
    const { authorization } = req.headers;
    //Validamos si exite
    if(!authorization) return res.status(401).json({msg:'Unauthorized: Es necesario autenticar'});;
    //Obtenemos solo el token 
    const token:string = splitToken(authorization);
    //Varificamos token
    const payload:string|jwt.JwtPayload|boolean = await isVelidToken(token);
    //validamos resultado
    if(!payload){
        return res.status(401).json({msq:'Invalidad JWT'});
    }
    //else
    res.locals.payload = payload; 
    next();
};