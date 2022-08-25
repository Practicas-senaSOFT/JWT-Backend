import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { splitToken, isVerifyToken } from '../service/token.service';

//Validamos token - JWT
export const isAuth = async (req:Request, res:Response, next:NextFunction) => {
    //Obtenemos JWT
    const { authorization } = req.headers;
    //Calidamos si exite
    if(!authorization) return res.status(401).json({msg:'Unauthorized: Es necesario autenticar'});;
    //Obtenemos solo el token 
    const token:string = splitToken(authorization);

    //Varificamos token
    const payload:string|jwt.JwtPayload|boolean = await isVerifyToken(token);
    //validamos 
    if(payload){
        res.locals.payload = payload; 
        next();
    }else{
        return res.status(401).json({msq:'Invalidad JWT'});
    }
};