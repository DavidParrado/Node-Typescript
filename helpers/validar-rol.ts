import { request, response } from 'express';


export const verificarRol = async( req = request, res = response, next: () => void ) => {
    
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