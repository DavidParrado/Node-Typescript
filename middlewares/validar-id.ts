import { Response, Request } from 'express';



export const validarId = ( req: Request, res: Response, next: () => void ) => {

    const { id } = req.params;

    if ( !id.match(/^[0-9a-fA-F]{24}$/) ) {
        return res.json({msg:'No es un id de mongo'})
    }
    next();
}

module.exports = { 
    validarId
}