import { Request, Response, NextFunction } from 'express';



export const validarNombre = async( req: Request, res: Response, next: NextFunction ) => {
    
    const nombre: string = req.body.nombre;
    if( nombre === "" ) {
        return res.json({ msg: 'El campo nombre esta vacio'});
    } 

    next();

}


    
    


