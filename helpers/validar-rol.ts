import { Request, Response, NextFunction } from 'express';


export const verificarRol = async( req: Request, res: Response, next: NextFunction ) => {
    
    const rol: string = req.body.rol;

    if( rol === "" ) {
        return res.json({ msg: 'El campo rol esta vacio'});
    }

    if( rol !== undefined ) {
        const rolValidos: string[] = ['ADMIN', 'MAESTROPOKEMON'];
        if( !rolValidos.includes( rol )) {
            return res.json({ msg: 'Ese rol no esta permitido'})
        }
    }
    next();

    
    
}