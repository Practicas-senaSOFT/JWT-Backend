import { Request, Response } from 'express';
import { ResponseLogin } from '../interface/token';
import { Auth } from '../interface/user';
import { authService } from '../service/auth.service';

export const authLogin = async (req:Request, res:Response):Promise<Response> => {
    //Obtenmos datos
    const {email, password} = req.body as Auth;
    //Pasamos datos
    const response:boolean|ResponseLogin|null =await authService({email,password});
    //Validamos respuestas
    if(response===false || response===null){
        console.log(`Credentials invalid! ⚠`);
        return res.status(401).json({msq:'Credentials invalid!'});
    }
    //all ok
    console.log(`Login Successful ✔`);
    return res.status(200).json({
        msg:'Login successful!', 
        data:response
    });
};