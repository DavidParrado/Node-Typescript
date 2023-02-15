import { request, response } from 'express';



export const validarNombre = async( req = request, res = response, next: () => void ) => {
    
    const nombre: string = req.body.nombre;
    if( nombre === "" ) {
        return res.json({ msg: 'El campo nombre esta vacio'});
    } 

    next();

}


    
    


