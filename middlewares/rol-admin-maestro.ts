import { Response, NextFunction } from 'express';
import Usuario from "../classes/usuario";
import { AuthInterface, Params } from "./validarjwt";


export const validarRoles = async( req: AuthInterface, res: Response, next: NextFunction ) => {

    const idAutenticado: string | undefined  = req.idAutenticado;
    const { userId, id }: Params = req.params;

    if( userId ) { 
    
        const usuario = await Usuario.findById( idAutenticado );
        if( !usuario ) return res.json({ msg: 'Usuario no existe'});
        
        if( usuario.rol !== 'ADMIN' && userId !== usuario.id ) { 
            return res.json({ msg:'No tienes acceso a esta ruta'});
        }
    
    }

    if( id ) { 

        const usuario = await Usuario.findById( idAutenticado );
        if( !usuario ) return res.json({ msg: 'Usuario no existe'});
        
        if( usuario.rol !== 'ADMIN' && id !== usuario.id ) { 
            return res.json({ msg:'No tienes acceso a esta ruta'});
        }
    }

    next()

}
