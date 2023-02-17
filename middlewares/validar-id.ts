import { Response, Request, NextFunction } from 'express';
import { Params } from './validarjwt';



export const validarId = ( req: Request, res: Response, next: NextFunction ) => {

    const { id }: Params = req.params;

    if ( !id.match(/^[0-9a-fA-F]{24}$/) ) {
        return res.json({msg:'No es un id de mongo'})
    }
    next();
}

module.exports = { 
    validarId
}