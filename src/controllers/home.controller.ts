import { Request, Response } from 'express';


export const homePage = async (req:Request, res:Response):Promise<Response> => {
    
    //Validaciones

    return res.status(200).json({msg:'Le paso los datos...'});
};