
import { Request, Response } from 'express';

export const profilePage = async (req:Request, res:Response):Promise<Response> => {
    //Validamos datos
    
    return res.status(200).json({msg:'Le entrego los datos...'});
};